import AddTask from "../Pages/AddTask";
import CompletedTask from "../Pages/CompletedTask";
import Login from "../Pages/Login";
import MyTask from "../Pages/MyTask";
import Signup from "../Pages/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../Pages/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/add_task',
                element: <AddTask/>,
            },
            {
                path: '/my_task',
                element: <MyTask/>,
            },
            {
                path: '/completed_task',
                element: <CompletedTask/>,
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default router;