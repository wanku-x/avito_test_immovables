import React, { Fragment } from 'react';
import Header from '../Components/Header';


const MainLayout = ({ children }) => (
  <Fragment>
    <Header />
    { children }
  </Fragment>
);

export default MainLayout;