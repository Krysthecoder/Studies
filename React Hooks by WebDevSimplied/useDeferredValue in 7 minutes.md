##  React 18 useDeferredValue Hook Crash Course

> videoLink: https://www.youtube.com/watch?v=jCGMedd6IWA
> blogLink: https://blog.webdevsimplified.com/2022-05/use-deferred-value/

#   Why Do You Need useDeferredValue?

Imagine you have the following code.

function App() {
  const [name, setName] = useState("")
  const computedValue = useMemo(() => {
    return getComputedValue(name)
  }, [name])

  function handleChange(e) {
    setName(e.target.value)
  }

  return <input type="text" value={name} onChange={handleChange} />
}

This is a very simple component with one state variable and a [computedValue] which is derived from our state. When the value in the input is changed our name state is updated and then after that state finishes updating our entire component rerenders. During that rerender our [computedValue] is recalculated since the name value that we are memoizing on has changed.

Normally this isn’t a problem, but sometimes the code inside [useMemo] is slow to run or computationally expensive. In those cases this can lead to performance problems.


function App() {
  const [name, setName] = useState("")
>  const list = useMemo(() => {
>    return largeList.filter(item => item.name.includes(name))
>  }, [name])

  function handleChange(e) {
    setName(e.target.value)
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

In this example we are now using the name state variable to filter a large list of items. Our list is incredibly long so looping through the entire list, filtering each item, and rendering them all to the screen is quite time consuming and especially on older devices will be very slow to process.


#   useDeferredValue Explained

The [useDeferredValue] hook allows us to fix this slow render problem by implementing a delay before some information is calculated. This works in a very similar way to debouncing and throttling since our deferred value will only be calculated after the important state updates have finished running.

function App() {
  const [name, setName] = useState("")
>  const deferredName = useDeferredValue(name)
  const list = useMemo(() => {
>    return largeList.filter(item => item.name.includes(deferredName))
>  }, [deferredName])

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {list.map(item => (
        <ListComponent key={item.id} item={item} />
      ))}
    </>
  )
}

In the above example we have fixed this issue by adding in the [useDeferredValue] hook. This hook takes a single parameter which is the value you want setup your throttle/debounce on. This hook will then return a value which will be the deferred version of the value you pass in. This means that when our [name] variable changes the [deferredName] will still stay the same since [useDeferredValue] will not immediately update the value of the [deferredName]. This allows time for our component to completely rerender with the new name value since our list will not try to update itself as it is waiting for the [deferredName] to change. This makes the app feel more responsive since the input will update immediately while the list will be delayed in its update.

> its like waiting for a process to be completted first before doing the other part, instead of running everysingle little change

The reason the list is delayed is because we changed our [useMemo] code to rely on the [deferredName] instead of the actual name. This means that if we change the name our [deferredName] will wait to update until after the UI has had time to update with the new name value in the input field. If we continue to change our input in a short period of time (for example by typing quickly in the input) the [deferredName] value will continue to stay unchanged and our list will not update. The only thing that will update is the name variable until there is a pause in the name value changing. Once we stop typing then React will update the [deferredName] value with the most recent name value and rerender the list.


Using this hook is quite easy, but this is not something you want to use all the time. You should only use this hook if you are having performance issues with your code and there are no other ways to fix those performance concerns. If you use this hook all the time you will actually make your app less performant since React will be forced to do extra rerenders of your app. This is because it will do the initial rerender and the deferred rerender when it could have done them both in one update without [useDeferredValue].