var game = {
    aRight: 0,
    aWrong: 0,
    cTimer: 15,
    curQ: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
};
var gameQA = {Questions: [{Question: "Question Text", Answers: ["Question Answer1", "question Answer2", "question Answer3", "question Answer4"], CA: 3},
                          {Question: "Question Text", Answers: ["Question Answer1", "question Answer2", "question Answer3", "question Answer4"], CA: 1},
                          {Question: "Question Text", Answers: ["Question Answer1", "question Answer2", "question Answer3", "question Answer4"], CA: 2},
                          {Question: "Question Text", Answers: ["Question Answer1", "question Answer2", "question Answer3", "question Answer4"], CA: 2},
                          {Question: "Question Text", Answers: ["Question Answer1", "question Answer2", "question Answer3", "question Answer4"], CA: 4}
]};

var html =
          "<h2>Time Remaining: " + game.cTimer+ "</h2>" +
          "<h1>" + game.curQ + "</h2>" +
          "<h2>" + game.ans1 + "</h2>" +
          "<h2>" + game.ans2 + "</h2>" +
          "<h2>" + game.ans2 + "</h2>" +
          "<h2>" + game.ans4 + "</h2>";
 document.querySelector("#game-content").innerHTML = html;
          


