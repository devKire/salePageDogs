import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={onClick}>
      <h3 className="faq-question-text">{question}</h3>
      <svg
        className={`faq-icon ${isOpen ? 'rotate' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        color='black'
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    {isOpen && <div className="faq-answer">{answer}</div>}
  </div>
);

export default function FAQ() {
  const [openItems, setOpenItems] = useState({
    races: false,
    receive: false,
    delivery: false,
    warranty: true,
  });

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqItems = [
    {
      key: 'races',
      question: 'Serve para todas as raças?',
      answer: 'Sim, nossas receitas são adaptáveis para todas as raças de pets.',
    },
    {
      key: 'receive',
      question: 'Como eu vou receber essas receitas?',
      answer: 'Você receberá o acesso aos e-books imediatamente após a confirmação do pagamento através do seu e-mail.',
    },
    {
      key: 'delivery',
      question: 'Recebo os e-books assim que pagar?',
      answer: 'Sim, o acesso é imediato após a confirmação do seu pagamento.',
    },
    {
      key: 'warranty',
      question: 'Existe uma garantia?',
      answer: 'Sim, fique tranquila. Nossas receitas foram preparadas com tanto carinho que temos a certeza que gostará do material, por isso você tem 7 dias de garantia, caso você ache que nossas receitas não lhe ajudaram nenhum pouco nós te devolveremos todo o valor pago.',
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">
        DÚVIDAS <span className="faq-title-highlight">FREQUENTES</span>
      </h2>

      <div className="faq-list">
        {faqItems.map((item) => (
          <FAQItem
            key={item.key}
            question={item.question}
            answer={item.answer}
            isOpen={openItems[item.key]}
            onClick={() => toggleItem(item.key)}
          />
        ))}
      </div>
    </div>
  );
}
