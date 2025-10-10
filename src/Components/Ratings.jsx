import React from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';




import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";







const Ratings = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  if (loading) return <p>Loading...</p>;

  const app = apps.find((a) => String(a.id) === id);

  if (!app) return <p>No app found!</p>;

  const { ratings } = app;

  const colors = ["#00C49F", "#82CA9D", "#FFBB28", "#FF8042", "#FF4B4B"];





  return (
    
    <div>

       <h3 className='text-2xl font-bold max-w-[1100px] sm:mx-auto mx-5 my-5'>
        Ratings
      </h3>
      <div className='max-w-[1100px] sm:mx-auto mx-5'
      style={{
        background: "linear-gradient(to right, #f8fafc, #f1f5f9)",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        
      }}
    >
    
      <ResponsiveContainer width="100%" height={250}>
      <BarChart
  data={[...ratings].reverse()}
  layout="vertical"
  margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
>

          <XAxis type="number" axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis
            dataKey="name"
            type="category"
            width={70}
            tick={{ fontSize: 13, fontWeight: 500, fill: "#475569" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          />
          <Bar dataKey="count" barSize={22} radius={[0, 10, 10, 0]}>
            {ratings.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Ratings;

 












