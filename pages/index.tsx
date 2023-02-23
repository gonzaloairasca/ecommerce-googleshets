/* eslint-disable @next/next/no-img-element */
import ProductList from "@/components/ProductList/ProductList";
import Layout from "@/components/layout/Layout";
import api from "../pages/api/api";
import { GetStaticProps } from "next";

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  secondImage: string;
  price: number;
}
interface Props {
  productos: Product[];
}

const Home: React.FC<Props> = ({ productos }) => {
  return (
    <Layout>
      <ProductList productos={productos} />
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const productos = await api.list();
  return {
    props: {
      productos,
    },
    revalidate: 10,
  };
};
