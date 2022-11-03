import CanvasJSReact from "../canvas/canvasjs.react";
import cloudChartData from "../helpers/cloudChartData";
import './CloudChart.scss'

// Component receives option info from cloudChartData helper to create a chart
const CloudChart = ({clouds}) => {
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  return (
      <CanvasJSChart
        options={cloudChartData(clouds, 406)}
      />
  );
};

export default CloudChart;
