let questions = [
    {
        "question": "Qui est GERALD ?",
        "answers": [
            "Un homme",
            "Une femme",
            "Un ange"
        ],
        "right_answer": "Un homme"
    },
    {
        "question": "Qui est GERALD 2 ?",
        "answers": [
            "Un homme",
            "Une femme",
            "Un ange"
        ],
        "right_answer": "Un homme"
    },
    {
        "question": "Qui est GERALD 3 ?",
        "answers": [
            "Un homme",
            "Une femme",
            "Un ange"
        ],
        "right_answer": "Un homme"
    },
    {
        "question": "Qui est GERALD 4 ?",
        "answers": [
            "Un homme",
            "Une femme",
            "Un ange"
        ],
        "right_answer": "Un homme"
    },
    {
        "question": "Qui est GERALD 5 ?",
        "answers": [
            "Un homme",
            "Une femme",
            "Un ange"
        ],
        "right_answer": "Un homme"
    }

]

let questionCard = document.querySelector("#questionCard")
let verifierBtn = document.querySelector("#verifier")

let indexQuestion = 0;

function questionSuivante() {

    questionCard.innerHTML = "";

    const question = questions[indexQuestion]["question"];
    let questionObj = document.createElement("h3")
    questionObj.innerText = question
    questionCard.appendChild(questionObj);

    const answers = questions[indexQuestion]["answers"];
    let answerObj = document.createElement("ul");

    answers.forEach(answer => {
        let ansObj = document.createElement("li")
        let aObj = document.createElement("input")
        aObj.type = "radio"
        aObj.name = "q" + indexQuestion
        aObj.value = answer

        ansObj.appendChild(aObj)

        let textObj = document.createElement("span")
        textObj.innerText = answer
        ansObj.appendChild(textObj)
        answerObj.appendChild(ansObj);

        questionCard.appendChild(answerObj);

    });



}


questionSuivante();

verifierBtn.addEventListener("click", function () {
    indexQuestion += 1
    // IF bonne réponse, question suivante sinon on reste lààààà !!!!!!!!
    questionSuivante();
})

