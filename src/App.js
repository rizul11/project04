import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/movie/:imdbId" Component={MovieDetails} />
              <Route Component={PageNotFound} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
