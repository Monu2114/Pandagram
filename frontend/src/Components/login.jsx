import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Log in to Pandagram
        </h2>

        {/* Form for email and password */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Log in
          </button>
        </form>

        {/* Continue with Google */}
        <div className="mt-4 text-center">
          <button
            className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600"
            onClick={() => alert("Google login coming soon!")}
          >
            Continue with Google
          </button>
        </div>

        {/* Continue with Phone Number */}
        <div className="mt-4 text-center">
          <button
            className="w-full bg-green-500 text-white py-2 rounded-md mt-4 hover:bg-green-600"
            onClick={() => alert("Phone login coming soon!")}
          >
            Continue with Phone Number
          </button>
        </div>

        <div className="mt-4 text-center"></div>
      </div>
    </div>
  );
}
