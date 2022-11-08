import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.scss";
import { airports } from "../objects/airport_list";
import Weather from "./Weather";

export const LatLonContext = React.createContext();

const Map = () => {
  const [airportList, setAirportList] = useState([]);
  const [icaoCode, setIcaoCode] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [isMapVisible, setIsMapVisible] = useState(true)

  // adds airport name and ICAO code to respective states
  const handleAddingAirport = (name, code, lat, lon) => {
    if (!airportList.includes(name)) {
      setAirportList([...airportList, name]);
      setIcaoCode([...icaoCode, "C" + code]);
      setLatitude([...latitude, lat]);
      setLongitude([...longitude, lon]);
    }
  };

  // removes airport name and ICAO code from respective states
  const handleRemovingAirport = (name, code, lat, lon) => {
    if (airportList.includes(name)) {
      const copiedAirports = airportList.filter(
        (selected) => selected !== name
      );
      const copiedIcaos = icaoCode.filter(
        (selected) => selected !== "C" + code
      );
      const copiedLatitudes = latitude.filter((selected) => selected !== lat);
      const copiedLongitudes = longitude.filter((selected) => selected !== lon);
      setAirportList(copiedAirports);
      setIcaoCode(copiedIcaos);
      setLatitude(copiedLatitudes);
      setLongitude(copiedLongitudes);
    }
  };

  return (
    <LatLonContext.Provider value={{ latitude, longitude }}>
      <div className="map__container">
        {isMapVisible && <MapContainer
          center={[49.283, -123.121]}
          zoom={8}
          scrollWheelZoom={true}
        >
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
                        handleAddingAirport(
                          marker.name,
                          marker.iata_code,
                          marker._geoloc.lat,
                          marker._geoloc.lng
                        )
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
        </MapContainer>}
        <Weather airportList={airportList} icaoCode={icaoCode} setIsMapVisible={setIsMapVisible}/>
      </div>
    </LatLonContext.Provider>
  );
};

export default Map;
