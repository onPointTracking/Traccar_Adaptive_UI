import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {Data, ActiveDevices} from "../../features/devicesSlice";
import Device from "./Device";
import ProgressBarOne from "./ProgressBarOne";
import ProgressBarTwo from "./ProgressBarTwo";

const LiveStatus = () => {
    //import data
    const devices = useSelector(Data);
    const activedev = useSelector(ActiveDevices)

    let activeDevices = [];
    if (devices) {
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].status === "online") {
                activeDevices.push(devices[i])
            }
        }
    }
    return (
        <Container>
            <Graphs>
                <Title>Real Time Rapport :</Title>
                <ProgressBarOne/>
                <ProgressBarTwo/>
            </Graphs>
            <DevicesList>
                <Title>Latest Active Devices :</Title>
                {activeDevices.length > 0 ? (
                    activeDevices.map((device) => (
                        <Device
                            key={device.id}
                            id={device.id}
                            name={device.name}
                            uniqueId={device.uniqueId}
                            status={device.status}
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
  font-size: 14px;
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
