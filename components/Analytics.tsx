"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  results: {
    total: number;
    correct: number;
    wrong: number;
    skipped: number;
    accuracy: string;
  };
}

export default function Analytics({ results }: Props) {
  const data = [
  { name: "Correct", value: results.correct, fill: "#22c55e" },
  { name: "Wrong", value: results.wrong, fill: "#ef4444" },
  { name: "Skipped", value: results.skipped, fill: "#eab308" },
].filter((item) => item.value > 0);


  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Results</h2>

      <p className="mb-2 text-lg font-semibold">
        Score: {results.correct} / {results.total}
      </p>

      <p className="mb-1 text-lg">Wrong: {results.wrong}</p>
      <p className="mb-1 text-lg">Skipped: {results.skipped}</p>

      <p className="mb-6 text-lg">
        Accuracy: {results.accuracy}%
      </p>

      {/* IMPORTANT: Explicit height */}
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
