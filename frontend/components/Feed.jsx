"use client";
import React, { useEffect, useState } from "react";
import CardFeed from "./CardFeed";

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_SERVER}event`)
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
        {data.events?.map((datas, index) => (
          <CardFeed
            key={index}
            banner={datas.banner}
            name={datas.name}
            date={datas.date}
            address={datas.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
