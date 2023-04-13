
import { useEffect } from 'react';
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// const center = [36.479309, 52.8824325];
const fillRedOptions = { fillColor: "red", color: "red" };


const Map = ({ lat, long }) => {
 
  return (
    <MapContainer

      center={[lat,long]}
      zoom={15}
      scrollWheelZoom={true}
      style={{
        top: "40px",
        height: 400,
        width: "100%",
        marginBottom: "100px",
        zIndex: "1",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={[lat, long]} pathOptions={fillRedOptions} radius={30} />
    </MapContainer>
  )
}

export default Map;