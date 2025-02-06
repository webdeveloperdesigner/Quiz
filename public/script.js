// Write your code from here!!
document.addEventListener("DOMContentLoaded", async () => {
    let response = await fetch('/questions');
    let questions = await response.json();
    let maxQuestions = Math.min(10, questions.length);
    let selectedQuestions = questions.slice(0, maxQuestions);
    let index = 0, score = 0;

    function updateProgress() {
        document.getElementById("progress").style.width = `${(index / selectedQuestions.length) * 100}%`;
    }

    function loadQuestion() {
        if (index < selectedQuestions.length) {
            document.getElementById("question").innerText = selectedQuestions[index].question;
            let optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";

            selectedQuestions[index].options.forEach((opt) => {
                let btn = document.createElement("button");
                btn.innerText = opt;
                btn.onclick = () => {
                    if (opt === selectedQuestions[index].answer) { score++; }
                    index++; 
                    updateProgress();
                    loadQuestion();
                };
                optionsDiv.appendChild(btn);
            });
        } else {
            document.getElementById("quiz-container").innerHTML = `
                <h2>🎉 Your Score: ${score}/${selectedQuestions.length}</h2> <br><br>
                <p>Thank you for playing!</p><br><br>
                <button onclick="location.reload()">Restart Quiz</button>
            `;
        }
    }

    loadQuestion();
});
