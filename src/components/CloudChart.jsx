import CanvasJSReact from "../canvas/canvasjs.react";
import cloudChartData from "../helpers/cloudChartData";
import './CloudChart.scss'

// Component receives option info from cloudChartData helper to create a chart
const CloudChart = ({clouds, height}) => {
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  return (
      <CanvasJSChart
        options={cloudChartData(clouds, height)}
      />
  );
};

export default CloudChart;
