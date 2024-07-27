### task-3 Routing in react, how it is different that vanilla html.

- This repository aims to illustrate the differences between routing in a React application and traditional routing in vanilla HTML.

## Overview

In a traditional HTML setup, navigation between pages is achieved using anchor tags (`<a>`) that link to separate HTML files. Each navigation action triggers a full page reload. In contrast, React uses client-side routing, which allows for smooth transitions between different views or components without reloading the page. This is typically achieved using the `react-router-dom` library.

#### How to Install React Router.

- React makes use of an external library to handle routing; however, before we can implement routing with that library, we must first install it in our project, which is accomplished by running the following command in your terminal (within your project directory):

```
npm install react-router-dom

```

- After successfully installing the package, we can now set up and configure react-router within our project.

## Key Differences

### Vanilla HTML Routing

- **Full Page Reloads**: Every time a user navigates to a different page, the browser makes a request to the server for a new HTML file, resulting in a full page reload.
- **Separate HTML Files**: Each page has its own HTML file, which can lead to duplicated code and larger payloads.
- **Simpler Setup**: Requires no additional JavaScript libraries or configurations.

### React Routing

- **Single Page Application (SPA)**: The entire application runs as a single page. Navigation is handled client-side, and the URL changes without full page reloads.
- **Components**: Different views or "pages" are represented as React components, which are rendered conditionally based on the URL.
- **React Router**: A library like `react-router-dom` is used to manage client-side routing, providing a seamless user experience.
- **State Management**: Navigating between views can preserve application state without reloading the page.
