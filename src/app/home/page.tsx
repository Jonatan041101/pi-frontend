import React, { Suspense } from 'react';

const Breeds = React.lazy(() => import('../components/Breeds'));
export default function HomePage() {
  return (
    <div className="homepage">
      <Suspense fallback={<div>Cargando...</div>}>
        {/* El componente se cargará bajo demanda cuando sea necesario */}
        <Breeds />
      </Suspense>
    </div>
  );
}
