import CanvasJSReact from "../canvas/canvasjs.react";
import axios from "axios";
import { useEffect, useState } from "react";
import { getLocaleDate } from "../helpers/weatherHelpers";

const TempForecast = ({latitude, longitude}) => {
  const [tempData, setTempData] = useState([])
  const [tempTimeData, setTempTimeData] = useState([])
  const todaysDate = getLocaleDate();
  console.log("TEMP", tempData)
  console.log("TEMPTIME", tempTimeData)

  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  useEffect(() => {
    const callForTempData = (lat, lon) => {
      axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto&start_date=${todaysDate}&end_date=${todaysDate}`
      )
        .then(res => {
          setTempData(res.data.hourly.temperature_2m)
          setTempTimeData(res.data.hourly.time)
        })
        
        .catch((err) => {
          console.log("ERROR", err);
        });
    };
    callForTempData(latitude, longitude)
  }, [latitude, longitude, todaysDate])

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Daily Temperature Forecast",
    },
    axisY: {
      title: "Temperature",
      suffix: "C",
    },
    axisX: {
      title: "Day of Week",
      interval: 1,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: [
          { x: 1, y: 64 },
          { x: 2, y: 61 },
          { x: 3, y: 64 },
          { x: 4, y: 62 },
          { x: 5, y: 64 },
          { x: 6, y: 60 },
          { x: 7, y: 58 },
          { x: 8, y: 59 },
          { x: 9, y: 53 },
          { x: 10, y: 54 },
          { x: 11, y: 61 },
          { x: 12, y: 60 },
          { x: 13, y: 55 },
          { x: 14, y: 60 },
          { x: 15, y: 56 },
          { x: 16, y: 60 },
          { x: 17, y: 59.5 },
          { x: 18, y: 63 },
          { x: 19, y: 58 },
          { x: 20, y: 54 },
          { x: 21, y: 59 },
          { x: 22, y: 64 },
          { x: 23, y: 59 },
        ],
      },
    ],
  };

  return (
      <CanvasJSChart
        options={options}
      />
  );
};

export default TempForecast;