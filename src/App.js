import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'

import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Mine from './pages/mine/Mine'
import NotFind from './pages/NotFind'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Switch>
              <Route path="/" exact render={()=>{
                  //重定向
                  return <Redirect to="/home"/>
              }}/>

              <Route path="/home" component={Home}/>
              
              <Route path="/order"  component={Order}/>

              <Route path="/mine"  component={Mine}/>

              <Route path="/404"  component={NotFind}/>

              <Route render={()=>{
                  //重定向
                  return <Redirect to="/404"/>
              }}/>
          </Switch>


            <nav className="tabs">
                <Link className="tab" to="/home">首页</Link>
                <Link className="tab" to="/order">订单</Link>
                <Link className="tab" to="/mine">我的</Link>
            </nav>


        </div>
      </Router>
    );
  }
}

export default App;
