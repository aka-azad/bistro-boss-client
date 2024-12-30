import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <></>,
      },
      {
        path: "login",
        element: <></>,
      },
      {
        path: "our-shop",
        element: <></>,
      },
      {
        path: "dashboard",
        element: <></>,
      },
      {
        path: "our-menu",
        element: <></>,
      },
      {
        path: "contact-us",
        element: <></>,
      },
    ],
  },
]);
