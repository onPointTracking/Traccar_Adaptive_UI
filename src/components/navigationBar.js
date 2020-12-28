import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  home,
  alldevices,
  events,
  history,
  diagrmas,
  stops,
  mainEvents,
  mainHistory,
  mainMap,
  mainStops,
} from "../features/appSlice";

const NavigationBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container>
      <Logo>
        Allo<span>Mapi</span>
      </Logo>
      <Icon onClick={() => setisOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Icon>

      <Menu isOpen={isOpen}>
        <NavEle
          onClick={() => {
            setisOpen(!isOpen);
            dispatch(home());
          }}
        >
          Home
        </NavEle>
        <NavEle
          onClick={() => {
            setisOpen(!isOpen);
            dispatch(alldevices());
          }}
        >
          Devices
        </NavEle>
        <NavEle
          onClick={() => {
            setisOpen(!isOpen);
            dispatch(events());
          }}
        >
          Events
        </NavEle>
        <NavEle
          onClick={() => {
            setisOpen(!isOpen);
            dispatch(history());
          }}
        >
          History
        </NavEle>
        <NavEle
          onClick={() => {
            setisOpen(!isOpen);
            dispatch(stops());
          }}
        >
          Stops
        </NavEle>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: space-between;
    height: auto;
  }
`;
const Logo = styled.a`
  text-decoration: none;
  font-family: "Lato";
  font-size: 18px;
  font-weight: 900;
  color: #06094c;
  padding: 0.6rem 1.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
  span {
    font-weight: 300;
    color: #ff1482;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
const Icon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #06094c;
    margin-bottom: 4px;
    border-radius: 5px;
    margin-right: 1.5rem;
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;
const NavEle = styled.a`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 14px;
  color: #777777;
  cursor: pointer;
  padding: 1rem 1rem;
  font-weight: 300;
  text-align: center;
  transition: 0.2s all ease-in-out;
  &:hover {
    font-weight: 800;
    transform: translateY(-1px);
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;

export default NavigationBar;
