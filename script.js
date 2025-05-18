const data = [
    {
        "no": "01",
        "question": "Inside which HTML element do we put the JavaScript?",
        "options": {
            "a": "<scripting>",
            "b": "<script>",
            "c": "<javascript>",
            "d": "<js>"
        },
        "correctAns": "<script>",
        "difficultyLevel": "easy"
    },
    {
        "no": "02",
        "question": "What is the correct JavaScript syntax to change the content of the HTML element? <p id='demo'>This is a demonstration.</p>",
        "options": {
            "a": "#demo.innerHTML = 'Hello World!'",
            "b": "document.getElementByName('p').innerHTML = 'Hello World!'",
            "c": "document.getElement('p').innerHTML = 'Hello World!'",
            "d": "document.getElementById('demo').innerHTML = 'Hello World!'"
        },
        "correctAns": "document.getElementById('demo').innerHTML = 'Hello World!'",
        "difficultyLevel": "easy"
    },
    {
        "no": "03",
        "question": "Where is the correct place to insert a JavaScript?",
        "options": {
            "a": "The <head> section",
            "b": "Both <head> and <body> section",
            "c": "The <body> section",
            "d": "After <body> section"
        },
        "correctAns": "Both <head> and <body> section",
        "difficultyLevel": "easy"
    },
    {
        "no": "04",
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "options": {
            "a": "<script src='xxx.js'>",
            "b": "<script href='xxx.js'>",
            "c": "<script name='xxx.js'>",
            "d": "<script rel='xxx.js'>"
        },
        "correctAns": "<script src='xxx.js'>",
        "difficultyLevel": "easy"
    },
    {
        "no": "05",
        "question": "How do you write 'Hello World' in an alert box?",
        "options": {
            "a": "alert('Hello World')",
            "b": "alertBox('Hello World')",
            "c": "msg('Hello World')",
            "d": "msgBox('Hello World')"
        },
        "correctAns": "alert('Hello World')",
        "difficultyLevel": "easy"
    },
    {
        "no": "06",
        "question": "How do you create a function in JavaScript?",
        "options": {
            "a": "function:myFunction()",
            "b": "function myFunction()",
            "c": "function = myFunction()",
            "d": "Function myFunction()"
        },
        "correctAns": "function myFunction()",
        "difficultyLevel": "medium"
    },
    {
        "no": "07",
        "question": "How do you call a function named 'myFunction'?",
        "options": {
            "a": "myFunction()",
            "b": "call function myFunction()",
            "c": "call myFunction()",
            "d": "call Function myFunction()"
        },
        "correctAns": "myFunction()",
        "isCorrect": false,
        "difficultyLevel": "medium"
    },
    {
        "no": "08",
        "question": "How to write an IF statement in JavaScript?",
        "options": {
            "a": "if i == 5 then",
            "b": "if i = 5 then",
            "c": "if i = 5",
            "d": "if (i == 5)"
        },
        "correctAns": "if (i == 5)",
        "difficultyLevel": "easy"
    },
    {
        "no": "09",
        "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        "options": {
            "a": "if (i <> 5)",
            "b": "if i <> 5",
            "c": "if (i != 5)",
            "d": "if (i =! 5) then"
        },
        "correctAns": "if (i != 5)",
        "difficultyLevel": "easy"
    },
    {
        "no": "10",
        "question": "How does a WHILE loop start?",
        "options": {
            "a": "while (i <= 10; i++)",
            "b": "while (i <= 10)",
            "c": "while i = 1 to 10",
            "d": "while (i <= 10; i--)"
        },
        "correctAns": "while (i <= 10)",
        "difficultyLevel": "medium"
    },
    {
        "no": "11",
        "question": "How does a FOR loop start?",
        "options": {
            "a": "for (i = 0; i <= 5; i++)",
            "b": "for (i <= 5; i++)",
            "c": "for (i = 0; i <= 5)",
            "d": "for i = 1 to 5"
        },
        "correctAns": "for (i = 0; i <= 5; i++)",
        "difficultyLevel": "easy"
    },
    {
        "no": "12",
        "question": "In which year Brendan Eich developed JavaScript?",
        "options": {
            "a": "1990",
            "b": "1995",
            "c": "1998",
            "d": "1992"
        },
        "correctAns": "1995",
        "difficultyLevel": "medium"
    },
    {
        "no": "13",
        "question": "How can you add a comment in a JavaScript?",
        "options": {
            "a": "//This is a comment",
            "b": "?This is a comment",
            "c": "--This is a comment--",
            "d": "<!--This is a comment-->"
        },
        "correctAns": "//This is a comment",
        "difficultyLevel": "easy"
    },
    {
        "no": "14",
        "question": "How to insert a comment that has more than one line?",
        "options": {
            "a": "//This comment has more than one line//",
            "b": "<!--This comment has more than one line-->",
            "c": "/*This comment has more than one line*/",
            "d": "/This comment has more than one line/"
        },
        "correctAns": "/*This comment has more than one line*/",
        "difficultyLevel": "medium"
    },
    {
        "no": "15",
        "question": "What is the correct way to write a JavaScript array?",
        "options": {
            "a": "var colors = 'red','green', 'blue'",
            "b": "var colors = 1 = ('red'),2 = ('green'),3 = ('blue')",
            "c": "var colors = ['red', 'green', 'blue']",
            "d": "var colors = (1:'red', 2:'green', 3:'blue')"
        },
        "correctAns": "var colors = ['red', 'green', 'blue']",
        "difficultyLevel": "medium"
    },
    {
        "no": "16",
        "question": "How do you round the number 7.25, to the nearest integer?",
        "options": {
            "a": "Math.round(7.25)",
            "b": "round(7.25)",
            "c": "rnd(7.25)",
            "d": "Math.rnd(7.25)"
        },
        "correctAns": "Math.round(7.25)",
        "difficultyLevel": "medium"
    },
    {
        "no": "17",
        "question": "How do you find the number with the highest value of x and y?",
        "options": {
            "a": "Math.max(x,y)",
            "b": "ceil(x,y)",
            "c": "Math.ceil(x,y)",
            "d": "top(x,y)"
        },
        "correctAns": "Math.max(x,y)",
        "difficultyLevel": "medium"
    },
    {
        "no": "18",
        "question": "How can you detect the client's browser name?",
        "options": {
            "a": "client.navName",
            "b": "navigator.appName",
            "c": "browser.name",
            "d": "delete.name"
        },
        "correctAns": "navigator.appName",
        "difficultyLevel": "hard"
    },
    {
        "no": "19",
        "question": "Which event occurs when the user clicks on an HTML element?",
        "options": {
            "a": "onmouseover",
            "b": "onchange",
            "c": "onclick",
            "d": "onmouseclick"
        },
        "correctAns": "onclick",
        "difficultyLevel": "easy"
    },
    {
        "no": "20",
        "question": "How do you declare a JavaScript variable?",
        "options": {
            "a": "v carName",
            "b": "var carName",
            "c": "variable carName",
            "d": "var (carName)"
        },
        "correctAns": "var carName",
        "difficultyLevel": "easy"
    },
    {
        "no": "21",
        "question": "Which operator is used to assign a value to a variable?",
        "options": {
            "a": "x",
            "b": "=",
            "c": "-",
            "d": "*"
        },
        "correctAns": "=",
        "difficultyLevel": "easy"
    },
    {
        "no": "22",
        "question": "What will the following code return: Boolean(10 > 9)",
        "options": {
            "a": "false",
            "b": "true",
            "c": "NaN",
            "d": "undefined"
        },
        "correctAns": "true",
        "difficultyLevel": "easy"
    },
    {
        "no": "23",
        "question": "How many data types are there in JavaScript?",
        "options": {
            "a": "5",
            "b": "6",
            "c": "7",
            "d": "8"
        },
        "correctAns": "8",
        "difficultyLevel": "easy"
    },
    {
        "no": "24",
        "question": "What is the data type of Null?",
        "options": {
            "a": "Object",
            "b": "NaN",
            "c": "Null",
            "d": "String"
        },
        "correctAns": "Object",
        "difficultyLevel": "hard"
    },
    {
        "no": "25",
        "question": "Which one of the following is called Sanke Case?",
        "options": {
            "a": "user_name",
            "b": "userName",
            "c": "user-name",
            "d": "UserName"
        },
        "correctAns": "user_name",
        "difficultyLevel": "medium"
    }

]

