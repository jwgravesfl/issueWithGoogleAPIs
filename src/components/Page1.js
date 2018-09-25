import React from 'react'

import revelerLogo from '../assets/RevelerLogo.png'

import landingPageBGimg from '../assets/landingPage.jpg'

import styled from 'styled-components'

const Page1Div = styled.div `
    .page1 {
    }

    .revelerLogoPage1 {

      img {
        width: 37vw;
      }
    }

    .wordsPage1 {
      background:rgba(0,0,0,0.5);
      font-size: 250%;
      font-family: 'Fjalla One', sans-serif;

        @media (max-width: 1200px) {
          font-size: 180%;
          }
        @media (max-width: 700px) {
            font-size: 120%;
            }
    }

    header.masthead {
      width: 100vw;
      padding-top: 7vh;
      padding-bottom: calc(7vh - 56px);
      background-image: url(${landingPageBGimg});
      background-position: center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;

      @media (max-width: 1200px) {
        background-image: url(${landingPageBGimg});
        }
      @media (max-width: 700px) {
        background-image: url(${landingPageBGimg});
          }

    }
          
    header.masthead p {
      font-weight: 2em;
    }
    
    @media (min-width: 768px) {
      header.masthead p {
        font-size: 1.15rem;
      }
    }
    
    @media (min-width: 992px) {
      header.masthead {
        height: 100vh;
        min-height: 650px;
        padding-top: 0;
        padding-bottom: 0;
      }
      header.masthead h1 {
        font-size: 3rem;
      }
    }
    
    @media (min-width: 1200px) {
      header.masthead h1 {
        font-size: 4rem;
      }
    }
`

const Page1 = () => (
        <Page1Div className="page1" >
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
      </Page1Div>
)

export default Page1