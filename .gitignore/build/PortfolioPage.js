// src/components/PortfolioPage.js
import React, { useEffect, useState } from 'react';
import db from './firebase'; // Importa la configuración de Firebase

const PortfolioPage = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      const doc = await db.collection('pageStats').doc('visits').get();
      if (doc.exists) {
        setVisitCount(doc.data().count);
      } else {
        // Si no existe, establece el conteo inicial
        await db.collection('pageStats').doc('visits').set({ count: 0 });
      }
    };

    fetchVisitCount();

    // Incrementa el contador de visitas
    db.collection('pageStats').doc('visits').update({ count: visitCount + 1 });
  }, [visitCount]);

  return (
    <div>
      <h1>Mi Portfolio</h1>
      <p>Visitas: {visitCount}</p>
      {/* Aquí puedes añadir más contenido */}
    </div>
  );
};

export default PortfolioPage;
