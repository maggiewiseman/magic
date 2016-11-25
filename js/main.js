

var messsageList = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"]
//computes a random number so a random message from array is chosen.  

var getMessage = function() {
   'use strict';
  console.log("in getMessage function about to call math");
    var index = Math.floor((Math.random() * 20));
    console.log(index);
  
   
  
  //change message in DOM
  $("#triangle").fadeOut(1).fadeIn(2000, "swing");
  $("#message").hide();
  $("#message").text(messsageList[index]).fadeIn(3000);
};

$("document").ready(function () {
  console.log("in ready function");
  $("#message").hide();
  
  $("#ask-btn").click(getMessage);
  
  
  window.addEventListener('deviceshake', function (){
        getMessage();
  }, false);
  

});