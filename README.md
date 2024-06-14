### Bytewise-Fellowship ( React & Next.js) 🚀

#### Day-01 / Task-01

## Task - Refresh HTML, CSS and Javascript.

#### Day-02 / Task-02

## Task- Create React app setup with VS code

- Command to install react app in VS Code

```

 npx create-react-app my-app

```

`my-app` is the name of your app. You can name it as you want.

#### Day-03 / Task-03

## Task- Learn about JSX, what it is and how we use it in react?

`JSX` : JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

- React can also be written without JSX.

### Example 1 using JSX:

```
const el = <h1>React with JSX </h>
const root = document.getElementById("root");
root.render(el);

```

### Example 2 Without JSX:

```
const el = React.createElement("h1" , {}, "React Without JSX");
const root = document.getElementById("root");
root.render(el);

```

- it will become more difficult when we write element in react without JSX.

## How `JSX` works?

```
const jsx = <h1>This is JSX</h1>

```

This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.

So to convert it to browser understandable JavaScript code, we use a tool like `Babel` which is a JavaScript `compiler/transpiler.`

## How Babel Converts the code.

```
const Demo = () = >{

    return(
        <h1>this is JSX</h>
    )
}

```

- Babel converts this code as:

```

const Demo = () = >{

    return(
        React.createElement("h1" , {}, "I am JSX");
    )
}

```

- this ` React.createElement` thing will also be converted into the Javascript Object that browser can understand.

#### Day-04 / Task-04

## Task- Learn about React Components, How they are created and work and learn about thier hierarchy.

##### What are React Components?

In React, `components` are the building blocks of a user interface. They are `reusable`, `self-contained` pieces of code that represent a part of the UI. React allows you to break down your UI into smaller components, which makes it easier to manage and maintain your codebase.

They can accept inputs called `props` (short for properties) and return React elements describing what should appear on the screen.

There are two main types of components in React:

- Functional Components.
- Class Components.

##### Functional Components

Syntax:` Functional components` are defined using the function keyword or arrow function syntax. These are nothing but a simple javascript Functions that returns some piece of JSX code.

```
//using function Keyword

import React from 'react'

function FunctionComponent(){

    return <h1>This is FFunctioanl component</h>;
}

//using Arrow function

const FunctionComponent2 = () =>{
    return <h1>This is Functioanl component</h>;
}


export default FunctionComponent;

```

- functional components are widely used in react and it is recommended to start the name of functional component with capital letter.

##### Class Components.

Syntax: `Class components` are ES6 classes that extend from `React.Component` or `React.PureComponent.` They have a `render() `method where you define the structure of your component's UI using JSX.

```
import React from 'react';

class Classcomponent extend React.Component{

//Define constructor if necessary

    render(){

        return <h1>This is class component</h>
    }
};

export default ClassComponent;

```

- Class Components are old way o writing components in react but it is still supported by react and many companies still used class components in thier projects.
