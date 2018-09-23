import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import landingPageBGimg from './assets/landingPage.jpg'

import styled from 'styled-components'

const MainStyleDiv = styled.div `
    .app {
        text-align: center;
        min-height: 100vh;
    }
    
    #mainViewer {
    }

    .tsmNavBar {
        z-index: 2;
        color: black;

        img {
          height: 25vh;
        }
    }

    .navBarBrand {
        color: black;
        z-index: 2;
    }

    .tsmNavBarNavMenu {
        position: fixed;
        top: 10px;
        right: 10px;
    }

    .navBarToggler {
      z-index: 2;
      color: white;
    }

    .homePage {
      
    }

    .page1 {
        min-height: 100vh;
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

    .page2 {
      padding-top: 3vh;
      padding-bottom: 3vh;
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
`

ReactDOM.render(<MainStyleDiv><App /></MainStyleDiv>, document.getElementById('root'));
registerServiceWorker();
