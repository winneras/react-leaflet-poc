import React, { Component, StrictMode } from 'react';
//import { Map, TileLayer, Marker, Popup, type Viewport } from 'react-leaflet';
import './App.css';
import SimpleExample from "./components/SimpleExample/simple";
import EventsExample from "./components/EventsExample/events";
import ViewportExample from "./components/ViewportExample/viewport";
import SimpleSearch from "./components/SimpleSearch/search";
import RouteExample from "./components/RouteExample/route";
import Leaflet from 'leaflet';
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'


const  App = () => (
   <StrictMode>
      <h1>React-Leaflet examples</h1>
      <h2>Popup with Marker</h2>
      <SimpleExample />

     <h2>Events</h2>
      <p>Click the map to show a marker at your detected location</p>
      <EventsExample />
     <h2>Viewport</h2>
      <p>Click the map to reset it to its original position</p>
      <ViewportExample />
       <h2>Search Address </h2>
      <SimpleSearch />
     <br />
        <h2>Map Routing </h2>
       <RouteExample/>


   </StrictMode>

)

export default App;
