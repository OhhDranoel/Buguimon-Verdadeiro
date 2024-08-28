import questions from './questions.js';

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const finishContainer = document.querySelector('.finish');
const spanQtd = document.querySelector('.spnQtd');

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  answersContainer.innerHTML = '';

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.option;
    button.addEventListener('click', () => {
      const isCorrect = currentQuestion.handleAnswer(button, answer.correct);
      
      if (isCorrect) {
        score++;
      }

      setTimeout(() => {
        document.body.style.backgroundColor = '#f2f2f2'; 
        button.style.backgroundColor = '#008CCC'; 
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
          loadQuestion();
        } else {
          showResults();
        }
      }, 1000);
    });
    answersContainer.appendChild(button);
  });

  spanQtd.innerText = `${currentQuestionIndex + 1}/${questions.length}`;
}

function showResults() {
  questionElement.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
  answersContainer.style.display = 'none';
  finishContainer.style.display = 'flex';
}

loadQuestion();

document.querySelector('.finish button').addEventListener('click', () => {
  score = 0;
  currentQuestionIndex = 0;
  answersContainer.style.display = 'flex';
  finishContainer.style.display = 'none';
  loadQuestion();
});
