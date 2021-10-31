import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { scoresColors } from "../../helpers/scoresColors";

const BarChartMemorability = ({ scores, item }) => {
  return (
    <div style={{ height: "200px" }} className="pe-2">
      <p className="ms-3">
        <span>
          Best memorability for{" "}
          {`${scores[0][0].charAt(0).toUpperCase() + scores[0][0].slice(1)}`}
        </span>
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={[
            { name: "", M1: item.perc_score_m1 },
            { name: "", M2: item.perc_score_m2 },
            { name: "", M3: item.perc_score_m3 },
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="M1" fill={scoresColors(item.perc_score_m1)} />
          <Bar dataKey="M2" fill={scoresColors(item.perc_score_m2)} />
          <Bar dataKey="M3" fill={scoresColors(item.perc_score_m3)} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartMemorability;
