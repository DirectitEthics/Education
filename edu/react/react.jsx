// Elements in React are the most basic building block for describing your applications UI

// Elements are immutable and their children or attributes cant be updated after rendering.
// Similar to a snapshot

// working mainly with a flexible concept, componets, (i.e.; wrappers around elemnents that provide additional capabilities.)

// TO DEFINE AN ELEMENT:

// create an object representing
// a React element
const element = React.createElement(
    'p', // type
    'null', // props
    'Enki was here' // children
    )
// elements are plain objects and can be created cheaply and rendered into the DOM
// The way elements are rendered is with help from the React DOM, under the root Node

<div id="root"></div>

// Now on the webpage, you can display the <p> element (declared above) as a child of the "root" div, using:
// ReactDOM.render()

ReactDOM.render(
    element,
    document.getElementById("root")
);

// Render "Enki" under the root node
const element = <h2>Enki</h2>

ReactDOM.render(
    element,
    document.getElementById('root')
);

// In React, a component represents a fundamental unit of logic you can work with tobuild re-usable and independent UI blocks.
// These blocks can be anythings you see in a UI: a button, a header with an image, a list of links, etc.
// React components are functions that take input arguments called props and return what should be rendered.
// Creating a componet, with a JavaScript function 

// function component
function Enk() {
    return <p>Enki aka Ea</p>;
}

// Alternatively, you can extend the React.Component class to create a component. In this case, the rendered output needs to be returned from a method called render()

// class componet
class Enki extends React.Component {
    render() {
        return <p>Enki aka Ea</p>;
    }
}

// Using React Components

// we create a component that renders 'Welcome'
function Welcome() {
    return <h1>Welcome</h1>
}

// and we can return <Welcome /> anywhere
class Enki extends React.Component {
    render() {
        return <Welcome />;
    }
}

// we can also use any component to create elements
const element = <Enki />;

// Giving you the means to render it
ReactDOM.render(
    element,
    document.getElementById('root')
);
// It is important to remember the difference between components and elements.
// The React component is used to return React elements.


