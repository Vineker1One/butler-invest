import { ProblemsFAQ } from "./Problems/sections/ProblemsFAQ/ProblemsFAQ";
import { ProblemsAnswers } from "./Problems/sections/ProblemsAnswers/ProblemsAnswers";

export const ProblemsPage = () => {
  return (
    <main>
      <ProblemsFAQ />
      <ProblemsAnswers />
    </main>
  );
};