const mainCon = document.querySelector(".main-container");
const resultCon = document.querySelector(".result-container");
const questionCon = document.querySelector(".question-con");
const questionNumber = document.querySelector(".question-number");
const ques = document.querySelector(".question");
const optionCon = document.querySelector(".option-con");
const optionA = document.querySelector(".option-a");
const optionB = document.querySelector(".option-b");
const optionC = document.querySelector(".option-c");
const optionD = document.querySelector(".option-d");
const nxtPage = document.querySelector(".nxt-page");
const option = document.querySelectorAll(".options");
const timer = document.querySelector(".timer");
const timerDiv = document.querySelector(".countdown");
const highestScore = document.querySelector(".highest-score");
const score = document.querySelector(".score");
const overlay = document.querySelector(".overlay");
const dialogBoxButton = document.querySelector(".dialog-box-button");
const retryBtn = document.querySelector(".retry-btn");
const taskCom = document.querySelector('.task-com');
const performaceStatus = document.querySelector('.performace-status');
const ctx = document.getElementById('myChart');
const volumeOn = document.querySelector('.volume-btn');
const volumeOff = document.querySelector(".volume-off");




let dataToBeStored = JSON.parse(localStorage.getItem("data")) || {
    num: 0,
    questionCompleted: 0,
    correct: 0
}

