'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface LinkType {
  name: string;
  href: string;
  icon?: string;
}

interface NavLinksProps {
  links: LinkType[];
  className: string;
}

const NavLinks = ({ links, className }: NavLinksProps) => {
  const path = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${className} ${path === link.href ? "bg-gray-500" : ""}`}
        >
            <div className="flex items-center justify-center gap-2">
              {link.icon && (<Image src={link.icon} alt={link.name} width={30} height={30} />)}
              {link.name}
            </div>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;