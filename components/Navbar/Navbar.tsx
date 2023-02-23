/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useCart } from "@/store/Cart";

function Navbar() {
  const { count: cartCount } = useCart();

  return (
    <header className="flex justify-between  bg-slate-400 items-center h-20 headerNav">
      <Link href="/">
        <img
          className="h-14"
          src="http://d3ugyf2ht6aenh.cloudfront.net/stores/002/258/941/themes/common/logo-1802041699-1657027423-10f57b70f752c85309aec61b86d603fb1657027423.png?0"
          alt="Logo tienda"
        />
      </Link>
      <Link href="/cart" className="flex items-center mr-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2611/2611147.png"
          alt=""
          className="h-10 mr-2"
        />
        <p>({cartCount})</p>
      </Link>
    </header>
  );
}

export default Navbar;
