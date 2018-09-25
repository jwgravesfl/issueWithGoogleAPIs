import React from 'react'

import styled from 'styled-components'

const Page2Div = styled.div `
    .page2 {
      padding-top: 3vh;
      padding-bottom: 3vh;
    }
`

const Page2 = () => (
    <Page2Div id="about" className="bg-secondary page2" >
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
  </Page2Div>
)

export default Page2