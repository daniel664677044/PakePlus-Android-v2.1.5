// script.js
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let currentQuestions = [];
let questionType = "all";
let userAnswers = []; // 存储用户的所有答案
let answeredQuestions = []; // 存储已答题目索引

// 合并所有题目
function getAllQuestions() {
    return [
        ...multipleQuestions.map(q => ({...q, source: 'multiple'})),
        ...singleQuestions.map(q => ({...q, source: 'single'})),
        ...judgeQuestions.map(q => ({...q, source: 'judge'}))
    ];
}

// 根据类型筛选题目
function getQuestionsByType(type) {
    switch(type) {
        case 'multiple':
            return multipleQuestions.map(q => ({...q, source: 'multiple'}));
        case 'single':
            return singleQuestions.map(q => ({...q, source: 'single'}));
        case 'judge':
            return judgeQuestions.map(q => ({...q, source: 'judge'}));
        default:
            return getAllQuestions();
    }
}

// 初始化
function init(type = "all") {
    questionType = type;
    currentQuestions = getQuestionsByType(type);
    shuffledQuestions = [...currentQuestions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(shuffledQuestions.length).fill(null);
    answeredQuestions = [];
    showQuestion();
    updateScore();
    updateQuestionTypeDisplay();
    updateTypeButtons(type);
    updateNavigationButtons();
}

// 更新类型按钮状态
function updateTypeButtons(type) {
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `type-${type}`) {
            btn.classList.add('active');
        }
    });
}

// 更新导航按钮状态
function updateNavigationButtons() {
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    
    // 更新上一题按钮状态
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 更新下一题按钮状态
    nextBtn.disabled = currentQuestionIndex >= shuffledQuestions.length - 1;
    
    // 更新按钮文本（最后一题时显示"结束"）
    if (currentQuestionIndex >= shuffledQuestions.length - 1) {
        nextBtn.textContent = "结束";
    } else {
        nextBtn.textContent = "下一题";
    }
}

// 显示题目
function showQuestion() {
    if (shuffledQuestions.length === 0) {
        document.getElementById("question-container").innerHTML = "<p>没有找到题目！</p>";
        return;
    }
    
    const q = shuffledQuestions[currentQuestionIndex];
    const container = document.getElementById("question-container");
    container.innerHTML = "";

    // 显示题目类型标签
    const typeLabel = document.createElement("div");
    typeLabel.className = "question-type";
    typeLabel.innerHTML = `<span class="type-tag">${getTypeText(q.type)}</span>`;
    container.appendChild(typeLabel);

    // 显示题目
    const questionEl = document.createElement("div");
    questionEl.className = "question";
    questionEl.innerHTML = `<h3>第${currentQuestionIndex + 1}题：${q.question}</h3>`;
    container.appendChild(questionEl);

    // 显示选项
    const optionsEl = document.createElement("div");
    optionsEl.className = "options";
    
    q.options.forEach((opt, index) => {
        const optEl = document.createElement("div");
        optEl.className = "option";
        
        // 生成选项值
        let value = '';
        let label = '';
        
        if (q.type === 'judge') {
            value = opt; // 使用中文"对"或"错"
            label = opt;
        } else {
            value = String.fromCharCode(97 + index); // a, b, c, d
            label = `${value}. ${opt}`;
        }
        
        optEl.innerHTML = `
            <input type="${q.type === 'multiple' ? 'checkbox' : 'radio'}" 
                   name="answer" 
                   value="${value}" 
                   id="opt${currentQuestionIndex}_${index}">
            <label for="opt${currentQuestionIndex}_${index}">${label}</label>
        `;
        optionsEl.appendChild(optEl);
    });

    container.appendChild(optionsEl);
    
    // 恢复用户之前的选择（如果有）
    restoreUserSelection();
    
    // 如果已经回答过本题，显示结果
    if (answeredQuestions.includes(currentQuestionIndex)) {
        showResultForCurrentQuestion();
    } else {
        document.getElementById("result-container").style.display = "none";
        document.getElementById("submit").disabled = false;
    }
    
    updateNavigationButtons();
}

// 恢复用户之前的选择
function restoreUserSelection() {
    const userAnswer = userAnswers[currentQuestionIndex];
    if (userAnswer) {
        if (Array.isArray(userAnswer)) {
            // 多选题
            userAnswer.forEach(answer => {
                const input = document.querySelector(`input[value="${answer}"]`);
                if (input) input.checked = true;
            });
        } else {
            // 单选题或判断题
            const input = document.querySelector(`input[value="${userAnswer}"]`);
            if (input) input.checked = true;
        }
    }
}

// 显示当前题目的结果
function showResultForCurrentQuestion() {
    const q = shuffledQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const isCorrect = validateAnswer(q, userAnswer);
    
    const resultEl = document.getElementById("result-container");
    resultEl.style.display = "block";
    resultEl.className = isCorrect ? "result correct" : "result wrong";
    
    if (isCorrect) {
        resultEl.innerHTML = `<strong>✅ 回答正确！</strong>`;
    } else {
        let correctAnswerText = '';
        if (q.type === 'multiple') {
            correctAnswerText = q.answer.map(a => a.toUpperCase()).join(", ");
        } else {
            correctAnswerText = q.answer;
        }
        
        resultEl.innerHTML = `
            <strong>❌ 回答错误！</strong><br>
            正确答案：${correctAnswerText}<br>
            解析：${q.explanation || "暂无解析"}
        `;
    }
    
    document.getElementById("submit").disabled = true;
}

