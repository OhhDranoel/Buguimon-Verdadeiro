export default [
    {
      question: "Quanto é 1 + 2?",
      answers: [
        { option: "3", correct: true },
        { option: "2", correct: false },
        { option: "4", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Quanto é 5 x 2?",
      answers: [
        { option: "9", correct: false },
        { option: "10", correct: true },
        { option: "11", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Quanto é 10 x 8?",
      answers: [
        { option: "800", correct: false },
        { option: "90", correct: false },
        { option: "80", correct: true },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Quanto é 7 x 7?",
      answers: [
        { option: "70", correct: false },
        { option: "56", correct: false },
        { option: "49", correct: true },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
  ];
