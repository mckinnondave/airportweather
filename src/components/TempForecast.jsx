import CanvasJSReact from "../canvas/canvasjs.react";
import axios from "axios";
import { useEffect, useState } from "react";
import { getLocaleDate } from "../helpers/weatherHelpers";

const TempForecast = ({ latitude, longitude }) => {
  const [tempData, setTempData] = useState([]);
  const [tempTimeData, setTempTimeData] = useState([]);
  const todaysDate = getLocaleDate();

  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  useEffect(() => {
    const callForTempData = (lat, lon) => {
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto&start_date=${todaysDate}&end_date=${todaysDate}`
        )
        .then((res) => {
          setTempData(res.data.hourly.temperature_2m);
          setTempTimeData(res.data.hourly.time);
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
    };
    callForTempData(latitude, longitude);
  }, [latitude, longitude, todaysDate]);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    height: 457,
    theme: "dark2",
    title: {
      text: "Daily Temperature Forecast",
    },
    axisY: {
      title: "Temperature",
      suffix: "°C",
    },
    axisX: {
      title: "24 Hour Period",
      valueFormatString: "HH:mm",
      tickLength: 10,
      
    },
    data: [
      {
        type: "line",
        toolTipContent: "{y}°C",
        xValueType:"dateTime",
        dataPoints: [],
      },
    ],
  };
  
  for (let i = 0; i < tempData.length; i++) {
    options.data[0].dataPoints.push({ x: new Date(tempTimeData[i]), y: tempData[i] });
  }

  console.log("DATA", options.data[0].dataPoints);
  
  return <CanvasJSChart options={options} />;
};

export default TempForecast;
