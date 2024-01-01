"use client";
import React, { useEffect, useState } from "react";
import CardCaraousel from "./CardCaraousel";

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/api/v1/event")
        .then((res) => {
          return res.json();
        })
        .then((dataApi) => {
          setData(dataApi);
        });
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.events?.map((datas) => (
          <CardCaraousel
            banner={datas.banner}
            name={datas.name}
            date={datas.date}
            address={datas.adress}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
