import CanvasJSReact from "../canvas/canvasjs.react";

const TempChart = () => {
  let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  // const options = {
  //   animationEnabled: true,
  //   exportEnabled: true,
  //   theme: "dark2", // "light1", "light2", "dark1", "dark2"
  //   title:{
  //     text: "Surface Temperature vs Size & Distance of Planets from Sun",
  //   fontSize: 26
  //   },
  //   axisX: {
  //     title: "Distance From Sun (in Million Miles)",
  //   logarithmic: true
  //   },
  //   axisY: {
  //     title: "Surface Temp (in Kelvin)"
  //   },
  //   data: [{
  //     type: "bubble",
  //     indexLabel: "{label}",
  //     toolTipContent: "<b>{label}</b><br>Distance From Sun: {x}mn miles<br>Avg. Surface Temp: {y} Kelvin<br>Diameter: {z} miles",
  //     dataPoints: [
  //       { label: "Mercury", x: 36, y: 452, z: 3031 },
  //       { label: "Venus", x: 67.2, y: 726, z: 7521 },
  //       { label: "Earth", x: 93, y: 285, z: 7926 },
  //       { label: "Mars", x: 141.6, y: 230, z: 4222 },
  //       { label: "Jupiter", x: 483.6, y: 120, z: 88729 },
  //       { label: "Saturn", x: 886.7, y: 88, z: 74600 },
  //       { label: "Uranus", x: 1784.0, y: 59, z: 32600 },
  //       { label: "Neptune", x: 2794.4, y: 48, z: 30200 },
  //     ]
  //   }]
  // }

  return (
    <div>
      <CanvasJSChart options = {options}
          /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
};
