import "./WeatherCard.scss";
import convertUTC from "../helpers/weatherHelpers";

const WeatherCard = ({ metarData, tafData }) => {
  return (
    <div className="weatherCard">
      {metarData.map((airport) => (
        <div className="airport__container" key={airport.station.name}>
          <div className="airport__banner">
            <div className="airport__name">
              <strong>{airport.station.name}</strong> &nbsp;
              {airport.station.location}
            </div>
            <div className="airport__elevation">
              <strong>Elevation:</strong> &nbsp;{airport.elevation.feet}'
            </div>
          </div>
          <div className="metarAndTaf">
            <div className="metar">
              <div className="metarAndTaf__banner">Recent Weather</div>
              Weather reported on {convertUTC(airport.observed)}
            </div>
            <div className="taf">
              <div className="metarAndTaf__banner">Forecast</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;