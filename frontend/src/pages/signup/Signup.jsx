import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-300"> ChatApp</span>
          <form>
            <div>
              <label htmlFor="fullname" className="label p-2">
                <span className="text-base label-text text-gray-400">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label htmlFor="username" className="label p-2">
                <span className="text-base label-text text-gray-400">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label htmlFor="password" className="label p-2">
                <span className="text-base label-text text-gray-400">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="label p-2">
                <span className="text-base label-text text-gray-400">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full input input-bordered h-10"
              />
            </div>
            <GenderCheckbox />
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block  text-gray-300"
            >
              I already have an account.
            </a>

            <div>
              <button className="btn bg-blue-200 btn-block btn-sm mt-2">
                Sign Up
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
