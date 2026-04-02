"use client"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

interface TabletPageProps {
    imgSrc: string;
    planet: string;
    desc: string;
    wikiLink: string;
    rotation: string;
    revolution: string;
    radius: string;
    temp: string;
}

export const TabletPageContent = (
    { imgSrc, planet, desc, wikiLink, rotation, revolution, radius, temp } 
    : TabletPageProps) => {
        
    return (
        <main className="hidden md:block lg:hidden">
            <Image 
                src={imgSrc}
                alt={`planet ${planet}`}
                width={280}
                height={280}
                className="mt-35 mb-25 mx-auto"/>

            <div className="mx-15">
                <div className="flex justify-between">
                    <PlanetDesc 
                        planet={planet}
                        desc={desc}
                        link={wikiLink}/>
                    <PageNav planet_color={planet.toLowerCase()}/>
                </div>

                <section className="flex justify-between">
                    <FeatureBox label="rotation time" value={rotation}/>
                    <FeatureBox label="revolution time" value={revolution}/>
                    <FeatureBox label="radius" value={radius}/>
                    <FeatureBox label="Average Temp." value={temp}/>
                </section>
             </div>
        </main>
    )
}


interface FeatureBoxProps {
    label: string;
    value: string;
    className?: string;
}

export const FeatureBox = ({label, value} : FeatureBoxProps) => {
    return (
        <div className="flex flex-col md:w-39.5 lg:w-[clamp(12rem,18vw,20rem)] md:h-22 lg:h-32 
            py-4 my-6 gap-y-2 pl-4 
            font-extralight border border-color-hover">
            <p className="uppercase md:text-[0.5rem] lg:text-[0.6875rem] font-extralight 
            text-white/80 tracking-[0.75px]">
                {label}
            </p>
            <h3 className="uppercase md:text-[1.5rem] lg:text-[2.5rem] tracking-tight text-bold">
                {value}
            </h3>
        </div>
    )
}

interface PlanetDescProps {
    planet: string;
    desc: string;
    link: string;
    className?: string;
}

export const PlanetDesc = ({ planet, desc, link } : PlanetDescProps ) => {
    return (
        <div className="w-84.75 lg:w-86.5 lg:h-81.5">
            <h2 className="md:text-[2.5rem] lg:text-[5rem] mb-4">{planet}</h2>
            <p className="text-white/90 font-extralight 
                tracking-[0.0625rem] mb-8 text-[0.687rem] lg:text-[0.875rem]">
                {desc}
            </p>
            <span className="mb-4 text-white/60 font-light flex 
                items-center gap-1 text-[0.75rem] lg:text-[0.875rem]">
                Source : 
                <Link href={link}
                    className="font-semibold underline text-[0.75rem] lg:text-[0.875rem]">
                    Wikipedia
                </Link>
                <Image
                    src="/assets/icon-source.svg"
                    alt="external link icon"
                    width={12}
                    height={12}
                />
            </span>
        </div>
    )
}

interface PageNavProps {
    planet_color: string;
    className?: string;
}

export const PageNav = ({planet_color} : PageNavProps) => {

    const searchParams = useSearchParams()
    const currentView = searchParams.get("view") || "overview"

    return (
        <div className="flex flex-col gap-y-3 h-39 lg:h-44 md:my-auto">
            <Link href="?view=overview" className="uppercase border border-color-hover
                md:w-70.25 lg:w-87.5 md:h-10 lg:h-12 pl-4 md:pt-3.5 lg:pt-4.25 tracking-[2px] 
                md:text-[0.57rem] lg:text-[0.75rem]"
                style={
                    currentView === "overview"
                        ? { backgroundColor: `var(--color-${planet_color})` }
                        : {}
                    }>
                <span className="text-white/50 pr-2">01</span>
                Overview
            </Link>

            <Link href="?view=structure" className="uppercase border border-color-hover
                md:w-70.25 lg:w-87.5 md:h-10 lg:h-12 pl-4 md:pt-3.5 lg:pt-4.25 tracking-[2px] 
                md:text-[0.57rem] lg:text-[0.75rem]"
                style={
                    currentView === "structure"
                        ? { backgroundColor: `var(--color-${planet_color})` }
                        : {}
                    }>
                <span className="text-white/50 pr-2">02</span>
                Internal Structure
            </Link>

            <Link href="?view=surface" className="uppercase border border-color-hover
                md:w-70.25 lg:w-87.5 md:h-10 lg:h-12 pl-4 md:pt-3.5 lg:pt-4.25 tracking-[2px] 
                md:text-[0.57rem] lg:text-[0.75rem]"
                style={
                    currentView === "surface"
                        ? { backgroundColor: `var(--color-${planet_color})` }
                        : {}
                    }>
                <span className="text-white/50 pr-2">03</span>
                Surface Geology
            </Link>
        </div>
    )
}