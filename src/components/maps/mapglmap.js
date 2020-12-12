import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

const MapglMap = ({ preprocessedData }) => {
  const [viewport, setViewport] = useState({
    latitude: 35.56341,
    longitude: 6.189,
    zoom: 13,
    width: "100%",
    height: "100%",
  });
  const style = {
    padding: "10px",
    color: "#fff",
    cursor: "pointer",
    background: "#1978c8",
    borderRadius: "6px",
  };
  const [position, setPosition] = useState({
    longitude: 6.189,
    latitude: 35.56341,
  });
  const onDragEnd = (lngLat) => {
    setPosition({ longitude: lngLat.lng, latitude: lngLat.lat });
  };
  const token =
    "pk.eyJ1IjoiYWJkZWxoYWtpbWJlbmtyYW1hIiwiYSI6ImNrZnplYWlxYzI4eXoyc3N2aWsxNWRkd2wifQ.F5gCxDx4F4LrVs1XR8wNyg";

  return (
    <>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker
          longitude={position.longitude}
          latitude={position.latitude}
          onDragEnd={onDragEnd}
          draggable
        >
          <div style={style}>Hi there! 👋</div>
        </Marker>
      </ReactMapGl>
    </>
  );
};

export default MapglMap;
