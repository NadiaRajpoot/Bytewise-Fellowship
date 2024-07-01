### Tas04- Conditional rendering in React.

1. Conditional Rendering in React Using Ternary Operator.

- Conditional rendering in React allows you to render different elements or components based on certain conditions.

**_ Syntax of Ternary Operator _**

```
condition ? trueExpression : falseExpression

```

</br>

```
import React, { useState } from 'react';

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => setIsLoggedIn(true);
const handleLogout = () => setIsLoggedIn(false);

return (
<div>
{isLoggedIn ? (
<div>
<h1>Welcome back!</h1>
<button onClick={handleLogout}>Logout</button>
</div>
) : (
<div>
<h1>Please log in</h1>
<button onClick={handleLogin}>Login</button>
</div>
)}
</div>
);
};

export default App;

```

2. Conditional Rendering in React Using Logical AND Operator (&&)
   -In React, another way to conditionally render elements or components based on a condition is by using the logical AND `(&&)` operator.

- This approach is particularly useful for rendering a single element or component conditionally.

- Here’s an example that demonstrates how to use the logical AND operator for conditional rendering in a React component:

```
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      {isLoggedIn && (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <h1>Please log in</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
```

3. Conditional Rendering in React Using if Statements.

-In React, you can use `if` statements for conditional rendering by defining JSX content outside the`return`statement based on conditions. Here’s a simple example:

```import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let content = null;

  if (isLoggedIn) {
    content = (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <h1>Please log in</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default App;
```
