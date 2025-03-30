import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-40 top-8 left-1/2 -translate-x-1/2 fixed flex items-center gap-5 py-4 px-20 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800">
      <Link href="/">
        <span className="hover:text-gray-300 transition-colors">Home</span>
      </Link>
      <Link href="/store">
        <span className="hover:text-gray-300 transition-colors">Store</span>
      </Link>
      <Link href="https://discord.gg/kandangalwi">
        <span className="hover:text-gray-300 transition-colors">Discord</span>
      </Link>
    </nav>
  );
};

export default Navbar;
