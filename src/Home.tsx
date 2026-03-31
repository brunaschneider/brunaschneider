import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}