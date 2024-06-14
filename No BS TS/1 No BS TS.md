#   https://youtube.com/watch?v=LKVHFHJsiO0

> videoLink: https://www.youtube.com/watch?v=LKVHFHJsiO0

We have the below syntax added:

let string  :   string  =   value
var name    :   type    =   value that matchs the type

let myNumber: number = 10;
let myRegEx:  RegExp = /foo/

const names: string[] = [array-of-string]
const myValues: Array<number>   =   [1,2,3] 


const myPerson: {
    first: string;
    last:  string;
    cool:  boolean;
} = {
    first: "Jack",
    last: "lastName"
    cool: true
}

in case we want to reuse the typos of the above object, we can use interface to set it up and reuse it

interface Person {
    first: string;
    last: string;
    alive: boolean
}

const newPerson: Person {
    first: "kryst",
    last:  "Riv",
    alive:  true
}

We can have Record<keytype, valueType> will allow us add stuff to the object

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = 'c'

TS will not change the usage of JS as it only affects the var declarations

