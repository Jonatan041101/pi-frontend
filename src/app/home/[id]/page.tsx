import { getBreed } from '@/services/race.service';
import { Breeds } from '@/types/response';
import Image from 'next/image';
import React from 'react';
interface ID {
  id: string;
}
interface Props {
  params: ID;
}
export default async function DetailPage({ params }: Props) {
  const breed = (await getBreed(params.id)) as Breeds;
  console.log(breed);

  return (
    <div>
      <Image src={breed.image} alt="" width={500} height={500} />
    </div>
  );
}
