const questions = [
    {
        question: "Hva er hovedrollen til en CPU?",
        answers: ["Lagre data", "Utføre beregninger", "Rendere bilder"],
        correct: 1
    },
    {
        question: "Hvilken komponent er ansvarlig for grafikk?",
        answers: ["RAM", "GPU", "Lagringsenheter"],
        correct: 1
    },
    {
        question: "Hvor lagres midlertidige data?",
        answers: ["RAM", "CPU", "Harddisk"],
        correct: 0
    },
    {
        question: "Hvilken komponent kobler sammen alle andre komponenter?",
        answers: ["Motherboard", "Power Supply", "Case"],
        correct: 0
    },
    {
        question: "Hvilken komponent gir strøm til hele datamaskinen?",
        answers: ["CPU", "Power Supply", "Motherboard"],
        correct: 1
    },
    {
        question: "Hva er hovedfunksjonen til et PC-kabinett?",
        answers: [
            "Koble komponentene sammen",
            "Beskytte komponentene og gi struktur",
            "Lagre data"
        ],
        correct: 1
    }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-question");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answersElement.innerHTML = "";
    current.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = answer;
        li.className = "answer-option";
        li.addEventListener("click", () => checkAnswer(index));
        answersElement.appendChild(li);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    if (selected === correct) {
        alert("Riktig!");
    } else {
        alert("Feil, prøv igjen!");
    }
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Du har fullført quizzen! Bra jobbet!");
        currentQuestion = 0;
        loadQuestion();
    }
});

loadQuestion();
