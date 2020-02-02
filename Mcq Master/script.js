const questions = [ {
    question: 'Who is Father Of Science?',
    answers: [
      { text: 'Albert Einstein', correct: true },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Thomas Alba Edison', correct: false },
      { text: 'Newton', correct: false }
    ]
  },
  
  {
    question: 'Which neural network is related to image?',
    answers: [
      { text: 'RNN', correct: false },
      { text: 'CNN', correct: true },
      { text: 'ANN', correct: false },
      { text: 'GAN', correct: false }
    ]
  },
  {
    question: 'What is linear regressor?',
    answers: [
      { text: 'NeuralNetwork', correct: false },
      { text: 'Ml Algorithm', correct: true },
      { text: 'Web Term', correct: false },
      { text: 'Other', correct: false }

    ]
  }
                ]     

let randomQuestions, currentQuestionIndex;
var questionElement = document.querySelector('.question');
var startBtn = document.getElementById('start');
var nextBtn = document.getElementById('next');
var answerButtonsElement = document.getElementById('answer-buttons');
var scoreText = document.getElementById('score');
var score = 0;

question_json = JSON.stringify(questions);
localStorage.setItem("QuestionJSON",question_json);

const start = () => {
    startBtn.style.visibility = "hidden";
    answerButtonsElement.style.visibility = "visible";

    startQuiz();
    
}


function startQuiz() {
    let que = localStorage.getItem("QuestionJSON");
    let questionLists =  JSON.parse(que);
    randomQuestions = questionLists.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    nextQuestion();

    
}



function displayQuestion(question) {
    if (question != undefined)
    {
        questionElement.innerText = question.question
        question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        nextBtn.innerText = "Next";
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }  
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        })
        }

    else {
        var button = document.createElement('button')
        nextBtn.innerText = "Next";
        button.classList.add('btn');
        button.innerText = "Restart";
        questionElement.innerText = "Finished";
        answerButtonsElement.appendChild(button);
        button.addEventListener('click', start);
        score = 0;
    }
    
    
    }

    


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
            score += 1;
            scoreText.innerHTML = score;
            nextBtn.classList.add('btn')
            nextBtn.innerText = "Next"; 

     
    }
    
    
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })


    
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
      nextBtn.style.visibility = "visible";
      
    } 
    
    else {
      element.classList.add('wrong')

    }
  }
 


function nextQuestion() {
    resetState()    
    displayQuestion(randomQuestions[currentQuestionIndex])
  }
  

  function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    }


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    }


startBtn.addEventListener('click', start);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
})