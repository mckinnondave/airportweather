import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import { airports } from "../objects/airport_list";

const Map = () => {
  const [airportList, setAirportList] = useState({})
  console.log(airportList)

  return (
    <>
    <MapContainer center={[49.283, -123.121]} zoom={10} scrollWheelZoom={true}>
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
                <button onClick={(prev) => setAirportList(marker.name)}>ADD</button>
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
    <div></div>
    </>
  );
};

export default Map;
