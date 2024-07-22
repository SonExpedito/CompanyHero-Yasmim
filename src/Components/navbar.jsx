import React from 'react';
import Logo from './img/Logo.png';

const Navbar = () => {
  return (
    <>
      <header className=' h-20 w-full  flex items-center px-14'>
        <img src={Logo} className="w-20" alt="Logo" />
      </header>
    </>
  );
}

export default Navbar;
