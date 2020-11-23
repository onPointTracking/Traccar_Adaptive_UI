import React from "react";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { HandleLogout } from "../features/loginSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newdevice } from "./../features/appSlice";

const SecondaryNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    const response = await fetch("/api/session", { method: "DELETE" });
    if (response.ok) {
      dispatch(HandleLogout());
      history.push("/login");
    }
  };

  const iconsStyle = {
    height: "38px",
    width: "38px",
    color: "#06094c",

    cursor: "pointer",
    borderRadius: "38px",
    transition: "0.2s all ease-in-out",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 8px 0 rgba(0, 0, 0, 0.3)",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#fff",
      translateY: "-2px",
    },
  };
  return (
    <Container>
      <LogoutContainer onClick={handleLogout}>
        <ExitToAppIcon />
      </LogoutContainer>
      <AddCircleIcon style={iconsStyle} onClick={() => dispatch(newdevice())} />
      <NotificationsIcon style={iconsStyle} />
      <AccountCircleIcon style={iconsStyle} />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f3f3f3;
  height: 4rem;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const LogoutContainer = styled.div`
  cursor: pointer;
  height: 38px;
  width: 38px;
  border-radius: 38px;
  background-color: #06094c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.2s ease-in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 8px 0 rgba(0, 0, 0, 0.3);
  &:hover {
    transform: translateY(-2px);
  }
`;
export default SecondaryNavbar;
