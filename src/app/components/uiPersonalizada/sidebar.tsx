'use client';

import Link from "next/link";
import Image from "next/image";
import  { useState} from "react";

interface LinkType {
    name: string;
    href: string;
    icon?: string;
}

interface NavLinksProps {
    name: string;
    subLinks: LinkType[];
}

interface SidebarProps {
    links: NavLinksProps[];
}

const Sidebar = ({ links }: SidebarProps) => {
    return (
        <aside className="w-64 bg-gray-800 p-4 ">
            {links.map((link) => (
                <Dropdown key={link.name} link={link} />
            ))}
        </aside>
    );
};

const Dropdown = ({ link }: { link: NavLinksProps }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {setIsOpen(!isOpen)};
    return (
       <>
            <div className="flex flex gap-2 mb-4" onClick={toggleDropdown}>
                <h2 className="text-white font-semibold">{link.name}</h2>
                <span className={`transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
            {
                isOpen && (
                    <div className="flex flex-col gap-2 m-4">
                        {link.subLinks.map((subLink) => (
                            <Link key={subLink.name} href={subLink.href} className="text-white hover:text-gray-300">
                                <div className="flex items-center gap-2">
                                    {subLink.icon && (
                                        <Image src={subLink.icon} alt={subLink.name} width={30} height={30} />
                                    )}
                                    <span>{subLink.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )
            }
       </>
    );
}

export default Sidebar;