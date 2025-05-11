document.addEventListener('DOMContentLoaded', function() {
    // Fill review content
    fillReviewContent();
    
    // Initialize quiz
    initializeQuiz();
    
    // Add event listener for quiz submission
    document.getElementById('submit-quiz').addEventListener('click', submitQuiz);
});

// Function to fill review content
function fillReviewContent() {
    // 2-1 函數與函數圖形
    document.querySelector('#functions .content').innerHTML = `
        <p>函數是描述兩個變數之間對應關係的數學概念。若兩個變數 x 和 y 之間的關係是：對於每一個 x 值，恰有一個 y 值與之對應，則我們稱 y 是 x 的函數，記作 y = f(x)。</p>
        
        <div class="formula">
            <p>函數的定義：y = f(x)，其中 x 是自變數，y 是因變數</p>
        </div>
        
        <h4>常見的函數類型：</h4>
        
        <h5>1. 一次函數 (線性函數)</h5>
        <p>形式：y = ax + b，其中 a, b 是常數，a ≠ 0</p>
        <p>圖形是一條直線，a 是斜率，b 是 y 軸截距</p>
        
        <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 20px auto; background-color: #f9f9f9;">
            <!-- 座標軸 -->
            <line x1="50" y1="100" x2="250" y2="100" stroke="black" stroke-width="1" />
            <line x1="150" y1="20" x2="150" y2="180" stroke="black" stroke-width="1" />
            
            <!-- 函數圖形：y = 2x - 1 -->
            <line x1="50" y1="150" x2="250" y2="50" stroke="#4a6fa5" stroke-width="2" />
            
            <!-- 標籤 -->
            <text x="255" y="100" font-size="14" fill="black">x</text>
            <text x="150" y="15" font-size="14" fill="black">y</text>
            <text x="200" y="60" font-size="14" fill="#4a6fa5">y = 2x - 1</text>
        </svg>
        
        <h5>2. 二次函數 (拋物線)</h5>
        <p>形式：y = ax² + bx + c，其中 a, b, c 是常數，a ≠ 0</p>
        <p>圖形是拋物線，a 決定拋物線的開口方向和寬窄</p>
        
        <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 20px auto; background-color: #f9f9f9;">
            <!-- 座標軸 -->
            <line x1="50" y1="100" x2="250" y2="100" stroke="black" stroke-width="1" />
            <line x1="150" y1="20" x2="150" y2="180" stroke="black" stroke-width="1" />
            
            <!-- 函數圖形：y = x² -->
            <path d="M50,180 Q100,20 150,100 Q200,180 250,180" fill="none" stroke="#4a6fa5" stroke-width="2" />
            
            <!-- 標籤 -->
            <text x="255" y="100" font-size="14" fill="black">x</text>
            <text x="150" y="15" font-size="14" fill="black">y</text>
            <text x="200" y="60" font-size="14" fill="#4a6fa5">y = x²</text>
        </svg>
        
        <div class="example">
            <h4>例題：</h4>
            <p>若一次函數 f(x) = 2x + 3，求 f(4) 的值。</p>
            <p>解答：f(4) = 2(4) + 3 = 8 + 3 = 11</p>
        </div>
    `;
    
    // 3-1 三角形與多邊形的內角與外角
    document.querySelector('#angles .content').innerHTML = `
        <h4>三角形的內角和</h4>
        <p>三角形的三個內角和為 180°。</p>
        
        <div class="formula">
            <p>∠A + ∠B + ∠C = 180°</p>
        </div>
        
        <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 20px auto; background-color: #f9f9f9;">
            <polygon points="50,150 250,150 150,50" fill="none" stroke="#4a6fa5" stroke-width="2" />
            
            <!-- 標籤 -->
            <text x="40" y="170" font-size="14" fill="#2c3e50">A</text>
            <text x="255" y="170" font-size="14" fill="#2c3e50">B</text>
            <text x="150" y="40" font-size="14" fill="#2c3e50">C</text>
        </svg>
        
        <h4>多邊形的內角和</h4>
        <p>n 邊形的內角和為 (n - 2) × 180°。</p>
        
        <div class="formula">
            <p>n 邊形的內角和 = (n - 2) × 180°</p>
        </div>
        
        <div class="example">
            <h4>例題：</h4>
            <p>一個三角形的兩個內角分別為 45° 和 60°，求第三個內角的度數。</p>
            <p>解答：三角形的內角和為 180°，所以第三個內角 = 180° - 45° - 60° = 75°</p>
        </div>
    `;
    
    // 3-2 尺規作圖
    document.querySelector('#construction .content').innerHTML = `
        <p>尺規作圖是使用直尺和圓規進行幾何作圖的方法。直尺用來畫直線，圓規用來畫圓或標記距離。</p>
        
        <h4>基本作圖：</h4>
        
        <h5>1. 線段的平分線</h5>
        <p>作一條線段 AB 的平分線的步驟：</p>
        <ol>
            <li>以 A 為圓心，以大於 AB 一半的長度為半徑畫弧</li>
            <li>以 B 為圓心，同樣半徑畫弧，與第一個弧相交於點 C 和 D</li>
            <li>連接 C 和 D，得到線段 CD，它垂直平分線段 AB</li>
        </ol>
        
        <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 20px auto; background-color: #f9f9f9;">
            <!-- 線段 AB -->
            <line x1="50" y1="100" x2="250" y2="100" stroke="#4a6fa5" stroke-width="2" />
            
            <!-- 平分線 CD -->
            <line x1="150" y1="30" x2="150" y2="170" stroke="#e74c3c" stroke-width="2" />
            
            <!-- 標籤 -->
            <text x="40" y="120" font-size="14" fill="#2c3e50">A</text>
            <text x="255" y="120" font-size="14" fill="#2c3e50">B</text>
            <text x="150" y="25" font-size="14" fill="#2c3e50">C</text>
            <text x="150" y="185" font-size="14" fill="#2c3e50">D</text>
        </svg>
    `;
    
    // 3-3 三角形的全等性質
    document.querySelector('#congruence .content').innerHTML = `
        <p>全等三角形是指兩個三角形的形狀和大小完全相同，可以完全重合。</p>
        
        <h4>三角形全等的判定條件：</h4>
        
        <h5>1. 邊-角-邊 (SAS)</h5>
        <p>如果兩個三角形有兩條邊相等，且這兩條邊的夾角相等，則這兩個三角形全等。</p>
        
        <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 20px auto; background-color: #f9f9f9;">
            <!-- 兩個三角形 -->
            <polygon points="50,150 100,50 150,150" fill="none" stroke="#4a6fa5" stroke-width="2" />
            <polygon points="200,150 250,50 300,150" fill="none" stroke="#e74c3c" stroke-width="2" />
        </svg>
        
        <h5>2. 角-邊-角 (ASA)</h5>
        <p>如果兩個三角形有一條邊相等，且這條邊的兩個角也相等，則這兩個三角形全等。</p>
        
        <h5>3. 邊-邊-邊 (SSS)</h5>
        <p>如果兩個三角形的三條邊分別相等，則這兩個三角形全等。</p>
    `;
    
    // 3-4 中垂線與角平分線的性質
    document.querySelector('#bisectors .content').innerHTML = `
        <h4>中垂線的性質</h4>
        <p>線段的中垂線是通過線段中點且垂直於該線段的直線。</p>
        
        <div class="formula">
            <p>中垂線上的點到線段兩端點的距離相等。</p>
        </div>
        
        <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 20px auto; background-color: #f9f9f9;">
            <!-- 線段 AB -->
            <line x1="50" y1="100" x2="250" y2="100" stroke="#4a6fa5" stroke-width="2" />
            
            <!-- 中垂線 -->
            <line x1="150" y1="30" x2="150" y2="170" stroke="#e74c3c" stroke-width="2" />
            
            <!-- 點 P -->
            <circle cx="150" cy="60" r="3" fill="#2c3e50" />
            
            <!-- 標籤 -->
            <text x="40" y="120" font-size="14" fill="#2c3e50">A</text>
            <text x="255" y="120" font-size="14" fill="#2c3e50">B</text>
            <text x="155" y="60" font-size="14" fill="#2c3e50">P</text>
        </svg>
        
        <h4>角平分線的性質</h4>
        <p>角平分線是將一個角平分成兩個相等的角的射線。</p>
        
        <div class="formula">
            <p>角平分線上的點到角的兩邊的距離相等。</p>
        </div>
    `;
    
    // 3-5 三角形的邊角關係
    document.querySelector('#triangle-relations .content').innerHTML = `
        <h4>三角形的邊角關係</h4>
        <p>在三角形中，邊和角之間存在以下關係：</p>
        
        <div class="formula">
            <p>1. 大邊對大角：在三角形中，較大的邊對著較大的角。</p>
            <p>2. 大角對大邊：在三角形中，較大的角對著較大的邊。</p>
        </div>
        
        <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 20px auto; background-color: #f9f9f9;">
            <!-- 三角形 -->
            <polygon points="50,150 250,150 150,50" fill="none" stroke="#4a6fa5" stroke-width="2" />
            
            <!-- 標籤 -->
            <text x="40" y="170" font-size="14" fill="#2c3e50">A</text>
            <text x="255" y="170" font-size="14" fill="#2c3e50">B</text>
            <text x="150" y="40" font-size="14" fill="#2c3e50">C</text>
            
            <text x="145" y="160" font-size="14" fill="#2c3e50">c (最長邊)</text>
            <text x="60" y="135" font-size="14" fill="#2c3e50">∠A (最大角)</text>
        </svg>
        
        <h4>三角不等式</h4>
        <p>在任意三角形中，任意兩邊之和大於第三邊，任意兩邊之差小於第三邊。</p>
        
        <div class="formula">
            <p>若三角形的三邊為 a, b, c，則：</p>
            <p>a + b > c</p>
            <p>a + c > b</p>
            <p>b + c > a</p>
        </div>
    `;
}

// Function to initialize quiz
function initializeQuiz() {
    // Load quiz questions from quiz.js
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
            </div>
        `;
    });
    
    quizForm.innerHTML = quizHTML;
    document.getElementById('total-questions').textContent = quizQuestions.length;
}

// Function to submit quiz
function submitQuiz() {
    let score = 0;
    let feedbackHTML = '';
    
    quizQuestions.forEach(q => {
        const selectedOption = document.querySelector(`input[name="q${q.id}"]:checked`);
        const questionElement = document.getElementById(`question-${q.id}`);
        
        if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value);
            
            if (userAnswer === q.answer) {
                score++;
                feedbackHTML += `<p class="correct">問題 ${q.id}: 正確！</p>`;
                questionElement.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            } else {
                feedbackHTML += `<p class="incorrect">問題 ${q.id}: 錯誤。正確答案是: ${q.options[q.answer]}</p>`;
                questionElement.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
            }
        } else {
            feedbackHTML += `<p>問題 ${q.id}: 未作答。正確答案是: ${q.options[q.answer]}</p>`;
        }
    });
    
    document.getElementById('score').textContent = score;
    document.getElementById('question-feedback').innerHTML = feedbackHTML;
    document.getElementById('quiz-results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth' });
}
