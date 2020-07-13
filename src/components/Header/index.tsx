import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  active?: 'import' | 'dashboard';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  active = 'dashboard',
}: HeaderProps) => {
  const [page, setPage] = useState(active);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link
            to="/"
            onClick={() => setPage('dashboard')}
            className={page === 'dashboard' ? 'active' : 'default'}
          >
            Listagem
          </Link>
          <Link
            to="/import"
            onClick={() => setPage('import')}
            className={page === 'import' ? 'active' : 'default'}
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
