import React, { Component } from 'react'

export default class Page2 extends Component {
  render() {
    return (
      <div id="about" className="bg-secondary page2" >
      <section className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-white">Top Shelf Music</h2>
            <hr className="light my-4" />
            <p className="text-faded mb-4">With years of experience bringing the party, Top Shelf Music will keep the party going.   </p>
            <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}