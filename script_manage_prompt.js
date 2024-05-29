const customPrompt = document.getElementById("customPrompt");
const titlePrompt = document.getElementById("titlePromptMessage");
const subtitlePrompt = document.getElementById("subtitlePromptMessage");
const choiceButton1 = document.getElementById("confirmChoice1");
const choiceButton2 = document.getElementById("confirmChoice2");
var isModal;

// managePromptModal("title", "subtitle", "yes", "no", true)
function managePromptModal(titlePromptTemp, subtitlePromptTemp, valueButtonChoice1Temp, valueButtonChoice2Temp, isModalTemp) {

    //Replace text in the prompt
    titlePrompt.textContent = titlePromptTemp;
    subtitlePrompt.textContent = subtitlePromptTemp;
    choiceButton1.textContent = valueButtonChoice1Temp;
    choiceButton2.textContent = valueButtonChoice2Temp;
    isModal = isModalTemp;

    //Manage the user response
    showPrompt(function(result) {
        if (result) {
            // Choice 1 
            console.log("You clicked Choice 1!");
        } else {
            // Choice 2
            console.log("You clicked Choice 2!");
        }
    });
}

//Show Prompt and return the response
function showPrompt(callback) {
    //Disable the scrollable fonctionality
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';

    customPrompt.style.display = "block";

    choiceButton1.onclick = function() {
        customPrompt.style.display = "none"; 
        //Enable the scrollable fonctionality
        document.body.style.overflowX = 'auto';
        document.body.style.overflowY = 'auto';

        callback(true);
    };

    choiceButton2.onclick = function() {
        customPrompt.style.display = "none";
        //Enable the scrollable fonctionality
        document.body.style.overflowX = 'auto';
        document.body.style.overflowY = 'auto';

        callback(false);
    };


    if(isModal == false) {
        //disable modal parameter
        window.onclick = function(event) {
            if (event.target == customPrompt) {
                customPrompt.style.display = "none";
            }
        };
    }
}
