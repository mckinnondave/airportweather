import { convertUTC } from "../helpers/weatherHelpers";
import "./Taf.scss";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Taf = ({ tafData, index }) => {
  return (
    <div className="taf">
      <div className="metarAndTaf__banner">Forecast</div>
      <div className="metar__reportTime">
        Forecast issued on {convertUTC(tafData[index].timestamp.issued)}
      </div>
      {console.log("TAF DATA", tafData[index].forecast)}

      <div className="taf__container">
        {tafData[index].forecast.map((forecast) => (
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        ))}
        
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        {/* From {convertUTC(tafData[index].forecast[0].timestamp.from)} until{" "}
        {convertUTC(tafData[index].forecast[0].timestamp.to)} */}
      </div>
    </div>
  );
};

export default Taf;
