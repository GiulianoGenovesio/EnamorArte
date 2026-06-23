import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ApiProducts from './components/ApiProducts'; // Importamos la nueva sección

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'gallery': return <Gallery />;
      case 'api': return <ApiProducts />; // Pantalla de la API externa
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <>
      <Navbar setScreen={setCurrentScreen} currentScreen={currentScreen} />
      
      {renderScreen()}

      <footer>
        <ul className="footer-nav">
          <li><button onClick={() => setCurrentScreen('home')} className={currentScreen === 'home' ? 'active' : ''}>Bienvenidos</button></li>
          <li><button onClick={() => setCurrentScreen('about')} className={currentScreen === 'about' ? 'active' : ''}>Nosotros</button></li>
          <li><button onClick={() => setCurrentScreen('gallery')} className={currentScreen === 'gallery' ? 'active' : ''}>Galeria</button></li>
          <li><button onClick={() => setCurrentScreen('api')} className={currentScreen === 'api' ? 'active' : ''}>Colección API</button></li>
          <li><button onClick={() => setCurrentScreen('contact')} className={currentScreen === 'contact' ? 'active' : ''}>Contacto</button></li>
        </ul>
        <p>© 2026 EnamorARTE. Todos los derechos reservados.</p>
        <p>Diseñado por Giuliano páginas web</p>
      </footer>
    </>
  );
}

export default App;