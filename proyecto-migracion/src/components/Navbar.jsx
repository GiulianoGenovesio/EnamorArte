import React from 'react';

const Navbar = ({ setScreen, currentScreen }) => {
  return (
    <header>
      <div className="logo-container" onClick={() => setScreen('home')} style={{ cursor: 'pointer' }}>
        <img src="fotos/LOGO ENAMORARTE.png" alt="EnamorArte" />
        <h1>EnamorARTE</h1>
      </div>
      <nav>
        <ul>
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
            <button onClick={() => setScreen('api')} className={currentScreen === 'api' ? 'active' : ''}>
              Colección API
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