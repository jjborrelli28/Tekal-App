import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { scoresColors } from "../../helpers/scoresColors";

const AreaChartMemorability = ({ data, scores, best_score }) => {
  return (
    <div style={{ height: "200px" }} className="pe-2">
      <p className="ms-3">
        <span>
          Best per-frame memorability for{" "}
          {`${scores[0][0].charAt(0).toUpperCase() + scores[0][0].slice(1)}`}
        </span>
      </p>
      <ResponsiveContainer width="100%" height="100%" className="graphic mb-5">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Score"
            stroke="#000000"
            fill={scoresColors(best_score)}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartMemorability;
