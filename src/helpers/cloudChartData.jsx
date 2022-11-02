const cloudChartData = (clouds) => {
  const provideCloudDescription = (cloudType) => {
    if (cloudType === "FEW")
      return "A Light cloud cover layer where 1/8 - 2/8ths of the sky is covered";
    if (cloudType === "SCT")
      return "A moderate cloud cover layer where 3/8 - 4/8ths of the sky is covered";
    if (cloudType === "BKN")
      return "A heavy cloud cover layer where 5/8 - 7/8ths of the sky is covered";
    if (cloudType === "OVC")
      return "The heaviest cloud cover layer where 8/8ths of the sky is covered";
  };

  const setCloudSize = (cloudType) => {
    if (cloudType === "FEW") return 10000;
    if (cloudType === "SCT") return 20000;
    if (cloudType === "BKN") return 30000;
    if (cloudType === "OVC") return 40000;
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
        toolTipContent: "<b>{y}' - {label} Cloud Layer</b><br> {data}",
        dataPoints: [],
      },
    ],
  };

  // Create dataPoints with cloud info
  for (const cloudLayer of clouds) {
    options.data[0].dataPoints.push({
      label: cloudLayer.text,
      x: 0,
      y: cloudLayer.feet,
      z: setCloudSize(cloudLayer.code),
      data: provideCloudDescription(cloudLayer.code),
    });
  }
  return options;
};

export default cloudChartData;
