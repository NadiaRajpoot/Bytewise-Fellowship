## Task02 : Learn about props in React components, how they are passed.

- Props in React are inputs that you pass into components. The props enable the component to access customised data, values, and pieces of information that the inputs hold.

- The term 'props' is an abbreviation for 'properties' which refers to the properties of an object.

**_How to Use React Props_**
Before we go deeper, it is important to note that React uses a one-way data flow. This means that data can only be transferred from the parent component to the child components. Also, all the data passed from the parent can't be changed by the child component.

**_How to Send Props into a Component_**
How props are passed into a component is similar to how attributes work in HTML elements.

- For example, when you want to pass attributes into an input element in HTML, you will write the attribute and attach the value of the attribute to it, just like this:

- Also, when sending props (which are also properties and can be likened to attributes), you attach your values to them.

- Below is the syntax:

```
<ComponentName property1="value" property2="value" property3="value" />

```

**_How to Access and Use Props in React_**

- The component receives props as a function parameter. It uses the value of props by defining the parameter as props objects.
  Below is the syntax:

```
//the function receives 'props' as a parameter function
function Product(props) {
    return (
      <div>
//it uses the value of props by defining the parameter as props objects
        <img src={props.objectName} alt="products" />
        <h4>{props.objectName}</h4>
        <p>{props.objectName}</p>
        <h4>{props.objectName}</h4>
      </div>
    );
}

export default Product

```
