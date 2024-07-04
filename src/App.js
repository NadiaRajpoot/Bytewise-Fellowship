import { useState } from "react";
// import Users from "./Week2/Task03/Users";
// import Userprofile from "./Week2/Task03/UserProfile";
// import Loader from "./Week2/Task03/Loader";
import Home from "../src/Week4/Task3/Home";
import Header from "./Week4/Task3/Header";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AboutUs from "./Week4/Task3/AboutUs";
import Item from "./Week4/Task3/Item";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  // const [userData, setUserData] = useState({});
  // const [loading, setLoading] = useState(false);
  // console.log(loading);
  const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path

      children: [
        // show children component for routing
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/products/:id",
          element: <Item />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* <Users setUserData={setUserData} setLoading={setLoading} />

      {loading ? <Loader /> : <Userprofile user={userData} />} */}

      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
