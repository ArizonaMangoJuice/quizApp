const QUESTIONS = [{
        question: "When did league of legends get out of beta?",
        answers: [
            "spring 2009",
            "summer 2009",
            "fall 2009",
            "winter 2009"
        ],
        answer: "fall 2009",
        answerDescription: ""
    },
    {
        question: "What was the first champion released out of the beta phase?",
        answers: [
            "alistar",
            "udyr",
            "nidalee",
            "corki"
        ],
        answer: "udyr"
    },
    {
        question: "how many years does league of legends have since it's release",
        answers: [
            "1",
            "5",
            "10",
            "9"
        ],
        answer: "9"
    },
    {
        question: "what lane the does the 'marskman' character usually go",
        answers: [
            "top lane",
            "jungle lane",
            "middle lane",
            "bottom lane"
        ],
        answer: "bottom"
    },
    {
        question: "what does the support do during the match",
        answers: [
            "help the 'marksman' character and the team",
            "output the most amount of damage",
            "clear the jungle and help lanes",
            "leave the game and not do anything"
        ],
        answer: "help the 'marksman' character and the team"
    },
    {
        question: "what does the top laner do?",
        answers: [
            "push and lane against the other top laner",
            "play in the jungle and help other lanes",
            "lane against the middle lane opponent",
            "lane against the bottom opponents"
        ],
        answer: "push and lane against the other top laner"
    },
    {
        question: "what does the mid laner do?",
        answers: [
            "lane against the middle lane opponent",
            "lane against the bottom lane opponent",
            "quit the match and leave",
            "lane against the top lane opponent"
        ],
        answer: "lane against the middle lane opponent"
    },
    {
        question: "what do the bottom laners do?",
        answers: [
            "roam and help the other lanes",
            "lane against the enemy bot lane",
            "clear the jungle and take nuetral objectives",
            "lane against the enemy middle laner"
        ],
        answer: "lane against the enemy bot lane"
    },
    {
        question: "what does the middle laner do?",
        answers: [
            "lane against the enemy middle laner",
            "clear the jungle and nuetral objectives",
            "lane against the enemy top laner",
            "just afk"
        ],
        answer: "lane against the enemy middle laner"
    },
    {
        question: "what does the jungler do?",
        answers: [
            "lane against the enemy mid laner",
            "clear the jungle and nuetral objectives",
            "lane against the enemy bot lane",
            "support the marksman in bot lane"
        ],
        answer: "clear the jungle and nuetral objectives"
    }


];
let test = 0;

function nextQuestion() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        console.log($("input[name='question']:checked").val() == QUESTIONS[test]["answer"]);

        if ($("input[name='question']:checked").val() == QUESTIONS[test]["answer"]) {
            test++;
            renderQuestions();
        }



    });
}

function renderQuestions() {
    $(".questions-part").html(
        `
            <h1>${QUESTIONS[test]["question"]}</h1>
            <form>
                <label>
                    <input type="radio" name="question" value="${QUESTIONS[test]["answers"][0]}">
                    <span>${QUESTIONS[test]["answers"][0]}</span>
                </label>
                <label>
                    <input type="radio" name="question" value="${QUESTIONS[test]["answers"][1]}">
                    <span>${QUESTIONS[test]["answers"][1]}</span>
                </label>
                <label>
                    <input type="radio" name="question" value="${QUESTIONS[test]["answers"][2]}">
                    <span>${QUESTIONS[test]["answers"][2]}</span>
                </label>
                <label>
                    <input type="radio" name="question" value="${QUESTIONS[test]["answers"][3]}">
                    <span>${QUESTIONS[test]["answers"][3]}</span>
                </label>
                <input type="submit" id="next">
            </form>
        `
    )
}

function createQuiz() {
    renderQuestions();
    nextQuestion();
}

$(createQuiz);