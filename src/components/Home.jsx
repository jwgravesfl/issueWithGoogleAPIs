import React, { Component } from 'react'
import LandingPage from './LandingPage'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

export default class Home extends Component {
  render() {
    return (
      <div className="homePage" >
        <LandingPage />
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    )
  }
}