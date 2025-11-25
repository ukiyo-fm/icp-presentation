// Week 8 – Leadership Personality Quiz
document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
        visionary: 0,
        organized: 0,
        empathetic: 0
    };

    // Count chosen options
    const choices = document.querySelectorAll("input[type=radio]:checked");
    choices.forEach(choice => answers[choice.value]++);

    const resultBox = document.getElementById("resultBox");

    if (choices.length < 3) {
        resultBox.textContent = "⚠️ Please answer all questions!";
        resultBox.style.color = "red";
        return;
    }

    // Determine dominant style
    let leaderType = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);

    let message = "";
    if (leaderType === "visionary") {
        message = "🌟 You are a Visionary Leader! You inspire others with creativity and big-picture thinking.";
    } else if (leaderType === "organized") {
        message = "🧭 You are a Strategic Leader! You value structure, efficiency, and clear goals.";
    } else {
        message = "💬 You are an Empathetic Leader! You connect deeply with people and lead through support and trust.";
    }

    resultBox.style.color = "#1a73e8";
    resultBox.textContent = message;
});

