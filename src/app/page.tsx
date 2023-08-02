import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/Header';
import { imageHome } from '@/utils/image';

export default function Home() {
  return (
    <main className="main">
      <Header />
      <section>
        <Image
          src={imageHome}
          alt="Imagen de portada"
          width={400}
          height={700}
        />
      </section>
    </main>
  );
}
