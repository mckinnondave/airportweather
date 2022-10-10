import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import { airports } from "../objects/airport_list";
import Weather from "./Weather";

const Map = () => {
  const [airportList, setAirportList] = useState([]);
  const [icaoCode, setIcaoCode] = useState([]);

  // adds airport name and ICAO code to respective states
  const handleAddingAirport = (name, code) => {
    if (!airportList.includes(name)) {
      setAirportList([...airportList, name]);
      setIcaoCode([...icaoCode, "C" + code]);
    }
  };

  // removes airport name and ICAO code from respective states
  const handleRemovingAirport = (name, code) => {
    if (airportList.includes(name)) {
      const copiedAirports = airportList.filter(
        (selected) => selected !== name
      );
      const copiedIcaos = icaoCode.filter(
        (selected) => selected !== "C" + code
      );
      setAirportList(copiedAirports);
      setIcaoCode(copiedIcaos);
    }
  };

  return (
    <div className="map__container">
      <MapContainer center={[49.283, -123.121]} zoom={8} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {airports.map((marker) => {
          // ceates marker and popup for each coordinate/city provided from aiport object
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
      <Weather airportList={airportList} icaoCode={icaoCode} />
    </div>
  );
};

export default Map;
