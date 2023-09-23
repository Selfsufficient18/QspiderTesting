import React, { useState } from 'react'

const FormComponent = ({placeholder}) => {

  return (
    <div className="w-[70%] h-[50%] p-6 flex justify-center items-center bg-gradient-to-br from-green-700 to-cyan-700">
    <form className="w-full bg-white py-6 px-9 rounded-2xl">
      <div className="mb-4 text-center font-semibold text-[28px] font-sans tracking-wide">
        <p>CREATE AN ACCOUNT</p>
      </div>
      <div className="mb-6">
        <input
          type="text"
          id="name"
          name="name"
          className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded  block w-full p-2.5 focus:outline-blue-500 "
          placeholder={placeholder?"Your Name":""}
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded  block w-full p-2.5 focus:outline-blue-500 "
          placeholder={placeholder?"Your Email":""}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="password"
          name="password"
          className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded  block w-full p-2.5 focus:outline-blue-500  "
          placeholder={placeholder?"Password":""}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          id="repeat-password"
          name="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded  block w-full p-2.5 focus:outline-blue-500  "
          placeholder={placeholder?"Repeat your password":""}
        />
      </div>
      <div className="flex  justify-center items-center mb-3">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 border border-gray-400 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
            required=""
          />
        </div>
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-600 "
        >
          I agree all statements in
          <a href="#" className="underline pl-1">
            Terms of services
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded text-[14px] px-5 py-3 text-center w-full bg-gradient-to-r from-green-400 to-blue-400 tracking-wide"
      >
        REGISTER
      </button>

      <div className="flex  justify-center items-start mt-5">
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-600 "
        >
          Have already an account ?
          <a href="#" className="underline pl-1 font-bold text-gray-700">
            Login here
          </a>
        </label>
      </div>
    </form>
  </div>
  )
}

export default FormComponent