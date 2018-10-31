var noOfQue = document.getElementById('noOfQue');
var typeOfQue = document.getElementById('typeOfQue');
var queType = document.getElementById('queType');
var forMultiChoice = document.getElementById('forMultiChoice');
var correctAns = document.getElementById('correctAns');
var choice1=document.getElementById('choice1');
var choice2=document.getElementById('choice2');
var choice3=document.getElementById('choice3');
var forRadio = document.getElementById('forRadio');
var tru=document.getElementById('true');
var forShortAns = document.getElementById('forShortAns');
var shortAns = document.getElementById('shortAns');





var flag=false;
var queCount=1;

var question=[];
function MultiQuiz(qId,quest,correctAnswer,choice1,choice2,choice3,qType){
    this.qId=qId;
    this.quest=quest;
    this.correctAnswer=correctAnswer;
    this.choice1=choice1;
    this.choice2=choice2;
    this.choice3=choice3;
    this.qType=qType;
}
function RadioQuiz(qId,quest,correctAnswer,qType){
    this.qId=qId;
    this.quest=quest;
    this.correctAnswer=correctAnswer;
    this.qType=qType;
}
function ShortQuiz(qId,quest,correctAnswer,qType){
    this.qId=qId;
    this.quest=quest;
    this.correctAnswer=correctAnswer; 
    this.qType=qType;  
}
function goNext(){
    noOfQueCheck();
    typeOfQueCheck();
    queTypeCheck();
    correctAnsCheck();
    choice1Check();
    choice2Check();
    choice3Check();
    trueCheck();
    shortAnsCheck();

   if(queCount<parseInt(noOfQue.value)+1){
       var type="multi";
        if(typeOfQue.selectedIndex===1){
            var quiz=new MultiQuiz(queCount,queType.value,correctAns.value,choice1.value,choice2.value,choice3.value,type);
            question.push(quiz);
            console.log(quiz);
            
            var qc=document.getElementById('qc');
            qc.innerText="Question no "+parseInt(queCount+1);
            if(queCount===parseInt(noOfQue.value)){
                alert("Successfully added "+noOfQue.value+" Questions");
                localStorage.setItem("QUIZ",JSON.stringify(question));
                afterAddQuiz();
            }
           
            
        }
        else if(typeOfQue.selectedIndex===2){
            var type="radio";
            var quiz=new RadioQuiz(queCount,queType.value,tru.value,type);
            question.push(quiz);
            console.log(quiz);
            var qc=document.getElementById('qc');
            qc.innerText="Question no "+parseInt(queCount+1);
            if(queCount===parseInt(noOfQue.value)){
                alert("Successfully added "+noOfQue.value+" Questions");
                localStorage.setItem("QUIZ",JSON.stringify(question));
                afterAddQuiz();

            }

        }
        else if(typeOfQue.selectedIndex===3){
            var type="short";
            var quiz=new ShortQuiz(queCount,queType.value,shortAns.value,type);
            question.push(quiz);
            console.log(quiz);
            var qc=document.getElementById('qc');
            qc.innerText="Question no "+parseInt(queCount+1);
            if(queCount===parseInt(noOfQue.value)){
                alert("Successfully added "+noOfQue.value+" Questions");
                localStorage.setItem("QUIZ",JSON.stringify(question));
                afterAddQuiz();
            }

        }
        
        queCount++;
        empty();
        
   }
   else if(queCount===noOfQue.value){
    alert("Successfully added "+noOfQue.value+" Questions");
   }
   
}

function afterAddQuiz(){
    document.getElementById('mainContent').style.display="none";
    document.getElementById('heading').innerText="Successfully Added "+queCount+" Questions";
    document.getElementById('afterAddQuiz').style.display="block";   
}























