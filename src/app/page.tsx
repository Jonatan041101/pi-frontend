import Image from 'next/image';
import Header from './components/Header';
import { imageHome } from '@/utils/image';
import TextInit from './components/TextInit';
import { description } from '@/utils/description';
import Description from './components/Description';
import LinkRoute from '@/atoms/LinkRoute';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="main__section">
          <div className="main__title">
            <TextInit />
            <LinkRoute background="button__blue" href="/home" icon="arrow">
              <span className="button__text">Acceder</span>
            </LinkRoute>
          </div>
          <Image
            src={imageHome}
            alt="Imagen de portada"
            width={550}
            height={600}
            className="main__image"
          />
        </section>
        <section className="main__description">
          {description.map(({ description, id, image }) => (
            <Description image={image} text={description} key={id} />
          ))}
        </section>
      </main>
    </>
  );
}
