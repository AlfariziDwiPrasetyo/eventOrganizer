"use client";
import React, { useEffect, useState } from "react";
import { navigateToLogin } from "../action";
import { isLoggedIn } from "@/utils/authUtils";

const page = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const loginUser = await isLoggedIn();

      if (!loginUser) {
        navigateToLogin();
      } else {
        setUser(loginUser);
      }
    };
    getUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <div className="flex items-center justify-center mb-6">
          <img
            className="w-24 h-24 rounded-full mr-4"
            src="https://source.unsplash.com/200x200/?portrait"
            alt="Profile Picture"
          />
          <div>
            <h1 className="text-3xl font-semibold">Your Name</h1>
            <p className="text-gray-600">Web Developer</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="border-t pt-4">
          <p className="text-gray-600">Email: your.email@example.com</p>
          <p className="text-gray-600">Location: Your City, Your Country</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default page;
