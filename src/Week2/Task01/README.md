## Task-01

### Learn about state and lifecycle in React & Learn the difference between local and global state.

## States

The state in React is an instance of the React Component Class that can be defined as an object that holds some information that may change over the lifetime of the component.

- State is a JavaScript object managed within functional components, similar to a variable declared within a regular function.

- State should be used whenever you need to keep track of data or properties that might change or update between renderings. The change to state is what triggers the component to re-render or update.

<br>

**Difference in using state in Functional and class based components**

1. Functional Component:

- To use `state` within the functional component, it needs to be called or imported as a named import at the top of the component.

**_ Initialization _**

- To initialize state, you create a destructured array, the initial value being the item to update, and the second value is the function to update or change that referenced value.

```
const [thingToTrack, setThingToTrack]=useState('initialValue')

```

- State can take any value initially: a number, string, Boolean, object, or even a function. To update or change state, the setState function should be used.

**_Example_**

```
 import {useState} from 'react;

 const ButtonClick = () =>{

   const [ like , setLike] = useState(0);


    return (
        <div>
        <button onClick={() => setLike(like + 1)}>like</button>
      <h4>{like}</h4>
        </div>
    );

    expor default ButtonClick;
 };

```

1.  class Component:

- We can create a state object within the constructor of the class component.

- React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page. Hence, the correct method of updating the value of a state will be similar to the code below.

-State updates should be independent. The state object of a component may contain multiple attributes and React allows to use setState() function to update only a subset of those attributes as well as using multiple setState() methods to update each attribute value independently.

**_Example_**

```
class ButtonClick extend React.Component{
    constructor(){

       super(props);

       this.State = {
        like: 0,
       }

    }
    render(){

        return {

       <button onClick={() => this.setState({ like: this.state.like + 1 })}>
          Like
        </button>
        <h4>{this.state.like}</h4>
        }
    }
}

```

## Life Cycle in React

- In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle. These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.

- A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase.

- The Mounting Phase begins when a component is first created and inserted into the DOM. The Updating Phase occurs when a component's state or props change. And the Unmounting Phase occurs when a component is removed from the DOM.

**_ Component Mounting Phase _**
The mounting phase refers to the period when a component is being created and inserted into the DOM.

During this phase, several lifecycle methods are invoked by React to enable the developer to configure the component, set up any necessary state or event listeners, and perform other initialization tasks.

The mounting phase has three main lifecycle methods that are called in order:

- The `constructor()` method is called when the component is first created. You use it to initialize the component's state and bind methods to the component's instance.

- The `render()` lifecycle method
  The render() method is responsible for generating the component's virtual DOM representation based on its current props and state. It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.

- The `componentDidMount()` lifecycle method
  The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.

**_ Component Updating Phase _**

- This phase occurs when a component's props or state changes, and the component needs to be updated in the DOM.

- The `shouldComponentUpdate()` lifecycle method
  The shouldComponentUpdate() method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.

- The `componentDidUpdate` lifecycle method
  The componentDidUpdate() method is a lifecycle method in React that is called after a component has been updated and re-rendered. It is useful for performing side effects or additional operations when the component's props or state have changed.

**_ Component Unmounting Phase _**

The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM (Document Object Model) and is no longer rendered or accessible.

During this phase, React performs a series of cleanup operations to ensure that the component and its associated resources are properly disposed of.

The unmounting phase is the last stage in the lifecycle of a React component and occurs when the component is being removed from the DOM tree.

This can happen for various reasons, such as when the component is no longer needed, the parent component is re-rendered without including the child component, or when the application is navigating to a different page or view.

The c`omponentWillUnmount() `lifecycle method
During the unmounting phase, React calls the following lifecycle methods in order:

- componentWillUnmount(): This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, or clearing any data structures that were set up during the mounting phase.

- After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.
- It's important to note that once a component is unmounted, it cannot be mounted again. If you need to render the component again, you will need to create a new instance of it.
