
import "leaflet/dist/leaflet.css";
import NeshanMap from 'react-neshan-map-leaflet';
// import './SimpleMap.css';

// const center = [36.479309, 52.8824325];


const Map = ({ lat, long }) => {

  return (
    <NeshanMap
      options={{
        key: 'web.0b2d33b9cc554983a0b3ed4b7ab8f4a2',
        maptype: 'dreamy',
        poi: true,
        traffic: false,
        center: [35.699739, 51.338097],
        zoom: 13
      }}

      onInit={(L, myMap) => {
        let marker = L.marker([35.699739, 51.338097])
          .addTo(myMap)
          .bindPopup('I am a popup.');

        myMap.on('click', function (e) {
          marker.setLatLng(e.latlng)
        });

        // L.circle([35.699739, 51.348097], {
        //   color: 'red',
        //   fillColor: '#f03',
        //   fillOpacity: 0.5,
        //   radius: 500
        // }).addTo(myMap);
      }}
    />
  )
}

export default Map;