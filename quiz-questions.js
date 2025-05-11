// Quiz questions - 50 questions total
const quizQuestions = [
    // 函數與函數圖形 (10 questions)
    {
        id: 1,
        topic: '函數與函數圖形',
        question: '下列哪一個是一次函數的圖形？',
        image: `
            <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 15px auto; background-color: #f9f9f9;">
                <!-- 座標軸 -->
                <line x1="50" y1="100" x2="250" y2="100" stroke="black" stroke-width="1" />
                <line x1="150" y1="20" x2="150" y2="180" stroke="black" stroke-width="1" />
                
                <!-- 函數圖形：y = 2x - 1 -->
                <line x1="50" y1="150" x2="250" y2="50" stroke="#4a6fa5" stroke-width="2" />
                
                <!-- 標籤 -->
                <text x="255" y="100" font-size="14" fill="black">x</text>
                <text x="150" y="15" font-size="14" fill="black">y</text>
            </svg>
        `,
        options: [
            '拋物線',
            '直線',
            '雙曲線',
            '圓形'
        ],
        answer: 1
    },
    {
        id: 2,
        topic: '函數與函數圖形',
        question: '若 f(x) = 3x - 2，則 f(5) = ?',
        options: [
            '13',
            '15',
            '17',
            '19'
        ],
        answer: 0
    },
    {
        id: 3,
        topic: '函數與函數圖形',
        question: '若 f(x) = 2x + 1，則 f(-3) = ?',
        options: [
            '-7',
            '-5',
            '-1',
            '1'
        ],
        answer: 1
    },
    {
        id: 4,
        topic: '函數與函數圖形',
        question: '下列哪一個是二次函數的圖形？',
        image: `
            <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 15px auto; background-color: #f9f9f9;">
                <!-- 座標軸 -->
                <line x1="50" y1="100" x2="250" y2="100" stroke="black" stroke-width="1" />
                <line x1="150" y1="20" x2="150" y2="180" stroke="black" stroke-width="1" />
                
                <!-- 函數圖形：y = x² -->
                <path d="M50,180 Q100,20 150,100 Q200,180 250,180" fill="none" stroke="#4a6fa5" stroke-width="2" />
                
                <!-- 標籤 -->
                <text x="255" y="100" font-size="14" fill="black">x</text>
                <text x="150" y="15" font-size="14" fill="black">y</text>
            </svg>
        `,
        options: [
            '直線',
            '拋物線',
            '雙曲線',
            '圓形'
        ],
        answer: 1
    },
    {
        id: 5,
        topic: '函數與函數圖形',
        question: '若 f(x) = x² + 2x + 1，則 f(2) = ?',
        options: [
            '5',
            '7',
            '9',
            '11'
        ],
        answer: 2
    },
    {
        id: 6,
        topic: '函數與函數圖形',
        question: '若 f(x) = x² - 4，則 f(3) = ?',
        options: [
            '5',
            '7',
            '9',
            '11'
        ],
        answer: 0
    },
    {
        id: 7,
        topic: '函數與函數圖形',
        question: '若 f(x) = 2x - 3 且 f(a) = 7，則 a = ?',
        options: [
            '2',
            '4',
            '5',
            '6'
        ],
        answer: 2
    },
    {
        id: 8,
        topic: '函數與函數圖形',
        question: '若 f(x) = x² - 2x + 1，則 f(1) = ?',
        options: [
            '0',
            '1',
            '2',
            '3'
        ],
        answer: 0
    },
    {
        id: 9,
        topic: '函數與函數圖形',
        question: '若 f(x) = 3x + 2 且 f(a) = 11，則 a = ?',
        options: [
            '3',
            '4',
            '5',
            '6'
        ],
        answer: 0
    },
    {
        id: 10,
        topic: '函數與函數圖形',
        question: '若 f(x) = x² + 4x + 4，則 f(-2) = ?',
        options: [
            '0',
            '2',
            '4',
            '8'
        ],
        answer: 0
    },
    
    // 三角形與多邊形的內角與外角 (10 questions)
    {
        id: 11,
        topic: '三角形與多邊形的內角與外角',
        question: '一個三角形的兩個內角分別為 30° 和 45°，則第三個內角為多少度？',
        image: `
            <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 15px auto; background-color: #f9f9f9;">
                <polygon points="50,150 250,150 150,50" fill="none" stroke="#4a6fa5" stroke-width="2" />
                
                <!-- 角度標記 -->
                <path d="M50,150 Q60,140 70,150" fill="none" stroke="#2c3e50" stroke-width="1.5" />
                <path d="M250,150 Q240,140 230,150" fill="none" stroke="#2c3e50" stroke-width="1.5" />
                <path d="M150,50 Q140,60 150,70" fill="none" stroke="#2c3e50" stroke-width="1.5" />
                
                <!-- 標籤 -->
                <text x="60" y="135" font-size="14" fill="#2c3e50">30°</text>
                <text x="230" y="135" font-size="14" fill="#2c3e50">45°</text>
                <text x="135" y="70" font-size="14" fill="#2c3e50">?</text>
            </svg>
        `,
        options: [
            '95°',
            '100°',
            '105°',
            '110°'
        ],
        answer: 2
    },
    {
        id: 12,
        topic: '三角形與多邊形的內角與外角',
        question: '一個正六邊形的內角和為多少度？',
        image: `
            <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 15px auto; background-color: #f9f9f9;">
                <!-- 正六邊形 -->
                <polygon points="150,30 225,65 225,135 150,170 75,135 75,65" fill="none" stroke="#4a6fa5" stroke-width="2" />
                
                <!-- 標籤 -->
                <text x="150" y="190" font-size="14" fill="#2c3e50">正六邊形</text>
            </svg>
        `,
        options: [
            '540°',
            '720°',
            '900°',
            '1080°'
        ],
        answer: 1
    },
    {
        id: 13,
        topic: '三角形與多邊形的內角與外角',
        question: '一個正五邊形的每個內角度數為多少？',
        options: [
            '72°',
            '108°',
            '120°',
            '135°'
        ],
        answer: 1
    },
    {
        id: 14,
        topic: '三角形與多邊形的內角與外角',
        question: '一個四邊形的內角和為多少度？',
        options: [
            '180°',
            '270°',
            '360°',
            '540°'
        ],
        answer: 2
    },
    {
        id: 15,
        topic: '三角形與多邊形的內角與外角',
        question: '一個正八邊形的內角和為多少度？',
        options: [
            '900°',
            '1080°',
            '1260°',
            '1440°'
        ],
        answer: 1
    },
    {
        id: 16,
        topic: '三角形與多邊形的內角與外角',
        question: '一個三角形的內角比為 2:3:4，則最大的內角為多少度？',
        options: [
            '60°',
            '80°',
            '90°',
            '120°'
        ],
        answer: 1
    },
    {
        id: 17,
        topic: '三角形與多邊形的內角與外角',
        question: '一個正方形的每個內角度數為多少？',
        options: [
            '45°',
            '60°',
            '90°',
            '120°'
        ],
        answer: 2
    },
    {
        id: 18,
        topic: '三角形與多邊形的內角與外角',
        question: '一個三角形的外角和為多少度？',
        options: [
            '180°',
            '270°',
            '360°',
            '540°'
        ],
        answer: 2
    },
    {
        id: 19,
        topic: '三角形與多邊形的內角與外角',
        question: '一個正三角形的每個內角度數為多少？',
        options: [
            '30°',
            '45°',
            '60°',
            '90°'
        ],
        answer: 2
    },
    {
        id: 20,
        topic: '三角形與多邊形的內角與外角',
        question: 'n 邊形的內角和公式為？',
        options: [
            '(n - 1) × 180°',
            '(n - 2) × 180°',
            '(n - 3) × 180°',
            'n × 180°'
        ],
        answer: 1
    },
    
    // 尺規作圖 (10 questions)
    {
        id: 21,
        topic: '尺規作圖',
        question: '使用尺規作圖，下列哪一項不能作出？',
        options: [
            '60° 角',
            '平分一個角',
            '三等分一個角',
            '作一條線段的垂直平分線'
        ],
        answer: 2
    },
    {
        id: 22,
        topic: '尺規作圖',
        question: '使用尺規作圖，可以作出下列哪一個角度？',
        options: [
            '10°',
            '30°',
            '40°',
            '50°'
        ],
        answer: 1
    },
    {
        id: 23,
        topic: '尺規作圖',
        question: '使用尺規作圖，可以作出下列哪一個正多邊形？',
        options: [
            '正五邊形',
            '正七邊形',
            '正八邊形',
            '正九邊形'
        ],
        answer: 2
    },
    {
        id: 24,
        topic: '尺規作圖',
        question: '使用尺規作圖，下列哪一項可以作出？',
        options: [
            '三等分一個線段',
            '三等分一個角',
            '作一個圓的切線',
            '作一個圓的面積'
        ],
        answer: 0
    },
    {
        id: 25,
        topic: '尺規作圖',
        question: '使用尺規作圖，可以作出下列哪一個角度？',
        options: [
            '15°',
            '20°',
            '45°',
            '75°'
        ],
        answer: 2
    },
    {
        id: 26,
        topic: '尺規作圖',
        question: '使用尺規作圖，下列哪一項可以作出？',
        options: [
            '將一個角三等分',
            '將一個角平分',
            '將一個圓三等分',
            '將一個圓的面積三等分'
        ],
        answer: 1
    },
    {
        id: 27,
        topic: '尺規作圖',
        question: '使用尺規作圖，可以作出下列哪一個角度？',
        options: [
            '36°',
            '60°',
            '72°',
            '100°'
        ],
        answer: 1
    },
    {
        id: 28,
        topic: '尺規作圖',
        question: '使用尺規作圖，下列哪一項可以作出？',
        options: [
            '將一個圓的面積平分',
            '將一個圓的周長平分',
            '將一個圓的直徑平分',
            '將一個圓的弧長平分'
        ],
        answer: 2
    },
    {
        id: 29,
        topic: '尺規作圖',
        question: '使用尺規作圖，可以作出下列哪一個角度？',
        options: [
            '90°',
            '100°',
            '120°',
            '150°'
        ],
        answer: 0
    },
    {
        id: 30,
        topic: '尺規作圖',
        question: '使用尺規作圖，下列哪一項可以作出？',
        options: [
            '將一個角三等分',
            '將一個線段三等分',
            '將一個圓三等分',
            '將一個正方形三等分'
        ],
        answer: 1
    },
    
    // 三角形的全等性質 (10 questions)
    {
        id: 31,
        topic: '三角形的全等性質',
        question: '下列哪一項不是三角形全等的判定條件？',
        image: `
            <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 15px auto; background-color: #f9f9f9;">
                <!-- 兩個三角形 -->
                <polygon points="50,150 100,50 150,150" fill="none" stroke="#4a6fa5" stroke-width="2" />
                <polygon points="200,150 250,50 300,150" fill="none" stroke="#e74c3c" stroke-width="2" />
                
                <!-- 標籤 -->
                <text x="100" y="170" font-size="14" fill="#2c3e50">△ABC</text>
                <text x="250" y="170" font-size="14" fill="#2c3e50">△DEF</text>
                <text x="150" y="100" font-size="14" fill="#2c3e50">全等？</text>
            </svg>
        `,
        options: [
            'SAS (邊-角-邊)',
            'ASA (角-邊-角)',
            'SSS (邊-邊-邊)',
            'AAA (角-角-角)'
        ],
        answer: 3
    },
    {
        id: 32,
        topic: '三角形的全等性質',
        question: 'SAS 判定條件中的 S 代表什麼？',
        options: [
            '角 (Angle)',
            '邊 (Side)',
            '相似 (Similar)',
            '全等 (Same)'
        ],
        answer: 1
    },
    {
        id: 33,
        topic: '三角形的全等性質',
        question: 'ASA 判定條件中的 A 代表什麼？',
        options: [
            '角 (Angle)',
            '邊 (Side)',
            '相似 (Similar)',
            '全等 (Same)'
        ],
        answer: 0
    },
    {
        id: 34,
        topic: '三角形的全等性質',
        question: '下列哪一項是三角形全等的判定條件？',
        options: [
            'SSA (邊-邊-角)',
            'SAA (邊-角-角)',
            'AAS (角-角-邊)',
            'SAS (邊-角-邊)'
        ],
        answer: 3
    },
    {
        id: 35,
        topic: '三角形的全等性質',
        question: '下列哪一項是三角形全等的判定條件？',
        options: [
            'AAA (角-角-角)',
            'SSA (邊-邊-角)',
            'ASA (角-邊-角)',
            'SAA (邊-角-角)'
        ],
        answer: 2
    },
    {
        id: 36,
        topic: '三角形的全等性質',
        question: '下列哪一項是三角形全等的判定條件？',
        options: [
            'AAA (角-角-角)',
            'SSA (邊-邊-角)',
            'SSS (邊-邊-邊)',
            'SAA (邊-角-角)'
        ],
        answer: 2
    },
    {
        id: 37,
        topic: '三角形的全等性質',
        question: '若兩個三角形的三個角分別相等，則這兩個三角形一定是？',
        options: [
            '全等',
            '相似',
            '互補',
            '互餘'
        ],
        answer: 1
    },
    {
        id: 38,
        topic: '三角形的全等性質',
        question: '若兩個三角形的三條邊分別相等，則這兩個三角形一定是？',
        options: [
            '全等',
            '相似',
            '互補',
            '互餘'
        ],
        answer: 0
    },
    {
        id: 39,
        topic: '三角形的全等性質',
        question: '若兩個三角形的兩條邊和其夾角分別相等，則這兩個三角形一定是？',
        options: [
            '全等',
            '相似',
            '互補',
            '互餘'
        ],
        answer: 0
    },
    {
        id: 40,
        topic: '三角形的全等性質',
        question: '若兩個三角形的兩個角和其夾邊分別相等，則這兩個三角形一定是？',
        options: [
            '全等',
            '相似',
            '互補',
            '互餘'
        ],
        answer: 0
    },
    
    // 中垂線與角平分線的性質 (5 questions)
    {
        id: 41,
        topic: '中垂線與角平分線的性質',
        question: '關於中垂線的性質，下列敘述何者正確？',
        image: `
            <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 15px auto; background-color: #f9f9f9;">
                <!-- 線段 AB -->
                <line x1="50" y1="100" x2="250" y2="100" stroke="#4a6fa5" stroke-width="2" />
                
                <!-- 中垂線 -->
                <line x1="150" y1="30" x2="150" y2="170" stroke="#e74c3c" stroke-width="2" />
                
                <!-- 點 P -->
                <circle cx="150" cy="60" r="3" fill="#2c3e50" />
                
                <!-- 距離標記 -->
                <line x1="50" y1="100" x2="150" y2="60" stroke="#2c3e50" stroke-width="1" stroke-dasharray="5,3" />
                <line x1="250" y1="100" x2="150" y2="60" stroke="#2c3e50" stroke-width="1" stroke-dasharray="5,3" />
                
                <!-- 標籤 -->
                <text x="40" y="120" font-size="14" fill="#2c3e50">A</text>
                <text x="255" y="120" font-size="14" fill="#2c3e50">B</text>
                <text x="155" y="60" font-size="14" fill="#2c3e50">P</text>
            </svg>
        `,
        options: [
            '中垂線上的點到線段兩端點的距離相等',
            '中垂線上的點到線段兩端點的距離之和最小',
            '中垂線上的點到線段兩端點的距離之差最大',
            '中垂線上的點到線段兩端點的距離之積最小'
        ],
        answer: 0
    },
    {
        id: 42,
        topic: '中垂線與角平分線的性質',
        question: '關於角平分線的性質，下列敘述何者正確？',
        options: [
            '角平分線上的點到角的兩邊的距離之和最小',
            '角平分線上的點到角的兩邊的距離相等',
            '角平分線上的點到角的兩邊的距離之差最大',
            '角平分線上的點到角的兩邊的距離之積最小'
        ],
        answer: 1
    },
    {
        id: 43,
        topic: '中垂線與角平分線的性質',
        question: '三角形的三條中垂線交於一點，這一點是什麼？',
        options: [
            '重心',
            '外心',
            '內心',
            '垂心'
        ],
        answer: 1
    },
    {
        id: 44,
        topic: '中垂線與角平分線的性質',
        question: '三角形的三條角平分線交於一點，這一點是什麼？',
        options: [
            '重心',
            '外心',
            '內心',
            '垂心'
        ],
        answer: 2
    },
    {
        id: 45,
        topic: '中垂線與角平分線的性質',
        question: '三角形的外心是什麼？',
        options: [
            '三條中線的交點',
            '三條中垂線的交點',
            '三條角平分線的交點',
            '三條高的交點'
        ],
        answer: 1
    },
    
    // 三角形的邊角關係 (5 questions)
    {
        id: 46,
        topic: '三角形的邊角關係',
        question: '在三角形中，下列敘述何者正確？',
        image: `
            <svg width="300" height="200" viewBox="0 0 300 200" style="display: block; margin: 15px auto; background-color: #f9f9f9;">
                <!-- 三角形 -->
                <polygon points="50,150 250,150 150,50" fill="none" stroke="#4a6fa5" stroke-width="2" />
                
                <!-- 標籤 -->
                <text x="40" y="170" font-size="14" fill="#2c3e50">A</text>
                <text x="255" y="170" font-size="14" fill="#2c3e50">B</text>
                <text x="150" y="40" font-size="14" fill="#2c3e50">C</text>
                
                <text x="145" y="160" font-size="14" fill="#2c3e50">c</text>
                <text x="90" y="100" font-size="14" fill="#2c3e50">b</text>
                <text x="200" y="100" font-size="14" fill="#2c3e50">a</text>
            </svg>
        `,
        options: [
            '最大的角對最小的邊',
            '最小的角對最大的邊',
            '最大的角對最大的邊',
            '角的大小與對邊長度無關'
        ],
        answer: 2
    },
    {
        id: 47,
        topic: '三角形的邊角關係',
        question: '下列哪組數字可以構成三角形的三邊長？',
        options: [
            '3, 4, 8',
            '5, 6, 12',
            '7, 8, 14',
            '5, 12, 13'
        ],
        answer: 3
    },
    {
        id: 48,
        topic: '三角形的邊角關係',
        question: '下列哪組數字不能構成三角形的三邊長？',
        options: [
            '3, 4, 5',
            '5, 12, 13',
            '8, 15, 17',
            '1, 2, 4'
        ],
        answer: 3
    },
    {
        id: 49,
        topic: '三角形的邊角關係',
        question: '在三角形中，若 a, b, c 是三邊長，則下列哪一項不是三角不等式？',
        options: [
            'a + b > c',
            'a + c > b',
            'b + c > a',
            'a + b + c > 0'
        ],
        answer: 3
    },
    {
        id: 50,
        topic: '三角形的邊角關係',
        question: '在三角形中，若三個內角分別為 A, B, C，則下列哪一項正確？',
        options: [
            'A + B + C = 90°',
            'A + B + C = 180°',
            'A + B + C = 270°',
            'A + B + C = 360°'
        ],
        answer: 1
    }
];
