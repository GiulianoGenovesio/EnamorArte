import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      // Modificamos el default para crear el "Not Found" personalizado
      default: 
        return (
          <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '40px 20px',
            backgroundColor: '#fff5f7', // Fondo rosa muy sutil
            color: '#333'
          }}>
            <h2 style={{ fontSize: '3rem', color: '#ff69b4', margin: '0 0 10px 0' }}>404</h2>
            <h3 style={{ fontSize: '1.8rem', margin: '0 0 20px 0', color: '#555' }}>Página no encontrada</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '500px', color: '#777' }}>
              Lo sentimos, la sección que estás buscando no existe o se movió de lugar.
            </p>
            <button 
              onClick={() => setCurrentScreen('home')}
              style={{
                backgroundColor: '#ff69b4',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                fontSize: '1rem',
                borderRadius: '25px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e0539b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ff69b4'}
            >
              Volver al Inicio
            </button>
          </main>
        );
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
          <li><button onClick={() => setCurrentScreen('contact')} className={currentScreen === 'contact' ? 'active' : ''}>Contacto</button></li>
        </ul>
        <p>© 2026 EnamorARTE. Todos los derechos reservados.</p>
        <p>Diseñado por Giuliano páginas web</p>
      </footer>
    </>
  );
}

export default App;