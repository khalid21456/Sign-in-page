import React from "react";
import "./loging.css";
import user from "./user.png";
export default function Signing() {
  return (
    <div className="flex justify-between">
      <div className="divImage">
        <img src="images/background-image.jpg" alt="back" id="back-image" />
      </div>
      <div>
        <div className="container flex justify-center">
          <div id="hu" className="flex justify-center items-center h-screen">
            <div className="mb-52">
              <div id="user" className="mt-32 flex justify-center">
                <img src={user} className="w-52 h-52" />
              </div>
              <div id="email" className="mt-1">
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
              <div className="mt-7">
                <label>Confirme password</label>
                <br />
                <input
                  type="password"
                  placeholder="Confirme your Password"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-orange-500 mt-3"
                  name="pass"
                />
              </div>
              <div className="flex justify-center mt-10">
                <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded ">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
