$(document).ready(function(){
var game = {
    aright: 0,
    awrong: 0,
    ctimer: 15,
    qnum: 0,
    curQ: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    q: 
        [
            {
            qtext: "actual question text",
            qanswers: ["question Answer1", "question Answer2", "question Answer3", "question Answer4"],
            cai: 3,

            },
            {
            qtext: "actual question text",
            qanswers: ["question Answer1", "question Answer2", "question Answer3", "question Answer4"],
            cai: 2,

            },
            {
            qtext: "actual question text",
            qanswers: ["question Answer1", "question Answer2", "question Answer3", "question Answer4"],
            cai: 4,

            },
            {
            qtext: "actual question text",
            qanswers: ["question Answer1", "question Answer2", "question Answer3", "question Answer4"],
            cai: 3,

            },
            {
            qtext: "actual question text",
            qanswers: ["question Answer1", "question Answer2", "question Answer3", "question Answer4"],
            cai: 1,

            }
        ],
    round: function() {
        var intervalId;
        function stop() {
            clearInterval(intervalId);
            }
            
        function timerStart() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            }
        function decrement() {
            ctimer--;
            $("#show-number").html("<h2>" + game.ctimer + "</h2>");
            
            if (game.ctimer === 0) {
                stop();
                game.awrong++;
                $('#timeout').show().delay( 5000 ).hide();
                 game.nextQuestion();
                }
            
            else if ($(".wrongAnswer").click(function()  {
                stop();
            }) ) {
                game.awrong++;
                $('#wronghtml').show().delay( 5000 ).hide();
                game.nextQuestion();
                }
            
            else if ($(".rightAnswer").click(function()  {
                stop();
            }) ) {
                game.aright++;
                $('#righthtml').show().delay( 5000 ).hide();
                game.nextQuestion();
                }
            }
    },
    start: function() {
        game.hidestart();
        if (game.qnum < game.q.length) {
            game.round();
        }
        else if (game.qnum = q.length) {
            game.restart();
        }
    },
    
    
};

var qHtml =
          "<h2>Time Remaining: " + game.cTimer+ "</h2>" +
          "<h1>" + game.q[game.qnum].qtext + "</h2>" +
          "<h2>" + game.q[game.qnum].qanswers[0] + "</h2>" +
          "<h2>" + game.q[game.qnum].qanswers[1] + "</h2>" +
          "<h2>" + game.q[game.qnum].qanswers[2] + "</h2>" +
          "<h2>" + game.q[game.qnum].qanswers[3] + "</h2>";
 document.querySelector("#game-content").innerHTML = qHtml;
          
});

