import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { airports } from "../objects/airport_list";

const Map = () => {
  return (
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
                {marker.country}
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  );
};

export default Map;
