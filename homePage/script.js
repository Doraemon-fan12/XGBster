document.getElementById("confirm-age").addEventListener("click", function() {
    document.getElementById("age-verification").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
    loadQuestion();
});

const questions = [
    { question: "What is 5 + 3?", answer: "8" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 10 / 2?", answer: "5" }
];

let currentQuestion = {};

function loadQuestion() {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("question").textContent = currentQuestion.question;
}

document.getElementById("submit-answer").addEventListener("click", function() {
    let userAnswer = document.getElementById("answer").value.trim();
    let message = document.getElementById("message");

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        window.location.href = "https://gitporn69.github.io/123/"; // Change to your desired link
    } else {
        message.textContent = `Incorrect! Type '${currentQuestion.answer}' exactly to proceed.`;
        document.getElementById("answer").value = "";
        document.getElementById("answer").setAttribute("placeholder", currentQuestion.answer);
    }
});
