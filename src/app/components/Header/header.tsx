"use client";
export default function Header() {
  const navbarItems = ["Home", "Register", "Login"];
  return (
    <>
      <div>
        <img src="/public/logo.png" alt="Logo" />
        <ul className="flex align-center justify-center gap-4">
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
