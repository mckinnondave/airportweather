import "./WeatherCard.scss";

import Metar from "./Metar";

const WeatherCard = ({ metarData, tafData }) => {
  return (
    <div className="weatherCard">
      {/* Upper portion of weather card (Station name and elevation)*/}
      {metarData.map((airport, index, tafData) => (
        <Metar airport={airport} index={index} tafData={tafData} />
      ))}
    </div>
  );
};

export default WeatherCard;
