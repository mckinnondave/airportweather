import CanvasJSReact from "../canvas/canvasjs.react";
import cloudChartData from "../helpers/cloudChartData";

const CloudChart = ({clouds}) => {
  // let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  console.log("CLOUDS", clouds);

  return (
    <div>
      <CanvasJSChart
        options={cloudChartData(clouds)}
      />
    </div>
  );
};

export default CloudChart;
