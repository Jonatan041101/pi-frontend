import LinkRoute from '@/atoms/LinkRoute';
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h2 className="header__h2">Dogs</h2>
        <LinkRoute background="button__orange" href="/home">
          <span className="button__text">Acceder</span>
        </LinkRoute>
      </nav>
    </header>
  );
}
