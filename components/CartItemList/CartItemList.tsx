/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Item, Button, Loader, Message } from "semantic-ui-react";
import { CartItemType } from "@/store/Cart";

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

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, title, quantity, price, image } = cartItem;

      return (
        <>
          <div>
            <img src={image} alt={title} />
          </div>
        </>
      );

      // return {
      //   childKey: id,
      //   header: (
      //     <Link href={`/${title}`} passHref>
      //       <Item.Header as="a">{title}</Item.Header>
      //     </Link>
      //   ),
      //   image: (
      //     <Item.Image
      //       src={image}
      //       alt={title}
      //       size="small"
      //       style={{ background: "#f2f2f2" }}
      //     />
      //   ),
      //   meta: `${quantity} x ${price}`,
      //   description: "Some more information goes here....",
      //   extra: (
      //     <Button
      //       basic
      //       icon="remove"
      //       floated="right"
      //       onClick={() => removeFromCart(cartItem)}
      //     />
      //   ),
      // };
    });

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
          href="https://api.whatsapp.com/send?phone=346….302&text=Hola%20,te%20asesoramos%20por
%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal"
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
