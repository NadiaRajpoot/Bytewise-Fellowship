### Task03 - Animations with framer motion.

- `Framer Motion `is a popular library for animations in React. Here's a basic example to get you started with Framer Motion to animate a simple element.

- First, install Framer Motion:

```
npm install framer-motion
```

- Then, you can use it in your component like this:

**_Basic Animation Example_**

```
import React from 'react';
import { motion } from 'framer-motion';

const FramerMotionExample = () => {
  return (
    <div>
      <h1>Framer Motion Example</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          margin: '0 auto',
        }}
      >
        Hello
      </motion.div>
    </div>
  );
};


***Key Concepts***
1. `motion.div:` This is a special version of a div that can be animated. You can use other HTML tags as well (e.g., motion.span, motion.h1).

2. `initial:` Defines the starting state of the animation.

3. `animate:` Defines the end state of the animation.

4. `transition:` Defines how the animation progresses from the initial state to the animate state. This includes properties like duration, delay, ease, etc.

export default FramerMotionExample;
```
