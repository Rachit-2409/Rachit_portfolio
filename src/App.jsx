
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';
import CReview from './Components/CReview/CReview';
import Contact from './Components/Contact/Contact';
import {ReactLenis} from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up')
    console.log(elements)
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Work />
        <CReview />
        <Contact />
      </main>

      </ReactLenis>
  )
}


export default App
