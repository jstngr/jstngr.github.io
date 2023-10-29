import React from 'react';
import './header.css';
import LinkedIn from 'assets/linkedIn.svg';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <div className="Divider-vertical" />
          <li>
            <a href="https://www.linkedin.com/in/tobias-justinger/" className="LinkedInLink">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
