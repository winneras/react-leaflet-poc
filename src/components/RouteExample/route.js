import React, { Component } from "react";
import L from "leaflet";
//import "leaflet/dist/leaflet.js";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
//import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
//import "leaflet-routing-machine/dist/leaflet.routing.icons.png";
//import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
//import "leaflet-control-geocoder";
//import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";
//import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import ELG from "esri-leaflet-geocoder";
import LRM from "leaflet-routing-machine";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});

class SimpleRoute extends Component {
  state = {
    // San Jose
    lat: 37.334789,
    lng: -121.888138,
    zoom: 13
  };

  componentDidMount() {
    //const map = this.leafletMap.leafletElement;
    const control = L.Routing.control({
      waypoints: [
        L.latLng(38.7436056, -9.2304153),
        L.latLng(38.5334477, -0.1312811)
      ],
      router: new L.Routing.osrmv1({
        language: "en",
        profile: "car"
      }),
      geocoder: L.Control.Geocoder.nominatim({})
    }).addTo(this.map.leafletElement);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const center = [37.7833, -122.4167];

    return (
      <Map
        className="myMap"
        center={center}
        zoom={this.state.zoom}
        ref={ref => {
          this.map = ref;
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
    );
  }
}
export default SimpleRoute;
