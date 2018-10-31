var getQuestion;
getQuestion=localStorage.getItem("QUIZ");
getQuestion=JSON.parse(getQuestion);
console.log()
 
var queLength=getQuestion.length;
 document.getElementById('totalQue').innerText="Total Question "+ queLength;

var queNo = document.getElementById('queNo');
var question = document.getElementById('question');
var lblCheckBox1 = document.getElementById('lblCheckBox1');
var lblCheckBox2 = document.getElementById('lblCheckBox2');
var lblCheckBox3 = document.getElementById('lblCheckBox3');
var lblCheckBox4 = document.getElementById('lblCheckBox4');

var chkBox1 = document.getElementById('chkBox1');
var chkBox2 = document.getElementById('chkBox2');
var chkBox3 = document.getElementById('chkBox3');
var chkBox4 = document.getElementById('chkBox4');
var radioTrue = document.getElementById('radioTrue');
var radioFalse = document.getElementById('radioFalse');
var textShort = document.getElementById('textShort');
var forMulti = document.getElementById('forMulti');
var forRad = document.getElementById('forRad');
var forShort = document.getElementById('forShort');
var i=0;
var score=0;
var incorrect;


function startQuiz(){
    document.getElementById('start').style.display="none";
    document.getElementById('mainArea').style.display="block";
    queNo.innerText="Question No "+ getQuestion[i].qId;
    question.innerText=getQuestion[i].quest;
    if(getQuestion[i].qType==="multi"){
        forMulti.style.display="block";
        forRad.style.display="none";
        forShort.style.display="none";
        lblCheckBox1.innerHTML=" "+getQuestion[i].choice1;
        lblCheckBox2.innerHTML=" "+getQuestion[i].choice2;
        lblCheckBox3.innerHTML=" "+getQuestion[i].choice3;
        lblCheckBox4.innerHTML=" "+getQuestion[i].correctAnswer;
        chkBox1.value=getQuestion[i].choice1;
        chkBox2.value=getQuestion[i].choice2;
        chkBox3.value=getQuestion[i].choice3;
        chkBox4.value=getQuestion[i].correctAnswer;
        i++;
          
        
    }
    else if(getQuestion[i].qType==="radio"){
        forMulti.style.display="none";
        forRad.style.display="block";
        forShort.style.display="none";
        i++;
    }
    else if(getQuestion[i].qType==="short"){
        forMulti.style.display="none";
        forRad.style.display="none";
        forShort.style.display="block";
        i++;
    }
    
}
function nextQue(){
    queNo.innerText="Question No "+ getQuestion[i].qId;
    question.innerText=getQuestion[i].quest;
    if(getQuestion[i].qType==="multi"){
        forMulti.style.display="block";
        forRad.style.display="none";
        forShort.style.display="none";
        lblCheckBox1.innerHTML=" "+getQuestion[i].choice1;
        lblCheckBox2.innerHTML=" "+getQuestion[i].choice2;
        lblCheckBox3.innerHTML=" "+getQuestion[i].choice3;
        lblCheckBox4.innerHTML=" "+getQuestion[i].correctAnswer;
        chkBox1.value=getQuestion[i].choice1;
        chkBox2.value=getQuestion[i].choice2;
        chkBox3.value=getQuestion[i].choice3;
        chkBox4.value=getQuestion[i].correctAnswer;
          i++;
        
    }
    else if(getQuestion[i].qType==="radio"){
        forMulti.style.display="none";
        forRad.style.display="block";
        forShort.style.display="none";
        i++;
    }
    else if(getQuestion[i].qType==="short"){
        forMulti.style.display="none";
        forRad.style.display="none";
        forShort.style.display="block";
         i++;
    }
}


