import React from "react";
import Layout from "@/components/layout/Layout";
import { usarCarrito, cartMutations } from "@/store/Cart";
import CartItemList from "@/components/CartItemList/CartItemList";

const cart = () => {
  const { items, count } = usarCarrito();
  const { removeFromCart } = cartMutations();

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
    </Layout>
  );
};

export default cart;
