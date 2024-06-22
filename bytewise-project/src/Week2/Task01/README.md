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
