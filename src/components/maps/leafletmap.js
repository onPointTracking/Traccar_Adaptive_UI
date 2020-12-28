import React, {useEffect} from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline
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
                    <Marker position={position} icon={myIcon}>
                        <Popup>
                            Hakim
                            <br/>
                            Location
                        </Popup>
                    </Marker>)
            ) : null}
        </>
    )
}

const leafletmap = () => {
    const mapstyle = {
        height: "100%",
    };
    const center = [35.5634, 4.189];
    // get all data -- filter only online data -- pass it to function
    // pass that function to useEffect for Real time UI update
    const positions = [[35.5633, 6.178], [35.5335, 6.190], [35.5632, 6.189]]

    // this data should be retrieved from the history variable
    const points_set = [
        [34.5634, 4.189],
        [35.5634, 6.189],
        [35.5634, 5.189],
        [36.5634, 4.189],
        [37.5634, 4.189],
    ];

    return (
        <MapContainer style={mapstyle} center={center} zoom="7">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {//<Polyline positions={points_set}/>
            }
            {
                displayIcons(positions)
            }
        </MapContainer>
    );
};

export default leafletmap;
