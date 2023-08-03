import { getBreeds } from '@/services/race.service';
import { Breeds } from '@/types/response';
import React from 'react';
import Card from './Card';

export default async function BreedsComponent() {
  const breeds: Breeds[] = await getBreeds();
  console.log({ breeds });

  return (
    <section className="breeds">
      {breeds.map((breed) => (
        <Card
          id={breed.id}
          key={breed.id}
          image={breed.image}
          name={breed.name}
          peso={breed.weight}
          temperaments={breed.temperRace.map(({ temper }) => temper.name)}
        />
      ))}
    </section>
  );
}
