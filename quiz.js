document.addEventListener('DOMContentLoaded', function() {
    // Initialize quiz
    initializeQuiz();
    
    // Add event listener for quiz submission
    document.getElementById('submit-quiz').addEventListener('click', submitQuiz);
});

// Function to initialize quiz
function initializeQuiz() {
    const quizForm = document.getElementById('quiz-form');
    let quizHTML = '';
    
    quizQuestions.forEach((q, index) => {
        quizHTML += `
            <div class="question" id="question-${q.id}">
                <h4>${index + 1}. [${q.topic}] ${q.question}</h4>
                ${q.image || ''}
                <div class="options">
        `;
        
        q.options.forEach((option, optIndex) => {
            quizHTML += `
                <label class="option">
                    <input type="radio" name="q${q.id}" value="${optIndex}">
                    ${option}
                </label>
            `;
        });
        
        quizHTML += `
                </div>
                <div class="question-result" id="result-${q.id}" style="display: none;"></div>
            </div>
        `;
    });
    
    quizForm.innerHTML = quizHTML;
    document.getElementById('total-score').textContent = quizQuestions.length * 2;
}

// Function to submit quiz
function submitQuiz() {
    let score = 0;
    let feedbackHTML = '';
    
    quizQuestions.forEach(q => {
        const selectedOption = document.querySelector(`input[name="q${q.id}"]:checked`);
        const questionElement = document.getElementById(`question-${q.id}`);
        const resultElement = document.getElementById(`result-${q.id}`);
        
        if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value);
            
            if (userAnswer === q.answer) {
                score += 2;
                resultElement.innerHTML = `<div class="correct-answer">正確！</div>`;
                questionElement.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            } else {
                resultElement.innerHTML = `<div class="wrong-answer">錯誤。正確答案是: ${q.options[q.answer]}</div>`;
                questionElement.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
            }
        } else {
            resultElement.innerHTML = `<div class="wrong-answer">未作答。正確答案是: ${q.options[q.answer]}</div>`;
        }
        
        resultElement.style.display = 'block';
        feedbackHTML += `<p>${selectedOption ? (userAnswer === q.answer ? `問題 ${q.id}: <span class="correct">正確！</span>` : `問題 ${q.id}: <span class="incorrect">錯誤。</span>正確答案是: ${q.options[q.answer]}`) : `問題 ${q.id}: 未作答。正確答案是: ${q.options[q.answer]}`}</p>`;
    });
    
    document.getElementById('score').textContent = score;
    document.getElementById('question-feedback').innerHTML = feedbackHTML;
    document.getElementById('quiz-results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth' });
}
