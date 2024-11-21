import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const locations = [
  {
    id: 1,
    name: "New York City",
    position: { lat: 40.73061, lng: -73.935242 },
  },
  {
    id: 2,
    name: "Los Angeles",
    position: { lat: 34.052235, lng: -118.243683 },
  },
  { id: 3, name: "Chicago", position: { lat: 41.878113, lng: -87.629799 } },
];

const Googlemaps = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={locations[0].position}
        zoom={5}
      >
        {/* Render multiple markers */}
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => setSelectedLocation(location)} // Handle marker click
          />
        ))}

        {/* Info Window */}
        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h4>{selectedLocation.name}</h4>
              <p>Latitude: {selectedLocation.position.lat}</p>
              <p>Longitude: {selectedLocation.position.lng}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Googlemaps;
