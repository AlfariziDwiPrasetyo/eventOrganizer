import React from "react";
import { format } from "date-fns";
import Link from "next/link";

const CardCaraousel = ({ banner, name, date, address }) => {
  return (
    <div className="border w-96 md:w-80 bg-base-100">
      <figure>
        <Link href={"#"}>
          <img src={banner} alt="event" className="w-full h-40 object-fill" />
        </Link>
      </figure>
      <div className="p-5">
        <Link href={"#"}>
          <h2 className="font-bold text-xl black-text">{name}</h2>
        </Link>
        <p className="text-sm h-12 pt-2 gray-text mb-3">
          {format(new Date(date), "dd MMM yyyy")} | {address}
        </p>
        <p className="font-bold text-right blue-text text-xl">20.000</p>
      </div>
    </div>
  );
};

export default CardCaraousel;
