// Converts incoming UTC data into locale time and makes it readable. Used in WeatherCard.
const convertUTC = (utcTime) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const localDate = new Date(utcTime)
  return(localDate.toLocaleString('en-US', options));
};

export default convertUTC;