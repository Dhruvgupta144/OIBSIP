document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('username');
  const useremail = localStorage.getItem('useremail');
  document.getElementById("name").innerText = "welcome "+username;
});
    var questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: "Jupiter"
  }
];

var score = 0;
function initializeQuiz() {
  var questionsDiv = document.getElementById("questions");
  
  questions.forEach(function(question, index) {
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    
    var questionTitle = document.createElement("div");
    questionTitle.innerText = "Question " + (index + 1) + ": " + question.question;
    questionDiv.appendChild(questionTitle);
    
    question.options.forEach(function(option) {
      var optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.innerText = option;
      optionButton.onclick = function() {
        checkAnswer(option, question.answer);
        disableOptions(questionDiv);
      };
      questionDiv.appendChild(optionButton);
    });
    questionsDiv.appendChild(questionDiv);
  });
}

function disableOptions(questionDiv) {
  var optionButtons = questionDiv.querySelectorAll(".option");
  optionButtons.forEach(function(button) {
    button.disabled = true;
  });
}
function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
   
  }
}

function showResult() {

  document.getElementById("result").innerText = "your score is: " + score;
}

// Initialize the quiz when the page loads
initializeQuiz();


