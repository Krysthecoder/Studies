#   Next js Tutorial for Beginners | Nextjs 13 (App Router) with TypeScript

> VideoLink: https://www.youtube.com/watch?v=ZVnjOPwW4ZA
> App github source: https://github.com/Krysthecoder/NextJs-app

What is Next.Js?

a framwork for building fast & search-engine friendly apps, builts in top of REACT.


framework: libraries, tools and conventions, it also includes its own routing libraries, 

comes with compiler, cli, nodeJs runtime, that allows us to rund an app from server instead of webrowser (client)

> Rendering Environments

## client-side Rendering 

large bundles as it bundles components and send it to the browser
resource intensive
no SEO
less secure as api keys will be open

## SErver-side Rendering

smaller bundles
resouce efficient
SEO
more secures

## Server components cannot

Listen to browser events
access browser APIs
Maintain state
Use effects

## Data Fetching

> Client 

useState( ) + useEffect ( ) => to manually use the hooks and work with the backend, however the bundles become higher,

Large bundles, 
resource intensive
No SEO
less secure
Extra roundtrip


## Caching

Fecthing in server side, comes with the benfits of caching.

Caching is basically storing data somewhere that is faster to access.

> Data sources      || the lower the list the slower it gets

Memory
File System
Network

## Static Rendeint 

Render at build time, 

Dynamic rendering hasppens at request time;

##  Styling

we can create the css styling of the diff components the same as react with the .module.css extention, and for css class names we use camelCases and not -.

yes => cardContainer
no  => card-container


## Tailwind CSS

use the concpts of utilities classes, like flex, pt-4, text-center

we combine it to have diff results

> Spacing
p-[number] padding
px-[number] padding left and righg
py-[number] padding vertical
pt-[number]

> margin
m-[number] margin

>text size
text-xs
text-sm

>color
text-[color]
bg-[color]

>thicknes
font-thin
font-light

> color example

bg-sky-400
text-white