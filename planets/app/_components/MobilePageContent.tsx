import Image from "next/image";
import Link from "next/link";

interface PageContentProps {
    imgSrc: string;
    planet: string;
    desc: string;
    wikiLink: string;
    rotation: string;
    revolution: string;
    radius: string;
    temp: string;
}

export default function MobilePageContent(
    { imgSrc, planet, desc, wikiLink, rotation, revolution, radius, temp } : PageContentProps) {
    return (
        <>
            <Image
                src={imgSrc}
                alt={`planet ${planet}`}
                width={150}
                height={150}
                className="my-6 mx-auto"
                />
            <div className="text-[0.6875rem] text-center font-extralight pt-5 mx-10
                ">
                <PlanetDesc
                    planet={planet}
                    desc={desc}
                    link={wikiLink}
                />

                <section className="flex flex-col gap-3 pt-4 mb-6">
                    <FeatureBox
                        label="Rotation Time"
                        value={rotation}
                    />
                    <FeatureBox
                        label="Revolution Time"
                        value={revolution}
                    />
                    <FeatureBox
                        label="Radius"
                        value={radius}
                    />
                    <FeatureBox
                        label="Average Temp."
                        value={temp}
                    />
                </section>
            </div>
        </>
    )
}


    
interface FeatureBoxProps {
    label: string;
    value: string;
}

const FeatureBox = ({label, value}: FeatureBoxProps) => {
    return (
        <div className="px-4 py-2 flex justify-between items-center 
            border border-color-hover">
            <p className="text-[0.5rem] text-white/70 tracking-[0.75px] uppercase">
                {label}
            </p>
            <h4 className="text-[1.25rem]">{value}</h4>
        </div>
    )
}

interface PlanetDescProps {
    planet: string;
    desc: string;
    link: string;
}

const PlanetDesc = ({ planet, desc, link }: PlanetDescProps) => {
    return (
        <>
            <h2 className="text-[2.5rem] mb-4 uppercase">{planet}</h2>
            <p className="text-center text-white/90 font-extralight 
                tracking-[0.0625rem] mb-8">
                {desc}
            </p>
            <span className="mb-4 text-white/60 font-light flex justify-center 
                items-center gap-1">
                Source : 
                <Link href={link}
                    className="font-semibold underline">
                    Wikipedia
                </Link>
                <Image
                    src="/assets/icon-source.svg"
                    alt="external link icon"
                    width={12}
                    height={12}
                />
            </span>
        </>
    )
}