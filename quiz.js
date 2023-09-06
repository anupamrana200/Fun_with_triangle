const quizForm = document.querySelector(".quiz-form")
const submitAnswer = document.querySelector("#submit-answer")
const output = document.querySelector("#output")

const rightAnswers = ["90°","Right angled","One right angle"]

function submitAnswerButtonClickHandler(){
    let score = 0
    let index = 0
    const formResults = new FormData(quizForm)
    for(let value of formResults.values()){
        if(value === rightAnswers[index]){
            score++
        }
        index++
    }
    output.innerText = "Your score is: "+score;

}


submitAnswer.addEventListener('click',submitAnswerButtonClickHandler)