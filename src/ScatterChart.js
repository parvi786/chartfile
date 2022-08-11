import React, { useEffect } from "react";
import data from "./db.json";
import { useState } from "react";
import ReactECharts from "echarts-for-react";

function ScatterChart() {
  const [socialValue, setsocialValue] = useState();
  const [socialName, setsocialName] = useState();
  useEffect(() => {
    const selectChart = () => {
      let countryName = [];
      let budgetName = [];
      data.forEach((element) => {
        countryName.push(element.Colorintensity);
        budgetName.push(element.Hue);
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
        type: "scatter",
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

export default ScatterChart;
