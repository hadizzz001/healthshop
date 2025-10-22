'use client';

import { TempProps } from "../types";
import { motion } from "framer-motion";

interface CarCardProps {
  temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
  const { _id, title, price, discount, img, category, stock, type, color } = temp;

  const isOutOfStock =
    (type === "single" && parseInt(stock) === 0) ||
    (type === "collection" &&
      color?.every((clr) => clr.sizes?.every((size) => parseInt(size.qty) === 0)));

  return (
    <a id="nonehover" href={`/product?id=${_id}`}>
      <div className="w-[350px] sm:w-[430px] mx-auto">
<div className="relative overflow-hidden rounded-2xl group w-full aspect-square  flex items-center justify-center">
  <img
    src={img[0].replace('/upload/', '/upload/f_auto,q_25/')}
    alt={title}
    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105 p-1"
  />

  {isOutOfStock && (
    <div className="absolute inset-0 bg-gray-600 bg-opacity-70 text-white flex items-center justify-center text-lg font-bold z-10 rounded-2xl">
      Out of Stock
    </div>
  )}
</div>


        <div className="px-2 mt-3 text-center sm:text-left">
          <h2 className="myPrice1">{title}</h2>
          <div className="inline-flex flex-wrap gap-x-2 items-baseline justify-center sm:justify-start text-white">
{price != null && (
  <span className="font-light text-[11px] py-1 line-through text-gray-400">
    ${parseFloat(price).toFixed(2)}
  </span>
)}

            <span className="myPrice">
              ${parseFloat(discount).toFixed(2)} USD
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CarCard;
