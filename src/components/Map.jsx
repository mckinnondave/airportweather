import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

const Map = () => {

  const arr = [
    {
      "name": "Hartsfield Jackson Atlanta Intl",
      "city": "Atlanta",
      "country": "United States",
      "iata_code": "ATL",
      "_geoloc": {
        "lat": 33.636719,
        "lng": -84.428067
      },
      "links_count": 1826,
      "objectID": "3682"
    },
    {
      "name": "Chicago Ohare Intl",
      "city": "Chicago",
      "country": "United States",
      "iata_code": "ORD",
      "_geoloc": {
        "lat": 41.978603,
        "lng": -87.904842
      },
      "links_count": 1108,
      "objectID": "3830"
    },
    {
      "name": "Capital Intl",
      "city": "Beijing",
      "country": "China",
      "iata_code": "PEK",
      "_geoloc": {
        "lat": 40.080111,
        "lng": 116.584556
      },
      "links_count": 1069,
      "objectID": "3364"
    },
    {
      "name": "Heathrow",
      "city": "London",
      "country": "United Kingdom",
      "iata_code": "LHR",
      "_geoloc": {
        "lat": 51.4775,
        "lng": -0.461389
      },
      "links_count": 1051,
      "objectID": "507"
    },
    {
      "name": "Charles De Gaulle",
      "city": "Paris",
      "country": "France",
      "iata_code": "CDG",
      "_geoloc": {
        "lat": 49.012779,
        "lng": 2.55
      },
      "links_count": 1041,
      "objectID": "1382"
    },
    {
      "name": "Los Angeles Intl",
      "city": "Los Angeles",
      "country": "United States",
      "iata_code": "LAX",
      "_geoloc": {
        "lat": 33.942536,
        "lng": -118.408075
      },
      "links_count": 990,
      "objectID": "3484"
    },
    {
      "name": "Frankfurt Main",
      "city": "Frankfurt",
      "country": "Germany",
      "iata_code": "FRA",
      "_geoloc": {
        "lat": 50.026421,
        "lng": 8.543125
      },
      "links_count": 990,
      "objectID": "340"
    },
    {
      "name": "Dallas Fort Worth Intl",
      "city": "Dallas-Fort Worth",
      "country": "United States",
      "iata_code": "DFW",
      "_geoloc": {
        "lat": 32.896828,
        "lng": -97.037997
      },
      "links_count": 936,
      "objectID": "3670"
    },
    {
      "name": "John F Kennedy Intl",
      "city": "New York",
      "country": "United States",
      "iata_code": "JFK",
      "_geoloc": {
        "lat": 40.639751,
        "lng": -73.778925
      },
      "links_count": 911,
      "objectID": "3797"
    },
    {
      "name": "Schiphol",
      "city": "Amsterdam",
      "country": "Netherlands",
      "iata_code": "AMS",
      "_geoloc": {
        "lat": 52.308613,
        "lng": 4.763889
      },
      "links_count": 903,
      "objectID": "580"
    },
    {
      "name": "Pudong",
      "city": "Shanghai",
      "country": "China",
      "iata_code": "PVG",
      "_geoloc": {
        "lat": 31.143378,
        "lng": 121.805214
      },
      "links_count": 825,
      "objectID": "3406"
    },
    {
      "name": "Changi Intl",
      "city": "Singapore",
      "country": "Singapore",
      "iata_code": "SIN",
      "_geoloc": {
        "lat": 1.350189,
        "lng": 103.994433
      },
      "links_count": 820,
      "objectID": "3316"
    },
    {
      "name": "Barcelona",
      "city": "Barcelona",
      "country": "Spain",
      "iata_code": "BCN",
      "_geoloc": {
        "lat": 41.297078,
        "lng": 2.078464
      },
      "links_count": 783,
      "objectID": "1218"
    },
    {
      "name": "Incheon Intl",
      "city": "Seoul",
      "country": "South Korea",
      "iata_code": "ICN",
      "_geoloc": {
        "lat": 37.469075,
        "lng": 126.450517
      },
      "links_count": 740,
      "objectID": "3930"
    },
    {
      "name": "Denver Intl",
      "city": "Denver",
      "country": "United States",
      "iata_code": "DEN",
      "_geoloc": {
        "lat": 39.861656,
        "lng": -104.673178
      },
      "links_count": 735,
      "objectID": "3751"
    },
    {
      "name": "Miami Intl",
      "city": "Miami",
      "country": "United States",
      "iata_code": "MIA",
      "_geoloc": {
        "lat": 25.79325,
        "lng": -80.290556
      },
      "links_count": 734,
      "objectID": "3576"
    },
    {
      "name": "Franz Josef Strauss",
      "city": "Munich",
      "country": "Germany",
      "iata_code": "MUC",
      "_geoloc": {
        "lat": 48.353783,
        "lng": 11.786086
      },
      "links_count": 728,
      "objectID": "346"
    },
    {
      "name": "Ataturk",
      "city": "Istanbul",
      "country": "Turkey",
      "iata_code": "IST",
      "_geoloc": {
        "lat": 40.976922,
        "lng": 28.814606
      },
      "links_count": 719,
      "objectID": "1701"
    },
    {
      "name": "Hong Kong Intl",
      "city": "Hong Kong",
      "country": "Hong Kong",
      "iata_code": "HKG",
      "_geoloc": {
        "lat": 22.308919,
        "lng": 113.914603
      },
      "links_count": 710,
      "objectID": "3077"
    },
    {
      "name": "Dubai Intl",
      "city": "Dubai",
      "country": "United Arab Emirates",
      "iata_code": "DXB",
      "_geoloc": {
        "lat": 25.252778,
        "lng": 55.364444
      },
      "links_count": 710,
      "objectID": "2188"
    },
    {
      "name": "Gatwick",
      "city": "London",
      "country": "United Kingdom",
      "iata_code": "LGW",
      "_geoloc": {
        "lat": 51.148056,
        "lng": -0.190278
      },
      "links_count": 708,
      "objectID": "502"
    },
    {
      "name": "Baiyun Intl",
      "city": "Guangzhou",
      "country": "China",
      "iata_code": "CAN",
      "_geoloc": {
        "lat": 23.392436,
        "lng": 113.298786
      },
      "links_count": 674,
      "objectID": "3370"
    },
    {
      "name": "Fiumicino",
      "city": "Rome",
      "country": "Italy",
      "iata_code": "FCO",
      "_geoloc": {
        "lat": 41.804475,
        "lng": 12.250797
      },
      "links_count": 662,
      "objectID": "1555"
    },
    {
      "name": "Barajas",
      "city": "Madrid",
      "country": "Spain",
      "iata_code": "MAD",
      "_geoloc": {
        "lat": 40.493556,
        "lng": -3.566764
      },
      "links_count": 661,
      "objectID": "1229"
    },
    {
      "name": "Suvarnabhumi Intl",
      "city": "Bangkok",
      "country": "Thailand",
      "iata_code": "BKK",
      "_geoloc": {
        "lat": 13.681108,
        "lng": 100.747283
      },
      "links_count": 656,
      "objectID": "3885"
    },
    {
      "name": "Domododevo",
      "city": "Moscow",
      "country": "Russia",
      "iata_code": "DME",
      "_geoloc": {
        "lat": 55.408611,
        "lng": 37.906111
      },
      "links_count": 649,
      "objectID": "4029"
    }
  ]

  return (
    <MapContainer center={[49.283, -123.121]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.283, -123.121]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {arr.map((marker) => (
        <Marker
          position={[marker._geoloc.lat, marker._geoloc.lng]}>
            <Popup>
              <strong>{marker.name}</strong> <br /> {marker.city}, {marker.country}
            </Popup>
          </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
