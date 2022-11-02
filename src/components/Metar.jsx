import { useState } from "react";
import { convertUTC, windDirection } from "../helpers/weatherHelpers";
import './Metar.scss'
import Taf from "./Taf";
import CloudChart from "./CloudChart";

const Metar = ({ airport, index, tafData }) => {
  const [tafVisible, setTafVisible] = useState(false);

  const handleDataType = () => {
    setTafVisible(!tafVisible);
  };

  return (
    <div className="airport__container" >
      <div className="airport__banner">
        <button onClick={() => handleDataType()}>{!tafVisible ? "Show Forecast" : "Show Recent Weather"}</button>
        <div className="airport__name">
          <strong>{airport.station.name}</strong> &nbsp;
          {airport.station.location}
        </div>
        <div className="airport__elevation">
          <strong>Elevation:</strong> &nbsp;{airport.elevation.feet}'
        </div>
      </div>
      {!tafVisible ? (
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
                {/* <div className="metar__right__banner">Clouds</div> */}
                <CloudChart clouds={airport.clouds}/>
                {/* <div className="metar__clouds">
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
                </div> */}
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <div className="metarAndTaf">
          <Taf index={index} tafData={tafData} />
        </div>
      )}
    </div>
  );
};

export default Metar;
