import { redirect } from "next/navigation"

export default function Home() {
    redirect("/mercury")
}

// import MobileHomePage from "./_components/MobileHomePage"
// import TabletHomePage from "./_components/TabletHomePage"
// import DesktopHomePage from "./_components/DesktopHomePage"

// export default function HomePage() {

//     return (
//         <main>
//             <MobileHomePage/>
//             <TabletHomePage/>
//             <DesktopHomePage/>
//         </main>
//     )
// }

