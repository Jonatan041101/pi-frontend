import React, { Suspense } from 'react';
import Logo from '../components/Logo';
import InputText from '../components/InputText';
import CreateBreed from '../components/CreateBreed';
import Filters from '../components/Filters';

const Breeds = React.lazy(() => import('../components/Breeds'));
export default function HomePage() {
  return (
    <div className="homepage">
      <nav className="homepage__nav">
        <Logo />
        <InputText />
      </nav>
      <nav className="homepage__filters">
        <CreateBreed />
        <Filters />
      </nav>
      <Suspense fallback={<div>Cargando...</div>}>
        {/* El componente se cargará bajo demanda cuando sea necesario */}
        <Breeds />
      </Suspense>
    </div>
  );
}
