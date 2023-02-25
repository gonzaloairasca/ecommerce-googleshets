/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Item, Button, Loader, Message } from "semantic-ui-react";
import { CartItemType } from "@/store/Cart";
import Product from "@/pages/[product]";

type CartItemListProps = {
  items: CartItemType[];
  removeFromCart: (product: TProduct) => void;
  loading?: boolean;
};

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Loader active inline="centered" />;

  if (items.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <img
          src="https://img.icons8.com/ios/100/null/empty-box.png"
          alt="icono caja vacia"
        />
        <p className="p-6 text-xl">
          Ops! Tu carrito esta vacío, podes dirigirte a la
          <Link href="/"> tienda </Link>y elegir algunos productos!
        </p>
        <Link href="/">
          <button className="bg-black py-3 px-4 text-white rounded-lg">
            Ir a la tienda
          </button>
        </Link>
      </div>
    );
  const text = items
    .reduce(
      (message, product) =>
        message.concat(
          `*${product.title.toUpperCase()} -  Cantidad ${product.quantity} - $${
            product.price
          } \n`
        ),
      ``
    )
    .concat(
      `\nTotal $${items.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      )}`
    );

  return (
    <div className="mt-20 min-h-screen">
      {/* <Item.Group divided items={mapCartItemsToItems(items)} as="section" /> */}
      {items.map((item) => (
        <>
          <div className="flex pt-4 px-1">
            <div className="m-1">
              <img className=" w-32" src={item.image} alt={item.title} />
            </div>
            <div className="flex-auto m-1">
              <div className="flex items-center justify-between w-full">
                <h2 className="capitalize my-auto">{item.title}</h2>
                <img
                  onClick={() => removeFromCart(item)}
                  src="https://img.icons8.com/ios/30/null/close-window--v1.png"
                  alt={item.title}
                />
              </div>
              <h5>
                Precio: ${item.price} x ({item.quantity})
              </h5>
            </div>
          </div>
        </>
      ))}
      <div className="w-full flex justify-center mt-8">
        <Link
          href={`https://api.whatsapp.com/send?phone=5491158621648&text=${encodeURIComponent(
            "Elegí estos productos en tu tienda online \n \n"
          )}${encodeURIComponent(text)}`}
          target="_blank"
        >
          <button className="bg-black py-3 px-4 text-lg text-white rounded-lg">
            Continuar con la compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItemList;
