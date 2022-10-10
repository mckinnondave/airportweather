import "./WeatherCard.scss";
import {convertUTC, windDirection} from "../helpers/weatherHelpers";

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
                    <div className="metar__left__temp">
                      <div className="metar__left__banner">Temperature</div>
                      <div className="metar__left__temp__data">
                        {airport.temperature.celsius}&#8451;
                      </div>
                    </div>
                    <div className="metar__left__wind">
                      <div className="metar__left__banner">Wind</div>
                      <div className="metar__left__wind__data">
                        Coming from: <br/><br/>{windDirection(airport.wind.degrees)} ({airport.wind.degrees}&#176;) at {airport.wind.speed_kph}kph
                      </div>
                    </div>
                  </div>
                  <div className="metar__left__bottom">
                    <div className="metar__left__vis">
                      <div className="metar__left__banner">Visibility</div>
                      <div className="metar__left__vis__data">
                        {airport.visibility.miles} miles
                      </div>
                    </div>
                    <div className="metar__left__humidity">
                      <div className="metar__left__banner">Humidity</div>
                      <div className="metar__left__humidity__data">
                        {airport.humidity.percent}%
                      </div>
                    </div>
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