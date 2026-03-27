"use client"

import { useState } from "react"
import HamburgerMenu from "../_components/HamburgerMenu"
import { MobileNavbar } from "../_components/HamburgerMenu"
import { DesktopNavbar, TabletNavbar } from "../_components/DesktopMenu"

export default function DesignsPage() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

    return (
        <main className="">
            <HamburgerMenu 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                />
            <br/>
            <br/>
            <MobileNavbar planet_color=""/>
            <br/>
            <hr/>
            <DesktopNavbar/>
            <br/>
            <br/>
             <TabletNavbar/>
        </main>
    )
}

// 