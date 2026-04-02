
import { MobileNavbar } from "../_components/HamburgerMenu"
import MobilePageContent from "../_components/MobilePageContent"
import planetsData from "@/data.json"
import { getViewMap } from "@/lib/getViewMap"

type View = "overview" | "structure" | "surface"

interface MobilePageProps {
    planet: string
    view: View;
}

export default function MobilePage({ planet, view } : MobilePageProps) {
       
       const currentPlanet = planetsData.find(p => p.name.toLowerCase() === planet)
       
       if (!currentPlanet) return null
   
       const viewMap = getViewMap(currentPlanet)
       const currentView = viewMap[view]

    return (
        <div className="md:hidden">
            <MobileNavbar planet_color={currentPlanet.name.toLowerCase()}/>
            <MobilePageContent 
                imgSrc={currentView.img}
                desc={currentView.desc}
                planet={currentPlanet.name}
                wikiLink={currentView.source}
                rotation={currentPlanet.rotation}
                revolution={currentPlanet.revolution}
                radius={currentPlanet.radius}
                temp={currentPlanet.temperature}
            />
        </div>
    )
}

