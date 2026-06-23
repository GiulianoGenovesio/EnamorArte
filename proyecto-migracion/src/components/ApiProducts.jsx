import React, { useState, useEffect } from 'react';

const ApiProducts = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);

  // Cumplimos con el requisito de llamada a la API (fetch)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setPersonajes(data.results);
        setCargando(false);
      })
      .catch(error => {
        console.error("Error al traer datos de la API:", error);
        setCargando(false);
      });
  }, []);

  // Función para filtrar según lo que el usuario escribe en el campo de búsqueda
  const personajesFiltrados = personajes.filter(personaje =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <p style={{ textAlignment: 'center', padding: '20px' }}>Cargando catálogo exclusivo...</p>;

  return (
    <main style={{ padding: '20px' }}>
      <section style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>Edición Especial: Coleccionables EnamorARTE</h2>
        <p>¡Por cumplir con nuestro desafío de ciclo, habilitamos la búsqueda de figuras oficiales integradas vía API!</p>
        
        {/* Campo de búsqueda obligatorio */}
        <input 
          type="text" 
          placeholder="Buscar personaje..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: '10px', width: '80%', maxWidth: '400px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </section>

      {/* Listar los recursos en formato Cards */}
      <section className="cards">
        {personajesFiltrados.map((personaje) => (
          <div className="producto-card" key={personaje.id}>
            {/* Dato 1: Título/Nombre */}
            <h2>{personaje.name}</h2>
            {/* Dato 2: Imagen de la API */}
            <div className="img-container">
              <img src={personaje.image} alt={personaje.name} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            {/* Datos 3 y 4: Detalles específicos obligatorios */}
            <p style={{ margin: '5px 0', fontSize: '0.9rem' }}><strong>Especie:</strong> {personaje.species}</p>
            <p style={{ margin: '5px 0', fontSize: '0.9rem' }}><strong>Estado:</strong> {personaje.status}</p>
            <p style={{ margin: '5px 0', fontSize: '0.9rem' }}><strong>Origen:</strong> {personaje.origin.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ApiProducts;