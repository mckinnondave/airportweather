import "./Weather.scss";
import axios from "axios";
import { useState } from "react";

const Weather = ({ airportList, icaoCode }) => {
  const [metarData, setMetarData] = useState(null);
  const [tafData, setTafData] = useState(null);
  const [inputText, setInputText] = useState("");
  console.log("METAR DATA", metarData);
  console.log("Taf DATA", tafData);
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
        })
      )
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <div className="weather__container">
      <form action="">
        <input
          className="weather__input"
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={airportList}
        ></input>
      </form>
      <button onClick={() => callForWeatherData()}>Get Weather</button>

      <div className="airport__container">
        <div className="airport__name"></div>
      </div>
    </div>
  );
};

export default Weather;
