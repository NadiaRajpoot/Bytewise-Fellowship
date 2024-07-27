### Introduction to useContext and Context API.

- The useContext hook and Context API in React provide a way to manage and share state across different components in a React application without passing props through multiple levels of the component tree.
- This approach is particularly useful for handling global state, such as user authentication, themes, or language preferences.
  **_Introduction to Context API_**
- The Context API is a feature in React that allows you to create a context object, which can be used to share data across the entire component tree. The Context API consists of the following components:

1. `Context Object:` Created using React.createContext().

2. `Provider Component:` Makes the context value available to all the components within its subtree.
3. `Consumer Component:` Accesses the context value. In functional components, this is typically done using the useContext hook.

**_Creating and Using Context in React_**

1. Create a Context

- First, create a context object using React.createContext().

```import React, { createContext } from 'react';

// Create a context with a default value (optional)
const MyContext = createContext(null);
```

2. Create a Provider Component
   The Provider component is responsible for providing the context value to its child components. It uses the Provider component of the created context.

```
import React, { useState } from 'react';

const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState("default value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
```

3. Consume the Context using `useContext`
   In any functional component that needs to access the context value, use the useContext hook.

```
import React, { useContext } from 'react';
import { MyContext } from './MyContextProvider';

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {value}</p>
      <button onClick={() => setValue("new value")}>Change Value</button>
    </div>
  );
};

export default MyComponent;
```

4. Wrap Your Component Tree with the Provider
   Ensure that your component tree is wrapped with the Provider component, so the context value is available to all nested components.

```import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyContextProvider } from './MyContextProvider';

ReactDOM.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
  document.getElementById('root')
);
```
