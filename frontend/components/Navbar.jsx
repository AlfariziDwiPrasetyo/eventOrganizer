import React from "react";
import Link from "next/link";

const Navbar = () => {
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
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          {/* end dropdown profile */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
