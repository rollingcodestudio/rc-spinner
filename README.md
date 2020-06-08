# RollingCode Spinner!

Un pequeño spinner ideal para las pantallas de cargas en cualquier aplicación.

## Contenidos

 - RCSpinner.html *(ideal para páginas estáticas)*
 - RCSpinner.jsx *(componente de React.js compatible con Bootstrap CSS)*
 - RCSpinnerRB.jsx  *(componente de React.js compatible con React-Bootstrap)*
 - RCSpinner.css *(clases necesarias para que funcione)*

## Requerimientos

Es importante que **Bootstrap** esté instalado, ya sea si se utiliza el componente compatible con React-Bootstrap o no.

Se puede integrar la última versión en el `<head>` del html o ser instalado a través de `npm` utilizando `npm i bootstrap`

## Instalación

### HTML: 
Copiar el código que está dentro de los comentarios en la parte deseada de tu código **HTML** e integrar el código **CSS** con el que ya se esté usando en tu proyecto.

### React.js *(con Bootstrap CSS)*
Se tiene que importar el componente con:

`import RCSpinner from './RCSpinner'`

 y luego ser integrado en el proyecto invocandolo como `<RCSpinner />`

El CSS necesario también tiene que ser importado en el proyecto, esto se logra colocando `import "./RCSpinner.css"`

### React.js *(con React-Bootstrap)*
La diferencia entre esta versión y la anterior es que utiliza los componentes de React Bootstrap y es mucho mas sencillo de leer / modificar a gusto.

Y al igual que el componente con Bootstrap CSS, tenemos que importarlo con:

`import RCSpinnerRB from './RCSpinnerRB'`

 y luego ser integrado en el proyecto invocandolo como `<RCSpinnerRB />`
 
El CSS necesario se invoca colocando `import "./RCSpinner.css"`

## Caso ideal de uso

Sobretodo en **React.js** este componente puede ser invocado mientras se realiza una llamada a una API. La idea es que primero exista un estado indicando si se está cargando:

    constructor(i){
	    super(i)
	    this.state = {
		    isLoading: true
		    }
		}

y en el método `render()` tener una comprobación con if, else del estado

 

       render()  {
		    if (this.state.isLoading) {
				return  <RCSpinner />
				}
			} else {
				return (...)
				}
		}

Entonces, al renderizarse el componente, lo primero que se verá es el Spinner hasta que el estado `isLoading` cambie a falso una vez realizada la llamada a la API.

## Dudas? Consultas?

Contactarse con: 

 - Slack: Nathan Exequiel
 - Mail: [exequiel@hyan.dev](mailto:exequiel@hyan.dev)
