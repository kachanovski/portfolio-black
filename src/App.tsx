import React from 'react';
import './App.css';
import {Header} from "./main/1-header/Header";
import {Home} from "./main/2-home/Home";
import {About} from "./main/3-aboutMe/AboutMe";
import {Service} from "./main/4-myServise/MyServece";
import {Portfolio} from "./main/5-portfolio/Porfolio";
import {Contacts} from "./main/6-contacts/Contacts";
import {Footer} from "./main/7-footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
