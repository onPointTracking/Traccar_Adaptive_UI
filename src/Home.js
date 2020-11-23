import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";
import NavigationBar from "./components/navigationBar";
import SideBar from "./components/SideBar";
const Home = () => {
  return (
    <Container>
      <SubContainer>
        <NavigationBar />
        <Main />
      </SubContainer>
      <SideBar />
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
    height: 70%;
  }
`;
export default Home;
