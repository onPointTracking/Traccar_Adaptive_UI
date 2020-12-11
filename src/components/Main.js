import React, { useEffect } from "react";
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

const MapsContainer = () => {
  return <Leafletmap />;
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
  width: 100%;
  flex: 1;
`;
export default Main;
