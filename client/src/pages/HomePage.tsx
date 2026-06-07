import "./HomePage.css";
import { Hero } from "./Home/sections/Hero/Hero";
import { About } from "./Home/sections/About/About";
import { Capabilities } from "./Home/sections/Capabilities/Capabilities";
import { Investments } from "./Home/sections/Investments/Investments";
import { Compare } from "./Home/sections/Compare/Compare";
import { Projects } from "./Home/sections/Projects/Projects";
import { Calculator } from "./Home/sections/Calculator/Calculator";
import { ContactForm } from "./Home/sections/ContactForm/ContactForm";
import { ContactsSection } from "./Home/sections/ContactSections/ContactsSection";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Capabilities />
      <Investments />
      <Compare />
      <Projects />
      <Calculator />
      <ContactForm />
      <ContactsSection />
    </div>
  );
};