/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "@/components/layout/Layout";
import { Product } from "@/types";
import Papa from "papaparse";
import Carrousel from "@/components/Carrousel/Carrousel";
import AddToCart from "@/components/Cart/AgregarAlCarrito";

export const getServerSideProps = async () => {
  const products = await axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTU6fDPVr0HMxo5DbowRMfVPhS1TBFqGW8v2XwfzNTAF7aoY_JSQLwolW4pTOonKz78RL4S3uu3n4T_/pub?output=csv",
      {
        responseType: "blob",
      }
    )
    .then((response) => {
      return new Promise<Product[]>((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => resolve(results.data as Product[]),
          error: (error) => reject(error.message),
        });
      });
    });
  return {
    props: {
      products,
    },
  };
};

export interface Props {
  products: Product[];
}
const Product = ({ products }: Props) => {
  const router = useRouter();
  const { product } = router.query;
  const singleProduct: Product = products.find(
    (element: Product) => element.title === product
  );

  return (
    <Layout>
      <div className="mt-20">
        <Carrousel
          img={singleProduct.image}
          imgDos={singleProduct.secondImage}
        />
        <div className="p-5">
          <h1 className="capitalize">{singleProduct.title}</h1>
          <p>{singleProduct.description}</p>
        </div>
        <AddToCart product={singleProduct} />
      </div>
    </Layout>
  );
};

export default Product;
