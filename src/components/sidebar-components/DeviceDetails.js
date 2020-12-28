import React, {useState} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {onDisplayId} from "../../features/appSlice";

const Info = ({attr, value}) => {
    return (
        <InfoContainer>
            <Attribute>{attr} :</Attribute>
            <Value>{value}</Value>
        </InfoContainer>
    );
}
const DeviceDetails = () => {
    const [DeviceObject, setDeviceObject] = useState(null);
    const id = useSelector(onDisplayId);

    async function getOneDevice(id) {
        const url = "api/devices/" + id;
        if (DeviceObject === null) {
            const response = await fetch(url);
            const information = await response.json();
            setDeviceObject(information);
        }
    }

    if (id) {
        getOneDevice(id)
    }

    return (<Container>
        {DeviceObject ? (
            <>
                <Header>
                    <Title>{DeviceObject.name}</Title>
                    {DeviceObject.status === "offline" ?
                        <State style={{backgroundColor: "#D94242"}}/> :
                        <State/>
                    }
                </Header>
                <Info attr="Model" value={DeviceObject.model}/>
                <Info attr="Phone" value={DeviceObject.phone}/>
                <Info attr="Unique Id" value={DeviceObject.uniqueId}/>
                <Info attr="category" value={DeviceObject.category}/>
            </>
        ) : (
            <Header>
                <Title>No informations</Title>
            </Header>
        )}
    </Container>);
};

const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #f3f3f3;
`;
const Title = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: bold;
  color: #3e3e46;
`;
const State = styled.span`
  height: 18px;
  width: 18px;
  border-radius: 18px;
  background-color: #17e24a;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4rem 0;
`;

const Attribute = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #06094c;
`;
const Value = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
  color: #29badf;
  margin-left: auto;
`;

export default DeviceDetails;
