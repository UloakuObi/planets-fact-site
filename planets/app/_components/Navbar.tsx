"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DesktopLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <DesktopNavbar/>
            { children }
        </>
    )
}

export function TabletLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <TabletNavbar/>
            { children }
        </>
    )
}

export function DesktopNavbar() {

    return (
        <header className={`hidden lg:flex justify-between items-center font-semibold px-10 pb-8 border-b border-color-hover`}>
            <h1 className={`text-[1.75rem] tracking-tighter pt-6 w-full`}>THE PLANETS</h1>
            <Planets 
                navStyles="gap-6"
                linkStyles="pt-10  tracking-[0.064em]"
                variant="desktop"/>
        </header>
    )
}

export function TabletNavbar() {

    return (
        <header className={`hidden lg:hidden sm:block flex-col mt-6 gap-y-6 items-center 
            border-b border-color-hover`}>
            <h1 className={`text-[1.75rem] tracking-tight font-semibold w-fit mx-auto`}>
                THE PLANETS
            </h1>
            <div className="w-fit mx-auto">
                <Planets 
                    navStyles="gap-8"
                    linkStyles="py-10 tracking-[0.098em]"/>
            </div>
        </header>
    )
}

interface PlanetsProps {
    navStyles?: string;
    linkStyles?: string;
    variant?: string;
}

const Planets = ({navStyles, linkStyles, variant} : PlanetsProps) => {

    const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
    const pathname = usePathname()

    return (
        <nav className={`${navStyles} flex items-end uppercase`}>
            {planets.map(planet => 
                { const borderStyle = variant === "desktop" ? 
                    { borderTopColor: `var(--color-${planet})`, borderTopWidth: "3px"  } : 
                    { borderBottomColor: `var(--color-${planet})`,
                      borderBottomWidth: "3px" }

                return(<Link 
                    key={planet} 
                    href={`/${planet}`}
                    className={`${linkStyles} text-[0.88rem] font-semibold text-white/70`}
                    style={
                    pathname === `/${planet}`
                        ? borderStyle
                        : {}
                    }>
                        {planet}
                </Link>)
            })}
        </nav>
    )
}