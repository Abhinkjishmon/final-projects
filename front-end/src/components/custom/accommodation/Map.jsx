import { MapContainer, TileLayer } from "react-leaflet";
import { Map as MapIcon } from "lucide-react";
import "leaflet/dist/leaflet.css";
import MapMarker from "./MapMarker";
import { useEffect, useState } from "react";


const DEFAULT_ZOOM = 5;

function Map({ locations }) {
  const [center, setCenter] = useState([0, 0]);

  const calculateMapCenter = (locations) => {
    const totalLat = locations.reduce(
      (sum, loc) => sum + loc.coordinates[0],
      0
    );
    const totalLng = locations.reduce(
      (sum, loc) => sum + loc.coordinates[1],
      0
    );
    return [totalLat / locations.length, totalLng / locations.length];
  };

  useEffect(() => {
    if (locations && locations.length > 0) {
      const calculatedCenter = calculateMapCenter(locations);
      setCenter(calculatedCenter);
    }
  }, [locations]);

  if (!locations || locations.length === 0) {
    return <div>Loading locations...</div>;
  }

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
      <div className="bg-white p-4 flex items-center gap-2 border-b">
        <MapIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Interactive Map</h2>
        <span className="text-sm text-gray-500 ml-2">
          ({locations.length} locations)
        </span>
      </div>
      <MapContainer
        center={center}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <MapMarker key={location.id} location={location} />
        ))}
      </MapContainer>
    </div>
  );
}
export default Map;
