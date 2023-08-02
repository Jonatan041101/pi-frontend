import Button from '@/atoms/Button';
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h2 className="header__h2">Dogs</h2>
        <Button text="Acceder" background="button__orange" />
      </nav>
    </header>
  );
}
