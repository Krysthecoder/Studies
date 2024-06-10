## REACT fundamentals in 8hrs ##

Hi tribe, once again this is not a tutorial as it is just an overview over the fundamentals of REACT based on freeCodeCamp

> link to the video :  https://www.youtube.com/watch?v=6Jfk8ic3KVk

This course will be segmented on:

[Conceptos basicos de REACT]
[Descargar e instalar Node.JS]
[JS XML 9JSX]
[Estructura basica de una aplicacion de React]

Practice part:

1. Clone of testimonios de freeCodeCamp.
2. Contador de clicks.
3. Calculadora.
4. Aplicacion de tares.

We will then review:

- Componentes de clase
- Adaptar los primeros dos proyectos con componentes de clase
    - Clon de testimonios de freeCodeCamp
    - Contador de clicks


# Que es REACT?

Es una libreria de JS de codigo abierto designed para crear interfaces de usuario.

Library > conjunto de implementacions o subprogramas que podemos usar en nuestro codigo (components como en BS5)

Ventajas:

-   Facil de aprender y usar.
-   Componentes reutilizables.
-   Crea aplicaciones dinamicas.
-   Buen desempenio.

# Conceptos basicos

- Component => Parte de la interfaz de usuario que es independiente y reusable. {escrito una sola vez y se usa varias veces}

              / == > De Clase 
- Component ==  == > Funcionales 

> Functional Component

Funcion de JS/ES6 que retorna un elem de React (JSX) eje:

function Saludo(props){
    return <h1> Hola, {props.nombre}!</h1>;
}

Caracteristicas:

- Debe retornar un elemento REACT(JSX);
- Debe comenzar con una letra Mayuscula;
- Puede recibir valores si es necesario;


props -> propierties
Props => argumentos que puede recibir un componente de React.


props can only be send from parent to child

> Componente de Clase

Clase de ES6(JS moderno) que retorna un elemento JSX.

class Saludo extends React.Component {
    render (){
        return <h1> !Hola, {this.props.nombre}! </h1>;
    }
}

Caracteristicas

-   Debe extender React.Component.
-   Debe tener un metodo render() para retornan un elemento de JSX.
-   Puede recibir valores si es necesario.

> State

Representation en JS del conjunto de propiedades de un componente y sus valores actuales.

--- "En este concepto, 'propiedades' {no} se refiere a los props, sino a informacion que se representa sobre el componente" ---

> Por que componentes de clase?

Anteriorment, usabamos componentes de clase para poder trabajar con "estados" de nuestros componentes.

En versiones anteriores de React (anteriores a 16.8), NO podiamos hacerlo en componentes funcionales.

___ Hasta que llegaron los hooks ___

Hooks permiten agregar ciertos estados a componentes funcionales.

> hook

Funcion en react que te permite trabajar con estados en componenetes funcionales y otros aspectos de React

Sin escribir un componente de clase, lo cual permite un codigo mas consiso y facil de entender

> Event listener

funcion en JS que es ejecutada cuando occurre un evento specifico (tambien puede ser llamado event handler)

___ Conceptos importantes ___

* Components
* props
* Estado
* Hooks
* Event Listener

*****************************************************************************************************************************************

## JSX intro => JavaScript XML

[Pilar super inportante de REACT]

EXtension de REact para la sintaxis de JS tambien nos permite describir en JS como se veran los componentes usando estructura similar a HTML. {JSX es opcional}

> Ventajas de JSX

- Estructura mas facil de visualizar
- Errores y advertencias mas utiles

>Ejemplo:

const elemento = <h1> !hola, mundo </h1>

> Elementos en JS

Elementos => unidades mas peques en React, definen lo que se ve en la pantall.

--- Elemento vs Component

Component esta echo de elementos.

> React DOM

Paquete que facilita la interaccion y actualizacion del DOM en applicaciones React...

--------------------

Cons JSX puedes crear y usar cualquier elemento html (div, img, a, header, nav, p, h1, etc...)

Como reconocerlos?

Etiquetas, en JSX los HTML element se represntan en minusculas, y diff color

Componente siempre empiezan con letra Mayuscula.

Podemos agregar [atributos] a los <elementos> en JSX para especificar ciertas caracteristicas.

no todos los atributos se escriben de la misma forma, ejemplo:

[html] => <h1 class="gato-necio"> Gato Necio </h1>
[React] => <h1 className = "gato-necio-React"> titulo </h1>

<class> es una palabra reservada en JS usada para crear classes.

[html] => <label for="css"> css </label>
[React] => <label htmlFor="css"> css </label>



==== El Atributo Style ====

Acepta un objeto JS con propiedades css escritas en [camelCase], ejemplo:

[CSS] => background-image
[JSX] => background<I>mage

const estiloDiv = {
    color: 'yellow',
    backgroundColor : 'black
};

            la propiedad puede ser nuestra variable de JS
<div style={Variable-JS}></div>

Otra Alternativa

<div style = {{ color: 'yellow' }}></div>
                    podemos usar doble {} para ingresae el objeto

## Estructura

Al igual que en HTML, los elementos pueden ser anidados en JSX para formar estructuras mas complejas.


[HTML]:

<div id="root"></div> => contenedor principal para react

[React]

import ReactDom from 'react-dom';

const element = <h1> Hola perro wuau! </h1>;

ReactDom.render (
    element,
    document.getElementById('root')
)


> Self-Closing tag

Es un elemento que solo posee una etiqueta de apertura ya que no contiene trxto y otros elementos (prodriamos crear un cascaron).

<img src="logo.png" alt="Mi imagen"/>

JSX puede incluir JS ==> {codigo de JS} ejemplo"

let adjetivo = "interesante";

<p> React es {adjetivo}></p> 

___ Con { } le decimos a react que ahi va JS code ___

let nombre = "Gino";

<p> Su nombre es: {nombre.toUpperCase()} </p>

=========================================================================================================================================

# Creacion de application React 57:00
                      /¯¯¯¯ metodo = funcion asociada a un componente que puede acceder a usar su estado.
Componente de clase => 
                      \____ estado



class NombreComponente extends React.Component{}

caracteristicas

- Deven extender React.component
- deben tener un metodo render( ) para retornanr un elemento JSX
- pueden recibir props si es necesario

>Metodo render()

retorna la estructura del componente en JSX y es el unico meotod obligatorio eje

render (){
    return <h1>Mi componente</h1>
}

por que compoente de clase?
usabamos comoponentes de clase para poder trabajar "estados" de nuestros componentes.

