import React from 'react';
import logo from '../../logo.svg';
import './mainPage.scss';

interface PropTypes {}

const baseClassName = 'main-page';

const MainPage: React.FC<PropTypes> = () => {
  return (
    <div className={`${baseClassName}`}>
      <div className={`${baseClassName}__wrapper`}>
        <h2 className={`${baseClassName}__wrapper__header`}>Simple React</h2>
        <h3 className={`${baseClassName}__wrapper__description`}>Hi! React</h3>
      </div>
      <img src={logo} className={`${baseClassName}__logo`} alt="logo" />
    </div>
  );
};

export default MainPage;
