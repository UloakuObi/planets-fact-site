
import { TabletPageContent } from "./TabletPageContent"
import planetsData from "@/data.json"
import { getViewMap } from "@/lib/getViewMap"

type View = "overview" | "structure" | "surface"

interface TabletPageProps {
    planet: string;
    view: View;
}

export default function TabletPage({ planet, view } : TabletPageProps) {
    
    const currentPlanet = planetsData.find(p => p.name.toLowerCase() === planet)
    
    if (!currentPlanet) return null

    const viewMap = getViewMap(currentPlanet)
    const currentView = viewMap[view]

    return (
        <main>
            <TabletPageContent 
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

