#   Learn useState In 15 Minutes - React Hooks Explained    #

>   VideoLink: https://www.youtube.com/watch?v=O6P86uwfdR0

import React, { useState } from 'react';

__ we must use a function component __
__ we cant use a hook inside of conditional statements __ Cant be nested __

const [state, setState] = useState(4)
      current, setter     our new defaul value

function decrementCount(){
    setState(count - 1 ) ===> but we want to do it the right way
}

function decrementCount(){
    setCount(prevCount => prevCount - 1)        > prevCount will safe previous state
}


funcitonincreaseCount(){
    setCount(prevCount => prevCount + 1)
}

return(
    <div conClick={decrementCount}>-</div> 
    <span>{state}</span>
    <div onClick={increaseCount}>+</div>

)



##  Class Component ##