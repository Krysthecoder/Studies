##  React 18 useTransition Hook Crash Course

> videoLink: https://www.youtube.com/watch?v=N5R6NL3UE7I

This is meant for applications or components that takes long time to response due to complex stuff, so we basically set the priority of a code, everything that is inside the useTransition it will set it to low priority while the rest will be high

> Why do we need useTransition?

Imagine you have the following code.

function App() {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)

  function handleChange(e) {
    setName(e.target.value)
    setCount(prevCount => prevCount + 1)
  }

  return <input type="text" value={name} onChange={handleChange} />
}

This is a very simple component with two state variables that both get updated at the same time when we change the value in our input field. 

React is smart enough to see that these state updates happen at the same time so it will group them together and perform both state updates before rendering the component again. This is really nice since it only renders the component once after all the state changes instead of twice (once after each state change).

This works really well in most cases but it can lead to performance problems, as it will wait for both to be completted to be rendered.

function App() {
  const [name, setName] = useState("")
>  const [list, setList] = useState(largeList)

  function handleChange(e) {
    setName(e.target.value)
>    setList(largeList.filter(item => item.name.includes(e.target.value)))
  }

  return (
    <>
>      <input type="text" value={name} onChange={handleChange} />
      {list.map(item => (
        <ListComponent key={item.id} item={item} />
      ))}
    </>
  )
}

In this example we are now setting a list variable based on the value we type in our input. Normally this is not something you would want to do since storing derived state in React is bad. 

Our list is incredibly long so looping through the entire list, filtering each item, and rendering them all to the screen is quite time consuming and especially on older devices will be very slow to process. This is a problem since this list state update happens at the same time as the name state update so the component won’t rerender with the new state values for either piece of state until both finish processing which means the input field will feel very slow.

The useTransition hook allows us to specify some state updates as not as important. These state updates will be executed in parallel with other state updates, but the rendering of the component will not wait for these less important state updates.

function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState(largeList)
>  const [isPending, startTransition] = useTransition()

  function handleChange(e) {
    setName(e.target.value)
>    startTransition(() => {
>      setList(largeList.filter(item => item.name.includes(e.target.value)))
>    })
  }

  return (
    <>
>      <input type="text" value={name} onChange={handleChange} />
>      {isPending ? (
>        <div>Loading...</div>
>      ) : (
>        list.map(item => <ListComponent key={item.id} item={item} />)
      )}
    </>
  )
}

Calling the [useTransition] hook returns an array with the first value being an [isPending] variable and the second value being the [startTransition] function. The [isPending] variable simply returns true while the code inside the [startTransition] hook is running. Essentially, this variable is true when the slow state update is running and false when it is finished running. The [startTransition] function takes a single callback and this callback just contains all the code related to the slow state update including the setting of the state.

In our case we are wrapping [setList] in our [startTransition] function which tells React that our [setList] state update is of low importance. This means that as soon as all of our normal state updates are finished that the component should rerender even if this slow state update is not finished. Also, if a user interacts with your application, such as clicking a button or typing in an input, those interactions will take higher priority than the code in the [startTransition] function. This ensures that even if you have really slow code running it won’t block your user from interacting with the application.