// 获取用户选择的答案
function getSelectedAnswers() {
    const selected = [];
    document.querySelectorAll('input[name="answer"]:checked').forEach(input => {
        selected.push(input.value);
    });
    return selected;
}

// 验证答案
function validateAnswer(q, selected) {
    if (!selected || selected.length === 0) return false;
    
    if (q.type === 'multiple') {
        // 多选题：比较排序后的数组
        return JSON.stringify(selected.sort()) === JSON.stringify(q.answer.sort());
    } else {
        // 单选题和判断题：比较第一个选项
        return selected[0] === q.answer;
    }
}

// 提交答案
function submitAnswer() {
    const q = shuffledQuestions[currentQuestionIndex];
    const selected = getSelectedAnswers();
    
    // 检查是否选择了答案
    if (selected.length === 0) {
        alert("请先选择答案！");
        return;
    }
    
    // 检查单选题和判断题是否只选了一个
    if ((q.type === 'single' || q.type === 'judge') && selected.length > 1) {
        alert("单选题和判断题只能选择一个答案！");
        return;
    }
    
    // 保存用户答案
    userAnswers[currentQuestionIndex] = q.type === 'multiple' ? selected : selected[0];
    
    // 如果还没有回答过本题，添加到已回答列表
    if (!answeredQuestions.includes(currentQuestionIndex)) {
        answeredQuestions.push(currentQuestionIndex);
    }
    
    // 验证答案
    const isCorrect = validateAnswer(q, selected);
    
    // 更新分数
    if (isCorrect) {
        score++;
    }
    
    // 显示结果
    const resultEl = document.getElementById("result-container");
    resultEl.style.display = "block";
    resultEl.className = isCorrect ? "result correct" : "result wrong";
    
    if (isCorrect) {
        resultEl.innerHTML = `<strong>✅ 回答正确！</strong>`;
    } else {
        let correctAnswerText = '';
        if (q.type === 'multiple') {
            correctAnswerText = q.answer.map(a => a.toUpperCase()).join(", ");
        } else {
            correctAnswerText = q.answer;
        }
        
        resultEl.innerHTML = `
            <strong>❌ 回答错误！</strong><br>
            正确答案：${correctAnswerText}<br>
            解析：${q.explanation || "暂无解析"}
        `;
    }
    
    updateScore();
    document.getElementById("submit").disabled = true;
    updateNavigationButtons();
    
    return true; // 返回提交成功状态
}

// 自动提交并进入下一题
function submitAndNext() {
    // 如果当前题目未提交答案，先提交
    if (!answeredQuestions.includes(currentQuestionIndex)) {
        const selected = getSelectedAnswers();
        if (selected.length === 0) {
            alert("请先选择答案！");
            return false;
        }
        submitAnswer();
    }
    
    // 进入下一题
    nextQuestion();
    return true;
}

// 更新分数
function updateScore() {
    document.getElementById("score-value").textContent = score;
    document.getElementById("total-questions").textContent = shuffledQuestions.length;
    
    // 计算正确率
    if (answeredQuestions.length > 0) {
        const accuracy = ((score / answeredQuestions.length) * 100).toFixed(1);
        document.getElementById("accuracy").textContent = `正确率：${accuracy}%`;
    } else {
        document.getElementById("accuracy").textContent = "正确率：0.0%";
    }
}

// 更新题目类型显示
function updateQuestionTypeDisplay() {
    const typeText = {
        'all': '全部题目',
        'multiple': '多选题',
        'single': '单选题',
        'judge': '判断题'
    };
    document.getElementById("question-type-display").textContent = `当前：${typeText[questionType]} (共${shuffledQuestions.length}题，已答${answeredQuestions.length}题)`;
}

// 获取类型文本
function getTypeText(type) {
    const typeMap = {
        'multiple': '多选题',
        'single': '单选题',
        'judge': '判断题'
    };
    return typeMap[type] || '未知题型';
}

// 切换题目类型
function switchQuestionType(type) {
    init(type);
}

// 上一题
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateQuestionTypeDisplay();
    }
}

// 下一题
function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        updateQuestionTypeDisplay();
    } else {
        // 如果是最后一题，结束刷题
        endQuiz();
    }
}

// 结束刷题
function endQuiz() {
    const totalAnswered = answeredQuestions.length;
    const accuracy = totalAnswered > 0 ? ((score / totalAnswered) * 100).toFixed(1) : 0;
    const resultText = `
        刷题结束！
        =================
        总题数：${shuffledQuestions.length}
        已答题数：${totalAnswered}
        正确：${score}题
        错误：${totalAnswered - score}题
        正确率：${accuracy}%
        =================
        重新开始新一轮刷题
    `;
    
    alert(resultText);
    
    // 重新开始
    init(questionType);
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定按钮事件
    document.getElementById("submit").addEventListener("click", submitAnswer);
    document.getElementById("prev").addEventListener("click", prevQuestion);
    document.getElementById("next").addEventListener("click", submitAndNext);
    
    // 绑定类型切换按钮
    document.getElementById("type-all").addEventListener("click", () => switchQuestionType("all"));
    document.getElementById("type-multiple").addEventListener("click", () => switchQuestionType("multiple"));
    document.getElementById("type-single").addEventListener("click", () => switchQuestionType("single"));
    document.getElementById("type-judge").addEventListener("click", () => switchQuestionType("judge"));
    
    // 初始化
    init("all");
});

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // 按左箭头键上一题
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevQuestion();
    }
    // 按回车键提交答案
    else if (e.key === 'Enter') {
        e.preventDefault();
        submitAnswer();
    }
    // 按右箭头键或空格键下一题（自动提交）
    else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        submitAndNext();
    }
});