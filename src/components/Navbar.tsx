"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const navLink: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forget-Password",
    href: "/forget-password",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
];

function NavBar() {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const isActive = (link: NavLink): Boolean => {
    return (
      link.href === pathname ||
      (pathname.startsWith(link.href) && link.href != "/")
    );
  };
  return (
    <>
      <div className="flex justify-center gap-3 p-2 bg-gray-600 text-white">
        {navLink.map((link, index) => (
          <Link
            className={isActive(link) ? "font-bold text-blue-300 mr-2" : "mr-2"}
            key={index + link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default NavBar;
