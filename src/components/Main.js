import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {selectApp} from "../features/appSlice";
// My Maps
import Leafletmap from "./maps/leafletmap";
import MapGL from "./maps/mapglmap";
// My Tables
import Events from "./Tables/Events";
import History from "./Tables/History";
import Stops from "./Tables/Stops";
import {ActiveDevices, Data} from "../features/devicesSlice";

function DisplayMap(mapName, data) {
    switch (mapName) {
        case "leaflet":
            return <Leafletmap preprocessedData={data}/>;
        case "mapgl":
            return <MapGL preprocessedData={data}/>;
        default:
            return <MapGL/>;
    }
}

const MapsContainer = () => {
    const [whichMap, SetwitchMap] = useState("leaflet");
    const my_onlinedevices = useSelector(ActiveDevices)
    const my_alldevices = useSelector(Data)
    // filter data
    const my_data = []
    if (my_onlinedevices && my_alldevices) {
        for (let i = 0; i < my_onlinedevices.length; i++) {
            // get name of device
            for (let j = 0; j < my_alldevices.length; j++) {
                if (my_onlinedevices[i].deviceId === my_alldevices[j].id) {
                    my_data.push([my_onlinedevices[i].latitude, my_onlinedevices[i].longitude, my_alldevices[j].name])
                }
            }
        }
    }

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
        DisplayMap(whichMap, my_data);
    }, [whichMap]);

    return (
        <MapContainer>
            {DisplayMap(whichMap, my_data)}
        </MapContainer>
    );
};

function MainComponentSwitcher(state) {
    switch (state) {
        case 4:
            return <Events/>;
        case 6:
            return <History/>;
        case 8:
            return <Stops/>;
        default:
            return <MapsContainer/>;
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
const MapContainer = styled.div`
  height: 100%;
  flex: 1;

`
const ToggleWrapper = styled.div`
  margin-right: 27%;
`;
export default Main;
