
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Work />
      </main>

    </>
  )
}


export default App
