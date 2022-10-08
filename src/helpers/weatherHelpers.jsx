const UTC = "2022-10-05T02:00Z";

const convertUTC = (utcTime) => {
  const localDate = new Date(utcTime)
  return(localDate.toLocaleString());
};

convertUTC(UTC);

export default convertUTC;