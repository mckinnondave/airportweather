const UTC = "2022-10-05T02:00Z";

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

convertUTC(UTC);

export default convertUTC;