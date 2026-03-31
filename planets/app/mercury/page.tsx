import MobileHomePage from "../_components/MobileHomePage"
import TabletHomePage from "../_components/TabletHomePage"

export default function HomePage() {

    return (
        <main>
            <MobileHomePage/>
            <TabletHomePage/>
            
        </main>
    )
}

// Build FeatureBox
// Build PlanetDesc (minus the image)
// Build PageNav
// Combine PlanetDesc + PageNav (Wrap them in a div)
// PageContent = Image, PlanetDesc + PageNav, FeatureBoxes