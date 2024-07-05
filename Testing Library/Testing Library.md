# Cómo usar Testing library ? 
> https://www.youtube.com/watch?v=BUJJ1zzAAGE


Testing framework can be added to any project
JS => Testing Framework
TS => Testing library

unit test focused on the user => user will interact with the logic of our component

ignora los detalles de implementacion
consulta el DOM

Glosario del testing

- describe => decribira el componente 
- Mock => trata de controlar variable y metodos con lo que esperamos
- afterEach => se utiliza para borrar mocks
- beforeEach => cosas que queremos que suceda siempre que hay una prueba nueva

Estructura con JEST

describe => beforeEach => afterEach => it()

## Recomendacions 

1. Atomicidad => cada componente sea lo mas peque posible
2. Component => unica logica
3. componente reutilizable
4. Componentes que no requieran de otros


> Snapshot del DOM => renderiza el dom para prueba y testeo
> screen nos dara el DOM simulado

Tipos de queries => ocupando screen

- getBy => encontrar un elemento del dom por una condicion - si no lo encuentra dara error y falla el test => si hay mas de uno dara error
- queryBy => cuando no encuentra devuelve un null en vez de un error
- findBy => buscara algo que tarde en aparecer

- getAllBy => buscara elementos para encontrar multiples elementos
- queryAllBy
- findAllBy

## Principales queries

ByRole
screen.getByRole("button", {name: 'texto del button'})

ByLabelText 
screen.getByLabelText('busca por label')

ByText
screen.getByText('busca por texto')

ByTestId

<div data-testing={'mi-elemento'}>Test</div>

screen.getByTestId('mi-elemento')

Consulat si existe ahora mismo

expect(screen.getByText('Existo luego pienso')).toBeInTheDocument();

## Asincrono

WaitFor

await waitFor(()=>{
    expect(screen.getByText('Existo luego pienso')).toBeInTheDocument();
})

findBy
expect(await screen.getByText('Existo luego pienso')).toBeInTheDocument();

## Examples de query

<h3> Esto es un test </h3>
screen.getByText("Esto es un test");

<input type="text" data-testId="input-test">
screen.getByTestId('input-test')

texto luego de una carga que toma calor "gentleman"
<p>tu valor es: {valor}</p>
await waitFor(()=>{
    expect(screen.getByText("tu valor es 'genthelman'")).toBeInTheDocument();
});

