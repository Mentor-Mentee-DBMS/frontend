import "./index.css";

import {
  About,
  BeMentor,
  Contact,
  Feedback,
  FindMentor,
  Home,
  MenteeLogin,
  MenteeRegister,
  MentorLogin,
  MentorRegister,
  SearchMentor,
} from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";

// import {Navbar, Sidebar, Footer } from './components';

function App() {
  return (
    <Router>
      {/* <Navbar/>
    <Sidebar/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/MentorLogin" element={<MentorLogin />} />
        <Route exact path="/MenteeLogin" element={<MenteeLogin />} />
        <Route exact path="/MentorRegister" element={<MentorRegister />} />
        <Route exact path="/MenteeRegister" element={<MenteeRegister />} />
        <Route exact path="/BeMentor" element={<BeMentor />} />
        <Route exact path="/FindMentor" element={<FindMentor />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/searchMentor" element={<SearchMentor />} />
      </Routes>
    </Router>
  );
}

export default App;
