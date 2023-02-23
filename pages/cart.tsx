import React from "react";
import Layout from "@/components/layout/Layout";
import { useCart, useCartMutations } from "@/store/Cart";
import CartItemList from "@/components/CartItemList/CartItemList";

const cart = () => {
  const { items, count } = useCart();
  const { removeFromCart } = useCartMutations();

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
    </Layout>
  );
};

export default cart;
