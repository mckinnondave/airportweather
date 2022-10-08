import "./WeatherCard.scss";
import convertUTC from "../helpers/weatherHelpers";

const WeatherCard = ({metarData, tafData}) => {
  return (
    <div className="airport__container">
      <div className="airport__banner">
        <div className="airport__name">
          <strong>{metarData[0].station.name}</strong> &nbsp;
          {metarData[0].station.location}
        </div>
        <div className="airport__elevation">
          <strong>Elevation:</strong> &nbsp;{metarData[0].elevation.feet}'
        </div>
      </div>
      <div className="metarAndTaf">
        <div className="metar">
          <div className="metarAndTaf__banner">Recent Weather</div>
          Weather reported on {convertUTC(metarData[0].observed)}
        </div>
        <div className="taf">
          <div className="metarAndTaf__banner">Forecast</div>
        </div>
        
      </div>
    </div>
  );
};

export default WeatherCard;