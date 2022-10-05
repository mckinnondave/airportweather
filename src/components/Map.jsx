import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import { airports } from "../objects/airport_list";
import axios from "axios";
import Weather from "./Weather";

const Map = () => {
  const [airportList, setAirportList] = useState([]);
  const [iataCode, setIataCode] = useState([]);
  const [metarData, setMetarData] = useState(null);
  const [inputText, setInputText] = useState("");
  console.log("AIRPORT LIST", airportList);
  console.log("IATA CODES", iataCode);

  const handleAddingAirport = (name, code) => {
    if (!airportList.includes(name)) {
      setAirportList([...airportList, name]);
      setIataCode([...iataCode, code]);
    }
  };

  const handleRemovingAirport = (name, code) => {
    if (airportList.includes(name)) {
      const copiedAirports = airportList.filter(
        (selected) => selected !== name
      );
      const copiedIatas = iataCode.filter((selected) => selected !== code);
      setAirportList(copiedAirports);
      setIataCode(copiedIatas);
    }
  };

  const callForMetarData = () => {
    const options = {
      headers: { "X-API-Key": `${process.env.REACT_APP_WEATHER_API}` },
    };

    axios
      .get("https://api.checkwx.com/metar/CYVR/decoded", options)
      .then((res) => {
        setMetarData(res.data.data);
      });
  };

  console.log("METAR DATA", metarData);

  return (
    <div className="map__container">
      <MapContainer
        center={[49.283, -123.121]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {airports.map((marker) => {
          if (marker.country === "Canada") {
            return (
              <Marker
                position={[marker._geoloc.lat, marker._geoloc.lng]}
                key={marker.objectID}
              >
                <Popup>
                  <strong>{marker.name}</strong> <br /> {marker.city},{" "}
                  {marker.country} <br />
                  <button
                    onClick={() =>
                      handleAddingAirport(marker.name, marker.iata_code)
                    }
                  >
                    Add
                  </button>
                  <button
                    onClick={() =>
                      handleRemovingAirport(marker.name, marker.iata_code)
                    }
                  >
                    Remove
                  </button>
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
      <Weather />
      {/* <form action="">
        <input
          className="map__input"
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={airportList}
        ></input>
      </form>

      <button onClick={() => callForMetarData()}>METAR</button> */}
    </div>
  );
};

export default Map;
