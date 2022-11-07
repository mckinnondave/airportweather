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
      valueFormatString: "DDD HH:mm"
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
      month: "numeric",
      day: "numeric",
      minute: "numeric",
      hour: "numeric",
      hourCycle: "h23"
    };

    const shuffleArray = [];
  
    const localDate = new Date(time).toLocaleString("en-US", options);
    const dateToArray = localDate.replaceAll(/,|\/|:/g, " ").split(" ");
    shuffleArray.push(dateToArray[2], dateToArray[0], dateToArray[1], dateToArray[4], dateToArray[5]);
    
    return shuffleArray.join(",")
  }

  console.log(formatUTC('2022-11-06T23:00'))
  
  return <CanvasJSChart options={options} />;
};

export default TempForecast;
