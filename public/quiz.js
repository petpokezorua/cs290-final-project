var startButton = document.getElementById("start")
var nextButton = document.getElementById("next")
var quizBox = document.getElementById("quiz-box")
var guideBox = document.getElementById("guide-box")
var optionList = document.getElementsByClassName("option-container")
var resultList = document.getElementsByClassName("result-container")
var option1 = document.getElementById("option-4")
var option2 = document.getElementById("option-5")
var option3 = document.getElementById("option-6")
var option4 = document.getElementById("option-7")

var correct = new Audio('correct.mp3');
correct.volume = 0.2;
var wrong = new Audio('wrong.mp3');
wrong.volume = 0.2;

// Game Information Variables

var numberCorrect = 0;
var numberIncorrect = 0;
var currentGrade = 1;
var currentQuestion = 0;
var previousQuestion = -1;
var currentlySelected = -1;
var won = false;
var userAnswer = "";
var nextQuestionCounter = 0;

function playTheGame() {
    quizBox.style.display = "block";
    guideBox.style.display = "none";
    nextButton.style.display = "block";
}

function nextQuestion(correctAnswer) {
    if (nextQuestionCounter % 2 == 0) {
        if (userAnswer == "") {
            alert("Please choose an answer.");
            return;
        }
        evaluateAnswer();
        nextQuestionCounter++;
        userAnswer = "";
    } else {
        displayNextQuestion();
        nextQuestionCounter++;
        //ButtonReimplementation()

    }
    console.log(nextQuestionCounter);
}



// Implementing the answers to the answer variable. Each represents an answer.
function chooseAnswer1() {
    var counter = (1 + currentQuestion) * 4
    currentlySelected = 1;
    userAnswer = document.getElementById("option-" + counter).innerHTML;
    console.log("Option 1 Answer:", userAnswer);
    return userAnswer;
}

function chooseAnswer2() {
    var counter = (1 + currentQuestion) * 4 + 1
    currentlySelected = 2;
    userAnswer = document.getElementById("option-" + counter).innerHTML;
    console.log("Option 2 Answer:", userAnswer);
    return userAnswer;
}

function chooseAnswer3() {
    var counter = (1 + currentQuestion) * 4 + 2
    currentlySelected = 3;
    userAnswer = document.getElementById("option-" + (counter)).innerHTML;
    console.log("Option 3 Answer:", userAnswer);
    return userAnswer;
}

function chooseAnswer4() {
    var counter = (1 + currentQuestion) * 4 + 3
    currentlySelected = 4;
    userAnswer = document.getElementById("option-" + (counter)).innerHTML;
    console.log("Option 4 Answer:", userAnswer);
    return userAnswer;
}

// Returns true if answer was correct, otherwise return false
function evaluateAnswer() {
    var allQuestions = document.getElementsByClassName("custom-box quiz-box");

    previousQuestion = currentQuestion;
    correctAnswer = allQuestions[currentQuestion].getAttribute("answer");
    correctAnswer = correctAnswer.replaceAll("_", " ")
    currentQuestion += 1;

    // Disable incorrect choices
    var tempCounter = (currentQuestion) * 4
    var button1 = document.getElementById("option-" + tempCounter)
    button1.disabled = true;
    console.log("Correct Answer " + correctAnswer)
    console.log(button1.innerHTML)
    if(button1.innerHTML == correctAnswer){
        button1.className = "answer-option-correct"
    }else{
        button1.className = "answer-option-incorrect"
    }
    tempCounter += 1;
    var button2 = document.getElementById("option-" + tempCounter)
    button2.disabled = true;
    console.log(button2.innerHTML)
    if(button2.innerHTML == correctAnswer){
        button2.className = "answer-option-correct"
    }else{
        button2.className = "answer-option-incorrect"
    }
    tempCounter += 1;
    var button3 = document.getElementById("option-" + tempCounter)
    button3.disabled = true;
    console.log(button3.innerHTML)
    if(button3.innerHTML == correctAnswer){
        button3.className = "answer-option-correct"
    }else{
        button3.className = "answer-option-incorrect"
    }
    tempCounter += 1;
    var button4 = document.getElementById("option-" + tempCounter)
    button4.disabled = true;
    console.log(button4.innerHTML)
    if(button4.innerHTML == correctAnswer){
        button4.className = "answer-option-correct"
    }else{
        button4.className = "answer-option-incorrect"
    }



    if(userAnswer == correctAnswer){
        numberCorrect += 1;
        console.log("True");
        correct.play();
        return true;
    }else{
        numberIncorrect += 1;
        console.log("False");
        wrong.play();
    }
    return false;
}

function setResultPage(){
    nextButton.style.display = "none";

    if(numberIncorrect >= 3){
        var curGrade = Math.floor(currentQuestion / 3)
        var fakeDict = ["","st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th"]
        document.getElementById("result-box").innerHTML = `<H3>Unfortunately you failed!~</H3><p><br>You answered ${numberCorrect} questions correctly and missed ${numberIncorrect}!<br><br>It seems like at this level, you still a ${curGrade}${fakeDict[curGrade]} grader... Perhaps it is time to do some review!</p>`
    }else{
        document.getElementById("result-box").innerHTML = `<H3>Congratulations you passed!</H3><p><br>You answered ${numberCorrect} questions correctly and missed ${numberIncorrect}!<br><br>It seems like you are deserving to be in college!</p>`
    }
    document.getElementById("result-box").style.display = "block"
}

function displayNextQuestion(){
    var allQuestions = document.getElementsByClassName("custom-box quiz-box");

    allQuestions[previousQuestion].style.display = "none";
    if(currentQuestion >= 36 || numberIncorrect == 3){
        setResultPage()
        return
    }
    allQuestions[currentQuestion].style.display = "block";
    console.log(previousQuestion);
    console.log(currentQuestion);

    var tempCounter = (1 + currentQuestion) * 4
    option1 = document.getElementById("option-" + tempCounter)
    tempCounter += 1;
    option2 = document.getElementById("option-" + tempCounter)
    tempCounter += 1;
    option3 = document.getElementById("option-" + tempCounter)
    tempCounter += 1;
    option4 = document.getElementById("option-" + tempCounter)

    option1.addEventListener("click", chooseAnswer1)
    option2.addEventListener("click", chooseAnswer2)
    option3.addEventListener("click", chooseAnswer3)
    option4.addEventListener("click", chooseAnswer4)
}

startButton.addEventListener("click", playTheGame)
nextButton.addEventListener("click", nextQuestion)
option1.addEventListener("click", chooseAnswer1)
option2.addEventListener("click", chooseAnswer2)
option3.addEventListener("click", chooseAnswer3)
option4.addEventListener("click", chooseAnswer4)