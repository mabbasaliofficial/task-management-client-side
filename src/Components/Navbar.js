import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../Assets/Image/task.png";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!"theme" in localStorage && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(console.log);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <img src={image} className="h-6 mr-3 sm:h-9" alt="Website Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Task
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/add_task`}>Add Task</Link>
              </li>
              <li>
                <Link to={`/my_task`}>My Task</Link>
              </li>
              <li>
                <Link to={`/completed_task`}>Completed Task</Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <button onClick={handleLogOut}>Sign Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={`/login`}>Log In</Link>
                  </li>
                  <li>
                    <Link to={`/signup`}>Sign Up</Link>
                  </li>
                </>
              )}
              <li>
                <div className="duration-100 dark:bg-slate-700 bg-gray-100 rounded">
                  {options?.map((opt) => (
                    <button
                      onClick={() => setTheme(opt.text)}
                      key={opt.text}
                      className={`w-5 h-5 leading-9 text-xl rounded-full mx-2 ${
                        theme === opt.text && "text-sky-400"
                      }`}
                    >
                      <ion-icon name={opt.icon}></ion-icon>
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
