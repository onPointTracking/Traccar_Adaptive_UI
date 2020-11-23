import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

const leafletmap = () => {
  const mapstyle = {
    height: "100%",
    width: "100%",
  };
  const center = [35.5634, 6.189];
  return (
    <MapContainer style={mapstyle} center={center} zoom="13">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline
        positions={[
          [35.5634, 6.189],
          [35.5634, 5.189],
        ]}
      />
      <Marker position={center}>
        <Popup>
          Hakim
          <br />
          Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default leafletmap;
