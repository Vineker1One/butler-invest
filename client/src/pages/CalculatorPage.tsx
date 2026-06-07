import { CalculatorFull } from "./Calculator/CalculatorFull";
import './CalculatorPage.css'

export const CalculatorPage = () => {
  return (
    <>
      <div className="calculator-bg" /> {/* Фиксированный фон */}
      <main className="calculatorFull">
        <CalculatorFull />
      </main>
    </>
  );
};