### Task-04 - React Router introduction.

![alt text](image.png)

#### What is React Router?

- React Router is a popular library for managing client-side routing in React applications.
- It allows you to create complex, multi-page web applications that feel like traditional websites while still being single-page applications (SPAs) under the hood.
- With React Router, you can define and manage routes, enabling users to navigate through different views of your application without having to request a new HTML page from the server.

**_Key Concepts_**

- Before diving into the implementation, let’s understand some essential concepts:

1. `Route:` A `route` is a `mapping` between a URL and a component. When a user visits a specific URL, React Router renders the corresponding component.

2. `Router:` The` router` is the top-level component that provides the routing infrastructure. In React Router, you typically use `BrowserRouter` for web applications and HashRouter for static site.

3. `Nested Routes:` React Router allows you to nest routes, creating a hierarchy of components. This is especially useful for layout structures.

4. `Link:` The `Link component` enables navigation by creating `anchor-like elements` that maintain the application's state.

**_Installation:_** Begin by installing React Router using npm or yarn:

```
npm install react-router-dom

```
