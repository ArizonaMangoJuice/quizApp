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
        answerDescription: "Udyr was the first champion to be released out of the beta phase of league of legends."
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
        answerDescription: "League of Legends released on October 27, 2009. So close to 9 years."
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
        answerDescription: "The 'marksman character usually goes bottom lane.'"
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
        answerDescription: "The support, as the name implies helps other lanes and usually stays with the marksman early in the game."
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
        answerDescription: "The top laner usually stays in the top lane to fight the enemy top laner."
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
        answerDescription: "The mid laner usually stays in the mid lane to fight the enemy mid laner."
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
        answerDescription: "The bottom laners are the support and marksman and they usually fight the enemies bottom laners."
    },
    {
        question: "what else the middle laner do?",
        answers: [
            "roam to help other lanes",
            "clear the jungle and nuetral objectives",
            "lane against the enemy top laner",
            "just afk"
        ],
        answer: "roam to help other lanes",
        answerDescription: "Mid laners usually roam and stay to fight the enemy mid laners."
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
        answerDescription: "The jungler tries to capture the enemies jungle and tries to get nuetral objectives before the enemy jungler."
    }


];
let test = 0;
let score = 0;

function incrementScore() {
    score++;
    $("#Correct-Number").html(score);
}

function incrementNumber() {
    if (test === 9) {
        test++;
        return;
    }
    test++;
    $("#question-Number").html(test + 1);
}

function dynamicReturn(score) {
    if (score <= 6) return `You're not very knowledgeable of league of legends`
    if (score === 7) return `You have average knowledge of league of legends`;
    if (score === 8) return `You have above average knowledge of league of legends`;
    if (score === 9 || score === 10) return `Hot damn! You're good`;
}

function resultPage() {
    return `
        <div class="answer-page">
            <h1>You got ${(score*10)}% correct</h1>
            <h1 id="question">${dynamicReturn(score)}</h1>
            <button class="start-button" id="reset">RESTART</button>
        </div>
        `;
}

function renderAnswerPage() {
    //test++;
    return `
        <div class="answer-page ${$("input[name='question']:checked").val() == QUESTIONS[test]["answer"] ? "correct" : "incorrect"}">
            <h1>${$("input[name='question']:checked").val() == QUESTIONS[test]["answer"] ? "CORRECT!" : "INCORRECT!"}</h1>
            <h1 id="question">${QUESTIONS[test]["answerDescription"]}</h1>
            <button class="start-button" id="nextquestionbutton">NEXT</button>
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
                <input class="start-button" type="submit" id="next">
            </form>
        `
        )
    } else {
        $(".questions-part").html(resultPage());
        $(".questions-part").on("click", "#reset", function() {
            reset();
        });
        //reset();
    }
}

function reset() {
    test = 0;
    $("#question-Number").html(1)
    $("#Correct-Number").html(0)
    renderQuestions();
}

function createQuiz() {
    startPage();
    renderQuestions();
    nextQuestion();

    // resultPage();
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