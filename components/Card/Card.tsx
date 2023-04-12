/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
}

const Card = ({ image, title, price }: Props) => {
  return (
    <div className="m-4 text-[#252525] ">
      <img src={image} alt={title} />
      <h4 className="capitalize font-bold m-0 p-0">{title}</h4>
      <h4 className="font-bold m-0 p-0">${price}</h4>
    </div>
  );
};

export default Card;
