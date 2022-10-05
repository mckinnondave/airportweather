import "./Weather.scss";
import axios from "axios";
import { useState } from "react";

const Weather = ({ airportList, icaoCode }) => {
  const [metarData, setMetarData] = useState(null);
  const [inputText, setInputText] = useState("");
  console.log(metarData);

  const callForMetarData = () => {
    const codeString = icaoCode.toString();
    const options = {
      headers: { "X-API-Key": `${process.env.REACT_APP_WEATHER_API}` },
    };

    axios
      .get(`https://api.checkwx.com/metar/${codeString}/decoded`, options)
      .then((res) => {
        setMetarData(res.data.data);
      });
  };

  return (
    <div className="weather__container">
      <div className="airport__container">
        <div className="airport__name"></div>
      </div>
      <form action="">
        <input
          className="map__input"
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={airportList}
        ></input>
      </form>

      <button onClick={() => callForMetarData()}>Get Weather</button>
    </div>
  );
};

export default Weather;
