import React from 'react'

import portfolio1img from '../assets/landingPage.jpg'
import portfolio2img from '../assets/MoSS.jpg'
import portfolio3img from '../assets/FL.jpg'
import portfolio4img from '../assets/Crowbar.jpg'
import portfolio5img from '../assets/dJ.jpg'
import portfolio6img from '../assets/DJMixerLaptops.jpg'

import CDimg from '../assets/421CDLogo.png'
import JHimg from '../assets/J&Heather.png'

import styled from 'styled-components'

const Page3Div = styled.div `
  
    .portfolio-box {
      position: relative;
      display: block;
      max-width: 650px;
      margin: 0 auto;
    }

    .portfolio-box .portfolio-box-caption {
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      opacity: 0;
      color: #fff;
      background: rgba(240, 95, 64, 0.9);
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      transition: all 0.2s;
    }

    .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      text-align: center;
    }

    .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category,
    .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
      padding: 0 15px;
      font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
    }

    .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
      font-size: 18px;
    }

    .portfolio-box:hover .portfolio-box-caption {
      opacity: 1;
    }

    .portfolio-box:focus {
      outline: none;
    }

    @media (min-width: 768px) {
      .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {
        font-size: 16px;
      }
      .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
        font-size: 22px;
      }
    }

    .jhImg {
      img {
        height: 15vh;
      }
    
      margin-top: 5vh;
    }

    .cdImg {
      margin-bottom: 5vh;
      img {
        height: 10vh;
      }
    }
`

const Page3 = () => (
  <Page3Div>
    <section className="p-0" id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters popup-gallery">
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={portfolio1img}>
              <img className="img-fluid" src={portfolio1img} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Family Friendly and 21+ Live Music
                  </div>
                  <div className="project-name">
                    Any English Genre
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={portfolio2img}>
              <img className="img-fluid" src={portfolio2img} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Corporate, Wedding, Family Live Music Show
                  </div>
                  <div className="project-name jhImg">
                  <img src={JHimg} alt="J&Heather Logo" className="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={portfolio3img}>
              <img className="img-fluid" src={portfolio3img} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    21+ Live Music Show
                  </div>
                  <div className="project-name cdImg">
                  <img src={CDimg} alt="Cowboy Drive Logo" className="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={portfolio4img}>
              <img className="img-fluid" src={portfolio4img} alt=""/>
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Open Mics
                  </div>
                  <div className="project-name">
                  With professional equipment, Reveler Music provides an amazing atmosphere for beginner to advanced musicians.
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={portfolio5img}>
              <img className="img-fluid" src={portfolio5img} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Karaoke
                  </div>
                  <div className="project-name">
                    With professional equipment and 77,000+ song selections, Reveler Music keeps the party rolling.
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={portfolio6img}>
              <img className="img-fluid" src={portfolio6img} alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    DJ
                  </div>
                  <div className="project-name">
                    With professional equipment, Reveler Music creates the atmosphere of the moment.  Any Genre.  
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Page3Div>
)


export default Page3