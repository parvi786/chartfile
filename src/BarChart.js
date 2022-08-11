import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import data from "./db.json";

import { useState } from "react";
function BarChart() {
  const [socialValue, setsocialValue] = useState();
  const [socialName, setsocialName] = useState();
  useEffect(() => {
    const selectChart = () => {
      let countryName = [];
      let budgetName = [];
      data.forEach((element) => {
        countryName.push(element.Alcohol);
        budgetName.push(element.Malicacid);
      });
      setsocialName(countryName);
      setsocialValue(budgetName);
    };

    selectChart();
  }, []);
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: socialName,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: socialValue,
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div>
      <div>
        <ReactECharts option={options} />
      </div>
    </div>
  );
}
export default BarChart;
