### Task01- What is Global state?

**_Global State_**

- These are states that are accessible to every component in the application.
- It is always declared and located in the root component of your app before the JSX is returned.

- A state can be considered as a global state if it is a piece of data that is accessible among multiple components thereby, aiding communication between components in the application.

**_Managing Global State in React_**

- There are several ways to manage global state in React:

1. React Context API
2. State Management Libraries

#### React Context API

- The Context API is a built-in feature of React that allows you to create a context and provide it to any component that needs it.

**_example_**

```
import React, { createContext, useState, useContext } from 'react';

// Create a context
const GlobalStateContext = createContext();

// Create a provider component
const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({ user: null, theme: 'light' });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
const useGlobalState = () => useContext(GlobalStateContext);

const ComponentA = () => {
  const { state } = useGlobalState();
  return <div>User: {state.user}</div>;
};

const ComponentB = () => {
  const { setState } = useGlobalState();
  return <button onClick={() => setState(prev => ({ ...prev, user: 'John Doe' }))}>Login</button>;
};

const App = () => (
  <GlobalStateProvider>
    <ComponentA />
    <ComponentB />
  </GlobalStateProvider>
);

export default App;
```

#### State Management Libraries.

- For more complex applications, you might use state management libraries like Redux, MobX, or Recoil.

1. Redux

- `Redux `is a popular library for managing global state in React applications. It provides a single store for the entire application state and uses actions and reducers to update the state.
