import "./ProblemsFAQ.css";

export const ProblemsFAQ = () => {
  // Обработчик клика по вопросу
  const handleQuestionClick = (questionNumber: number) => {
    const answerElement = document.getElementById(`answer-${questionNumber}`);
    if (answerElement) {
      answerElement.scrollIntoView({ 
        behavior: "smooth", 
        block: "center" 
      });
    }
  };

  return (
    <section className="problems-faq">
      <h1 className="problems-faq__title">
        Проблемы/Решения/Часто задаваемые вопросы
      </h1>
      <div className="problems-faq__container">
        <div className="problems-faq__content">
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(1)}
          >
            1. Что входит в услуги управляющей компании?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(2)}
          >
            2. Какая комиссия управляющей компании?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(3)}
          >
            3. Нужно ли платить налоги при доверительном управлении?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(4)}
          >
            4. Какой срок сотрудничества возможен? Можно ли приостановить сдачу?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(5)}
          >
            5. Кто отвечает за сохранность квартиры и имущества?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(6)}
          >
            6. Какие риски существуют при доверительном управлении?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(7)}
          >
            7. Кто получает деньги от аренды – собственник или управляющая компания?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(8)}
          >
            8. Как оформляется доверительное управление? Какие документы нужны?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(9)}
          >
            9. Какие преимущества доверительного управления по сравнению с самостоятельной сдачей квартиры?
          </button>
          
          <button 
            className="problems-faq__question"
            onClick={() => handleQuestionClick(10)}
          >
            10. Что такое доверительное управление недвижимостью и зачем оно нужно?
          </button>
        </div>
      </div>
    </section>
  );
};