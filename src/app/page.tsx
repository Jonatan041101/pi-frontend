import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/Header';
import { imageHome } from '@/utils/image';
import Button from '@/atoms/Button';
import TextInit from './components/TextInit';

export default function Home() {
  return (
    <main className="main">
      <Header />
      <section className="main__section">
        <div className="main__title">
          <TextInit />
          <Button text="Acceder" icon="arrow" background="button__blue" />
        </div>
        <Image
          src={imageHome}
          alt="Imagen de portada"
          width={550}
          height={600}
          className="main__image"
        />
      </section>
    </main>
  );
}
