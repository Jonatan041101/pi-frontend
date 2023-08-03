import LinkRoute from '@/atoms/LinkRoute';
import Image from 'next/image';
import React from 'react';
interface Props {
  name: string;
  image: string;
  peso: string;
  id: string;
  temperaments: string[];
}
export default function Card({ image, name, peso, id, temperaments }: Props) {
  const temperamentsString = temperaments.join(', ');
  return (
    <LinkRoute nonStyles href={`/home/${id}`}>
      <article className="card">
        <Image
          className="card__image"
          src={image}
          alt={`Imagen de la raza ${name}`}
          width={250}
          height={200}
        />
        <section className="card__section">
          <h3 className="card__name">{name}</h3>
          <p className="card__kg">{peso} KG</p>
          <p className="card__temperaments">{temperamentsString}</p>
        </section>
      </article>
    </LinkRoute>
  );
}
