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

const Ratings = ({ ratings = [] }) => {
  // Example ratings:
  // ratings = [
  //   { name: "5 star", count: 12000 },
  //   { name: "4 star", count: 8500 },
  //   { name: "3 star", count: 4500 },
  //   { name: "2 star", count: 2200 },
  //   { name: "1 star", count: 900 },
  // ];

  const colors = ["#00C49F", "#82CA9D", "#FFBB28", "#FF8042", "#FF4B4B"];

  return (
    <div
      style={{
        background: "linear-gradient(to right, #f8fafc, #f1f5f9)",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          fontWeight: "700",
          fontSize: "18px",
          marginBottom: "12px",
          color: "#1e293b",
        }}
      >
        Ratings
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={ratings}
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
  );
};

export default Ratings;










 

//   if (loading) {
//     return <div className="text-center py-10 text-xl">Loading...</div>;
//   }


// const Ratings = () => {

// //      const { id } = useParams();
// //   const { apps, loading, error } = useApps();
// //   const app = apps.find((a) => String(a.id) === id);

// //     const {
// //     image,
// //     ratingAvg,
// //     ratings,
// //     reviews,
// //     size,
// //     title,
// //     downloads,
// //     companyName,
// //   } = app;

//     return (
//         <div>
//            <div>
//             <h1 className='text-2xl font-bold'>Ratings</h1>
// <div className='bg-base-100 border rounded-xl h-80'>

// </div>

//             </div> 
//         </div>
//     );
// };

// export default Ratings;


