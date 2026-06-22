import React, { useEffect } from 'react';

const Home = () => {
  
  // Este bloque se ejecuta automáticamente en cuanto la pantalla "Bienvenidos" se monta en React
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');
    
    if (carouselElement && window.bootstrap) {
      // Forzamos a Bootstrap a inicializar el carrusel y arrancar el ciclo automático
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // Cambia cada 3 segundos
        ride: 'carousel'
      });
      carousel.cycle();
    }
  }, []);

  return (
    <main>
      <section>
        {/* Inicio Carousel */}
        <div 
          id="carouselExampleAutoplaying" 
          className="carousel slide" 
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="fotos/bienvenidos.jpeg" className="d-block w-100" alt="Bienvenidos" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Bienvenidos a EnamorARTE</h5>
                <p>Pequeños detalles que transforman tus momentos...</p>
              </div>
            </div>
            
            <div className="carousel-item">
              <img src="fotos/portasaumerio.png" className="d-block w-100" alt="Portasahumerios" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Ingresa a nuestra galería y elige lo que mas te guste</h5>
                <p>Momentos simples llenos de calidez con mates, velas y portasahumerios...</p>
              </div>
            </div>
            
            <div className="carousel-item">
              <img src="fotos/vela4.jpeg" className="d-block w-100" alt="Velas" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Ingresa a nuestra galería y elige lo que mas te guste</h5>
                <p>Diseñamos mates, velas y portasahumerios...</p>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Fin Carousel */}
      </section>
    </main>
  );
};

export default Home;