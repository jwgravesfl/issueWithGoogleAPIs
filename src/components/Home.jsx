import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import styled from 'styled-components'

const HomeDiv = styled.div `

`

const Home = () => (
  <HomeDiv className="homePage" >
  <Page1 />
  <Page2 />
  <Page3 />
</HomeDiv>
)

export default Home