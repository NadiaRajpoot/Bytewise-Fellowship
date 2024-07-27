## task 03- Learn about React hooks, get an idea of major react hooks.

- React `Hooks` provide functional components with the ability to use states and manage side effects. They were first introduced in React 16.8, and allow developers to hook into the state and other React features without having to write a class. They provide a cleaner and more concise way to handle state and side effects in React applications.
- You cannot use hooks in conditional , function or loop , it must be called in exact same order

1. React State Hooks

- State Hooks stores and provide access to the information. To add state in Components we use:

`useState Hook:` useState Hooks provides state variable with direct update access.
`useReducer Hook:` useReducer Hook provides a state variable along with the update logic in reducer function.

```
const [count, setCount] = useState(0)
```

2. React Context Hooks

- Context hooks make it possible to access the information without being passed as a prop.

`useContext Hooks:` shares the data as a global data with passing down props in component tree.

```
const context = useContext(myContext);
```

3. Effect Hooks:

- Effects connect the components and make it sync with the system. It includes changes in browser DOM, networks and other libraries.

`useEffect:` useEffect Hook connects the components to external system

```
useEffect(()->{
    // Code to be executed
}, [dependencies] )

```
