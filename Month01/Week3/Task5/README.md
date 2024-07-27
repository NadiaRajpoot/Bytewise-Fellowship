### Task05-Displaying data with loops, handle arrays and objects.

- In React, displaying data from arrays and objects involves using JavaScript's array methods (map) for arrays to iterate and render dynamic content with JSX.

**_Example: Displaying Data from Arrays_**

```

import React from 'react';

const App = () => {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


```
