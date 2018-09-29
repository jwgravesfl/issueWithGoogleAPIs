import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom' 

import NavBar from './NavBar'

import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

import styled from 'styled-components'

const AppDiv = styled.div `
    .app {
      text-align: center;
    }

    #mainViewer {
    }
`

class App extends Component {
  state = {
    loading: true,
  }
  render() {
    return (
      
      
        
        <HashRouter basename={process.env.PUBLIC_URL}>
        <AppDiv className="app" >
         <NavBar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route  path='/page1' component={Page1} />
                <Route  path='/page2' component={Page2} />
                <Route  path='/page3' component={Page3} />
              </Switch>
              </AppDiv> 
              </HashRouter>
        
        
     

    );
  }
}

export default App;
