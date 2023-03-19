import React from 'react';
import HeaderText from '../images/headerText.png';

const Header = () => {
  return (
    <div className='flex justify-start items-center'>
      <img className="w-4/12" src={HeaderText} alt="My Image" />
    </div>
  );
};

export default Header;