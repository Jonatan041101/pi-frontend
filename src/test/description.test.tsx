import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from '@/app/components/Description';
import { imageTest, textTest } from '@/utils/description';

describe('Description Component', () => {
  test('Renderiza correctamente la imagen y el texto', () => {
    render(<Description image={imageTest} text={textTest} />);

    const imageElement = screen.getByAltText(`Imagen ${imageTest} descripcion`);
    expect(imageElement).toBeInTheDocument();

    const textElement = screen.getByText(textTest);
    expect(textElement).toBeInTheDocument();
  });
});
