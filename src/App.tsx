import { GlobalStyles } from './styles/GlobalStyles';
import { SocialNavbar } from './components/SocialNavbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <SocialNavbar />
      <Hero />
      <About/>
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;