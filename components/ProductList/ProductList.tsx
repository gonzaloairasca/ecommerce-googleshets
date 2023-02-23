import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import Card from "../Card/Card";

interface Props {
  productos: Product[];
}

const ProductList = ({ productos }: Props) => (
  <>
    <div className="flex flex-wrap mt-20">
      {productos.map((product: Product, index: number) => (
        <Link key={index} href={`/${product.title}`} className="w-3/6">
          <Card
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  </>
);
export default ProductList;
