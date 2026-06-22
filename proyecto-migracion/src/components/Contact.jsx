import React, { useState } from 'react';

const Contact = () => {
    // 1. Creamos el estado de React para guardar todos los campos del formulario en un objeto
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        consulta: '',
        novedades: false,
        promos: false,
        comentario: ''
    });

    // 2. Función que se ejecuta cada vez que el usuario escribe o selecciona algo
    const handleChange = (e) => {
        const { id, name, type, checked, value } = e.target;

        // Si es un checkbox manejamos 'checked' (true/false), si no, manejamos el 'value' (texto)
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [value]: checked // Guarda novedades o promos como true/false
            });
        } else if (type === 'radio') {
            setFormData({
                ...formData,
                consulta: value // Guarda el tipo de consulta seleccionado
            });
        } else {
            setFormData({
                ...formData,
                [id]: value // Guarda nombre, email, telefono o comentario
            });
        }
    };

    // 3. Función que maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // EVITA que la página se recargue (Requisito obligatorio)

        console.log("¡Formulario Enviado con éxito! Datos capturados:");
        console.log(formData); // Muestra todos los datos en la consola (Requisito obligatorio)

        alert("¡Formulario enviado! Revisa la consola del navegador para ver los datos.");
    };

    // 4. Función para resetear el formulario manualmente
    const handleReset = () => {
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            consulta: '',
            novedades: false,
            promos: false,
            comentario: ''
        });
        console.log("Formulario reseteado.");
    };

    return (
        <main>
            <section>
                <article className="contenedor-form">
                    <h2>Completa el formulario</h2>

                    {/* Vinculamos el envío con la función handleSubmit */}
                    <form onSubmit={handleSubmit} className="formulario">

                        <div className="campo">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" />
                        </div>

                        <div className="campo">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Tu email" />
                        </div>

                        <div className="campo">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" id="telefono" value={formData.telefono} onChange={handleChange} placeholder="Tu teléfono" />
                        </div>

                        {/* RADIO BUTTONS */}
                        <div className="campo">
                            <label>Tipo de consulta</label>
                            <div className="opciones">
                                <label className="opcion">
                                    <input type="radio" name="consulta" value="compra" checked={formData.consulta === 'compra'} onChange={handleChange} />
                                    Compra
                                </label>
                                <label className="opcion">
                                    <input type="radio" name="consulta" value="info" checked={formData.consulta === 'info'} onChange={handleChange} />
                                    Información
                                </label>
                                <label className="opcion">
                                    <input type="radio" name="consulta" value="soporte" checked={formData.consulta === 'soporte'} onChange={handleChange} />
                                    Soporte
                                </label>
                            </div>
                        </div>

                        {/* CHECKBOX */}
                        <div className="campo">
                            <label>Preferencias</label>
                            <div className="opciones">
                                <label className="opcion">
                                    <input type="checkbox" value="novedades" checked={formData.novedades} onChange={handleChange} />
                                    Recibir novedades
                                </label>
                                <label className="opcion">
                                    <input type="checkbox" value="promos" checked={formData.promos} onChange={handleChange} />
                                    Recibir promociones
                                </label>
                            </div>
                        </div>

                        <div className="campo">
                            <label htmlFor="comentario">Comentario</label>
                            <textarea id="comentario" value={formData.comentario} onChange={handleChange} placeholder="Escribí tu mensaje"></textarea>
                        </div>

                        <div className="campo" style={{ display: 'flex', gap: '10px' }}>
                            <input type="submit" value="Enviar" className="btn" />
                            <button type="button" onClick={handleReset} className="btn">Limpiar</button>
                        </div>

                    </form>
                </article>

                <article>
                    <h2>Esta es nuestra dirección</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.109422052017!2d-64.47902095103764!3d-31.399593523103512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d673a598f91bf%3A0x67ff9a006a95b700!2sCARTEL%20VILLA%20CARLOS%20PAZ!5e0!3m2!1ses!2sar!4v1776635265283!5m2!1ses!2sar"
                        width="300" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>

            {/* Redes Flotantes */}
            <section>
                <div className="redes-flotantes">
                    <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noreferrer" className="whatsapp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://instagram.com/EnamorARTE.vcp" target="_blank" rel="noreferrer" className="instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Contact;