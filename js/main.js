'use strict';

var messsageList = ["It is certain", 
                    "It is decidedly so.", 
                    "Without a doubt", 
                    "Yes, definitely", 
                    "You may rely on it.", 
                    "As I see it, yes", 
                    "Most likely.", 
                    "Outlook good."];

$("document").ready(function () {
  console.log ("in ready function");
  
  
  $("#ask-btn").click(function () {
    console.log("in click function about to call math");
    var index = Math.floor((Math.random() * 10));
    console.log(index);
  
    if(index > 7) {
      index = index -2;
    }
     
    $("#message").text(messsageList[index]);
  });
});