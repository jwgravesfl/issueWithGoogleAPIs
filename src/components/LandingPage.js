import React, { Component } from 'react'

import styled from 'styled-components'

import bgImg4 from '../assets/Crowbar.jpg'
import bgImg5 from '../assets/dJ.jpg'
import bgImg6 from '../assets/DJMixerLaptops.jpg'
import bgImg3 from '../assets/FL.jpg'
import bgImg2 from '../assets/MoSS.jpg'
import bgImg1 from '../assets/LooseysGood.jpg'

import CDimg from '../assets/421CDLogo.png'
import JHimg from '../assets/J&Heather.png'


const MainDiv = styled.div `

@font-face {
    font-family: 'Anton', sans-serif;
    src: url('fonts/BebasNeue-webfont.eot');
    src: url('fonts/BebasNeue-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/BebasNeue-webfont.woff') format('woff'),
         url('fonts/BebasNeue-webfont.ttf') format('truetype'),
         url('fonts/BebasNeue-webfont.svg#BebasNeueRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}
/* CSS reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { 
	margin:0;
	padding:0;
}
html,body {
	margin:0;
	padding:0;
}
table {
	border-collapse:collapse;
	border-spacing:0;
}
fieldset,img { 
	border:0;
}
input{
	border:1px solid #b0b0b0;
	padding:3px 5px 4px;
	color:#979797;
	width:190px;
}
address,caption,cite,code,dfn,th,var {
	font-style:normal;
	font-weight:normal;
}
ol,ul {
	list-style:none;
}
caption,th {
	text-align:left;
}
h1,h2,h3,h4,h5,h6 {
	font-size:100%;
	font-weight:normal;
}
q:before,q:after {
	content:'';
}
abbr,acronym { border:0;
}
/* General Demo Style */
body{
	font-family: 'Anton', sans-serif;
	background: #000;
	font-weight: 400;
	font-size: 15px;
	color: #aa3e03;
	overflow-y: scroll;
	overflow-x: hidden;
}
.ie7 body{
	overflow:hidden;
}
a{
	color: #333;
	text-decoration: none;
}
.container{
	position: relative;
	text-align: center;
}
.clr{
	clear: both;
}
.container > header{
	padding: 30px 30px 10px 20px;
	margin: 0px 20px 10px 20px;
	position: relative;
	display: block;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    text-align: left;
}
.container > header h1{
	font-family: 'Anton', sans-serif;
	font-size: 35px;
	line-height: 35px;
	position: relative;
	font-weight: 400;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    padding: 0px 0px 5px 0px;
}
.container > header h1 span{

}
.container > header h2, p.info{
	font-size: 16px;
	font-style: italic;
	color: #f8f8f8;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.6);
}
/* Header Style */
.codrops-top{
	font-family: 'Anton', sans-serif;
	line-height: 24px;
	font-size: 11px;
	width: 100%;
	background: #000;
	opacity: 0.9;
	text-transform: uppercase;
	z-index: 9999;
	position: relative;
	-moz-box-shadow: 1px 0px 2px #000;
	-webkit-box-shadow: 1px 0px 2px #000;
	box-shadow: 1px 0px 2px #000;
}
.codrops-top a{
	padding: 0px 10px;
	letter-spacing: 1px;
	color: #ddd;
	display: block;
	float: left;
}
.codrops-top a:hover{
	color: #fff;
}
.codrops-top span.right{
	float: right;
}
.codrops-top span.right a{
	float: none;
	display: inline;
}

p.codrops-demos{
	display: block;
	padding: 15px 0px;
}
p.codrops-demos a,
p.codrops-demos a.current-demo,
p.codrops-demos a.current-demo:hover{
    display: inline-block;
	border: 1px solid #6d0019;
	padding: 4px 10px 3px;
	font-size: 13px;
	line-height: 18px;
	margin: 2px 3px;
	font-weight: 800;
	-webkit-box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
	-moz-box-shadow:0px 1px 1px rgba(0,0,0,0.1);
	box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
	color:#fff;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	background: #a90329;
	background: -moz-linear-gradient(top, #a90329 0%, #8f0222 44%, #6d0019 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a90329), color-stop(44%,#8f0222), color-stop(100%,#6d0019));
	background: -webkit-linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);
	background: -o-linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);
	background: -ms-linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);
	background: linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);
}
p.codrops-demos a:hover{
	background: #6d0019;
}
p.codrops-demos a:active{
	background: #6d0019;
	background: -moz-linear-gradient(top, #6d0019 0%, #8f0222 56%, #a90329 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#6d0019), color-stop(56%,#8f0222), color-stop(100%,#a90329));
	background: -webkit-linear-gradient(top, #6d0019 0%,#8f0222 56%,#a90329 100%);
	background: -o-linear-gradient(top, #6d0019 0%,#8f0222 56%,#a90329 100%);
	background: -ms-linear-gradient(top, #6d0019 0%,#8f0222 56%,#a90329 100%);
	background: linear-gradient(top, #6d0019 0%,#8f0222 56%,#a90329 100%);
	-webkit-box-shadow: 0px 1px 1px rgba(255,255,255,0.9);
	-moz-box-shadow:0px 1px 1px rgba(255,255,255,0.9);
	box-shadow: 0px 1px 1px rgba(255,255,255,0.9);
}
p.codrops-demos a.current-demo,
p.codrops-demos a.current-demo:hover{
	color: #A5727D;
	background: #6d0019;
}
/* Media Queries */
@media screen and (max-width: 767px) {
	.container > header{
		text-align: center;
	}
	p.codrops-demos {
		position: relative;
		top: auto;
		left: auto;
	}
}

.cb-slideshow,
.cb-slideshow:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
	z-index: 0;
	font-family: 'Anton', sans-serif;
}
.cb-slideshow:after {
    content: '';
    background: transparent url(../images/pattern.png) repeat top left;
}
.cb-slideshow li span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: 0;
	-webkit-backface-visibility: hidden;
    -webkit-animation: imageAnimation 36s linear infinite 0s;
    -moz-animation: imageAnimation 36s linear infinite 0s;
    -o-animation: imageAnimation 36s linear infinite 0s;
    -ms-animation: imageAnimation 36s linear infinite 0s;
    animation: imageAnimation 36s linear infinite 0s;
}
.cb-slideshow li div {
    z-index: 1000;
    position: absolute;
    bottom: 30px;
    left: 0px;
    width: 100%;
    text-align: center;
    opacity: 0;
    -webkit-animation: titleAnimation 36s linear infinite 0s;
    -moz-animation: titleAnimation 36s linear infinite 0s;
    -o-animation: titleAnimation 36s linear infinite 0s;
    -ms-animation: titleAnimation 36s linear infinite 0s;
    animation: titleAnimation 36s linear infinite 0s;
}
.cb-slideshow li div h3 {
    font-family: 'Anton', sans-serif;
    font-size: 80px;
    padding: 0 30px;
    line-height: 80px;
    color: rgba(255,255,255,0.8);
}
.cb-slideshow li:nth-child(1) span { background-image: url(${bgImg1}) }
.cb-slideshow li:nth-child(2) span {
    background-image: url(${bgImg2});
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    -ms-animation-delay: 6s;
    animation-delay: 6s;
}
.cb-slideshow li:nth-child(3) span {
    background-image: url(${bgImg3});
    -webkit-animation-delay: 12s;
    -moz-animation-delay: 12s;
    -o-animation-delay: 12s;
    -ms-animation-delay: 12s;
    animation-delay: 12s;
}
.cb-slideshow li:nth-child(4) span {
    background-image: url(${bgImg4});
    -webkit-animation-delay: 18s;
    -moz-animation-delay: 18s;
    -o-animation-delay: 18s;
    -ms-animation-delay: 18s;
    animation-delay: 18s;
}
.cb-slideshow li:nth-child(5) span {
    background-image: url(${bgImg5});
    -webkit-animation-delay: 24s;
    -moz-animation-delay: 24s;
    -o-animation-delay: 24s;
    -ms-animation-delay: 24s;
    animation-delay: 24s;
}
.cb-slideshow li:nth-child(6) span {
    background-image: url(${bgImg6});
    -webkit-animation-delay: 30s;
    -moz-animation-delay: 30s;
    -o-animation-delay: 30s;
    -ms-animation-delay: 30s;
    animation-delay: 30s;
}
.cb-slideshow li:nth-child(2) div {
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    -ms-animation-delay: 6s;
    animation-delay: 6s;
}
.cb-slideshow li:nth-child(3) div {
    -webkit-animation-delay: 12s;
    -moz-animation-delay: 12s;
    -o-animation-delay: 12s;
    -ms-animation-delay: 12s;
    animation-delay: 12s;
}
.cb-slideshow li:nth-child(4) div {
    -webkit-animation-delay: 18s;
    -moz-animation-delay: 18s;
    -o-animation-delay: 18s;
    -ms-animation-delay: 18s;
    animation-delay: 18s;
}
.cb-slideshow li:nth-child(5) div {
    -webkit-animation-delay: 24s;
    -moz-animation-delay: 24s;
    -o-animation-delay: 24s;
    -ms-animation-delay: 24s;
    animation-delay: 24s;
}
.cb-slideshow li:nth-child(6) div {
    -webkit-animation-delay: 30s;
    -moz-animation-delay: 30s;
    -o-animation-delay: 30s;
    -ms-animation-delay: 30s;
    animation-delay: 30s;
}
@-webkit-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -webkit-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -webkit-transform: scale(1.05);
	    -webkit-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -webkit-transform: scale(1.1);
	}
	22% {
		opacity: 0;
		-webkit-transform: scale(1.1) translateY(-20%);
	}
	25% {
	    opacity: 0;
	    -webkit-transform: scale(1.1) translateY(-100%);
	}
	100% { opacity: 0 }
}
@-moz-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -moz-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -moz-transform: scale(1.05);
	    -moz-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -moz-transform: scale(1.1);
	}
	22% {
		opacity: 0;
		-webkit-transform: scale(1.1) translateY(-20%);
	}
	25% {
	    opacity: 0;
	    -moz-transform: scale(1.1) translateY(-100%);
	}
	100% { opacity: 0 }
}
@-o-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -o-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -o-transform: scale(1.05);
	    -o-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -o-transform: scale(1.1);
	}
	22% {
		opacity: 0;
		-webkit-transform: scale(1.1) translateY(-20%);
	}
	25% {
	    opacity: 0;
	    -o-transform: scale(1.1) translateY(-100%);
	}
	100% { opacity: 0 }
}
@-ms-keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    -ms-animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    -ms-transform: scale(1.05);
	    -ms-animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    -ms-transform: scale(1.1);
	}
	22% {
		opacity: 0;
		-webkit-transform: scale(1.1) translateY(-20%);
	}
	25% {
	    opacity: 0;
	    -ms-transform: scale(1.1) translateY(-100%);
	}
	100% { opacity: 0 }
}
@keyframes imageAnimation { 
	0% {
	    opacity: 0;
	    animation-timing-function: ease-in;
	}
	8% {
	    opacity: 1;
	    transform: scale(1.05);
	    animation-timing-function: ease-out;
	}
	17% {
	    opacity: 1;
	    transform: scale(1.1);
	}
	22% {
		opacity: 0;
		-webkit-transform: scale(1.1) translateY(-20%);
	}
	25% {
	    opacity: 0;
	    -transform: scale(1.1) translateY(-100%);
	}
	100% { opacity: 0 }
}
@-webkit-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -webkit-transform: translateY(-300%);
	}
	8% {
	    opacity: 1;
	    -webkit-transform: translateY(0%);
	}
	17% {
	    opacity: 1;
	    -webkit-transform: translateY(0%);
	}
	19% {
	    opacity: 0;
	    -webkit-transform: translateY(100%);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@-moz-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -moz-transform: translateY(-300%);
	}
	8% {
	    opacity: 1;
	    -moz-transform: translateY(0%);
	}
	17% {
	    opacity: 1;
	    -moz-transform: translateY(0%);
	}
	19% {
	    opacity: 0;
	    -moz-transform: translateY(100%);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@-o-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -o-transform: translateY(-300%);
	}
	8% {
	    opacity: 1;
	    -o-transform: translateY(0%);
	}
	17% {
	    opacity: 1;
	    -o-transform: translateY(0%);
	}
	19% {
	    opacity: 0;
	    -o-transform: translateY(100%);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@-ms-keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    -ms-transform: translateY(-300%);
	}
	8% {
	    opacity: 1;
	    -ms-transform: translateY(0%);
	}
	17% {
	    opacity: 1;
	    -ms-transform: translateY(0%);
	}
	19% {
	    opacity: 0;
	    -ms-transform: translateY(100%);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
@keyframes titleAnimation { 
	0% {
	    opacity: 0;
	    transform: translateY(-300%);
	}
	8% {
	    opacity: 1;
	    transform: translateY(0%);
	}
	17% {
	    opacity: 1;
	    transform: translateY(0%);
	}
	19% {
	    opacity: 0;
	    transform: translateY(100%);
	}
	25% { opacity: 0 }
	100% { opacity: 0 }
}
/* Show at least something when animations not supported */
.no-cssanimations .cb-slideshow li span{
	opacity: 1;
}
@media screen and (max-width: 1140px) { 
	.cb-slideshow li div h3 { font-size: 100px }
}
@media screen and (max-width: 600px) { 
	.cb-slideshow li div h3 { font-size: 50px }
}

.jhImg {
	img {
		height: 15vh;
	}

	margin-top: 5vh;
}

.cdImg {
	margin-top: 5vh;
	height: 10vh;
}

.img1Words {
	color: white;
	margin:0;
	font-weight:normal;
	font-family: 'Anton', sans-serif;
    font-size: 100 px;
    padding: 0 30px;
    line-height: 120px;
    color: rgba(255,255,255,0.8);
}

.bgSlideshowPage {
}

`

export default class Page1 extends Component {
  render() {
    return (
      <MainDiv classNameName="page1 bgSlideshowPage" >
      <ul className="cb-slideshow">
	  		<li><span className="jhImg" ><img src={JHimg} alt="J&Heather Logo" /></span><div><h3 className="img1Words" >Corporate, Wedding, Family or 21+ Music</h3></div> </li>
	  		<li><span className="jhImg" ><img src={JHimg} alt="J&Heather" className="jhImg"/></span><div><h3>Family Friendly Live Music Show</h3></div></li>
            <li><span><img src={CDimg} alt="Cowboy Drive Logo" className="cdImg" /></span><div><h3>21+ Live Music Show</h3></div></li>
            <li><span>Open Mics</span><div><h3>Open Mics</h3></div></li>
            <li><span>Mobile Karaoke</span><div><h3>Mobile Karaoke</h3></div></li>
            <li><span>Mobile DJ</span><div><h3>Mobile DJ</h3></div></li>
        </ul>
      </MainDiv>
    )
  }
}