import "./WeatherCard.scss";
import { Fragment } from "react";
import Metar from "./Metar";

const WeatherCard = ({ metarData, tafData }) => {
  return (
    <div className="weatherCard">
      {metarData.map((airport, index) => (
        <Fragment key={index}>
          <Metar airport={airport} index={index} tafData={tafData} />
        </Fragment>
      ))}
    </div>
  );
};

export default WeatherCard;
