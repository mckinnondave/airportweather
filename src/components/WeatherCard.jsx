import "./WeatherCard.scss";
import convertUTC from "../helpers/weatherHelpers";

const WeatherCard = ({ metarData, tafData }) => {
  return (
    <div className="weatherCard">
      {metarData.map((airport, index) => (
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
              <div className="metar__reportTime">
                Weather reported on {convertUTC(airport.observed)}
              </div>
              <div className="metar__dataContainer">
                <div className="metar__left">
                  <div className="metar__left__top">
                    <div className="metar__left__temp">Temperature</div>
                    <div className="metar__left__wind">Wind</div>
                  </div>
                  <div className="metar__left__bottom">
                  <div className="metar__left__vis">Visibility</div>
                    <div className="metar__left__humidity">Humidity</div>
                  </div>
                </div>
                <div className="metar__right">HI</div>
              </div>
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