##  Junior vs Senior React Folder Structure - How To Organize React Projects    ##

This is basically a folder structure for different levels


>   Junior:

SRC =
    components
    hooks
    
>   Intermediate (not so large nor small):

SRC =           (they all have a __test__ folder with each part/component/part)
>   assets      -> Images, global css, svgs, etc.
    components  -> 
        __test__
        form
        ui          -> all ui components like buttons
    context     -> Context
>   data        -> Json database, const variables
    hooks       -> 
>   pages       -> will separate by pages
        Home        --> this will contains all the components for the specific page
        Login       _|
        Settings    _|
        Signup      _|
    utils       -> utilities functions with simple pure functions


>   Advanced

SRC =     
    assets   
    components  
        __test__
        form
        ui 
    context
    data
>   features    ->  compontnes, authentications, projects, todos, etc
        index.js    -| we import all features into the index and then we export index
    hooks 
>   layouts     -> components that repeat on pages like Navbars, footer, etc
>   lib         -> libraries
    pages  
        Home        --> this will contains all the components for the specific page
        Login       _|
        Settings    _|
        Signup      _|
>   services    -> integrating with api
    utils        