import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

const customIcon = icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
function MapMarker({ location }) {
  return (
    <Marker position={location.coordinates} icon={customIcon}>
      <Popup>
        <div className="p-2">
          <h3 className="font-semibold">{location.name}</h3>
          <p className="text-sm text-gray-600">{location.description}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default MapMarker;
