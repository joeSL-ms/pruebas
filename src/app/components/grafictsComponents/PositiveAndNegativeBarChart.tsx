import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer 
} from 'recharts';
import {DataPointProps} from '@/components/grafictsComponents/interface';

const ExamplePositiveAndNegativeBarChart = ({ data, height = 300 }: DataPointProps) => {  
      return (
        <ResponsiveContainer  width="100%" height={height}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      );
  }

export default ExamplePositiveAndNegativeBarChart;
