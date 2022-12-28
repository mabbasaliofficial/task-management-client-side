import AddTask from "../Pages/AddTask";
import CompletedTask from "../Pages/CompletedTask";
import MyTask from "../Pages/MyTask";

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
        ]
    }
])

export default router;