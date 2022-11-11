import React from 'react';
import logo from './logo.svg';
import './App.css';
//Import Components
import Navbar from './components/Navbar';

let language = "English";

function App() {

  let home="Home";
  let aboutMe="AboutMe";
  let projects="Projects";
  let contact="Contact me";

  if (language !== "English") {
    home="Główna";
    aboutMe="O mnie";
    projects="Projekty";
    contact="Kontakt";
  }

  return (
    <div className="App">
      <Navbar 
        home={home}
        aboutMe={aboutMe}
        projects={projects}
        contact={contact}
      />
    </div>
  );
}

export default App;
