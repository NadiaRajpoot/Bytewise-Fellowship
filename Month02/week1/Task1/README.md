### Task01 - Dynamic Routing.

#### Introduction.

- Dynamic routing is a powerful technique used in web development to handle navigation and rendering of pages based on changing parameters. Unlike traditional static routing, where pages are created and rendered component by component, dynamic routing allows for more flexible and efficient handling of complex app scenarios.

**_Dynamic Routes in Action_**

- To illustrate dynamic routing, let’s consider an e-commerce app. Normally, pages in a web app are created and rendered by moving through different components. However, in the case of an e-commerce app, creating pages for each individual product is not practical. This is where dynamic routing comes in handy.

- In our example, we will use the the react-router-dom library for routing. We’ll start by importing the necessary components into our main `App.js` file:

```
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Products";
```

- Next, we’ll define our routes using the `Routes` and `Route` components provided by `react-router-dom`:

```
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

```

- Note the slight modification in the route path for the product page. We’ve added `/:productId` to indicate that this part of the URL will be dynamic and represent the product's unique identifier.

- In the `Product` component, we can access the `productId` parameter using the `useParams` hook provided by react-router-dom:

```

import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);

  return <div>Product</div>;
}

```

- Here, we extract the productId from the URL parameters using object destructuring and log it to the console for verification. This way, we can access the specific product ID for fetching relevant data or rendering the product details on the page.

- To fetch data based on the dynamic parameter, we can utilize the useEffect hook:

```
import { useParams, useEffect } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  useEffect(() => {
    // Perform data fetching based on productId
  }, [productId]);

  return <div>Product</div>;
}

```
