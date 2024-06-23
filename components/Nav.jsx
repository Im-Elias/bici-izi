"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Nuestras Bicis", href: "/our-bikes" },
];

const Nav = ({ containerStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`${link.href === pathname && "text-accent"}`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
