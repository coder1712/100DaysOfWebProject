const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",

    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];





const startButton = document.getElementById('start-btn');
const startContainer = document.getElementById('Start');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const response = document.getElementById('response');
const viewScore = document.getElementById('high-Score');
const scoreElement = document.getElementById('highscore-view');
const scoreContiner = document.getElementById('Score-Container');
const backButton = document.getElementById('back-btn');
const clearScore = document.getElementById('clear-score');
const submitContainer = document.getElementById('submit-container');
const submitScore =document.getElementById('submit-score');
const showscore = document.getElementById('score-view');
let initials = document.getElementById('fname');
let score = 0;
var seconds = 50;
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    startContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    countdown();
}

function setNextQuestion() {
    resetState();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questions) {
    questionElement.innerText = questions.questionText;

    questions.options.forEach(function(item) {
        const button = document.createElement('button');
        button.innerText = item;
        button.classList.add('btn');
        button.dataset.q = false;
        if (button.innerText === questions.answer) {
        button.dataset.q = true;
    }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function selectAnswer(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.q;
    const res = document.createElement('p');
    response.innerText = " ";
    if(correct == 'true'){
        score = score+5;
        res.innerText = "Correct!";
        response.appendChild(res);
    }else{
        seconds = seconds-10;
        res.innerText = "Incorrect!";
        response.appendChild(res);
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        setNextQuestion();
    }else{
        submitContainer.classList.remove('hide');
        questionContainerElement.classList.add('hide');
        const sp = document.createElement('span');
        sp.innerText = score;
        showscore.appendChild(sp);
        seconds =0;
    }
}

viewScore.addEventListener('click',showScore);
function showScore(e){
    scoreContiner.classList.remove('hide');
    startButton.classList.add('hide');
    submitContainer.classList.add('hide'); 
    questionContainerElement.classList.add('hide');
    startContainer.classList.add('hide');
    seconds = 0;
}

backButton.addEventListener('click',()=>{
    scoreContiner.classList.add('hide');
    startButton.classList.remove('hide');
    startContainer.classList.remove('hide');
    seconds = 0;
})

submitScore.addEventListener('click',()=>{
    const name = document.createElement('p');
    name.innerText = initials.value +": " +score;
    scoreElement.appendChild(name);
    submitContainer.classList.add('hide');
    startButton.classList.remove('hide');
    startContainer.classList.remove('hide');
    score = 0;
    seconds = 0;
})

clearScore.addEventListener('click',()=>{
    scoreElement.innerText = " ";
})

function countdown() {
    seconds = 50;
    function tick() {
        var counter = document.getElementById("timer");
        seconds--;
        if( seconds > 0 ) {
            counter.innerHTML = seconds;
            timeoutHandle=setTimeout(tick, 1000);
        }else{
            counter.innerHTML = 0;
        }
        if(seconds === 0){
        submitContainer.classList.remove('hide');
        questionContainerElement.classList.add('hide');
        const sp = document.createElement('span');
        sp.innerText = score;
        showscore.appendChild(sp);
        }
    }
    tick();
    }



function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    while (showscore.firstChild) {
        showscore.removeChild(showscore.firstChild);
    }
}
