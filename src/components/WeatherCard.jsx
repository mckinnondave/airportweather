import "./WeatherCard.scss";
import { useState } from "react";
import { convertUTC, windDirection } from "../helpers/weatherHelpers";

const WeatherCard = ({ metarData, tafData }) => {
  const [tafVisible, setTafVisible] = useState(false)

  const handleDataType = () => {
    tafVisible ? setTafVisible(false) : setTafVisible(true)
  }

  return (
    <div className="weatherCard">
      {/* Upper portion of weather card (Station name and elevation)*/}
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
            {/* METAR portion of weather card*/}
            <div className="metar">
              <div className="metarAndTaf__banner">Recent Weather</div>
              <div className="metar__reportTime">
                Weather reported on {convertUTC(airport.observed)}
              </div>
              <div className="metar__dataContainer">
                {/* Quadrant of data for temperature, wind, visibiltiy, and humidity */}
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
                      {airport.wind ? (
                        <div className="metar__left__wind__data">
                          Coming from: <br />
                          <br />
                          {windDirection(airport.wind.degrees)} (
                          {airport.wind.degrees}&#176;) at{" "}
                          {airport.wind.speed_kph}kph
                        </div>
                      ) : (
                        <div className="metar__left__wind__data">N/A</div>
                      )}
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
                <div className="metar__right">
                  {/* display area on right side of METAR section for cloud info*/}
                  <div className="metar__right__banner">Clouds</div>
                  <div className="metar__clouds">
                    <div className="metar__clouds__top">
                      <div className="metar__clouds__topIndex">Layer</div>
                      <div className="metar__clouds__topType">Type</div>
                      <div className="metar__clouds__topHeight">
                        Height Above Ground
                      </div>
                    </div>
                    {airport.clouds.map((cloud, index) => (
                      <div className="metar__clouds__bottom" key={index}>
                        <div className="metar__clouds__bottomIndex">
                          {index + 1}
                        </div>
                        <div className="metar__clouds__bottomType">
                          {cloud.text}
                        </div>
                        {cloud.feet ? (
                          <div className="metar__clouds__bottomHeight">
                            {cloud.feet}'
                          </div>
                        ) : (
                          <div className="metar__clouds__bottomHeight">N/A</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* TAF portion of weather card */}
            <div className="taf">
              <div className="metarAndTaf__banner">Forecast</div>
              <div className="metar__reportTime">
                Forecast issued on {convertUTC(tafData[index].timestamp.issued)}
              </div>
              <div className="taf__container">
                From {convertUTC(tafData[index].forecast[0].timestamp.from)} until {convertUTC(tafData[index].forecast[0].timestamp.to)}
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => handleDataType()}>BUTTON</button>
    </div>
  );
};

export default WeatherCard;
