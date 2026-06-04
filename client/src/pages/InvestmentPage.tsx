import { InvestmentHero } from "./InvestmentPlan/sections/InvestmentHero/InvestmentHero";
import { InvestmentCards } from "./InvestmentPlan/sections/InvestmentCards/InvestmentCard";
import { InvestmentConclusions } from "./InvestmentPlan/sections/InvestmentConclusions/InvestmentConclusions";

export const InvestmentPage = () => {
  return (
    <>
        <InvestmentHero />
        <InvestmentCards />
        <InvestmentConclusions />
    </>
  );
};