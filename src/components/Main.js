import React from "react";
import styled from "styled-components";
import Leafletmap from "./maps/leafletmap";
import MapGL from "./maps/mapglmap";
const Main = () => {
  return (
    <Container>
      <MapGL />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  flex: 1;
`;
export default Main;
