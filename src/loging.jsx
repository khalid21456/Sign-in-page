import React from "react";
import "./loging.css";
import book from "./back-book.jpg"

function loging() {
  return (
    <div className="flex justify-between">
      <div className="divImage">
        <img src={book} alt="back" id="back-image" />
      </div>
      <div>
        <div className="container flex justify-center">
          <div id="hu" className="flex justify-center items-center h-screen">
            <div className="mb-52">
              <div id="email" className="mt-20">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-orange-500 mt-3"
                  name="email"
                />
              </div>
              <div id="password" className="mt-7">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-orange-500 mt-3"
                  name="pass"
                />
              </div>
              <div className="flex justify-center mt-10 mb-2">
                <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded ">
                  Log in
                </button>
                <br />
              </div>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="underline text-cyan-600 hover:text-orange-400"
                >
                  Forgot password
                </a>
                <a href="." className="underline text-cyan-600 hover:text-orange-400"> Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loging;
