import "./Weather.scss";
import axios from "axios";
import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { useEffect } from "react";

export const LatLonContext = React.createContext();

const Weather = ({ airportList, icaoCode, setIsMapVisible }) => {
  const [metarData, setMetarData] = useState(null);
  const [tafData, setTafData] = useState(null);
  const [inputText, setInputText] = useState("");
  const [obtainedData, setObtainedData] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const codeString = icaoCode.toString();

  const callForWeatherData = () => {
    const options = {
      headers: { "X-API-Key": `${process.env.REACT_APP_WEATHER_API}` },
    };
    const reqMetar = axios.get(
      `https://api.checkwx.com/metar/${codeString}/decoded`,
      options
    );
    const reqTaf = axios.get(
      `https://api.checkwx.com/taf/${codeString}/decoded`,
      options
    );

    axios
      .all([reqMetar, reqTaf])
      .then(
        axios.spread((...responses) => {
          setMetarData(responses[0].data.data);
          setTafData(responses[1].data.data);
          setObtainedData(true);
          setIsMapVisible(false);
        })
      )
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  const setLatitudeAndLongitude = (data) => {
    const arrayOfLongitudes = [];
    const arrayOfLatitudes = [];
    for (const airport of data) {
      arrayOfLongitudes.push(airport.station.geometry.coordinates[0]);
      arrayOfLatitudes.push(airport.station.geometry.coordinates[1]);
    }
    setLongitude(arrayOfLongitudes);
    setLatitude(arrayOfLatitudes);
    return;
  };

  useEffect(() => {
    if (metarData) {
      setLatitudeAndLongitude(metarData);
    }
  }, [metarData]);

  return (
    <LatLonContext.Provider value={{ latitude, longitude }}>
      {!obtainedData ? (
        <div className="weather__container">
          <div className="weather__container__form">
            <form action="">
              <input
                className="weather__input"
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                value={airportList}
              ></input>
            </form>
            <button onClick={() => callForWeatherData()}>Get Weather</button>
          </div>
        </div>
      ) : (
        obtainedData && <WeatherCard metarData={metarData} tafData={tafData} />
      )}
    </LatLonContext.Provider>
  );
};

export default Weather;
