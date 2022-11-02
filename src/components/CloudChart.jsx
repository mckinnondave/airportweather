import CanvasJSReact from "../canvas/canvasjs.react";
import cloudChartData from "../helpers/cloudChartData";

// Component receives option info from cloudChartData helper to create a chart
const CloudChart = ({clouds}) => {
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  return (
    <div>
      <CanvasJSChart
        options={cloudChartData(clouds)}
      />
    </div>
  );
};

export default CloudChart;
