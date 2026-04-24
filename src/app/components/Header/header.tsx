"use client";

import Image from "next/image";

export default function Header() {
  const navbarItems = ["Home", "Register", "Login"];
  return (
    <>
      <div className="flex items-center relative py-7 ">
        <Image
          className="absolute top-0 block"
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <ul className="flex align-center mx-auto justify-center gap-4">
          {navbarItems.map((item, i) => (
            <li className="text-text-primary text-md" key={i}>
              {item}
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
}
