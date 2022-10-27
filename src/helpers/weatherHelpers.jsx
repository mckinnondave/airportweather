// Converts incoming UTC data into locale time and makes it readable. Used in WeatherCard.
const convertUTC = (utcTime) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const localDate = new Date(utcTime);
  return localDate.toLocaleString("en-US", options);
};

const abbreviatedConvertUTC = (utcTime) => {
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const localDate = new Date(utcTime);
  return localDate.toLocaleString("en-US", options);
};

const timeConvertUTC = (utcTime) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
  };

  const localDate = new Date(utcTime);
  return localDate.toLocaleString("en-US", options);
};

const handleTafChangeType = (data) => {
  if (data.indicator.code === "TEMPO") return "Temporary change (expected to occur for less than half the time period)";
  if (data.indicator.code === "FM") return "Standard forecast or significant change occuring at start of time period";
  if (data.indicator.code === "BECMG") {
    return `Conditions expected to gradually become the following by ${timeConvertUTC(data.time_becoming)}`
  }
}

// Converts wind degrees into a direction wind is coming from.
const windDirection = (degrees) => {
  if (degrees > 348.75 && degrees <= 11.25) return "N";
  if (degrees > 11.25 && degrees <= 33.75) return "N/NE";
  if (degrees > 33.75 && degrees <= 56.25) return "NE";
  if (degrees > 56.25 && degrees <= 78.75) return "E/NE";
  if (degrees > 78.75 && degrees <= 101.25) return "E";
  if (degrees > 101.25 && degrees <= 123.75) return "E/SE";
  if (degrees > 123.75 && degrees <= 146.25) return "SE";
  if (degrees > 146.25 && degrees <= 168.75) return "S/SE";
  if (degrees > 168.75 && degrees <= 191.25) return "S";
  if (degrees > 191.25 && degrees <= 213.75) return "S/SW";
  if (degrees > 213.75 && degrees <= 236.25) return "SW";
  if (degrees > 236.25 && degrees <= 258.75) return "W/SW";
  if (degrees > 258.75 && degrees <= 281.25) return "W";
  if (degrees > 281.25 && degrees <= 303.75) return "W/NW";
  if (degrees > 303.75 && degrees <= 326.25) return "NW";
  if (degrees > 326.25 && degrees <= 348.75) return "N/NW";
  else return "N/A";
};

export { convertUTC, windDirection, abbreviatedConvertUTC, timeConvertUTC, handleTafChangeType };
