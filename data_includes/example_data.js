/// Place your items here. Follow the naming convention: 'words-CONDITIONLABEL'.

var items = [

    /// You may edit the text in quotes here to configure the instructions for your experiment
    
    ["intro", "Message", {consentRequired: false,
                    html: ["div",
                            ["p", "Welcome to the experiment!"],
                            ["p", "For every item you see, decide which play the character is from."],
                            ["p", "Press 'S' if it IS a character from Romeo and Juliet, press 'K' if it a character from a Midsummer Night's dream."],
                            ["p", "Respond as quickly and accurately as you can."]
                          ]}],

    ["sep", "Separator", {}],

    
    /// Your stimuli go below here.
   
    ["words-RJ","OnlineJudgment",{s: "TYBALT"}],
    ["words-RJ","OnlineJudgment",{s: "MERCUTIO"}],
    ["words-RJ","OnlineJudgment",{s: "ROSALINE"}],
    ["words-MSND","OnlineJudgment",{s: "PUCK"}],
    ["words-MSND","OnlineJudgment",{s: "OBERON"}],
    ["words-MSND","OnlineJudgment",{s: "LYSANDER"}],
   
    ["end", "Message", {transfer: 2000,
                    html: ["div",
                            ["p", "All done! Please wait while we send the results to the server."]
                          ]}],

];


/// Edit below here at your own peril

var shuffleSequence = seq("intro", sepWith("sep", rshuffle(startsWith("words"))), "end");
var practiceItemTypes = ["practice"];
var showProgressBar = false;

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: "Wrong. Please wait for the next sentence.",
        ignoreFailure: true
    },
    "OnlineJudgment", {
        mode: "lexical decision",
        display: "in place",
        SOA: 1000,
        fixationCross: "+"
    }
];


