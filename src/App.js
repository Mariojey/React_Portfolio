import React from 'react';
import logo from './logo.svg';
import './App.css';
//Import Components
import Navbar from './components/Navbar';
import Card from './components/Card';
//Import Data
import data from './data';

let language = "English";
  const cards = data.map(item => {
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
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
      <section className='cardList'>
        {cards}
      </section>
    </div>
  );
}

export default App;
