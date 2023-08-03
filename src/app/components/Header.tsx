import LinkRoute from '@/atoms/LinkRoute';
import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Logo />
        <LinkRoute background="button__orange" href="/home">
          <span className="button__text">Acceder</span>
        </LinkRoute>
      </nav>
    </header>
  );
}
