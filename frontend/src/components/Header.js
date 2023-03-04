import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='buttonContainer'>
        <button className='button'>
          <Link to="/">Registrar</Link>
        </button>
        <button className='button'>
          <Link to="/assisted">Lista de Assistenciados</Link>
        </button>
        <button className='button'>
          <Link to="/register/inventory">Registrar o Inventario</Link>
        </button>
        <button className='button'>
          <Link to="/inventory">Lista do Inventario</Link>
        </button>
      </div>
    </div>
  )
}

export default Header;
