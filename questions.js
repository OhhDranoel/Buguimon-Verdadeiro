export default [
    {
      question: "O que é hardware?",
      answers: [
        { option: "Tudo aquilo que não é visível e integra a parte física do computador", correct: true },
        { option: "Um sistema operacional para dispositivos móveis", correct: false },
        { option: "Tudo aquilo que não é visível e integra os códigos do computador", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Para que serve uma Placa-Mãe?",
      answers: [
        { option: "Para canalizar energia para todo o computador", correct: false },
        { option: "Para conectar e interligar todos os componentes", correct: true },
        { option: "Para manter uma temperatura adequada na máquina", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "O que é software?",
      answers: [
        { option: "Tudo aquilo presente nos periféricos de entrada e saída", correct: false },
        { option: "Um conjunto de códigos responsáveis por eliminar um possível vírus no computador", correct: false },
        { option: "Conjunto de instruções e códigos que fazem o computador executar tarefas", correct: true },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Qual é a função do SSD?",
      answers: [
        { option: "Controlar a temperatura do sistema", correct: false },
        { option: "Melhorar a qualidade da imagem", correct: false },
        { option: "Armazenar dados com mais rapidez", correct: true },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Qual á função principal da Memória RAM?",
      answers: [
        { option: "Armazenar dados permanentemente", correct: false },
        { option: "Melhorar a qualidade do áudio", correct: false },
        { option: "Armazenar temporiariamente dados em uso", correct: true },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Qual a principal função da Placa de Vídeo?",
      answers: [
        { option: "Gerar e processar imagens para o monitor", correct: true },
        { option: "Formatar o PC", correct: false },
        { option: "Fornecer energia para o processador", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "O que o Disco Rígido faz no compudaor?",
      answers: [
        { option: "Armazena permanentemente dados no computador", correct: true },
        { option: "Resfria o processador", correct: false },
        { option: "Armazena temporariamente dados no computador", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Para que serve o Cooler?",
      answers: [
        { option: "Melhorar a conexão com a internet", correct: false },
        { option: "Manter o PC resfriado durante o uso", correct: true },
        { option: "Carregar a bateria mais rápido", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "Qual a funcionalidade do Processador?",
      answers: [
        { option: "Executar tarefas e programas", correct: true },
        { option: "Renderizar vídeo no monitor", correct: false },
        { option: "Baixar Programas", correct: false },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
    {
      question: "O que uma Unidade Óptica deve fazer normalmente?",
      answers: [
        { option: "Melhorar a qualidade de vídeo", correct: false },
        { option: "Disponibilizar funções de acessibilidade", correct: false },
        { option: "Ler e interagir com o Disco em sua totalidade", correct: true },
      ],
      handleAnswer: function(button, correct) {
        const isCorrect = correct;
        document.body.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        button.style.backgroundColor = isCorrect ? 'lightgreen' : 'lightcoral';
        
        return isCorrect;
      }
    },
  ];
