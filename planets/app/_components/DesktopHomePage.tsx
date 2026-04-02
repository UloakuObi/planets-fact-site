"use client"
import { useSearchParams } from "next/navigation"
import DesktopPageContent from "./DesktopPageContent"
import planetsData from "@/data.json"
import { getViewMap } from "@/lib/getViewMap"

type View = "overview" | "structure" | "surface"

export default function DesktopHomePage() {
    const searchParams = useSearchParams()
    const view = (searchParams.get("view") as View) || "overview"
    
    const planet = planetsData.find(p => p.name === "Mercury")
    
    if (!planet) return null

    const viewMap = getViewMap(planet)
    const current = viewMap[view]

    return (
        <main>
            <DesktopPageContent 
                imgSrc={current.img}
                desc={current.desc}
                planet={planet.name}
                wikiLink={current.source}
                rotation={planet.rotation}
                revolution={planet.revolution}
                radius={planet.radius}
                temp={planet.temperature}
            />
        </main>
    )
}

