import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Recommended";
import Login from "../pages/";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
