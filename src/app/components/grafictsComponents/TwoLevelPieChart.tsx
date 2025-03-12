import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { DataPointTypeC } from '@/components/grafictsComponents/interface';

interface DataPointPropsC {
    data01: DataPointTypeC[];
    data02: DataPointTypeC[];
    height?: number;
}

const ExampleTwoLevelPieChart = ({ data01, data02, height = 300 }: DataPointPropsC) => {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default ExampleTwoLevelPieChart;
