import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import { airports } from "../objects/airport_list";

const Map = () => {
  const [airportList, setAirportList] = useState([]);
  const [iataCode, setIataCode] = useState([]);
  console.log(airportList);
  console.log(iataCode);

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

  return (
    <>
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
    </>
  );
};

export default Map;
