import { Hero } from "./Home/sections/Hero/Hero";
import { About } from "./Home/sections/About/About";
import { Capabilities } from "./Home/sections/Capabilities/Capabilities";
import { Investments } from "./Home/sections/Investments/Investments";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Capabilities />
            <Investments />
        </>
    );
};
