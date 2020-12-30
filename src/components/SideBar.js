import React, {useEffect} from "react";
import styled from "styled-components";
import SecondaryNavbar from "./SecondaryNavbar";
import LiveStatus from "./sidebar-components/LiveStatus";
import DevicesList from "./sidebar-components/DevicesList";
import AddDevice from "./sidebar-components/AddDevice";
import EditDevice from "./sidebar-components/EditDevice";
import DeviceDetails from "./sidebar-components/DeviceDetails";
import EventsForm from "./sidebar-components/EventsForm";
import HistoryForm from "./sidebar-components/HistoryForm";
import StopsForm from "./sidebar-components/StopsForm";
import {useSelector} from "react-redux";
import {selectApp} from "../features/appSlice";

function SideBarComponentSwitcher(state) {
    switch (state) {
        case 0:
            return <LiveStatus/>;
        case 1:
            return <AddDevice/>;
        case 2:
            return <DevicesList/>;
        case 3:
            return <DeviceDetails/>;
        case 4:
            return <EventsForm/>;
        case 5:
            return <EditDevice/>;
        case 6:
            return <HistoryForm/>;
        case 7:
            return null;
        case 8:
            return <StopsForm/>;
        case 9:
            return <HistoryForm/>
        default:
            return <LiveStatus/>;
    }
}

const SideBar = () => {
    const state = useSelector(selectApp);
    useEffect(() => {
        SideBarComponentSwitcher(state);
    }, [state]);
    return (
        <Container>
            <SecondaryNavbar/>
            {SideBarComponentSwitcher(state)}
        </Container>
    );
};

const Container = styled.div`
  background-color: #f3f3f3;
  height: 100%;
  flex: 1;
  @media (max-width: 900px) {
    width: 100%;
    flex: 1;
  }
`;

export default SideBar;
