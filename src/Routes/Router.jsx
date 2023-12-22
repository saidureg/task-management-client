import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Tasks from "../pages/Dashboard/Tasks/Tasks";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddTask from "../pages/Dashboard/Tasks/AddTask/AddTask";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "addTask",
        element: <AddTask />,
      },
    ],
  },
]);

export default Router;
