import React from 'react'
import New from '../Components/New'
import CountDown from '../Components/Countdown/CountDown'
import About from './About/About'
import Timeline from './Timeline/Timeline'
import Prizes from './Prizes/Prizes'
import Sponsers from './Sponsers/Sponsers'
import Team from './Team/Team'
import Contact from './Contactus/Contact'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'




export default function Layout() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about'); // Replace 'about' with the actual id of your About section
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <Header/>
        <New />
      <CountDown />
      <About />
      <div id="stars"></div>
      <Timeline />
      <div id="stars"></div>
      <Prizes />
      <Sponsers />
      <div id="stars"></div>
      <Team />
      <div id="stars"></div>
      <Contact />
      <Footer />
      <div id="stars"></div>
    </>
  )
}
