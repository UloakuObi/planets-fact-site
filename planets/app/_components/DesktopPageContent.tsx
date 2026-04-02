import { FeatureBox, PlanetDesc, PageNav } from "./TabletPageContent"
import Image from "next/image"

interface DesktopPageProps {
    imgSrc: string;
    planet: string;
    desc: string;
    wikiLink: string;
    rotation: string;
    revolution: string;
    radius: string;
    temp: string;
}

export default function DesktopPageContent(
    { imgSrc, planet, desc, wikiLink, rotation, revolution, radius, temp } : DesktopPageProps) {

    return (
        <main className="hidden lg:block">
            <div className="mx-[clamp(2rem,8vw,8rem)] mt-20">
                <div className="flex justify-between">
                <Image
                    src={imgSrc}
                    alt={`planet ${planet}`}
                    width={420}
                    height={420}
                    className="m-auto"/>
                <div className="">
                    <PlanetDesc 
                        planet={planet}
                        desc={desc}
                        link={wikiLink}
                        />
                    <PageNav 
                        planet_color={planet.toLowerCase()}/>
                </div>
                </div>
                
                <section className="flex justify-between mt-10">
                    <FeatureBox 
                        label="Rotation time" 
                        value={rotation}
                        />

                    <FeatureBox 
                        label="Revolution time" 
                        value={revolution}
                        />
                    
                    <FeatureBox 
                        label="Radius" 
                        value={radius}
                        />

                    <FeatureBox 
                        label="Average temp" 
                        value={temp}
                        />
                </section>
            </div>
        </main>
    )
}

// Build FeatureBox
// Build PlanetDesc (minus the image)
// Build PageNav
// Combine PlanetDesc + PageNav (Wrap them in a div)
// PageContent = Image, PlanetDesc + PageNav, FeatureBoxes
// Create a Navbar wrapper inside Navbar.tsx