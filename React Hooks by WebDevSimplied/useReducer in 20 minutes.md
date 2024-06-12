##      Learn useReducer In 20 Minutes

>   videolink:https://www.youtube.com/watch?v=kK_Wqx3RnHk

we can use useReducer to rerender a component like useState, however we can use cases for different actions

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1
    case "decrement":
      return count - 1
    case "reset":
      return 0
    default:
      return count
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  )
}