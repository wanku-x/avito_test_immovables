import React, { Fragment } from 'react';
import Header from '../Components/Header';


const MainLayout = (props) => (
  <Fragment>
    <Header />
    { props.children }
  </Fragment>
);

export default MainLayout;