const questions = {
    "Verbo to be": {
        easy: [
            { question: "What is the correct form? 'I ___ a student.'", options: ["am", "is", "are", "be"], answer: 0 },
            { question: "Which is correct? 'They ___ happy.'", options: ["am", "is", "are", "be"], answer: 2 },
            { question: "What is the past form of 'to be' for 'I'?", options: ["was", "were", "be", "am"], answer: 0 },
            { question: "Choose the correct answer: 'He ___ a teacher.'", options: ["is", "are", "am", "be"], answer: 0 },
            { question: "Which sentence is correct? 'You ___ my friend.'", options: ["am", "is", "are", "be"], answer: 2 },
            { question: "What is the correct form? 'She ___ at home.'", options: ["am", "is", "are", "be"], answer: 1 },
            { question: "They ___ students.", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "We ___ happy.", options: ["is", "am", "are", "be"], answer: 2 },
            { question: "What is the correct form? 'He ___ a doctor.'", options: ["am", "is", "are", "be"], answer: 1 },
            { question: "I ___ here.", options: ["is", "are", "am", "be"], answer: 2 },
        ],
        medium: [
            { question: "What is the plural of 'I'? ", options: ["We", "They", "You", "Us"], answer: 0 },
            { question: "Fill in the blank: 'She ___ not here.'", options: ["is", "are", "be", "am"], answer: 0 },
            { question: "Choose the correct form: 'He ___ very tall.'", options: ["is", "are", "am", "be"], answer: 0 },
            { question: "Which sentence is correct? 'They ___ my friends.'", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "What is the past of 'to be' for 'you'?", options: ["was", "were", "be", "am"], answer: 1 },
            { question: "We ___ happy yesterday.", options: ["is", "are", "be", "were"], answer: 3 },
            { question: "Choose the correct form: 'I ___ at the party.'", options: ["am", "is", "are", "be"], answer: 0 },
            { question: "What is the correct form? 'They ___ my friends.'", options: ["am", "is", "are", "be"], answer: 2 },
            { question: "He ___ a good student.", options: ["am", "is", "are", "be"], answer: 1 },
            { question: "She ___ from Spain.", options: ["am", "is", "are", "be"], answer: 1 },
        ],
        hard: [
            { question: "Which sentence is correct?", options: ["He are a doctor.", "He am a doctor.", "He is a doctor.", "He be a doctor."], answer: 2 },
            { question: "What is the past of 'to be' for 'we'?", options: ["was", "were", "be", "am"], answer: 1 },
            { question: "Fill in the blank: 'They ___ not friends.'", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "Choose the correct sentence.", options: ["I am happy", "I is happy", "I are happy", "I be happy"], answer: 0 },
            { question: "What is the correct form? 'You ___ here yesterday.'", options: ["was", "were", "be", "am"], answer: 1 },
            { question: "Which sentence is correct?", options: ["She are a teacher", "She is a teacher", "She am a teacher", "She be a teacher"], answer: 1 },
            { question: "What is the correct past form for 'I'? ", options: ["was", "were", "am", "be"], answer: 0 },
            { question: "What is the correct form? 'We ___ happy yesterday.'", options: ["was", "were", "am", "be"], answer: 1 },
            { question: "Choose the correct form: 'You ___ my friend.'", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "What is the correct form? 'It ___ raining yesterday.'", options: ["was", "were", "am", "be"], answer: 0 },
        ]
    },
    // Agrega aquí las otras categorías
    "Comparativo y Superlativo": {
        easy: [
            { question: "What is the comparative form of 'tall'?", options: ["taller", "more tall", "tallest", "most tall"], answer: 0 },
            { question: "Choose the correct form: 'She is ___ than him.'", options: ["more beautiful", "beautifuller", "most beautiful", "beautifuler"], answer: 0 },
            { question: "What is the superlative form of 'fast'?", options: ["fastest", "more fast", "faster", "most fast"], answer: 0 },
            { question: "What is the comparative form of 'big'?", options: ["bigger", "more big", "biggest", "biger"], answer: 0 },
            { question: "Choose the correct answer: 'He is ___ than me.'", options: ["smarter", "smartest", "more smart", "smartest"], answer: 0 },
            { question: "What is the superlative form of 'small'?", options: ["smallest", "smaller", "most small", "more small"], answer: 0 },
            { question: "What is the comparative form of 'old'?", options: ["older", "oldest", "more old", "most old"], answer: 0 },
            { question: "What is the superlative form of 'young'?", options: ["youngest", "younger", "most young", "more young"], answer: 0 },
            { question: "Choose the correct form: 'She is ___ than he is.'", options: ["more intelligent", "most intelligent", "intelligenter", "intelligentest"], answer: 0 },
            { question: "What is the comparative form of 'cheap'?", options: ["cheaper", "more cheap", "cheapest", "cheap"], answer: 0 },
        ],
        medium: [
            { question: "What is the superlative form of 'difficult'?", options: ["most difficult", "difficulter", "difficultest", "more difficult"], answer: 0 },
            { question: "Choose the correct answer: 'This book is ___ than that one.'", options: ["more interesting", "interestinger", "interestest", "most interesting"], answer: 0 },
            { question: "What is the comparative form of 'happy'?", options: ["happier", "more happy", "happyest", "most happy"], answer: 0 },
            { question: "Choose the correct form: 'This movie is the ___ I have ever seen.'", options: ["most exciting", "more exciting", "excitingest", "exciter"], answer: 0 },
            { question: "What is the comparative form of 'far'?", options: ["farther", "more far", "farest", "most far"], answer: 0 },
            { question: "What is the superlative form of 'lazy'?", options: ["laziest", "lazier", "most lazy", "more lazy"], answer: 0 },
            { question: "Choose the correct form: 'This test was ___ than the last one.'", options: ["easier", "more easy", "easiest", "easyer"], answer: 0 },
            { question: "What is the comparative form of 'bad'?", options: ["worse", "badder", "worst", "most bad"], answer: 0 },
            { question: "What is the superlative form of 'good'?", options: ["best", "goodest", "most good", "better"], answer: 0 },
            { question: "Choose the correct answer: 'She is the ___ student in the class.'", options: ["smartest", "more smart", "smart", "most smart"], answer: 0 },
        ],
        hard: [
            { question: "Choose the correct answer: 'His car is ___ than mine.'", options: ["more expensive", "expensiver", "expensivest", "most expensive"], answer: 0 },
            { question: "What is the superlative form of 'far'?", options: ["farthest", "farest", "most far", "farth"], answer: 0 },
            { question: "What is the comparative form of 'little'?", options: ["less", "littler", "least", "most little"], answer: 0 },
            { question: "Choose the correct form: 'This problem is the ___ one we have faced.'", options: ["most challenging", "challenginger", "challengest", "more challenging"], answer: 0 },
            { question: "What is the comparative form of 'good'?", options: ["better", "gooder", "more good", "most good"], answer: 0 },
            { question: "What is the superlative form of 'bad'?", options: ["worst", "most bad", "worse", "baddest"], answer: 0 },
            { question: "Choose the correct answer: 'This exam was ___ than the previous one.'", options: ["harder", "most hard", "more harder", "hardest"], answer: 0 },
            { question: "What is the superlative form of 'hot'?", options: ["hottest", "hotter", "most hot", "more hot"], answer: 0 },
            { question: "What is the comparative form of 'interesting'?", options: ["more interesting", "interestinger", "interestest", "most interesting"], answer: 0 },
            { question: "Choose the correct form: 'That mountain is the ___ in the country.'", options: ["highest", "higher", "highiest", "most high"], answer: 0 },
        ]
    },

    "Comparativos de Igualdad y Desigualdad" : {
        easy: [
            { question: "Which sentence is correct? 'She is as tall ___ her brother.'", options: ["as", "than", "like", "of"], answer: 0 },
            { question: "Choose the correct option: 'This book is ___ interesting as that one.'", options: ["as", "so", "more", "like"], answer: 0 },
            { question: "What is the correct answer? 'He runs ___ fast as his friend.'", options: ["as", "than", "more", "less"], answer: 0 },
            { question: "Complete the sentence: 'This car is not ___ expensive as that one.'", options: ["as", "so", "more", "like"], answer: 1 },
            { question: "Choose the correct form: 'She is ___ smart as him.'", options: ["as", "more", "so", "than"], answer: 0 },
            { question: "What is the correct answer? 'He speaks ___ clearly as a teacher.'", options: ["as", "so", "than", "like"], answer: 1 },
            { question: "Select the correct form: 'This game is not ___ exciting as the last one.'", options: ["as", "so", "more", "less"], answer: 1 },
            { question: "Choose the correct option: 'He is as good ___ his brother.'", options: ["as", "so", "than", "like"], answer: 0 },
            { question: "Which is correct? 'This task is ___ difficult as the other one.'", options: ["as", "so", "more", "less"], answer: 0 },
            { question: "Choose the correct form: 'They are as hardworking ___ their parents.'", options: ["as", "so", "more", "than"], answer: 0 },
        ],
        medium: [
            { question: "Complete the sentence: 'Her house is not ___ big as her friend's.'", options: ["as", "so", "more", "than"], answer: 1 },
            { question: "What is the correct option? 'This film is as interesting ___ that one.'", options: ["as", "so", "more", "than"], answer: 0 },
            { question: "Choose the correct answer: 'This road is not ___ dangerous as it looks.'", options: ["as", "so", "more", "less"], answer: 1 },
            { question: "Select the correct form: 'He is not as tall ___ his father.'", options: ["as", "so", "more", "than"], answer: 0 },
            { question: "What is the correct answer? 'The cat is ___ agile as the dog.'", options: ["as", "so", "more", "than"], answer: 0 },
            { question: "Choose the correct option: 'This meal is as tasty ___ the one we had yesterday.'", options: ["as", "so", "more", "like"], answer: 0 },
            { question: "Which is correct? 'Her singing is not ___ good as his.'", options: ["as", "so", "more", "than"], answer: 1 },
            { question: "Complete the sentence: 'This movie is not ___ funny as that comedy show.'", options: ["as", "so", "more", "less"], answer: 1 },
            { question: "Choose the correct option: 'My score is as high ___ his.'", options: ["as", "so", "more", "than"], answer: 0 },
            { question: "What is the correct form? 'The test is ___ challenging as expected.'", options: ["as", "so", "more", "than"], answer: 1 },
        ],
        hard: [
            { question: "Choose the correct sentence: 'She is not as hardworking ___ her colleague.'", options: ["as", "so", "more", "than"], answer: 0 },
            { question: "Select the correct form: 'The new model is as efficient ___ the old one.'", options: ["as", "so", "more", "less"], answer: 0 },
            { question: "Complete the sentence: 'This software is as user-friendly ___ possible.'", options: ["as", "so", "than", "like"], answer: 0 },
            { question: "Which sentence is correct? 'Their house is not ___ modern as ours.'", options: ["as", "so", "than", "more"], answer: 1 },
            { question: "Choose the correct option: 'He is not as talkative ___ his friend.'", options: ["as", "so", "than", "like"], answer: 1 },
            { question: "What is the correct answer? 'This project is as important ___ the previous one.'", options: ["as", "so", "more", "than"], answer: 0 },
            { question: "Choose the correct option: 'Their team is not ___ strong as last year.'", options: ["as", "so", "more", "less"], answer: 1 },
            { question: "Complete the sentence: 'The view here is as beautiful ___ we imagined.'", options: ["as", "so", "more", "like"], answer: 0 },
            { question: "What is the correct answer? 'This task is not ___ easy as it seems.'", options: ["as", "so", "more", "less"], answer: 1 },
            { question: "Choose the correct form: 'The course is as demanding ___ any professional training.'", options: ["as", "so", "more", "less"], answer: 0 },
        ]
    },
    "Comparativos de Inferioridad" : {
    easy: [
        { question: "Choose the correct form: 'This exercise is ___ difficult than that one.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct answer? 'He is ___ strong than his brother.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Complete the sentence: 'The movie was ___ interesting than expected.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct option: 'This task is ___ challenging than the last one.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Which is correct? 'She is ___ confident than him.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct answer? 'This book is ___ exciting than that one.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct form: 'Today is ___ cold than yesterday.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Complete the sentence: 'This drink is ___ sweet than the other.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct option? 'My score is ___ high than yours.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct answer: 'This job is ___ stressful than my last one.'", options: ["less", "more", "as", "so"], answer: 0 },
    ],
    medium: [
        { question: "Select the correct form: 'This road is ___ dangerous than it appears.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Complete the sentence: 'He is ___ talented than his sister.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct answer: 'The film was ___ scary than I thought.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct option? 'The food here is ___ spicy than I expected.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Complete the sentence: 'My phone is ___ expensive than hers.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Which is correct? 'This topic is ___ complicated than the last one.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct option: 'He is ___ experienced than his colleagues.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct form? 'The second round was ___ difficult than the first.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Complete the sentence: 'This room is ___ noisy than the others.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct answer: 'Her explanation was ___ clear than the teacher's.'", options: ["less", "more", "as", "so"], answer: 0 },
    ],
    hard: [
        { question: "Which sentence is correct? 'The weather here is ___ harsh than in the mountains.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct answer? 'His ideas were ___ innovative than hers.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct form: 'This painting is ___ complex than the last one.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Complete the sentence: 'The second experiment was ___ successful than the first.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct answer? 'Her speech was ___ persuasive than his.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Select the correct option: 'This course is ___ demanding than expected.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Complete the sentence: 'His response was ___ enthusiastic than before.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Choose the correct answer: 'The problem is ___ serious than we thought.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "What is the correct option? 'Her involvement was ___ significant than planned.'", options: ["less", "more", "as", "so"], answer: 0 },
        { question: "Select the correct form: 'This version is ___ advanced than the previous one.'", options: ["less", "more", "as", "so"], answer: 0 },
    ]
},
};

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

document.getElementById("startButton").addEventListener("click", () => {
    const playerName = document.getElementById("playerName").value;
    if (playerName) {
        document.getElementById("welcome").style.display = "none";
        document.getElementById("menu").style.display = "block";
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});

document.getElementById("loadCategoryButton").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    selectedQuestions = questions[category][difficulty];
    currentQuestionIndex = 0; // Reiniciar el índice de preguntas
    score = 0; // Reiniciar la puntuación
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        const questionData = selectedQuestions[currentQuestionIndex];
        document.getElementById("menu").style.display = "none";
        document.getElementById("questionContainer").style.display = "block";
        document.getElementById("question").innerText = questionData.question;
        const optionsContainer = document.getElementById("optionsContainer");
        optionsContainer.innerHTML = ""; // Limpiar opciones anteriores

        questionData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "option";
            button.innerText = option;
            button.addEventListener("click", () => checkAnswer(index));
            optionsContainer.appendChild(button);
        });
    } else {
        showScore();
    }
}

function checkAnswer(selectedIndex) {
    const questionData = selectedQuestions[currentQuestionIndex];
    if (selectedIndex === questionData.answer) {
        score++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + questionData.options[questionData.answer]);
    }
    currentQuestionIndex++;
    loadQuestion(); // Cargar la siguiente pregunta
}

function showScore() {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("scoreContainer").style.display = "block";
    document.getElementById("score").innerText = score;
}
// Botón para volver al menú principal
document.getElementById("backToMenuButton").addEventListener("click", () => {
    location.reload(); // Recargar la página para volver a empezar
});
