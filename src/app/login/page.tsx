import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <>
      {/* <Link href="/">Link To Home Page</Link> */}

      <div className="Body grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="Image hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1685216779685-1c457bda18d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>

        <div className="Login Portion bg-gray-800 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Log In
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Continue
            </button>
          </form>

        </div>
      </div>
    </>
  );
}
