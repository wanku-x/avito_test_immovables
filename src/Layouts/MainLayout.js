import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';


const MainLayout = ({ children }) => (
  <>
    <Header />
    { children }
  </>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
