import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom' 

import NavBar from './NavBar'

import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

class App extends Component {
  state = {
    loading: true,
  }
  render() {
    return (
      <BrowserRouter>
      <div className="app" >
        <NavBar />
            <div id="mainViewer" className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <Route  path='/page1' component={Page1} />
                <Route  path='/page2' component={Page2} />
                <Route  path='/page3' component={Page3} />
              </Switch>
            </div>
        </div> 
        
      </BrowserRouter>

    );
  }
}

export default App;
