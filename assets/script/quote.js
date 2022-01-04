function genQuote() {
    var randNum = Math.floor(Math.random() * 3) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    var getQuote = quotes[randNum];   
}
var quotes = ["Blank", 
"\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis", 
"\"If you can dream it, you can do it.\"<br>- Walt Disney", 
"\"It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward.\"<br>- Rocky Balboa", ];
