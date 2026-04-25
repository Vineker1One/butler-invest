import { Header } from "../../../../widgets/Header";
import { Slider } from "./components/Slider";
import { Socials } from "./components/Socials";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <Slider />
    </section>
  )
}