function noOfQueCheck(){
    var noRegex=/^[0-9]+$/;
    var err = document.getElementById('errorNoOfQue');
    if(noOfQue.value.match(noRegex)){
        err.innerHTML="";
        flag=true;
        if(noOfQue.value==="0"){
            noOfQue.value='';
            err.innerHTML="<small>Number Could not Start Zero</small>";
            flag=false;
        }
    }

    else{
        noOfQue.value='';
        err.innerHTML="<small>Only Numbers Allow</small>";
        flag=false;
    }
}
function readonly(){
    var err = document.getElementById('errorNoOfQue');
    if(noOfQue.value===null || noOfQue.value===""){
        err.innerHTML="<small>Can't be Blank</small>";
        flag=false;
    }
    else if(noOfQue.value!==null || noOfQue.value!==""){
        noOfQue.setAttribute("readonly","readonly");
    }
}
function typeOfQueCheck(){
    var err=document.getElementById('errorTypeOfQue');
    if(typeOfQue.selectedIndex===0){
        err.innerHTML="<small>Plz Select Type of Question</small>"
        flag=false;
    }
    else{
        err.innerHTML="";
        flag=true;
    }
} 
function queTypeCheck(){
    var err=document.getElementById('errorQueType');
    if(queType.value===null || queType.value==="" || queType.value===" "){
        err.innerHTML="<small>Can't be Blank</small>";
        flag=false;
    }
    else{
        err.innerHTML="";
        flag=true;
    }      
}
function correctAnsCheck(){
    var err=document.getElementById('errorCorrectAns');
    if(correctAns.value===null || correctAns.value==="" || correctAns.value===" "){
        err.innerHTML="<small>Can't be Blank</small>";
        flag=false;
    }
    else{
        err.innerHTML="";
        flag=true;
    }
}
function choice1Check(){
    var err=document.getElementById('errorChoice1');
    if(choice1.value===null || choice1.value==="" || choice1.value===" "){
        err.innerHTML="<small>Can't be Blank</small>";
        flag=false;
    }
    else{
        err.innerHTML="";
        flag=true;
    }
}
function choice2Check(){
    var err=document.getElementById('errorChoice2');
    if(choice2.value===null || choice2.value==="" || choice2.value===" "){
        err.innerHTML="<small>Can't be Blank</small>";
        flag=false;
    }
    else{
        err.innerHTML="";
        flag=true;
    }
}
function choice3Check(){
    var err=document.getElementById('errorChoice3');
    if(choice3.value===null || choice3.value==="" || choice3.value===" "){
        err.innerHTML="<small>Can't be Blank</small>";
        flag=false;
    }
    else{
        err.innerHTML="";
        flag=true;
    }
}
function trueCheck(){
    var err=document.getElementById('errorTrue');
    if(tru.value.toLowerCase()==="true" || tru.value.toLowerCase()=== "false"){
        err.innerHTML="";
        flag=true;
    }
    else{
        err.innerHTML="<small>Allow only true or false</small>";    
        flag=false;

    }
}


function shortAnsCheck(){
    var err=document.getElementById('errorShortAns');
    if(shortAns.value===null || shortAns.value==="" || shortAns.value===" "){
        err.innerHTML="<small>Can't be Blank</small>";
        flag=false;
    }
    else{
        err.innerHTML="";
        flag=true;
    }      
}
function empty(){
    typeOfQue.value="Select type of Question";
    queType.value="";
    correctAns.value="";
    choice1.value="";
    choice2.value="";
    choice3.value="";
    tru.value="";
    shortAns.value="";
    forMultiChoice.style.display="none";
    forRadio.style.display="none";
    forShortAns.style.display="none";
    
}
function tekeQuiz(){
    location.replace("quiz.html");
}




function showAmswer(){
    if(typeOfQue.selectedIndex===1){
        forMultiChoice.style.display="block";
        forRadio.style.display="none";
        forShortAns.style.display="none";
    }
    else if(typeOfQue.selectedIndex===2){
        forMultiChoice.style.display="none";
        forRadio.style.display="block";
        forShortAns.style.display="none";
    }
    else if(typeOfQue.selectedIndex===3){
        forMultiChoice.style.display="none";
        forRadio.style.display="none";
        forShortAns.style.display="block";
    }
    else{
        typeOfQueCheck();
    }
}

