##  Learn useContext In 13 Minutes

>   videoLink: https://www.youtube.com/watch?v=5LrDIWkK_Bc
 
React uses state to store data and props to pass data between components. This works well for handling local state and for passing simple props between parent/child components. This system breaks down when you start to have global state or props that need to be passed to deeply nested components. 

 With just props and state you end up having to resort to prop drilling which is when you pass down props through a bunch of different components so they can get to one single component far down the hierarchy.

 > so we can say that it's usage is basically to set global props like global variables?


 This is where the Context API comes in. With the context API you can specify certain pieces of data that will be available to all components nested inside the context with no need to pass this data through each component.

 const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  )
}

function ChildComponent() {
  return <GrandChildComponent />
}

class GrandChildComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => {
          return (
            <>
              <div>The theme is {theme}</div>
              <button onClick={() => setTheme("light")}>
                Change To Light Theme
              </button>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

In the above code we are creating a new context using React.createContext. This gives us a variable that has two parts.

The first part is the provider which provides a value to all components nested inside of it. In our case the value is a single object with the theme and setTheme properties.

The second part is the consumer, This is what you must wrap your code into access the value of the context. This component expects a function as the child of it and that function gives you the value of the conext as the only argument of the the function.

This second part of the context is what makes context hard to work with. Having to wrap your JSX in a component which accepts a function to get the value of the context adds extra layers of nesting and mess to your code which is unavoidable in class components. Luckily, with function components we can avoid all that mess by using the useContext hook.


## useContect

To use "useContext" we must first import it from react

import React , { useContext } from 'react';

Then in order to use context in a function component you no longer need to wrap your JSX in a consumer. Instead all you need to do is pass your context to the useContext hook and it will do all the magic for you. Here is an example.

function GrandChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <div>The theme is {theme}</div>
      <button onClick={() => setTheme("light")}>Change To Light Theme</button>
    </>
  )
}

With the hook help we were able to cu out all the consumer portion of the context and remove all the complex nesting.  Now context works just like a normal function where you call the context and it will give you the values inside of it for you to use later in the code. This drastically simplifies code related to context and makes working with context so much more enjoyable.


In the end the useContext looks scary but its easier than dealing with multiple props, as all it does is provide a nice 'interface' for consuming context,  but that interface is so much better than the original context consumer interface. 

My last words would be: "See to believe" ver para creer pa los panas.