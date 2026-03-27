"use client"
import HamburgerMenu from "../_components/HamburgerMenu"
import { MobileNavbar } from "../_components/HamburgerMenu"
import PageContent from "../_components/PageContent"
import { useState } from "react"
import planetsData from "@/data.json"

export default function MercuryPage() {
    return (
        <main>
            <MercuryMobile/>
            
        </main>
    )
}

const MercuryMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const menuItems = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
    
    const planetMercury = planetsData.filter(planet => planet.name === "Mercury")
    
    return (
        <main className="flex flex-col gap-4">
            <HamburgerMenu 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                />
            <MobileNavbar planet_color=''/>

            <PageContent 
                imgSrc={planetMercury[0].images.planet}
                desc={planetMercury[0].overview.content}
                planet={planetMercury[0].name}
                wikiLink={planetMercury[0].overview.source}
                rotation={planetMercury[0].rotation}
                revolution={planetMercury[0].revolution}
                radius={planetMercury[0].radius}
                temp={planetMercury[0].temperature}
                />
        </main>
    )
}
