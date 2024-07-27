## Task-02 - Preventing infinite re-rendering loop with useEffect.

1. forgot to include a dependency array in the useEffect, causing an infinite re-rendering loop.
   For instance:

```
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  });

  return <div>hello</div>;
};

export default App;

```

In this example, an infinite re-rendering loop occurs because there is no dependency array inside the useEffect. Whenever the component is mounted, the JSX within the return statement is rendered to the page. Once the component is rendered, the useEffect is called. Since the dependency array is missing inside the useEffect, it will be called every time the component re-renders. Additionally, as there is a setCount method inside the useEffect, it causes a re-render again, and then the useEffect is called again, creating an infinite loop.

**_overcome the infinite re-rendering loop_**

- To overcome the infinite re-rendering loop caused by the missing dependency array in the useEffect, you need to include a dependency array. This array should contain all the variables that useEffect depends on. If you want the useEffect to run only once when the component mounts (and not on every re-render), you should provide an empty dependency array. Here is the corrected code:

```
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return <div>hello</div>;
};


```

- In this example, the empty dependency array [] ensures that the useEffect only runs once when the component mounts, preventing the infinite re-rendering loop.

import { useState, useEffect } from 'react';

```
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]); // Dependency array includes 'count'

  return <div>hello</div>;
};

export default App;
```

2. Including an object in the dependency array can cause an infinite re-rendering loop.
   For instance:

```
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const obj = { a: 1 };

  useEffect(() => {
    setCount(count + 1);
  }, [obj]);

  return <div>hello</div>;
};

export default App;
```

- In this example, an infinite re-rendering loop occurs because objects, arrays, and functions are reference values. Reference values are stored based on their location in memory. In this example, obj refers to the location in memory where the object is stored. Every time the state changes, the location of obj in memory also changes. Since obj is included in the useEffect dependency array, useEffect is called whenever obj changes. This sets the state again, causing a re-render, which changes the location of obj in memory, and thus useEffect is called again, resulting in an infinite loop.

**_ Overcoming Infinite Re-rendering Loop Using useRef _**

- Here's how to use `useRef` to overcome the issue of including an object in the dependency array and causing an infinite re-rendering loop:

```
import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const objRef = useRef({ a: 1 }); // Use useRef to create a persistent object

  useEffect(() => {
    setCount(count + 1);
  }, [objRef.current]); // Use objRef.current in the dependency array

  return <div>hello</div>;
};

export default App;
```

Explanation:

1. ` useRef Initialization:` The `useRef` hook is used to create a persistent object (objRef) that does not change its reference between re-renders. The initial value of objRef is { a: 1 }

2. `Dependency Array:` By using `objRef.current` in the dependency array of useEffect, you ensure that the useEffect is not triggered by changes in the reference of the object because useRef keeps the same reference across renders.
3. `Persistent Object:` `objRef.current` maintains the same object reference throughout the component's lifecycle, preventing the infinite re-rendering loop.

4. Infinite Re-rendering Loop with Functions in Dependency Array

- When functions are included in the dependency array, they can cause an infinite re-rendering loop because functions, like objects, are reference values and their reference changes on every render. Here's a detailed explanation and how to overcome this issue:

```
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    incrementCount();
  }, [incrementCount]); // Function in dependency array

  return <div>hello</div>;
};

export default App;
```

- In this example, an infinite re-rendering loop occurs because the `incrementCount` function is recreated on every render. This causes the dependency array to detect a change and re-run the `useEffect`, which in turn calls setCount and triggers another render, creating a loop.

**_ Using useCallback to Stabilize Function References _**

- To overcome this, you can use the `useCallback` hook to memoize the function. This ensures that the function reference does not change between renders unless its dependencies change.

```
import { useState, useEffect, useCallback } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array to memoize the function

  useEffect(() => {
    incrementCount();
  }, [incrementCount]); // Memoized function in dependency array

  return <div>hello</div>;
};

export default App;
```

Explanation:

1. useC`allback Initialization:` The useCallback hook is used to memoize the incrementCount function. The function will only be recreated if any of its dependencies change. Since we passed an empty dependency array, the function reference remains stable across renders.

2. `Dependency Array: `By including the memoized incrementCount function in the dependency array, the useEffect hook will only run once when the component mounts, preventing the infinite re-rendering loop.

3. `Function Reference Stability:` Using useCallback ensures that the function reference does not change on every render, thus avoiding the infinite re-rendering loop.
