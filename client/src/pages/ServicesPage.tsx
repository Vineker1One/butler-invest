import { ServicesHero } from "./Services/sections/ServicesHero/ServicesHero";
import { InvestmentCriteria } from "./Services/sections/InvestmentCriteria/InvestmentCriteria";
import { RenovationTypes } from "./Services/sections/RenovationTypes/RenovationTypes";
import { Homestaging } from "./Services/sections/Homestaging/Homestaging";
import { PropertyManagement } from "./Services/sections/PropertyManagement/PropertyManagement";
import { PropertySale } from "./Services/sections/PropertySale/PropertySale";
import { TradeIn } from "./Services/sections/TradeIn/TradeIn";

export const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <InvestmentCriteria />
      <RenovationTypes />
      <Homestaging />
      <PropertyManagement />
      <PropertySale />
      <TradeIn />
    </>
  );
};