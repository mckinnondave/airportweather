import "./Weather.scss";
import axios from "axios";
import { useState } from "react";
import WeatherCard from "./WeatherCard";

const Weather = ({ airportList, icaoCode, setIsMapVisible }) => {
  const [metarData, setMetarData] = useState(null);
  const [tafData, setTafData] = useState(null);
  const [inputText, setInputText] = useState("");
  const [obtainedData, setObtainedData] = useState(false);
  const [latitude, setLatitude] = useState([])
  const [longitude, setLongitude] = useState([]);
  const codeString = icaoCode.toString();

  console.log("ICAO", icaoCode)
  console.log("CODESTRING", codeString)

  console.log("METAR", metarData);
  console.log("TAF", tafData);

  const setLatitudeAndLongitude = () => {
    const arrayOfLatitudes = [];
    const arrayOfLongitudes = [];
    for (const airport of metarData) {
      arrayOfLatitudes.push(airport.station.geometry.coordinates[0]);
      arrayOfLongitudes.push(airport.station.geometry.coordinates[1]);
    }
    setLatitude(arrayOfLatitudes)
    setLongitude(arrayOfLongitudes)
    return;
  }

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
          console.log("RESPONSES", responses)
          setMetarData(responses[0].data.data);
          setTafData(responses[1].data.data);
          setLatitudeAndLongitude();
          setObtainedData(true);
          setIsMapVisible(false)
        })
      )
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  console.log("newLat", latitude);
  console.log("newLon", longitude);

  return (
    <>
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
    </>
  );
};

export default Weather;
