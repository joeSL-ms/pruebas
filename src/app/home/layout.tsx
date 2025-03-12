import NavLinks from "@/components/uiPersonalizada/nav-links";
import Logo from "@/components/uiPersonalizada/logo";
import Sidebar from "@/components/uiPersonalizada/sidebar";

const linksDinamics = [
    { name: "Home", href: "/home", icon: "/img/home-automation.png" },
    { name: "Notificaciones", href: "/home/notifications", icon: "/img/notificacion.png" },
    { name: "Perfil", href: "/home/user" },
];

const linksStatics = [
    {
        name: "Estadísticas Empresa",
        subLinks: [
            { name: "Estadísticas", href: "/home/statistics/business" },
            { name: "Estadísticas del usuario", href: "/home/statistics/userStatistics" },
        ],
    },
    {
        name: "Estadísticas Misiones",
        subLinks: [
            { name: "Estadísticas Misiones", href: "/home/statistics/quests" },
        ],
    },
    {
        name: "Ranking",
        subLinks: [
            { name: "Puntuacion", href: "/home/statistics/ranking" },
            { name: "CO2", href: "/home/statistics/ranking/Co2" },
            { name: "Reciclaje", href: "/home/statistics/ranking/rankRecicle" },
            { name: "Misiones", href: "/home/statistics/ranking/rankQuest" },
        ],
    }
];


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-w-screen min-h-screen">
            <aside className="flex flex-col gap-10 w-[300px] min-h-screen bg-gray-900 p-4">
                <Logo src="/img/notas.png" alt="Imagen Deskboard" width={50} height={50}>
                    <h1 className="m-2 text-white text-center font-semibold">DESKBOARD</h1>
                </Logo>
                <Sidebar links={linksStatics} />
            </aside>
            <section className="flex-1 flex flex-col">
                <nav className="flex max-h-[100px] flex-1 justify-end bg-orange-700 p-4">
                    <div className="flex gap-10">
                    <NavLinks links={linksDinamics} className="flex h-[48px] text-center px-4 py-2 m-2 text-white rounded-md font-semibold" />                    </div>
                </nav>
                {children}
            </section>
        </main>
    );
}

/*
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="flex-1">
                <nav className="flex max-h-[100px] flex-1 justify-between bg-orange-700 p-4">
                    <Logo src="/img/notas.png" alt="Imagen Deskboard" width={50} height={50} />
                    <div className="flex gap-10">
                        <NavLinks links={linksDinamics} className="flex h-[48px] text-center px-4 py-2 m-2 text-white rounded-md font-semibold" />                    </div>
                </nav>
                {children}
            </section>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        {Array.from({ length: 24 }).map((_, index) => (
                            <div
                                key={index}
                                className="aspect-video h-12 w-full rounded-lg bg-muted/50"
                            />
                        ))}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}*/
