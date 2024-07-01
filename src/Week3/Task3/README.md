### task03- Styling in React (in-line, css in js, modules).

1. 1.Inline Style

- Inline styles in React are defined directly within the JSX elements using the style attribute.

```

import React from 'react';

const App = () => {
  const divStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center'
  };

  return (
    <div style={divStyle}>
      <h1>Welcome to React</h1>
      <p>This is a simple example of inline CSS in React.</p>
    </div>
  );
};

export default App;
```

2. .CSS Modules:

- CSS Modules in React
  CSS Modules are a way to locally scope CSS by automatically generating unique class names and ensuring that styles do not clash across different components. This approach enhances modularity and maintainability in React applications by keeping styles closely coupled with components

**_Button.module.css_**

```

.button {
  background-color: lightblue;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: skyblue;
}
```

**_Button.js_**

```
import React from 'react';
import styles from './Button.module.css'; // Import CSS Module

const Button = () => {
  return (
    <button className={styles.button}>
      Click me
    </button>
  );
};

export default Button;
```
