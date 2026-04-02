"use client"
import HamburgerMenu from "../_components/HamburgerMenu"
import { useState } from "react"

export default function MobileLayout({ children } : { children: React.ReactNode}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuItems = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

    return (
        <main className="flex flex-col gap-4 relative md:hidden">
             <HamburgerMenu 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                />
            {children}
        </main>
    )
}