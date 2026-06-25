import React from 'react';

const Navbar = ({ setScreen, currentScreen }) => {
  return (
    <header>
      <div className="logo-container">
        <img src="fotos/LOGO ENAMORARTE.png" alt="Logo EnamorARTE" className="logo-img" />
        <h1 className="logo">EnamorARTE</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <button onClick={() => setScreen('home')} className={currentScreen === 'home' ? 'active' : ''}>
              Bienvenidos
            </button>
          </li>
          <li>
            <button onClick={() => setScreen('about')} className={currentScreen === 'about' ? 'active' : ''}>
              Nosotros
            </button>
          </li>
          <li>
            <button onClick={() => setScreen('gallery')} className={currentScreen === 'gallery' ? 'active' : ''}>
              Galeria
            </button>
          </li>
          <li>
            <button onClick={() => setScreen('contact')} className={currentScreen === 'contact' ? 'active' : ''}>
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;