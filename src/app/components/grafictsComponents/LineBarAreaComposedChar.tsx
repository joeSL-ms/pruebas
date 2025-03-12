import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer,
} from 'recharts';
import {DataPointType,DataPointProps} from '@/components/grafictsComponents/interface';

const ExampleLineBarAreaComposedChar = ({ data, height = 300 }: DataPointProps) => {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default ExampleLineBarAreaComposedChar;