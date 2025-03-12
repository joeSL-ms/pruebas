"use client"

import * as DataComponents from "@/components/data/dataComponents";
import Example from "@/components/grafictsComponents/grafica";
import ExamplePieChartWithCustomizedLabel from "./grafictsComponents/cheeseGrafic";
import DropDownStatictis from "@/components/uiPersonalizada/DropDownStatidtics";
import ExampleStackedArea from "@/components/grafictsComponents/stackedArea";
import ExamplePositiveAndNegativeBarChart from "@/components/grafictsComponents/PositiveAndNegativeBarChart";
import ExampleLineBarAreaComposedChar from "@/components/grafictsComponents/LineBarAreaComposedChar";
import ExampleSimpleRadarChart from "@/components/grafictsComponents/SimpleRadarChart";
import ExampleTwoLevelPieChart from "@/components/grafictsComponents/TwoLevelPieChart";

const componentes = [
    { id: "componente1", label: "SimpleLineChart", component: () => <div className="p-4 bg-blue-200 rounded-lg"><Example height={300} /></div> },
    { id: "componente2", label: "LineBarAreaComposedChar", component: () => <div className="p-4 bg-blue-200 rounded-lg"><ExampleLineBarAreaComposedChar data={DataComponents.dataLB} /></div> },
    { id: "componente3", label: "StackedAreaChart", component: () => <div className="p-4 bg-blue-200 rounded-lg"><ExampleStackedArea data={DataComponents.data} ></ExampleStackedArea></div> },
    { id: "componente4", label: "PositiveAndNegativeBarChart", component: () => <div className="p-4 bg-blue-200 rounded-lg"><ExamplePositiveAndNegativeBarChart data={DataComponents.dataP}></ExamplePositiveAndNegativeBarChart></div> },
];

const componentes2 = [
    { id: "componente1", label: "ExampleSimpleRadarChart", component: () => <div className="p-4 bg-blue-200 rounded-lg"><ExampleSimpleRadarChart data={DataComponents.dataSR} /></div> },
    { id: "componente2", label: "PieChar", component: () => <div className="p-4 bg-blue-200 rounded-lg"><ExamplePieChartWithCustomizedLabel data={DataComponents.dataPC} /></div> },
    { id: "componente3", label: "TwoLevelPieChart", component: () => <div className="p-4 bg-blue-200 rounded-lg"> <ExampleTwoLevelPieChart data01={DataComponents.data01} data02={DataComponents.data02} ></ExampleTwoLevelPieChart></div> },
];

/*
const GridElement = ({ children }: { children: React.ReactNode }) => {
    return <article className="mg-t-[10px] w-full">{children}</article>;
}*/

const GridElementGrafic = ({ children, title}: { children: React.ReactNode,title:string }) => {
    return(
        <article className="w-full">
            <h1 className="text-2xl font-bold text-center m-5">{title}</h1>
            {children}
            <div className="p-4 bg-blue-200 rounded-lg m-4">
                <h2>Informacion adicional</h2>
                <p>En esta seccion se presentan las estadisticas lineales</p>
            </div>
        </article>
    );
}

const MenuStatics = () => {
    return (
        <section className="flex-1 grid grid-cols-2 gap-4 mt-4 w-9/10 mx-auto place-items-center">
            <GridElementGrafic title = "Estadísticas lineales">
                <DropDownStatictis componentes={componentes} />
            </GridElementGrafic>
            <GridElementGrafic title = "Estadísticas radiales">
                <DropDownStatictis componentes={componentes2} />
            </GridElementGrafic>
        </section>
    );
};

export default MenuStatics;