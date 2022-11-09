import {
  convertUTC,
  abbreviatedConvertUTC,
  timeConvertUTC,
  handleTafChangeType,
} from "../helpers/weatherHelpers";
import CloudChart from "./CloudChart";
import "./Taf.scss";
import * as React from "react";
import { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LatLonContext } from "./Map";
import TempForecast from "./TempForecast";

const Taf = ({ tafData, index }) => {
  const [tempVisible, setTempVisible] = useState(false);
  const { latitude, longitude } = useContext(LatLonContext);

  console.log("LAT", latitude);

  return (
    // <LatLonContext.Consumer>
    <div className="taf">
      <div className="taf__banner">
        <div className="taf__block"></div>
        Forecast
        <button
          className="taf__button"
          onClick={() => setTempVisible(!tempVisible)}
        >
          {tempVisible ? "Show Data" : "Show Temps"}
        </button>
      </div>
      {!tempVisible ? (
        <>
          <div className="metar__reportTime">
            Forecast issued on {convertUTC(tafData[index].timestamp.issued)}
          </div>

          <div className="taf__container">
            {tafData[index].forecast.map((forecast, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h8">
                    {index + 1}. From{" "}
                    {abbreviatedConvertUTC(forecast.timestamp.from)} -{" "}
                    {timeConvertUTC(forecast.timestamp.to)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="taf__info">
                    <div className="taf__info__change">
                      {forecast.change
                        ? handleTafChangeType(forecast.change)
                        : "Initial Report"}
                    </div>
                    <div className="data">
                      <div className="data__left">LEFT</div>
                      <div className="data__right">
                        <CloudChart clouds={forecast.clouds} height={254} />
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </>
      ) : (
        <TempForecast latitude={latitude[index]} longitude={longitude[index]} />
      )}
    </div>
    // </LatLonContext.Consumer>
  );
};

export default Taf;
