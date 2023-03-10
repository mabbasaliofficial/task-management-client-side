import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const Login = () => {
  useTitle('Login');
  const { signIn , googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success('Login successfully')
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const googleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User added successfully");
        navigate(`/`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="pb-[500px]">
    <div className="lg:w-1/3 mx-auto border p-10 rounded">
       <h3 className="text-3xl font-bold text-center mb-10">Log In</h3>
      <form onSubmit={handleLogIn}>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full"
        >
          Log In
        </button>
      </form>
      <button onClick={googleLogin} type="button"    class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mt-5 mb-2 w-full"><FaGoogle className="mr-2"/> <span> Sign In With Google</span></button>
    </div>
    </div>
  );
};

export default Login;
