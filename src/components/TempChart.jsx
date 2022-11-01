import CanvasJSReact from "../canvas/canvasjs.react";

const TempChart = ({clouds}) => {
  // let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Clouds",
      fontSize: 26,
    },
    axisX: {
      title: "Ground",
      logarithmic: false,
    },
    axisY: {
      title: "Altitude (Above Ground Level)",
    },
    data: [
      {
        type: "bubble",
        indexLabel: "{label}",
        toolTipContent:
          "<b>{label}</b><br>Distance From Sun: {x}mn miles<br>Avg. Surface Temp: {y} Kelvin<br>Diameter: {z} miles",
        dataPoints: [
          // { label: "Mercury", x: 0, y: 452, z: 3031 },
          // { label: "Venus", x: 0, y: 726, z: 7521 },
          // { label: "Earth", x: 0, y: 285, z: 7926 },
          // { label: "Mars", x: 0, y: 230, z: 4222 },
          // { label: "Jupiter", x: 0, y: 120, z: 88729 },
          // { label: "Saturn", x: 0, y: 88, z: 74600 },
          // { label: "Uranus", x: 0, y: 59, z: 32600 },
          // { label: "Neptune", x: 0, y: 48, z: 30200 },
        ],
      },
    ],
  };
  console.log("OPTIONS", options.data[0].dataPoints)
  console.log("CLOUDS", clouds);
  for (const cloud of clouds) {
    (options.data[0].dataPoints).push({label: cloud.text, y: cloud.feet, z: cloud.feet+2000})
  }

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
};

export default TempChart;
