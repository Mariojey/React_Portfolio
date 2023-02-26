import React from 'react';
//import logo from './logo.svg';
import './App.css';
//Import Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import Card from './components/Card';
import Footer from './components/Footer';
//Import Data
import data from './data';
import FindMe from './components/FindMe';


function App() {

  let language = "English";
  const cards = data.map(item => {
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

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
  let con = "contact";
  let find = "find";

  return (
    <div className="App">
      <Navbar 
        home={home}
        aboutMe={aboutMe}
        projects={projects}
        contact={contact}
      />
      <Home />
      <AboutMe />
      <h1 className='cardsHeader'>My Projects</h1>
      <section className='cardList' id='cardList'>
        {cards}
      </section>
      <div className="findAndContactMeRow" id='contact'>
        <FindMe 
          type={find}
        />
        <FindMe 
          type={con}
        />
      </div>
      <Footer 
        home={home}
        aboutMe={aboutMe}
        projects={projects}
        contact={contact}
      />
    </div>
  );
}

export default App;
