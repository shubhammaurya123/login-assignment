"use client";
import Image from "next/image";
import Layer from "../../public/Layer_1.svg";
import Hey from "../../public/hey-bro.svg";
import {useState } from "react"; // Ensure useState is imported from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoHome } from "react-icons/go";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

// git  add .
// git commit -m 'frjgnf'
// git push
const LOGIN_STATE = {
  LOGIN_PAGE: "LOGIN_PAGE",
  LOADING: "LOADING",
};


export default function Home() {
  const userCredential = {
    email: "skmaurya9721@gmail.com",
    password: "Maurya@123",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState(LOGIN_STATE.LOGIN_PAGE);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const notify = () =>
    toast(
      <div className="flex gap-2 items-center">
        <GoHome /> Email or Password incorrect
      </div>
    );
  const handleOnClickLogin = (e) => {
    e.preventDefault();
    setCurrentState(LOGIN_STATE.LOADING);
    setTimeout(() => {
      setCurrentState(LOGIN_STATE.LOGIN_PAGE);
      if (
        email === userCredential.email &&
        password === userCredential.password
      ) {
        alert("Login Successfully");
      } else {
        return notify();
      }
    }, 2000);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex min-h-screen bg-white">
      <section className="flex flex-1 flex-col items-center justify-center bg-red text-black bg-gray-100">
        <Image src={Layer} alt="no-icon" width={400} height={400} />
        <div
          className="block font-medium text-gray-900 mb-4 mt-12"
          style={{ fontSize: "20px", color: "#556A89" }}
        >
          Labour Link: Secure Farming
        </div>
        <div
          className="block text-sm text-gray-400"
          style={{ fontSize: "14px", color: "#556A89" }}
        >
          Manage Labour, Personnel, and More...
        </div>
      </section>
      <section className="flex flex-1 bg-white text-black flex-col p-10 justify-center ">
        <div className="mb-8">
          <Image src={Hey} alt="no-icon" width={60} height={60} />
          <div
            className="block font-medium text-lg dark:text-black mb-3"
            style={{ fontSize: "26px" }}
          >
            Hello HR!
          </div>
          <div className="mb-2 text-sm font-medium text-gray-500 font-weight-500">
            {currentState === LOGIN_STATE.LOADING
              ? "Trying to log in ..."
              : "Please Login to access your account"}
          </div>
        </div>

        {currentState === LOGIN_STATE.LOGIN_PAGE && (
          <form className="w-full" style={{ maxWidth: "94%" }} >
            <div className="mb-6">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Email<span style={{ color: "#FF0000" }}>*</span>
                </label>
                <div
                  className="text-red-900 text-sm bg-#FF7777"
                  style={{ color: "#FF0000" }}
                >
                  Enter valid email ID
                </div>
              </div>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Password<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <div className="relative">
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>

            <button
              onClick={handleOnClickLogin}
              type="submit"
              className="text-white  bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ width: "100%" }}
            >
              Log in
            </button>
          </form>
        )}
        {currentState === LOGIN_STATE.LOADING && (
          <div
            className="bg-gray-100 rounded-l-lg rounded-r-lg mt-3"
            style={{ width: "80%" }}
          >
            <div
              className="bg-blue-800  rounded-lg"
              style={{ height: "10px", width: "33%" }}
            ></div>
          </div>
        )}
        <ToastContainer
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{ background: "#FF7777", color: "#fff" }}
          bodyStyle={{ fontSize: "14px" }}
          progressStyle={{ background: "red", height: "4px" }}
        />
      </section>
    </main>
  );
}
