var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var count =1;
var score = 0;
var elapsed =[];
var r;
var time;



var questions = [
    {
        question:"Mary's father had 5 children - Mimi, Mumu, Mama, Meme, What was the 5th child's name?",
        choiceA : "Mary",
        choiceB : "Momo",
        choiceC : "Impossibe to know",
        choiceD : "Marie",
        correct : "A"

    },
    {
        question:"My mother's mother is my grand-mother. My grand-mother's mother is my mother's_____",
        choiceA : "mother",
        choiceB : "grand-mother",
        choiceC : "grand-daughter",
        choiceD : "step-mother",
        correct : "B"
    },
    {
        question:"Half of 2 + 2 =?",
        choiceA : "1",
        choiceB : "3",
        choiceC : "2",
        choiceD : "4",
        correct : "B"
    },
    {
        question:"Divide 30 by a half and add 10 what have you got?",
        choiceA : "25",
        choiceB : "15",
        choiceC : "none",
        choiceD : "70",
        correct : "D"
    },
    {
        question:"Knowledge is to ignorance, light is to darkness and weakness is to?",
        choiceA : "patient",
        choiceB : "body",
        choiceC : "old-age",
        choiceD : "strength",
        correct : "D"
    },
    {
        question:"I don't speak, I cannot hear, but I always tell the truth.",
        choiceA : "Fish",
        choiceB : "Old Granny",
        choiceC : "The mirror",
        choiceD : "chair",
        correct : "C"
    },
    {
        question:"A farmer had 10 sheep, all but 7 died, how many live sheep were left?",
        choiceA : "7",
        choiceB : "none",
        choiceC : "3",
        choiceD : "17",
        correct : "A"
    },
    {
        question:"The plural of loaf is?",
        choiceA : "loaf",
        choiceB : "loaves",
        choiceC : "loafs",
        choiceD : "loafies",
        correct : "B"
    },
    {
        question:"The plural of piano is?",
        choiceA : "Pianoes",
        choiceB : "Piano",
        choiceC : "Pianoies",
        choiceD : "Pianos",
        correct : "D"
    },
    {
        question:"A woman has 7 children, half of them are boys, can this statement be true?",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : "Maybe",
        choiceD : "I don't know",
        correct : "A"
    }
]; 

var questionTime = 360; //counts down to 0s
    function timer(){

        if(count == questionTime){
            count= 1;// restarts the count
            answerIsWrong()
            choice[runningQuestion] = "";
            elapsed[runningQuestion] = "<span style='color:red; font-weight: bold;'>Time elapsed</span>"; //=========Holds question timedout information per question========
              //since no answer was clicke
            if( runningQuestion < lastQuestionIndex){
                runningQuestion++
                renderQuestion()
            }
            else{
    //end the quiz and show  score
  
    clearInterval(time);
    scoreRender(); 
    runningQuestion = 0;
            }     
       

        }
     
     if(count<=180){
     document.getElementById("timer").className = "progress-circle " ;//+ "p"+x ;
     document.getElementById("t").style.transform ="rotate("+count+"deg)"
                           //x++;
     count++;
     }
     else{
     document.getElementById("timer").className = "progress-circle over50"; //+ "p"+x ;
      document.getElementById("t").style.transform ="rotate("+count+"deg)"
     //x++;
      count++;
                            
      }
                  
       }
        



var lastQuestionIndex = questions.length - 1;
var runningQuestion = 0;

function renderQuestion(){
    var q = questions[runningQuestion]; 
    question.innerHTML = q.question;
    choiceA.innerHTML = "<span style='color:white;  margin-left:-10px; background: rgb(11, 168, 71); padding:5px 10px 5px 10px; px; padsding:5px;'>A</span>   " + q.choiceA ;
    choiceB.innerHTML = "<span style='color:white;  margin-left:-10px; background: rgb(11, 168, 71); padding:5px 10px 5px 10px; px; padsding:5px;'>B</span>   " +  q.choiceB;
    choiceC.innerHTML = "<span style='color:white;  margin-left:-10px; background: rgb(11, 168, 71); padding:5px 10px 5px 10px; px; padsding:5px;'>C</span>   " +  q.choiceC;
    choiceD.innerHTML = "<span style='color:white;  margin-left:-10px; background: rgb(11, 168, 71); padding:5px 10px 5px 10px; px; padsding:5px;'>D</span>   " +  q.choiceD;
    document.getElementById("ind").innerHTML= runningQuestion +" / " + questions.length;
    ;
}



var choice = [];

function checkAnswer(answer){
    
    if(answer == questions[runningQuestion].correct){
        choice[runningQuestion] = "";
       elapsed[runningQuestion] = " ";
        answerIsCorrect();
        count= 1;
       score++;
    }
    else{
        count=1;
choice[runningQuestion] = answer;
        elapsed[runningQuestion] = " ";
        answerIsWrong();
    }
    if( runningQuestion < lastQuestionIndex){
        runningQuestion++
        renderQuestion()
    }
    else{
        //end the quiz and show  score
       clearInterval(time);
        scoreRender();
       runningQuestion = 0;
    }
       
}
function renderProgress(){
    for(let  x=0; x<= lastQuestionIndex; x++){
        document.getElementById("progress").innerHTML += "<div id="+ x +" class='prog'></div>";// the id "+ x +"assigns a seperate id to each progress circle
    }
}
function answerIsCorrect(){
    document.getElementById("audio2").play();
    document.getElementById(runningQuestion).style.backgroundColor="green";
   
}


