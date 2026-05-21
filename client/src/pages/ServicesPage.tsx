import { ServicesHero } from "./Services/sections/ServicesHero/ServicesHero";
import { InvestmentCriteria } from "./Services/sections/InvestmentCriteria/InvestmentCriteria";
import { RenovationTypes } from "./Services/sections/RenovationTypes/RenovationTypes";

export const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <InvestmentCriteria />
      <RenovationTypes />
    </>
  );
};