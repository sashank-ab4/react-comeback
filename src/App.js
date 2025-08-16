import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import ContactClass from "./Components/ContactClass";
import Error from "./Components/Error";
import RestaruantMenu from "./Components/RestaruantMenu";
import Login from "./Components/Login";
import "../index.css";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
//import Confectionery from "./Components/Confectionery";

//LazyLoading or Chunking or Code splitting or on demand loading

const Confectionery = lazy(() => import("./Components/Confectionery"));

const Applayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Sashank",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactClass />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaruantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/confectionery",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Confectionery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
