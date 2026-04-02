import { Metadata } from "next"
import MobilePage from "../_components/MobilePage"
import TabletPage from "../_components/TabletPage"
import DesktopPage from "../_components/DesktopPage"

type View = "overview" | "structure" | "surface"

interface PlanetPageProps {
    params: Promise<{planet:string;}>
    searchParams: Promise<{view?: View;}>
}

export default async function PlanetPage({ params, searchParams } : PlanetPageProps) {
    const { planet } = await params
       
    const sParams = await searchParams
    const pageView: View = sParams.view || "overview"

    return (
        <main>
            <MobilePage 
                planet={planet} 
                view={pageView}/>

            <TabletPage 
                planet={planet} 
                view={pageView}/>

            <DesktopPage 
                planet={planet} 
                view={pageView}
                />
        </main>
    )
}


export function generateStaticParams() {
    const planets = [ "mercury", "venus", "earth", "mars", "jupiter", "saturn", 
        "uranus", "neptune"]

    return planets.map(planet => ({
        planet,
    }))
}

type Props = {
  params: Promise<{ planet: string }>; // Use Promise for params in newer Next.js versions
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params
  const { planet } = await params;

  // Capitalize the name for the title
  const title = planet.charAt(0).toUpperCase() + planet.slice(1);

  return {
    title: `${title} - The Planets`,
    description: `Learn interesting facts about ${planet}, including its structure, geology, and atmosphere.`,
    openGraph: {
      title: `${title} | Planet Facts`,
      description: `Explore facts about ${planet}.`,
      images: [`/assets/planet-${planet}.svg`], // Dynamic OG image path
    },
  };
}
