#   I Cannot Believe React Made A Hook For This

>   videoLink: https://www.youtube.com/watch?v=M3mGY0pgFk0


We have to use an experimental react, as it is pretty recent

## Reference 

useOptimistic(state, updateFn) 

useOptimistic is a React Hook that lets you show a different state while an async action is underway. It accepts some state as an argument and returns a copy of that state that can be different during the duration of an async action such as a network request. You provide a function that takes the current state and the input to the action, and returns the optimistic state to be used while the action is pending.

This state is called the “optimistic” state because it is usually used to immediately present the user with the result of performing an action, even though the action actually takes time to complete.

import { useOptimistic } from 'react';

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // updateFn
    (currentState, optimisticValue) => {
      // merge and return new state
      // with optimistic value
    }
  );
}

> Parameters 
- state: the value to be returned initially and whenever no action is pending.
- updateFn(currentState, optimisticValue): a function that takes the current state and the optimistic value passed to addOptimistic and returns the resulting optimistic state. It must be a pure function. updateFn takes in two parameters. The currentState and the optimisticValue. The return value will be the merged value of the currentState and optimisticValue.

> Returns 
optimisticState: The resulting optimistic state. It is equal to state unless an action is pending, in which case it is equal to the value returned by updateFn.
addOptimistic: addOptimistic is the dispatching function to call when you have an optimistic update. It takes one argument, optimisticValue, of any type and will call the updateFn with state and optimisticValue.