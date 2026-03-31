"use client"
import { useSearchParams } from "next/navigation"
import { TabletPageContent } from "./TabletPageContent"
import planetsData from "@/data.json"

export default function TabletHomePage() {

    const searchParams = useSearchParams()
    const view = searchParams.get("view") || "overview"

    const planetMercury = planetsData.filter(planet => planet.name === "Mercury")

    return (
        <main>
            {view === "overview" &&
            <TabletPageContent
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
            <TabletPageContent 
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
            <TabletPageContent 
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
        </main>
    )
}

