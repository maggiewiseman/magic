

var messsageList = ["It is certain", 
                    "It is decidedly so.", 
                    "Without a doubt", 
                    "Yes, definitely", 
                    "You may rely on it.", 
                    "As I see it, yes", 
                    "Most likely.", 
                    "Outlook good."];
//computes a random number so a random message from array is chosen.  

var getMessage = function() {
   'use strict';
  console.log("in getMessage function about to call math");
    var index = Math.floor((Math.random() * 10));
    console.log(index);
  
    //make sure random number is 7 or less because array only has 8 messages
    if (index > 7) {
      index = index - 2;
    } 
  
  //change message in DOM
  $("#message").text(messsageList[index]).fadeOut(1).fadeIn(1500, "easeInBack");
};

$("document").ready(function () {
  console.log("in ready function");
  
  
  $("#ask-btn").click(getMessage);
  
  window.addEventListener('deviceshake', function (){
        getMessage();
  }, false);
  

});