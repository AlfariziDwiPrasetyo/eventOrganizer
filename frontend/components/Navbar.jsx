"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProfileNav from "./ProfileNav";
import { useAuth } from "@/utils/authContext";
import { navigateToLogin } from "@/app/action";

const Navbar = () => {
  const { authenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigateToLogin();
  };

  return (
    <div className="container min-w-full">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"} className="px-4 text-xl black-text font-bold">
            EventIn
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-50 md:w-80"
            />
          </div>

          {/* dropdown profile */}
          {authenticated ? (
            <ProfileNav handleLogout={handleLogout} />
          ) : (
            <Link href={"/login"}>
              <button className="btn button-blue">Login</button>
            </Link>
          )}
          {/* end dropdown profile */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
