import React from 'react';  
import { Route } from 'react-router-dom';  
import '../styles/components/MainLayout.styl';
 
const Layout = ({children}) => {  
  return (  
    <>  
      {children}     
    </>  
  )  
}  
  
const LayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <Layout>  
          <Component {...matchProps} />  
      </Layout>  
    )} />  
  )  
};  
  
export default LayoutRoute;