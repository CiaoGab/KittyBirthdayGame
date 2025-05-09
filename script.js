<<<<<<< HEAD
const questions = [
    {
        question: "Where did Gaby famously get hit in the knee with a baseball and dove onto the street after a delayed reaction?",
        answers: [
            { text: "Gerard ave", correct: false },
            { text: "Tia Mary's House", correct: false },
            { text: "Papa's House in el millon", correct: true }
        ]
    },

    {
        question: "In his later years, what was papa's favorite pastime?",
        answers: [
            { text: "Sitting in his mesedora and watching tv", correct: true },
            { text: "putting on his chacabana and hitting the town", correct: false },
            { text: "Harrassing his grandkids with 'A PLATO LIMPIO' screams", correct: false },
        ]
    },

    {
        question: "What was the name of the girl that Gaby had a crush on that one summer? Hint: repeated chant: 'Gaby.loves._____",
        answers: [
            { text: "Ashley", correct: false },
            { text: "CoraLee", correct: true },
            { text: "Karina", correct: false },
        ]
    },

    {
        question: "Where did Kelvin and Edwin famously say Gaby was from because of his skin color?",
        answers: [
            { text: "Ocoa", correct: false },
            { text: "Bani", correct: false },
            { text: "Nizao", correct: true },
        ]
    },

    {
        question: "On the trip to Argentina, there was an action that we used to remember the trip. What was it?",
        answers: [
            { text: "Llama", correct: false },
            { text: "Quisiera ser un nino", correct: false },
            { text: "flight attendant", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerHTML = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.innerHTML = `Quiz completed! Your score: ${score}/${questions.length}`;
    answerButtonsElement.innerHTML = '';
    nextButton.innerHTML = 'Restart Quiz';
    nextButton.addEventListener('click', startQuiz);

    // Show celebration for high scores
    if (score >= 4) {
        const modal = document.getElementById('celebration-modal');
        const imagePopup = document.getElementById('image-popup');
        const sound = document.getElementById('celebration-sound');
        const prizeButton = document.getElementById('prize-button');
        
        // Show modal
        modal.style.display = 'block';
        
        // Play sound
        sound.play().catch(error => {
            console.log('Audio playback failed:', error);
        });

        // Handle prize button click
        prizeButton.onclick = function() {
            modal.style.display = 'none'; // Hide the celebration modal
            imagePopup.style.display = 'block';
            imagePopup.classList.add('show');
        }

        // Handle clicking the image popup
        imagePopup.onclick = function() {
            imagePopup.classList.remove('show');
            setTimeout(() => {
                imagePopup.style.display = 'none';
                modal.style.display = 'block'; // Show the celebration modal again
            }, 500); // Wait for fade out animation
        }

        // Close modal when clicking the X
        const closeBtn = document.querySelector('.close-modal');
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            sound.pause();
            sound.currentTime = 0;
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                sound.pause();
                sound.currentTime = 0;
            }
        }
    }
}

function showFeedback(isCorrect) {
    // Remove any existing feedback
    const existingFeedback = document.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    const feedback = document.createElement('div');
    feedback.className = 'feedback-message';
    
    if (isCorrect) {
        const messages = [
            "🎉 Purr-fect! You got it right! 🎉",
            "🐱 Meow-velous answer! 🐱",
            "🌟 Fantastic! You're a star! 🌟",
            "💫 Amazing! You're on fire! 💫",
            "🎯 Bullseye! You nailed it! 🎯"
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
    } else {
        const messages = [
            "😿 Not quite right, but keep trying! 😿",
            "🐾 Almost there! Don't give up! 🐾",
            "💪 Nice try! You'll get the next one! 💪"
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
    }

    answerButtonsElement.parentNode.insertBefore(feedback, answerButtonsElement.nextSibling);
    // Trigger animation
    setTimeout(() => feedback.classList.add('show'), 100);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    
    nextButton.style.display = 'none';
    
    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        startQuiz();
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length) {
            showNextQuestion();
        } else {
            startQuiz();
        }
    });
});
=======
const questions = [
    {
        question: "Where did Gaby famously get hit in the knee with a baseball and dove onto the street after a delayed reaction?",
        answers: [
            { text: "Gerard ave", correct: false },
            { text: "Tia Mary's House", correct: false },
            { text: "Papa's House in el millon", correct: true }
        ]
    },

    {
        question: "In his later years, what was papa's favorite pastime?",
        answers: [
            { text: "Sitting in his mesedora and watching tv", correct: true },
            { text: "putting on his chacabana and hitting the town", correct: false },
            { text: "Harrassing his grandkids with 'A PLATO LIMPIO' screams", correct: false },
        ]
    },

    {
        question: "What was the name of the girl that Gaby had a crush on that one summer? Hint: repeated chant: 'Gaby.loves._____",
        answers: [
            { text: "Ashley", correct: false },
            { text: "CoraLee", correct: true },
            { text: "Karina", correct: false },
        ]
    },

    {
        question: "Where did Kelvin and Edwin famously say Gaby was from because of his skin color?",
        answers: [
            { text: "Ocoa", correct: false },
            { text: "Bani", correct: false },
            { text: "Nizao", correct: true },
        ]
    },

    {
        question: "On the trip to Argentina, there was an action that we used to remember the trip. What was it?",
        answers: [
            { text: "Llama", correct: false },
            { text: "Quisiera ser un nino", correct: false },
            { text: "flight attendant", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerHTML = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.innerHTML = `Quiz completed! Your score: ${score}/${questions.length}`;
    answerButtonsElement.innerHTML = '';
    nextButton.innerHTML = 'Restart Quiz';
    nextButton.addEventListener('click', startQuiz);

    // Show celebration for high scores
    if (score >= 4) {
        const modal = document.getElementById('celebration-modal');
        const imagePopup = document.getElementById('image-popup');
        const sound = document.getElementById('celebration-sound');
        const prizeButton = document.getElementById('prize-button');
        
        // Show modal
        modal.style.display = 'block';
        
        // Play sound
        sound.play().catch(error => {
            console.log('Audio playback failed:', error);
        });

        // Handle prize button click
        prizeButton.onclick = function() {
            modal.style.display = 'none'; // Hide the celebration modal
            imagePopup.style.display = 'block';
            imagePopup.classList.add('show');
        }

        // Handle clicking the image popup
        imagePopup.onclick = function() {
            imagePopup.classList.remove('show');
            setTimeout(() => {
                imagePopup.style.display = 'none';
                modal.style.display = 'block'; // Show the celebration modal again
            }, 500); // Wait for fade out animation
        }

        // Close modal when clicking the X
        const closeBtn = document.querySelector('.close-modal');
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            sound.pause();
            sound.currentTime = 0;
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                sound.pause();
                sound.currentTime = 0;
            }
        }
    }
}

function showFeedback(isCorrect) {
    // Remove any existing feedback
    const existingFeedback = document.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    const feedback = document.createElement('div');
    feedback.className = 'feedback-message';
    
    if (isCorrect) {
        const messages = [
            "🎉 Purr-fect! You got it right! 🎉",
            "🐱 Meow-velous answer! 🐱",
            "🌟 Fantastic! You're a star! 🌟",
            "💫 Amazing! You're on fire! 💫",
            "🎯 Bullseye! You nailed it! 🎯"
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
    } else {
        const messages = [
            "😿 Not quite right, but keep trying! 😿",
            "🐾 Almost there! Don't give up! 🐾",
            "💪 Nice try! You'll get the next one! 💪"
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
    }

    answerButtonsElement.parentNode.insertBefore(feedback, answerButtonsElement.nextSibling);
    // Trigger animation
    setTimeout(() => feedback.classList.add('show'), 100);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    
    nextButton.style.display = 'none';
    
    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        startQuiz();
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length) {
            showNextQuestion();
        } else {
            startQuiz();
        }
    });
});
>>>>>>> cccf0e95cad4ab2e93e95191f15be6e271f7ff50
