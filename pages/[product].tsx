/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { Product } from "@/types";
import Carrousel from "@/components/Carrousel/Carrousel";
import AddToCart from "@/components/Cart/AgregarAlCarrito";
import { GetStaticProps } from "next";
import api from "./api/api";

export async function getStaticPaths() {
  const products = await api.list();

  // const paths = products.map((product) => {
  //   return {
  //     params: { product: `${product.title}` },
  //   };

  // });

  return {
    paths: [
      { params: { product: "remera-celeste" } },
      { params: { product: "remera-dos" } },
      { params: { product: "item-tres" } },
    ],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await api.list();
  console.log(`Static site generation for ${params!.product}`);
  return {
    props: {
      products,
    },
  };
};

export interface Props {
  products: Product[];
}
const Product: React.FC<Props> = ({ products }) => {
  const router = useRouter();
  const { product } = router.query;
  const singleProduct = products.find(
    (element: Product) => element.title === product
  );

  return (
    <Layout>
      <div className="mt-20">
        <Carrousel
          img={singleProduct!.image}
          imgDos={singleProduct!.secondImage}
        />
        <div className="p-5">
          <h1 className="capitalize">{singleProduct!.title}</h1>
          <p>{singleProduct!.description}</p>
        </div>
        <AddToCart product={singleProduct} />
      </div>
    </Layout>
  );
};

export default Product;
