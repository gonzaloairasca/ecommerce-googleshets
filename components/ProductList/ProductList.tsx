import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import Card from "../Card/Card";

interface Props {
  productos: Product[];
}

const ProductList = ({ productos }: Props) => (
  <>
    <div className="container m-auto mt-20">
      <div className="flex flex-wrap  mt-10 ">
        {productos.map((product: Product, index: number) => (
          <Link
            key={index}
            href={`/${product.title}`}
            className="w-3/6 lg:w-4/12"
          >
            <Card
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  </>
);
export default ProductList;
