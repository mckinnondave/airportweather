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
      valueFormatString: "HH:mm"
    },
    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        xValueType:"dateTime",
        dataPoints: [],
      },
    ],
  };
  
  for (let i = 0; i < tempData.length; i++) {
    options.data[0].dataPoints.push({ x: tempTimeData[i], y: tempData[i] });
  }
  console.log(options.data[0].dataPoints);

  const formatUTC = (time) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
    };
  
    const localDate = new Date(time);
    return localDate.toLocaleString("en-US", options);
  }
  
  return <CanvasJSChart options={options} />;
};

export default TempForecast;
