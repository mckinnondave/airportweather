const cloudChartData = (clouds) => {
  const provideCloudDescription = (cloud) => {
    if (cloud === "FEW")
      return "A Light cloud cover layer where 1/8 - 2/8ths of the sky is covered";
    if (cloud === "SCT")
      return "A moderate cloud cover layer where 3/8 - 4/8ths of the sky is covered";
    if (cloud === "BKN")
      return "A heavy cloud cover layer where 5/8 - 7/8ths of the sky is covered";
    if (cloud === "OVC")
      return "The heaviest cloud cover layer where 8/8ths of the sky is covered";
  };

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
      labelFormatter: function () {
        return " ";
      },
    },
    axisY: {
      title: "Altitude (Above Ground Level)",
    },
    data: [
      {
        type: "bubble",
        toolTipContent: "<b>{label} Cloud Layer</b><br> {data}",
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
      data: provideCloudDescription(cloud.code)
    });
  }
  return options;
};

export default cloudChartData;
