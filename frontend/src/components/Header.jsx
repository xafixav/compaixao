import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { useLocation, useOutlet } from 'react-router-dom';

function Header() {
  const [isThisPage, setIsThisPage] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setIsThisPage(location.pathname);
  }, [location]);
  
  return (
    <>
    <div className="header">
      <div className="buttonContainer">
        <button type="button" className={isThisPage === '/' ? 'button buttonActive' : 'button'}>
          <Link to="/">Registrar</Link>
        </button>
        <button type="button" className={isThisPage === '/assisted' ? 'button buttonActive' : 'button'}>
          <Link to="/assisted">Lista de Assistenciados</Link>
        </button>
        {/* <button type="button" className="button">
          <Link to="/register/inventory">Registrar o Inventario</Link>
        </button>
        <button type="button" className="button">
          <Link to="/inventory">Lista do Inventario</Link>
        </button> */}
      </div>
    </div>
    {useOutlet()}
    </>
  );
}

export default Header;
