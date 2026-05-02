import { Hero } from "./Home/sections/Hero/Hero";
import { About } from "./Home/sections/About/About";
import { Capabilities } from "./Home/sections/Capabilities/Capabilities";
import { Investments } from "./Home/sections/Investments/Investments";
import { Compare } from "./Home/sections/Compare/Compare";
import { Projects } from "./Home/sections/Projects/Projects";
import { Calculator } from "./Home/sections/Calculator/Calculator";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Capabilities />
            <Investments />
            <Compare />
            <Projects />
            <Calculator />
        </>
    );
};
