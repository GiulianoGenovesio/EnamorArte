import React from 'react';

const Gallery = () => {
  // Creamos una lista con todos tus productos para no repetir código HTML
  const productos = [
    { id: 1, tipo: "Mate", img: "fotos/mate.jpeg", desc: "Mate pintado a mano, con diseño en puntillismo" },
    { id: 2, tipo: "Mate", img: "fotos/mate1.jpeg", desc: "Mate artesanal de madera de caldén pintado" },
    { id: 3, tipo: "Mate", img: "fotos/mate2.jpeg", desc: "Mate de algarrobo con delicadas terminaciones" },
    { id: 4, tipo: "Portasahumerio", img: "fotos/portasaumerio.jpeg", desc: "Portasahumerio de cerámica decorado" },
    { id: 5, tipo: "Tabla", img: "fotos/tabla.jpeg", desc: "Tabla para asado o picadas trabajada a mano" },
    { id: 6, tipo: "Tabla", img: "fotos/tablas.jpeg", desc: "Set de tablas organizadoras de cocina" },
    { id: 7, tipo: "Vela", img: "fotos/vela.jpeg", desc: "Vela de soja aromática premium en frasco" },
    { id: 8, tipo: "Vela", img: "fotos/vela1.jpeg", desc: "Vela aromática decorativa con flores secas" },
    { id: 9, tipo: "Vela", img: "fotos/vela2.jpeg", desc: "Vela artesanal con aroma a vainilla y coco" },
    { id: 10, tipo: "Vela", img: "fotos/vela3.jpeg", desc: "Vela de cera natural en cuenco rústico" },
    { id: 11, tipo: "Vela", img: "fotos/vela4.jpeg", desc: "Vela de diseño para centro de mesa" },
    { id: 12, tipo: "Vela", img: "fotos/vela5.jpeg", desc: "Vela aromática de lavanda relajante" },
    { id: 13, tipo: "Vela", img: "fotos/vela6.jpeg", desc: "Vela artesanal en vaso satinado" },
    { id: 14, tipo: "Vela", img: "fotos/vela7.jpeg", desc: "Vela decorativa geométrica moderna" },
    { id: 15, tipo: "Vela", img: "fotos/vela8.jpeg", desc: "Vela de soja con esencias naturales" },
    { id: 16, tipo: "Vela", img: "fotos/vela9.jpeg", desc: "Vela en cuenco de cerámica pintada" },
    { id: 17, tipo: "Vela", img: "fotos/vela10.jpeg", desc: "Vela premium con pabilo de madera" }
  ];

  // Función para simular el carrito (puedes mostrar un alert)
  const agregarAlCarrito = (producto) => {
    alert(`¡Agregaste ${producto.tipo} al carrito!`);
  };

  return (
    <main>
      <section id="galeria" className="cards">
        {/* Recorremos la lista de productos dinámicamente */}
        {productos.map((prod) => (
          <div className="producto-card" key={prod.id}>
            <h2>{prod.tipo}</h2>
            <div className="img-container">
              <img src={prod.img} alt={prod.tipo} />
            </div>
            {prod.desc && <p>{prod.desc}</p>}
            <div className="button">
              <button onClick={() => agregarAlCarrito(prod)}>Agregar al Carrito</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gallery;