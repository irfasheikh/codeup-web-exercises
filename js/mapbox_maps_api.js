"use strict"
//console.log("wazzup")
mapboxgl.accessToken = mapBoxToken;

var restMap = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [40.7336, 74.0027],
    zoom: 15
})