import { convertUTC } from "../helpers/weatherHelpers";
import './Taf.scss'

const Taf = ({ tafData, index }) => {
  return (
    <div className="taf">
      <div className="metarAndTaf__banner">Forecast</div>
      <div className="metar__reportTime">
        Forecast issued on {convertUTC(tafData[index].timestamp.issued)}
      </div>
      <div className="taf__container">
        From {convertUTC(tafData[index].forecast[0].timestamp.from)} until{" "}
        {convertUTC(tafData[index].forecast[0].timestamp.to)}
      </div>
    </div>
  );
};

export default Taf;
