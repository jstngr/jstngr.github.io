import React from 'react';
import Header from 'components/header';
import Portrait from 'assets/portrait.png';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      {/* <nav>nav</nav>
      <aside>aside</aside> */}
      <main>
        <section>
          <h2>Hey, im Tobi</h2>
          <h1>Lead Engineer</h1>
          <p>
            at <a href="https://sosafe-awareness.com/">SoSafe</a>
          </p>
        </section>

        <section className="PortraitSection">
          <img src={Portrait} alt="My" className="PortraitSection-portrait"></img>
          <img src={Portrait} alt="My" className="PortraitSection-portrait background"></img>
        </section>
      </main>
      {/* <footer>footer</footer>  */}
    </>
  );
}
