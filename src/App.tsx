import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import FavIcon from 'assets/favicon.svg';

export default function App() {
  return (
    <>
      <header>
        <FavIcon />
      </header>
      <nav>nav</nav>
      <aside>aside</aside>
      <main>
        <section>section</section>
        <article>article</article>
      </main>
      <footer>footer</footer>
    </>
  );
}