let isClicked = false;
let time = Number(timer.innerText);
let isVolumeOn = true;

if (dataToBeStored.questionCompleted === 24) {
    dialogBoxButton.innerText = "See Result";
}

const showPieChart = () => {

    let width = Math.round(dataToBeStored.correct/25*100);

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    "#0aaf13",
                    "#ed6e6eeb"
                ],
                data: [width, 100-width],
                borderWidth: 1
            }]
        },
        options: {

        }
    });

    taskCom.innerText = dataToBeStored.correct;

    if (width > 90) {
        performaceStatus.innerText = "Excellent work! You nailed it - keep up the great learning!";
    } else if (width <= 90 && width > 60) {
        performaceStatus.innerText = "Great effort! You're almost there - just a bit more practice";
    } else if (width <= 60 && width > 45) {
        performaceStatus.innerText = "Good Try! Keep practicing and you'll improve in no time.";
    } else if (width <= 45 && width > 30) {
        performaceStatus.innerText = "You're learning - don't give up!";
    } else if (width <= 30) {
        performaceStatus.innerText = "Every expert was once a beginer. Keep Going!";
    }

}

const changeColor = (t) => {
    if (t <= 15) {
        document.body.style.backgroundColor = "#f5dda4e1";
        timerDiv.style.backgroundColor = "#d0981596";
        timerDiv.style.borderColor = "#d0981596";
        nxtPage.style.color = "#835f09d9";
        questionCon.style.boxShadow = "0 0 2px 4px #f1cd7bd9"
        optionCon.style.boxShadow = "0 0 2px 4px #f1cd7bd9"

    }
    if (t <= 5) {
        document.body.style.backgroundColor = "#ed6e6eeb";
        timerDiv.style.backgroundColor = "#ca0303eb";
        timerDiv.style.borderColor = "#ca0303eb";
        nxtPage.style.color = "#ca0303eb";

        questionCon.style.boxShadow = "0 0 2px 4px #f26161eb"
        optionCon.style.boxShadow = "0 0 2px 4px #f26161eb"
    }
}

const updateTime = () => {
    timer.innerText = time;
    time--;
    if (time < 10) {
        timer.innerText = `0${time}`;
    }
    if (time < 0) {
        clearInterval(countDown);
        timer.innerText = "00";
    }
    if (time === 0) {
        overlay.style.display = "flex";
    }
    changeColor(time);
}
let countDown = setInterval(updateTime, 1000);



const changeQuestionAndAnswer = (number) => {
    let { no, question } = data[dataToBeStored.num];
    let { a, b, c, d } = data[dataToBeStored.num].options;

    questionNumber.innerText = no;
    ques.innerText = question;
    optionA.innerText = a;
    optionB.innerText = b;
    optionC.innerText = c;
    optionD.innerText = d;
}
changeQuestionAndAnswer(dataToBeStored.num);

