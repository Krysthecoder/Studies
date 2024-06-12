##  Learn useCallback In 8 Minutes  ##

>   Videolink: https://www.youtube.com/watch?v=_AyFP5s69N4

it is basically a memoization call back, that depending on a triggers it will do something else 

>   blog: https://blog.webdevsimplified.com/2020-05/memoization-in-react/

const handleReset = useCallback(() => {
  return doSomething(a, b)
}, [a, b])


##  Learn useMemo In 10 Minutes

>   VideoLink: https://www.youtube.com/watch?v=THL1OPn72vo


As useCallback, useMemo, saves a function that takes to long to process that was previously rendered, and then once it is requred to be rendered again, it will provide the data the function has previously entered



##  Difference between useCallback and useMemo

syntax may look exactly the same as useMemo, but the main difference is that useMemo will call the function passed to it whenever its dependencies change and will return the value of that function call. useCallback on the other hand will not call the function passed to it and instead will return a new version of the function passed to it whenever the dependencies change. This means that as long as the dependencies do not change then useCallback will return the same function as before which maintains referential equality.

In order to further understand the differences between useCallback and useMemo here is a quick example where both will return the same value.

useCallback(() => {
  return a + b
}, [a, b])

useMemo(() => {
  return () => a + b
}, [a, b])