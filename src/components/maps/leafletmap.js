import React from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";
import L from "leaflet"

var myIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [24, 38], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76]
})

function displayIcons(positions_list) {
    return (
        <>
            {positions_list.length > 0 ? positions_list.map(
                (position) => (
                    <Marker position={[position[0], position[1]]} icon={myIcon}>
                        <Popup>
                            {position[2]}
                        </Popup>
                    </Marker>)
            ) : null}
        </>
    )
}

const leafletmap = ({preprocessedData}) => {
    const center = [39.8283, -98.5795];
    const mapstyle = {height: "100%"};
    return (
        <MapContainer style={mapstyle} center={center} zoom="7">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                //<Polyline positions={points_set}/>
            }
            {
                displayIcons(preprocessedData)
            }
        </MapContainer>
    );
};

export default leafletmap;