function answerIsWrong(){
    document.getElementById("audio3").play();
    document.getElementById(runningQuestion).style.backgroundColor="red";
}

//================--------------Show Score and question review----====------==-=-=-=-=-=------===========================
function scoreRender(){
    //display the score container
    document.getElementById("quiz").style.display="none";
    document.getElementById("quizEnd").style.display="block";
    
    
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let remark = (scorePerCent >= 80) ? "Excellent,":
             (scorePerCent >= 70) ? "Great Job," :
              (scorePerCent >= 60) ? "That's Good," :
              (scorePerCent >= 50) ? "Good," :
              (scorePerCent >= 40) ? "You can do better," :
              (scorePerCent >= 0) ? "Try harder," :
              "gg";
              
    let img = (scorePerCent >= 70) ? "Images/a.webp":
              (scorePerCent >= 60) ? "images/b.gif" :
              (scorePerCent >= 50) ? "Images/c.gif" :
              (scorePerCent >= 40) ? "Images/d.webp" :
              "images/d.webp";

  //  document.getElementById("scoreCon").innerHTML = "<img src="+ img +">";
  document.getElementById("quizEnd").style.display = "block";
  document.getElementById("img").src = img;
    document.getElementById("quizScore").innerHTML = "<div style='margin-bottojm:-7px; font-size:1rem'><div style='margin-bottom:-10px;'><h3>"+remark+"</h3> you scored<br></div>"+ "<span style='font-size:45px;  color:#077da1;'>" + scorePerCent +"%</span></div><button id='button1' onclick='home()'>Home</button><button id='button2' onclick='playAgain()'>Play again</button><a id='button3' href='#questionReview'>Check answers</a>";

    var questionIndex = 0;
    var questionNumber = questionIndex + 1;
    var correct = "  <span style='color:green; font-weight: bold;'>Correct</span>";
    var wrong = "  <span style='color:red; font-weight: bold;'>Wrong</span>";
    while(questionIndex < questions.length){
        r = questions[questionIndex]; 
        r.choiceAA = r.choiceA;
         r.choiceBB = r.choiceB;
         r.choiceCC = r.choiceC;
        r.choiceDD = r.choiceD;
        question.innerHTML = r.question;
       
       if(r.correct == "A" ){
           r.choiceAA = r.choiceA + correct
       }
    
       if(r.correct == "B" ){
        r.choiceBB = r.choiceB + correct

       }

    if(r.correct == "C" ){
        r.choiceCC = r.choiceC + correct

    }
  
    if(r.correct == "D" ){
        r.choiceDD = r.choiceD + correct

    }
   

    if(choice[questionIndex] == "A"){
        r.choiceAA = r.choiceA + wrong

    }

    if(choice[questionIndex] == "B"){
        r.choiceBB = r.choiceB + wrong

    }

    if(choice[questionIndex] == "C"){
        r.choiceCC = r.choiceC + wrong

    }

    if(choice[questionIndex] == "D"){
        r.choiceDD = r.choiceD + wrong

    }

       
        document.getElementById("review").innerHTML += "<div><b>"+questionNumber+". "+r.question+"</b><br>A. " +r.choiceAA+"<br>B. "+ r.choiceBB+"<br>C. "
        + r.choiceCC+"<br>D. " +r.choiceDD+"<br>" +elapsed[questionIndex]+ "</div><hr>";
        questionIndex++;
        questionNumber++;
        

    }

}
//Quiz start
function startQuiz(){
    document.getElementById("quiz").style.display = "block";
    document.getElementById("sound").style.display = "block";
    document.getElementById("audio1").play()
    document.getElementById("start_quiz").style.display = "none";
    document.getElementById("container").style.marginTop = "10px";
    document.getElementById("footer").style.display="none";
    renderQuestion();
    time =  setInterval(() => {timer()}, 45) ;
    renderProgress();
 
 
 }
//========Play quiz again function =================================================
function playAgain(){
   
    document.getElementById("playAgain").style.display="none";
    document.getElementById("sound").style.display = "block";
    document.getElementById("quiz").style.display="block";
    document.getElementById("quizEnd").style.display="none";
    document.getElementById("footer").style.display="none";
    score = 0;
   document.getElementById("review").innerHTML="";
   document.getElementById("progress").innerHTML="";
   renderQuestion();
   time =  setInterval(() => {timer()}, 70) ;
   renderProgress();
   // document.getElementById("quizScore").style.display="none";
}

function home(){
   
    document.getElementById("playAgain").style.display="block";
    document.getElementById("quizEnd").style.display="none";
    document.getElementById("footer").style.display="block";
   // document.getElementById("quizScore").style.display="none";
}

function sound1(){
    document.getElementById("sound").innerHTML = "<a onclick='sound()' style='font-size:30px;'>🔇</a>";
    document.getElementById("audio1").muted = true;
    document.getElementById("audio2").muted = true;
    document.getElementById("audio3").muted = true;
}
function sound(){
    document.getElementById("sound").innerHTML = "<a onclick='sound1()' style='font-size:30px;'>🔊</a>"
    document.getElementById("audio1").muted = false;
    document.getElementById("audio2").muted = false;
    document.getElementById("audio3").muted = false;
}
