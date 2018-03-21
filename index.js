const QUESTIONS = [{
        question: "When did league of legends get out of beta?",
        answers: [
            "spring 2009",
            "summer 2009",
            "fall 2009",
            "winter 2009"
        ],
        answer: "fall 2009",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "What was the first champion released out of the beta phase?",
        answers: [
            "alistar",
            "udyr",
            "nidalee",
            "corki"
        ],
        answer: "udyr",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "how many years does league of legends have since it's release",
        answers: [
            "1",
            "5",
            "10",
            "9"
        ],
        answer: "9",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "what lane the does the 'marskman' character usually go?",
        answers: [
            "top lane",
            "jungle lane",
            "middle lane",
            "bottom lane"
        ],
        answer: "bottom lane",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "what does the support do during the match?",
        answers: [
            "help the 'marksman' character and the team",
            "output the most amount of damage",
            "clear the jungle and help lanes",
            "leave the game and not do anything"
        ],
        answer: "help the 'marksman' character and the team",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "what does the top laner do?",
        answers: [
            "push and lane against the other top laner",
            "play in the jungle and help other lanes",
            "lane against the middle lane opponent",
            "lane against the bottom opponents"
        ],
        answer: "push and lane against the other top laner",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "what does the mid laner do?",
        answers: [
            "lane against the middle lane opponent",
            "lane against the bottom lane opponent",
            "quit the match and leave",
            "lane against the top lane opponent"
        ],
        answer: "lane against the middle lane opponent",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "what do the bottom laners do?",
        answers: [
            "roam and help the other lanes",
            "lane against the enemy bot lane",
            "clear the jungle and take nuetral objectives",
            "lane against the enemy middle laner"
        ],
        answer: "lane against the enemy bot lane",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "what does the middle laner do?",
        answers: [
            "lane against the enemy middle laner",
            "clear the jungle and nuetral objectives",
            "lane against the enemy top laner",
            "just afk"
        ],
        answer: "lane against the enemy middle laner",
        answerDescription: "League of Legends released on October 27, 2009."
    },
    {
        question: "what does the jungler do?",
        answers: [
            "lane against the enemy mid laner",
            "clear the jungle and nuetral objectives",
            "lane against the enemy bot lane",
            "support the marksman in bot lane"
        ],
        answer: "clear the jungle and nuetral objectives",
        answerDescription: "League of Legends released on October 27, 2009."
    }


];
let test = 0;
let score = 0;

function incrementScore() {
    score++;
    $("#Correct-Number").html(score);
}

function incrementNumber() {
    test++;
    $("#question-Number").html(test + 1);
}

function renderAnswerPage() {
    //test++;
    return `
        <div class="answer-page ${$("input[name='question']:checked").val() == QUESTIONS[test]["answer"] ? "correct" : "incorrect"}">
            <h1>${$("input[name='question']:checked").val() == QUESTIONS[test]["answer"] ? "CORRECT!" : "INCORRECT!"}</h1>
            <h1 id="question">${QUESTIONS[test]["answerDescription"]}</h1>
            <button id="nextquestionbutton">NEXT</button>
        </div>
        `;
    //why do i need to increment the number here and it breaks anywhere else?
}

function startPage() {
    $(".start-button").click(function() {
        $(".intro-title").remove();
        $(".questions-part").removeClass("hidden");
    });
}

function answerPage() {
    $(".questions-part").html(renderAnswerPage());
    $(".questions-part").on("click", "#nextquestionbutton", function() {

        renderQuestions();
    });

}

function nextQuestion() {
    $(".questions-part").on("submit", function(e) {
        e.preventDefault();
        console.log(test);

        if ($("input[name='question']:checked").val() == QUESTIONS[test]["answer"]) {
            incrementScore();
            answerPage();
            incrementNumber();
        } else {
            answerPage();
            incrementNumber();
        }



    });
}

function renderQuestions() {
    if (test <= 9) {
        $(".questions-part").html(
            `
            <h1 id="question">${QUESTIONS[test]["question"]}</h1>
            <form>
                <div class="radio-style">
                    <input type="radio" id="question-one" name="question" value="${QUESTIONS[test]["answers"][0]}" required>
                    <label for="question-one">${QUESTIONS[test]["answers"][0]}</label>
                </div>
                <div class="radio-style">
                    <input type="radio" id="question-two" name="question" value="${QUESTIONS[test]["answers"][1]}" required> 
                    <label for="question-two">${QUESTIONS[test]["answers"][1]}</label>
                </div>
                <div class="radio-style">
                    <input type="radio" id="question-three" name="question" value="${QUESTIONS[test]["answers"][2]}" required>
                    <label for="question-three">${QUESTIONS[test]["answers"][2]}</label>
                </div>
                <div class="radio-style">
                    <input type="radio" id="question-four" name="question" value="${QUESTIONS[test]["answers"][3]}" required>
                    <label for="question-four">${QUESTIONS[test]["answers"][3]}</label>
                </div>
                <input type="submit" id="next">
            </form>
        `
        )
    } else {
        test = 0;
        $("#question-Number").html(1)
    }
}

function reset() {

}

function createQuiz() {
    startPage();
    renderQuestions();
    nextQuestion();
}

$(createQuiz);

/*
<div class="radio-item">
            <input type="radio" id="ritema" name="ritem" value="ropt1">
            <label for="ritema">${QUESTIONS[test]["answers"][0]}</label>
        </div>
        
        <div class="radio-item">
            <input type="radio" id="ritemb" name="ritem" value="ropt2">
            <label for="ritemb">Option 2</label>
        </div>
*/