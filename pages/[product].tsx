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

  const paths = products.map((product) => {
    return {
      params: { product: `${product.title}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await api.list();
  return {
    props: {
      products,
    },
    revalidate: 10,
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
