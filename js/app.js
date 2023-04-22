var questions=
[
    {
      "question": "Inside which HTML element do we put the JavaScript??",
      "choice1": "<script>",
      "choice2": "<javascript>",
      "choice3": "<js>",
      "choice4": "<scripting>",
      "answ": "a"
    },
    {
      "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
      "choice1": "<script href='xxx.js'>",
      "choice2": "<script name='xxx.js'>",
      "choice3": "<script src='xxx.js'>",
      "choice4": "<script file='xxx.js'>",
      "answ": "c"
    },
    {
      "question": " How do you write 'Hello World' in an alert box?",
      "choice1": "msgBox('Hello World');",
      "choice2": "alertBox('Hello World');",
      "choice3": "msg('Hello World');",
      "choice4": "alert('Hello World');",
      "answ": "d"
    }
  ]

var index=0;
const ques=document.getElementById('quesBox');
const choice=document.querySelectorAll('.options');
var right=0,wrong=0;
var total=questions.length;
const  loadQuestions=()=>{
    console.log(index,total);
    if(index===total){
        console.log("enter")
        console.log(endQuiz());
    return endQuiz();
    }
    else{
    reset();
  const data=questions[index];

  ques.innerText=`${index+1}) ${data.question}`

  choice[0].nextElementSibling.innerText=data.choice1;
  choice[1].nextElementSibling.innerText=data.choice2;
  choice[2].nextElementSibling.innerText=data.choice3;
  choice[3].nextElementSibling.innerText=data.choice4;
    }

}

const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer();
    if (ans===data.answ)
    {
            right++;
    }
    else{
        wrong--;
    }
index++;
loadQuestions();

return;
}

const getAnswer=()=>{
    let answer;
    choice.forEach(
        (input)=>{
        if(input.checked){
            answer=input.value;
        }
    }
    )
    console.log(answer);
    return answer;
}
const reset=()=>{
    choice.forEach((input)=>{
        input.checked=false;
    })
}


const endQuiz=()=>{
     document.getElementById('box').innerHTML=
    `<h1>Thank you for playing quiz</h1>
    <h1> ${right}/ ${total}</h1>`
}
loadQuestions();