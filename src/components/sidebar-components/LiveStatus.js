import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ActiveDevices } from "../../features/devicesSlice";
import Device from "./Device";
import ProgressBarOne from "./ProgressBarOne";
import ProgressBarTwo from "./ProgressBarTwo";
const LiveStatus = () => {
  //import data
  const state = useSelector(ActiveDevices);
  let activeDevices = [];
  if (state) {
    const devices = state.devices;
    if (devices) {
      for (let i = 0; i < devices.length; i++) {
        if (devices[i].status === "on") {
          activeDevices.push(devices[i]);
        }
      }
    }
  }

  return (
    <Container>
      <Graphs>
        <Title>Real Time Rapport :</Title>
        <ProgressBarOne />
        <ProgressBarTwo />
      </Graphs>
      <DevicesList>
        <Title>Latest Active Devices :</Title>
        {activeDevices.length > 0 ? (
          state.map((device) => (
            <Device
              key={device.deviceID}
              name={device.devicename}
              speed={device.speed}
              activeSession={device.LastSession}
            />
          ))
        ) : (
          <Noitems>No Online Devices</Noitems>
        )}
      </DevicesList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Graphs = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
`;

const DevicesList = styled.div`
  flex: 1;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.p`
  font-family: "Roboto";
  font-size: 14 px;
  font-weight: bold;
  color: #3e3e46;
`;
const Noitems = styled.div`
  margin: 1rem auto;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #3e3e46;
`;
export default LiveStatus;
