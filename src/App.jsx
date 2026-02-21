import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Stats from './sections/Stats';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
