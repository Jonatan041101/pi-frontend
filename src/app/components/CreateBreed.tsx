import Image from 'next/image';
import React from 'react';

export default function CreateBreed() {
  return (
    <div className="create">
      <h3 className="create__h3">
        Crea un nuevo <span className="create__span">perro</span>
      </h3>
      <Image
        className="create__image"
        src={
          'https://res.cloudinary.com/damjxqb5f/image/upload/v1691061657/dog_create_button.2fafc90d_kjirun.png'
        }
        width={133}
        height={89}
        alt="Imagen de un perro"
      />
    </div>
  );
}
