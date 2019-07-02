import React, { Component } from 'react'
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup, withLeaflet, LayersControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { ReactLeafletSearch } from 'react-leaflet-search';
import VectorGridDefault from 'react-leaflet-vectorgrid';
import * as ELG from "esri-leaflet-geocoder";
import './map.css'

import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});

class SimpleSearch extends Component {
  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  render() {
    const center = [37.7833, -122.4167];
    return (
      <Map
        style={{ height: "100vh" }}
        center={center}
        zoom="10"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        <div className="pointer" />
      </Map>
    );
  }
}

export default SimpleSearch;
