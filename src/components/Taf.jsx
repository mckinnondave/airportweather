import {
  convertUTC,
  abbreviatedConvertUTC,
  timeConvertUTC,
  handleTafChangeType,
} from "../helpers/weatherHelpers";
import "./Taf.scss";
import * as React from "react";
import { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LatLonContext } from "./Map";

const Taf = ({ tafData, index }) => {
  const [tempVisible, setTempVisible] = useState(false);
  const { latitude, longitude } = useContext(LatLonContext);

  return (
    // <LatLonContext.Consumer>
    <div className="taf">
      <div className="metarAndTaf__banner">
      <div className="metarAndTaf__block"></div>
        Forecast
        <button className="metarAndTaf__button" onClick={() => setTempVisible(!tempVisible)}>BUTTON</button>
      </div>
      {!tempVisible ? (
        <>
        <div className="metar__reportTime">
        Forecast issued on {convertUTC(tafData[index].timestamp.issued)}
      </div>
      {console.log("TAF DATA", tafData[index].forecast)}

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
                  <div className="data__right">RIGHT</div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      </>
      ) : (
        <div></div>
      )}
      
    </div>
    // </LatLonContext.Consumer>
  );
};

export default Taf;
