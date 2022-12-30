import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Router";

function App() {

  return (
    <div className="dark:text-gray-100 dark:bg-slate-900 duration-100 pb-20 App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
