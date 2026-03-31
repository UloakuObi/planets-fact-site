import Link from "next/link"

export function DesktopNavbar() {

    return (
        <header className={`hidden lg:flex justify-between items-center font-semibold px-4 pb-8 border border-amber-50`}>
            <h1 className={`text-[1.75rem] tracking-tighter pt-6 w-full`}>THE PLANETS</h1>
            <Planets 
                navStyles="gap-6"
                linkStyles="pt-10  tracking-[0.064em] hover:border-t-3 hover:border-t-amber-500"/>
        </header>
    )
}

export function TabletNavbar() {

    return (
        <header className={`hidden sm:block flex-col mt-6 gap-y-6 items-center border-b border-color-hover`}>
            <h1 className={`text-[1.75rem] tracking-tight font-semibold w-fit mx-auto`}>THE PLANETS</h1>
            <div className="w-fit mx-auto">
                <Planets 
                    navStyles="gap-8"
                    linkStyles="py-10 tracking-[0.098em] hover:border-b-3 hover:border-b-amber-500"/>
            </div>
        </header>
    )
}

interface PlanetsProps {
    navStyles?: string;
    linkStyles?: string;
}

const Planets = ({navStyles, linkStyles} : PlanetsProps) => {

    const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

    return (
        <nav className={`${navStyles} flex items-end uppercase`}>
            {planets.map(planet => 
                (<Link 
                    key={planet} 
                    href="#"
                    className={`${linkStyles} text-[0.88rem] font-semibold text-white/70`}>
                        {planet}
                </Link>))}
        </nav>
    )
}