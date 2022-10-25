import "./WeatherCard.scss";
import Metar from "./Metar";

const WeatherCard = ({ metarData, tafData }) => {
  return (
    <div className="weatherCard">
      {metarData.map((airport, index) => (
        <Metar airport={airport} index={index} tafData={tafData} />
      ))}
    </div>
  );
};

export default WeatherCard;
