import { Dispatch, SetStateAction } from "react";
import { Circle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link";

interface HamburgerMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    menuItems: string[];
}

export default function HamburgerMenu({ isMenuOpen, setIsMenuOpen, menuItems }: HamburgerMenuProps) {

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuLinks = menuItems.map(menu => 
        (
            <Link key={menu} 
                href="" 
                className="py-4 flex items-center justify-between border-b border-color-hover">
                <span className="flex justify-center gap-x-4">
                    <Circle 
                        style={{ fill: `var(--color-${menu})`, color: `var(--color-${menu})` }} 
                        className="w-5 h-5"/>
                    <strong className="text-base tracking-[0.084em] uppercase">{menu}</strong>
                </span>
                <Image
                    src="/assets/icon-chevron.svg"
                    alt="chevron icon"
                    width={8}
                    height={8}
                />
            </Link>
        )
    )

    return (
        <>
            <header className="py-4 px-4 border-b border-color-hover">
                <TitleBar toggleMenu={toggleMenu}/>
            </header>
            {isMenuOpen && 
            <nav className="p-4">
               { menuLinks }
            </nav>}
        </>
    )
}


interface TitleBarProps {
    toggleMenu: () => void;
}

function TitleBar({ toggleMenu }: TitleBarProps) {
    return (
        <nav className="flex justify-between items-center">
            <h1 className="text-[1.75rem] font-semibold tracking-tighter">THE PLANETS</h1>
            <button onClick={toggleMenu}>
                <Image
                    className="opacity-35"
                    src="\assets\icon-hamburger.svg"
                    alt="hamgurger menu icon"
                    width={24}
                    height={17}
                />
            </button>
        </nav>
    )
}

interface MobileNavbarProps {
    planet_color: string;
}

export function MobileNavbar({ planet_color }: MobileNavbarProps) {
    return (
        <div className="mx-4 flex justify-between border-b border-color-hover">
            <button className={`uppercase text-[0.56rem] py-4 text-white/70 hover:text-white hover:border-b-3 hover:border-b-amber-400 ${planet_color}`}>
                Overview
            </button>
            <button className="uppercase text-[0.56rem] py-4 text-white/70 hover:text-white hover:border-b-3 hover:border-b-amber-400">
                Structure
            </button>
            <button className="uppercase text-[0.56rem] py-4 text-white/70 hover:text-white hover:border-b-3 hover:border-b-amber-400">
                Surface
            </button>
        </div>
    )
}