# Learn useImperativeHandle In 10 Minutes

>   videoLink: https://www.youtube.com/watch?v=zpEyAOkytkU
>   blogLink: https://blog.webdevsimplified.com/2022-06/use-imperative-handle/

Before we can even talk about [useImperativeHandle] we first need to understand how refs in general work especially when forwarding refs to custom components. If you are already familiar with how refs and [React.forwardRef] works you can skip this first section. If you are unfamiliar with the concept of refs entirely then check out my useRef ultimate guide before continuing on this article.


Imagine we have the following code.

function App() {
  const [value, setValue] = useState("")
  const inputRef = useRef()

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  )
}

This is a very simple piece of code that uses a ref to reference the input and then we have a button that we can click to focus on the input element by using the ref for the input. This is pretty basic useRef code, but what happens if our input is a custom component.

function App() {
  const [value, setValue] = useState("")
  const inputRef = useRef()

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  )
}
With this new code our ref will no longer automatically link up with the input inside our CustomInput unless we use React.forwardRef inside our custom component.

function CustomInput(props, ref) {
  return <input ref={ref} style={{ backgroundColor: "red" }} {...props} />
}

export default React.forwardRef(CustomInput)

On the very last line of our custom component we are calling [React.forwardRef] and passing in our [CustomInput]. By doing this we are telling React that this component can take in a ref and the second parameter to our [CustomInput] will be the ref that is passed in. Then all we need to do is tell React which element that ref should point to in our [CustomInput].

With this code we are passing our ref from our [App] component into our [CustomInput] and our [CustomInput] is passing the ref down to our input so the ref inside our [App] component will point to the input inside our [CustomInput] component. This is the basic way that [React.forwardRef] is used, but sometimes this simple ref forwarding is not enough. That is where useImperativeHandle comes in.

useImperativeHand