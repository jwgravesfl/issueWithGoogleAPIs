import React, { Component } from 'react'

import revelerLogo from '../assets/RevelerLogo.png'

export default class Page1 extends Component {
  render() {
    return (
      <div className="page1" >
      <header className="masthead text-center text-white">
      <div className=" my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="revelerLogoPage1">
            <img className="" src={revelerLogo} alt="Reveler Logo" />
            </div>
          </div>
          <div className="col-lg-8 mx-auto">
            <div className="mb-5 text-white wordsPage1 ">Mobile DJ, Karaoke, Live Music and Live Sound Production</div>
            <a className="btn btn-secondary btn-xl" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
      </div>
    )
  }
}