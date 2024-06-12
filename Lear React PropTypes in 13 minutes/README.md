##      Learn React ProtoTypes in 13 minutes    ##

>   Video Link: https://www.youtube.com/watch?v=cx0S8JyiVxc


While coding in React, since we handle props, we can run into sending a value instead of a number and as string will do, it concatenates, resuling in something like

x("kryst", "15")

function x ({name, age}){
    return `in 5 years ${name}, will be ${age + 5}`
}

>   result: In 5 years Kryst, will be 155.

however if we do 

1. npm i prop-types

2. we then do || import PropTypes form "prop-types" 

x("kryst", "15")

function x ({name, age}){
    return `in 5 years ${name}, will be ${age + 5}`
}

x.propTypes = {
    name: PropTypes.string,
    age:  PropTypes.number
}

This will result in 2 possible paths: 

- If we send a string, it will let us know
- If there is no error, then it will work it out as normal resulting in +> In 5 years Kryst, will be 20 yeas.



PropTypes.any (will get any)
         .oneOfType([PropTypes.string, PropTypes.number])   => one of the props provided
         .oneOf(['loading', 'ready'])
         .array (array of whatever)
         .arrayOf(PropTypes.number)

         .arrayOf(
            PropTypes.oneOfType([PropTypes.number, PropTypes.string])
         )