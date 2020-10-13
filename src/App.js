import React from 'react';
import Row from "./Row";
import Banner from "./Banner"
import requests from "./request";
import './App.css';
import Nav from './Nav';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Most Popular" fetchUrl={requests.fetchMostPopular} isLargeRow={true} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovie} isLargeRow={false} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovie} isLargeRow={false} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovie} isLargeRow={false} />
      <Row title="Drama Movie" fetchUrl={requests.fetchDramaMovie} isLargeRow={false} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovie} isLargeRow={false} />
    </div>
  );
}

export default App;
