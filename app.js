let questionContainer = document.querySelector(".questionContainer");
let start = document.querySelector(".start");
let correctAnswer = 0;
let falseAnswer = 0;


class  Question {
    static questions = [];
    constructor(questionText,questionStutation,trueAnswer){
        this.questionText=questionText;
        this.questionStutation=questionStutation;
        this.trueAnswer=trueAnswer;
        Question.questions.push(this);
    }
}

Question.prototype.answerControl= function(answer){
return this.trueAnswer===answer;
}


new Question("How many string a bass guitar ?",{"a":"3","b":"5","c":"4"},"c");

new Question("How many string a classic guitar ?",{"a":"3","b":"6","c":"1"},"b");

new Question("'no woman no cry' song who is the writer ?",{"a":"Bob Marley","b":"Rebeletion","c":"Niyorah"},"a");

new Question("Kurtlar vadisindeki Çakır lakaplı Oktar kaynarca kaçıncı bölümde öldürüldü ?",{"a":"45","b":"46","c":"47"},"c");


console.log(Question.questions);





function Quiz(questions){
this.questions=questions;
this.questionNumber = 0;

}



Quiz.prototype.getQuestions = function(){
return this.questions[this.questionNumber];
}



let quizApp = new Quiz(Question.questions);

createQuestion(quizApp.getQuestions());

function createQuestion(question){
    questionContainer.innerHTML="";

    let answerContent = ``;


    for(let answer in question.questionStutation){
        answerContent +=  `

                        <span class="hover1" onclick="answerFunc('${answer}',${'this'})"> <b>${answer}</b>  ${question.questionStutation[answer]}</span>
        
        `;
 
    }



    const div = `
    
    <div class="questionHeader">
    <p class="questionNumber">Question ${quizApp.questionNumber+1}</p> <p class="questionTime">...</p>
</div>

<div class="quizContent">
    <div class="questionText">
        <p class="question">${question.questionText}</p>
    </div>

    <div class="answerContent">
    ${answerContent}
    </div>

</div>

<div class="questionControlls">
    <button class="next" onclick="nextQuestionFunc()">Next</button>
</div>
    
    
    `;

    questionContainer.insertAdjacentHTML("beforeend",div);
}



start.addEventListener("click",function(){
questionContainer.style.transform ="scale(1)";
questionContainer.style.pointerEvents="auto";
start.style.transform="scale(0)";
start.style.pointerEvents="none";





});



function nextQuestionFunc(){
    questionContainer.classList.remove("correct");
    questionContainer.classList.remove("warning");
    if(Question.questions.length!=quizApp.questionNumber+1){

        quizApp.questionNumber+=1;

        createQuestion(quizApp.getQuestions());


    }

    else {
        // console.log("sorular bitti");
        questionContainer.innerHTML=`
        <div class="end"> 
        <h2>Sorular Bitmiştir.</2>
        <h3> ${correctAnswer}  Doğru  </h3>
        <h3> ${falseAnswer}  Yanlış  </h3>
        <p style="margin-bottom:0px "> Quiz App</p>
        
        </div>
      
        
        `;
    }

}








function answerFunc(answer,a){
//     console.log(a);  
// console.log(answer);
// console.log(quizApp.getQuestions());
// console.log(quizApp.getQuestions().trueAnswer);

a.classList.add("active");
a.classList.remove("hover1");


for(let span of document.querySelectorAll("span.hover1")) {
    // console.log(span);
    span.classList.add("pointer-event-none");
    span.classList.add("correct-span");
}

if(answer===quizApp.getQuestions().trueAnswer){
    // console.log("doğru");
    questionContainer.classList.add("correct");
    a.classList.add("correct-span");
    document.querySelector(".next").classList.add("correct-span");
    correctAnswer +=1;
}
else {
    // console.log("yanlış");
    questionContainer.classList.add("warning");
    a.classList.add("warning-span");
    document.querySelector(".next").classList.add("warning-span")
    falseAnswer+=1;
}

// console.log("doğru :  " ,` ${correctAnswer}`, " yanlış  : " , `${falseAnswer}`);
document.querySelector(".next").classList.add("pointer-event");


}





  


