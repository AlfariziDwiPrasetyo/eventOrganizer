"use client";
import { isLoggedIn } from "./authUtils";
import { createContext, useContext, useState } from "react";
import React, { useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await isLoggedIn();
      if (!isAuthenticated) {
        setAuthenticated(false);
      } else {
        setAuthenticated(true);
      }
    };

    checkAuthentication();
  }, []);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
