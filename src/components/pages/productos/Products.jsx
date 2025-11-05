import React from 'react';
import Carrusel from '../../secciones/carrusel/Carrusel';

function Products() {
  const carruselUno = [
    { image: 'https://picsum.photos/seed/1/800/600', text: 'Bridge'},
    { image: 'https://picsum.photos/seed/2/800/600', text: 'Desk Setup', link: '/InvitacionDos' },
    { image: 'https://picsum.photos/seed/3/800/600', text: 'Waterfall', link: '/InvitacionTres' },
    { image: 'https://picsum.photos/seed/4/800/600', text: 'Mountains', link: '/InvitacionCuatro' },
  ];

  const carruselDos = [
    { image: 'https://picsum.photos/seed/2/800/600', text: 'Bridge', link: '/productosUno' },
    { image: 'https://picsum.photos/seed/4/800/600', text: 'Desk Setup', link: '/productosDos' },
  ];

  return (
    <>
      <div>
        <Carrusel
          items={carruselUno}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
        />
      </div>

      <div style={{ marginTop: '80px' }}>
        <Carrusel
          items={carruselDos}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
        />
      </div>
    </>
  );
}

export default Products;
