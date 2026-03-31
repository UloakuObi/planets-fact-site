"use client"
import HamburgerMenu from "../_components/HamburgerMenu"
import { MobileNavbar } from "../_components/HamburgerMenu"
import MobilePageContent from "../_components/MobilePageContent"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import planetsData from "@/data.json"

export default function MobileHomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const searchParams = useSearchParams()
    const view = searchParams.get("view") || "overview"
    
    const menuItems = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
    
    const planetMercury = planetsData.filter(planet => planet.name === "Mercury")

    
    return (
        <main className="flex flex-col gap-4 relative md:hidden">
            <HamburgerMenu 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                />
            <MobileNavbar planet_color='mercury'/>

            <div>
                {view === "overview" && 
                <MobilePageContent 
                    imgSrc={planetMercury[0].images.planet}
                    desc={planetMercury[0].overview.content}
                    planet={planetMercury[0].name}
                    wikiLink={planetMercury[0].overview.source}
                    rotation={planetMercury[0].rotation}
                    revolution={planetMercury[0].revolution}
                    radius={planetMercury[0].radius}
                    temp={planetMercury[0].temperature}
                    />}

                {view === "structure" && 
                <MobilePageContent 
                    imgSrc={planetMercury[0].images.internal}
                    desc={planetMercury[0].structure.content}
                    planet={planetMercury[0].name}
                    wikiLink={planetMercury[0].structure.source}
                    rotation={planetMercury[0].rotation}
                    revolution={planetMercury[0].revolution}
                    radius={planetMercury[0].radius}
                    temp={planetMercury[0].temperature}
                    />}

                {view === "surface" && 
                <MobilePageContent 
                    imgSrc={planetMercury[0].images.geology}
                    desc={planetMercury[0].geology.content}
                    planet={planetMercury[0].name}
                    wikiLink={planetMercury[0].geology.source}
                    rotation={planetMercury[0].rotation}
                    revolution={planetMercury[0].revolution}
                    radius={planetMercury[0].radius}
                    temp={planetMercury[0].temperature}
                    />
                }
            </div>
        </main>
    )
}
