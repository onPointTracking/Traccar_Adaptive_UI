import React from "react";
import {
    MapContainer,
    TileLayer,
    Polyline
} from "react-leaflet";
import styled from "styled-components";


const LeafletMapDrawar = ({data , showtables}) => {
    let positions = [];
    for (let i = 0; i < data.length; i++) {
        positions.push([data[i].latitude, data[i].longitude])
    }
    const mapstyle = {height: "100%"};
    const buttonStyle = {
        margin: "1rem",
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "600",
        color: "#06094c",
        backgroundColor: "#bbbbbf",
        borderRadius: "10px",
        padding: "8px",
        cursor: "pointer",
        position: "absolute"
    }
    const actualbuttonStyle = {
        cursor: "pointer",
        pointerEvents: "auto",

    }

    return (<Container>

            <MapContainer style={mapstyle} center={positions[0]} zoom="15">
                <div style={buttonStyle} class="leaflet-top leaflet-right">
                    <p style={actualbuttonStyle} onClick={showtables}>Show Tabels</p>
                </div>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    <Polyline positions={positions}/>
                }
            </MapContainer>
        </Container>
    );
};
const Container = styled.div`
  height: 100%`;
export default LeafletMapDrawar;
