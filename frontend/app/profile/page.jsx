"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    // get the token from local storage
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(token);

    // config axios
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${parsedToken}`,
    };

    const axiosConfig = {
      method: "GET",
      url: "http://localhost:3001/api/v1/user/profile",
      headers: headers,
    };
    axios(axiosConfig).then((res) => {
      console.log(res);
      setUser(res);
    });
  }, []);

  return (
    <section>
      <p>halo</p>
    </section>
  );
};

export default page;
