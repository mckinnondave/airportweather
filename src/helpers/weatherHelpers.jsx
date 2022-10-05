const UTC = "2022-10-05T02:00Z";

const convertUTC = (utcTime) => {
  const localDate = new Date(utcTime);
  console.log(localDate.toLocaleString());
};

convertUTC(UTC);

export default convertUTC;