const checkAndUpdateOption = (el) => {

    let { correctAns } = data[dataToBeStored.num];

    if (el.innerText === correctAns) {
        if(isVolumeOn){
            const audio1 = new Audio();
            audio1.src = "./audio/correct.mp3";
            audio1.play();
        }

        dataToBeStored.correct++;
        localStorage.setItem("data", JSON.stringify(dataToBeStored));
        isCorrect = true;

        el.style.borderColor = "green";
        el.children[1].style.display = "block";
    } else {

        if(isVolumeOn){
            const audio2 = new Audio();
            audio2.src = "./audio/wrong.mp3";
            audio2.play();
        }
        
        const currectElem = [...option].filter((currElem) => {
            return currElem.children[0].innerText === correctAns;
        });
        currectElem[0].style.borderColor = "green";
        currectElem[0].children[1].style.display = "block";

        el.style.borderColor = "red";
        el.children[2].style.display = "flex";

    }

    [...option].forEach((elem) => {
        elem.style.pointerEvents = "none";
    });
}

[...option].forEach((elem) => {
    elem.addEventListener("click", () => {
        clearInterval(countDown);
        isClicked = true;
        checkAndUpdateOption(elem);
    })
});


const backToNormal = () => {
    time = 30;
    countDown = setInterval(updateTime, 1000);

    document.body.style.backgroundColor = "#cce2c2";
    timerDiv.style.backgroundColor = "#35bd3a";
    timerDiv.style.borderColor = "#35bd3a";
    nxtPage.style.color = "#ca0303eb";
    questionCon.style.boxShadow = "0 0 2px 4px #bdcfb3"
    optionCon.style.boxShadow = "0 0 2px 4px #bdcfb3"
    nxtPage.style.color = "#0aaf13";

    [...option].forEach((elem) => {
        elem.style.borderColor = "#8d87876d";
        elem.children[1].style.display = "none";
        elem.children[2].style.display = "none";

        elem.style.pointerEvents = "auto";

    })

    isClicked = false;
}

nxtPage.addEventListener("click", () => {
    if(!isClicked){
        alert("Please select an option!");
    }
    if (isClicked && dataToBeStored.num < 24) {
        dataToBeStored.num++;
        localStorage.setItem("data", JSON.stringify(dataToBeStored));
    }

    if (isClicked && dataToBeStored.questionCompleted < 24) {
        dataToBeStored.questionCompleted++;
        localStorage.setItem("data", JSON.stringify(dataToBeStored));

        changeQuestionAndAnswer(dataToBeStored.num);

        backToNormal()
    }

    if (isClicked && dataToBeStored.questionCompleted === 24) {
        mainCon.style.display = "none";
        resultCon.style.display = "block";
        document.body.style.backgroundColor = "white";
        showPieChart();
        clearInterval(countDown);
    }
});

dialogBoxButton.addEventListener("click", () => {


    if (dataToBeStored.questionCompleted === 24) {
        mainCon.style.display = "none";
        resultCon.style.display = "block";
        document.body.style.backgroundColor = "white";
        showPieChart();
        clearInterval(countDown);

    } else {
        overlay.style.display = "none";

        dataToBeStored.num++;
        dataToBeStored.questionCompleted++;
        localStorage.setItem("data", JSON.stringify(dataToBeStored));
        changeQuestionAndAnswer(dataToBeStored.num);

        backToNormal()
    }

});

retryBtn.addEventListener("click", () => {
    // document.body.style.backgroundColor = "white";
    dataToBeStored.num = 0;
    dataToBeStored.correct = 0;
    dataToBeStored.questionCompleted = 0;

    localStorage.setItem("data", JSON.stringify(dataToBeStored));
})

volumeOn.addEventListener("click", ()=>{
    isVolumeOn = false;
    volumeOff.style.display = "block";
    volumeOn.style.display = "none";
})
volumeOff.addEventListener("click", ()=>{
    isVolumeOn = true;
    volumeOff.style.display = "none";
    volumeOn.style.display = "block";
})
