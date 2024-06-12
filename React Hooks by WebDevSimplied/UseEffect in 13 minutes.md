##  Learn useEffect In 13 Minutes

>   VideoLink: https://www.youtube.com/watch?v=0ZJgIjIuY7U

We firstly import the useEffect from react

- import React { useState, useEffect } from 'react'

we get a use sideeffect whenever something changes

useEffect(() => {
    what we want to do,
}), [triger-change]



useEffect( () => {
    console.log('resource type has changed')        ||      This will console.log, whenever the changes
}), [reseourceType]


> useEffect is likely a sideEffect method that produces something else out of an specific change