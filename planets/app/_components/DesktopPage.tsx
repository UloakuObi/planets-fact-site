"use client"
import DesktopPageContent from "./DesktopPageContent"
import planetsData from "@/data.json"
import { getViewMap } from "@/lib/getViewMap"

type View = "overview" | "structure" | "surface"

interface DesktopPageProps {
    planet: string;
    view: View;
}

export default function DesktopPage({ planet, view } : DesktopPageProps) {
    
    const currentPlanet = planetsData.find(p => p.name.toLowerCase() === planet)
    
    if (!currentPlanet) return null

    const viewMap = getViewMap(currentPlanet)
    const currentView = viewMap[view]

    return (
        <main>
            <DesktopPageContent 
                imgSrc={currentView.img}
                desc={currentView.desc}
                planet={currentPlanet.name}
                wikiLink={currentView.source}
                rotation={currentPlanet.rotation}
                revolution={currentPlanet.revolution}
                radius={currentPlanet.radius}
                temp={currentPlanet.temperature}
            />
        </main>
    )
}

