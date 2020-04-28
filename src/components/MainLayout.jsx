import React from 'react';  
import { Route } from 'react-router-dom'; 
import MainHeader from './MainHeader.jsx';
import MainFooter from './MainFooter.jsx';
import '../styles/components/MainLayout.styl';

const MainLayout = ({ children }) => (
  <>
    <MainHeader />
    {children}      
    <MainFooter />
  </>
);

const MainLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <MainLayout>  
          <Component {...matchProps} />  
      </MainLayout>  
    )} />  
  )  
}; 

export default MainLayoutRoute;