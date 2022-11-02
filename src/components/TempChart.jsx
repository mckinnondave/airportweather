import CanvasJSReact from "../canvas/canvasjs.react";

const TempChart = ({clouds}) => {
  // let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1",
    title: {
      text: "Clouds",
      fontSize: 26,
    },
    axisX: {
      title: "Ground",
      labelFormatter: function(){
        return " "
      }
    },
    axisY: {
      title: "Altitude (Above Ground Level)",
    },
    data: [
      {
        type: "bubble",    
        toolTipContent:
          "<b>{label} Cloud Layer</b><br>Distance From Sun: {x}mn miles<br>Avg. Surface Temp: {y} Kelvin<br>Diameter: {z} miles",
        dataPoints: [],
      },
    ],
  };

  // Create datapoints with cloud info
  for (const cloud of clouds) {
      options.data[0].dataPoints.push({
        label: cloud.text,
        x: 0,
        y: cloud.feet,
        z: cloud.feet + 5000,
        indexLabelTextAlign: "left",
      });
  }

  return (
    <div>
      <CanvasJSChart
        options={options}
      />
    </div>
  );
};

export default TempChart;
