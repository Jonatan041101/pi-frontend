import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importa este archivo para agregar los métodos de jest-dom a las aserciones de jest
import TextInit from '@/app/components/TextInit';

describe('TextInit Component', () => {
  test('Debe renderizar correctamente el H1', () => {
    const { getByText } = render(<TextInit />);

    // Verifica que los elementos estén presentes en el DOM
    expect(
      getByText(/Porque todos los días es un día del/i),
    ).toBeInTheDocument();
    // Verifica que los elementos tengan las clases CSS correctas
    expect(getByText(/Porque todos los días es un día del/i)).toHaveClass(
      'main__h1',
    );
  });
  test('El párrafo debe contener el texto correcto', () => {
    render(<TextInit />);
    const paragraphElement = screen.getByText(
      /Tu mejor amigo te conoce mejor que nadie, tu lo conoces a el\? averígualo con la mejor app sobre nuestros peludos favoritos./i,
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
