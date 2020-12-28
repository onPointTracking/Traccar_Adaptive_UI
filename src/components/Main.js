import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectApp } from "../features/appSlice";
// My Maps
import Leafletmap from "./maps/leafletmap";
import MapGL from "./maps/mapglmap";
// My Tables
import Events from "./Tables/Events";
import History from "./Tables/History";
import Stops from "./Tables/Stops";

function DisplayMap(mapName, data) {
  switch (mapName) {
    case "leaflet":
      return <Leafletmap preprocessedData={data} />;
    case "mapgl":
      return <MapGL preprocessedData={data} />;
    default:
      return <MapGL />;
  }
}

const MapsContainer = () => {
  const [whichMap, SetwitchMap] = useState("leaflet");
  const handleMapChange = (event) => {
    SetwitchMap(event.target.value);
  };

  //button style
  const selectStyle = {
    width: "100px",
    backgroundColor: "#FFf",
    padding: "0.7rem",
    marginBottom: "10px",
    borderRadius: "10px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "800",
    color: "#777777",
    border: "none",
    pointerEvents: "auto",
  };

  useEffect(() => {
    DisplayMap(whichMap);
  }, [whichMap]);

  return (
    <>
      {/* <ToggleWrapper className="leaflet-top leaflet-right">
        <select style={selectStyle} onChange={handleMapChange}>
          <option selected value="leaflet">
            Leaflet
          </option>
          <option value="mapgl">Map GL</option>
        </select>
      </ToggleWrapper> */}
      {DisplayMap(whichMap)}
    </>
  );
};

function MainComponentSwitcher(state) {
  switch (state) {
    case 4:
      return <Events />;
    case 6:
      return <History />;
    case 8:
      return <Stops />;
    default:
      return <MapsContainer />;
  }
}

const Main = () => {
  const state = useSelector(selectApp);
  useEffect(() => {
    MainComponentSwitcher(state);
  }, [state]);
  return <Container>{MainComponentSwitcher(state)}</Container>;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const ToggleWrapper = styled.div`
  margin-right: 27%;
`;
export default Main;
