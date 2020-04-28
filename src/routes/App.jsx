import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Posit from "../containers/Posit";
import Page404 from "../containers/Page404";
class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/home" />  
          </Route>
          
          <MainLayout path="/home" component={Home} />  
          <Layout path="/solicita" component={Login} /> 
          <Layout path="/postula" component={Posit} />
          <Layout component={Page404}/>
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;




