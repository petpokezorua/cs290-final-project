
// Player Data
var numberCorrect = 0;
var numberIncorrect = 0;
var currentGrade = 1;
var currentQuestion = 0;
var numberOfQuestions = 0;
var currentQuestionObject = null;
var won = false;
var lastQuestions = [];
var lastTopic = "";

// Question Object Functions

// Randomly generates a Question Object for a question from the grade given
// Input: questions from questions.json and a grade (1-12) that is in string form (e.g. "1")
// Output: Question Object with a "question", "choices", and "answer" attribute
function getQuestionObject(questions, grade){
    // Note that grade is a string!
    var questionPool = JSON.parse(JSON.stringify(questions[grade]));    //Deep copy the list

    if(questionPool.length > 0){
        var maxLimit = 0;
        var maxTopicCheck = 0;
        var randomQuestion = Math.floor(Math.random() * questionPool.length);
        var question = questionPool[randomQuestion];
        while(lastQuestions.includes(question["question"]) || question["topic"] == lastTopic){
            if(maxLimit > 1000 || maxTopicCheck > 20){
                console.log("No more questions exist in grade " + grade + "! | " + question["question"])
                break;
            }
            if(question["topic"] == lastTopic){
                maxTopicCheck += 1
            }
            maxLimit += 1;
            randomQuestion = Math.floor(Math.random() * questionPool.length);
            question = questionPool[randomQuestion];
            currentQuestionObject = question;
        }

        lastQuestions.push(question["question"]);
        lastTopic = question["topic"];
        questionPool.splice(randomQuestion,1);
    }else{
        var question = {
            "question": "Invalid Question!!",
            "choices": ["1","2","3","Not enough questions were found for this grade!"],
            "answer": "Not enough questions were found for this grade!"
        }
    }
    var numberAdjusted = numberOfQuestions + 1;
    question["number"] = numberAdjusted
    question["option"] = [numberAdjusted * 4, numberAdjusted * 4 + 1,numberAdjusted * 4 + 2,numberAdjusted * 4 + 3]
    numberOfQuestions += 1;
    question["grade"] = grade;

    question["answer"] = question["answer"].replaceAll(" ", "_")
    question["choices"] = shuffle(question["choices"]);

    return question;
}

// Use to automatically fetch and handle questions
function fetchQuestion(questions, overrideGrade = ""){
    if(currentQuestion == 3){
        currentQuestion = 0;
        currentGrade += 1;
    }
    getGrade = currentGrade.toString();
    if(overrideGrade != ""){
        getGrade = overrideGrade;
    }
    var aQuestion = getQuestionObject(questions, getGrade);
    currentQuestion += 1;
    return aQuestion;
}

module.exports = {
    generateQuestions: function(questions, totalQuestions = 36){
        var questionArray = [];

        // Set all values back to default

        numberCorrect = 0;
        numberIncorrect = 0;
        currentGrade = 1;
        currentQuestion = 0;
        numberOfQuestions = 0;
        currentQuestionObject = null;
        won = false;
        lastQuestions = [];
        lastTopic = "";
        for(let i = 0; i < totalQuestions; i++){
            var newQuestion = fetchQuestion(questions);
            questionArray.push(newQuestion);
        }
        return questionArray;
    },
    calculateResults: function(questionObject, answer){
        if(validateAnswer(questionObject, answer)){
            numberCorrect += 1;
        }else{
            numberIncorrect += 1;
        }
    },

    hasWon: function(){
        if(currentGrade >= 12 && currentQuestion == 3){
            won = true;
        }
        return(won);
    },

    hasFailed: function(){
        return(numberIncorrect >= 3);
    },

    getResults: function(){
        results = {
            "numberCorrect": numberCorrect,
            "numberIncorrect": numberIncorrect,
            "currentGrade": currentGrade,
            "won": won
        }
        return results
    }

}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--){
        var randomShuffle = Math.floor(Math.random() * (i+1));
        var temp = arr[i];
        arr[i] = arr[randomShuffle]
        arr[randomShuffle] = temp;
    }
    return arr;
}



