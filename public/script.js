// Write your code from here!!
document.addEventListener("DOMContentLoaded", async () => {
    let response = await fetch('/questions');
    let questions = await response.json();
    let index = 0, score = 0;

    function loadQuestion() {
        if (index < questions.length) {
            document.getElementById("question").innerText = questions[index].question;
            let optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";
            questions[index].options.forEach((opt) => {
                let btn = document.createElement("button");
                btn.innerText = opt;
                btn.onclick = () => {
                    if (opt === questions[index].answer) { 
                        score++; 
                    }
                    index++; 
                    loadQuestion();
                };
                optionsDiv.appendChild(btn);
            });
        } else {
            document.getElementById("quiz-container").innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
        }
    }
    loadQuestion();
});
