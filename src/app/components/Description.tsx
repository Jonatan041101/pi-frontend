import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  text: string;
}
export default function Description({ image, text }: Props) {
  return (
    <article className="description">
      <Image
        className="description__image"
        src={image}
        alt={`Imagen ${image} descripcion`}
        width={64}
        height={70}
      />
      <span className="description__span">{text}</span>
    </article>
  );
}
