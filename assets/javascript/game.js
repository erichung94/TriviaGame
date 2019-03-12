//Starting screen, doesn't do anything until the message is clicked (on.("click", function) to get it transitioning to next thing.
//Create function that requires inputs, 1 which creates questions and then the answers. 
    // How do I randomize the order of the answers?
// Maintain a counter for correct answers, wrong answers, and then unanswered questions (Do I create an option for not answering?)
// At the end of the questions, or end of the timer - jump to a "finished" screen showing the results. 
// Reset button, create another on.("click", function), and resets the game back to the beginning. 
//Create counter for slides? 10 questions = 10 slides, when slides === 11, go to results page.

var quiz = [{
    question: "Who lives in a pineapple under the sea?"
        
        answers:
        {
        a: "SPONGEBOB SQUAREPANTS!",
        b. "Spongebob Squarepants...",
        c. "Some sponge thing.",
        d. "... Technically all of the above",
        }
        correct answer: "c"
    question: "What is the largest species of fish?",
        
        answers:
        {
        a: "Basking Shark",
        b: "Giant Oceanic Manta Ray",
        c: "Blue Whale",
        d: "Whale Shark",
        }
        correct answer: "d"
    question: "How much of the Earth is water?"
        {
        a: "57%",
        b: "93%",
        c: "72%",
        d: "Water is a myth, 0%",
        }
        correct answer: "c"
    question: "Which of these bodies of water is the saltiest?"
        {
        a: "The Dead Sea",
        b: "Gaet'ale Pond",
        c: "Lake Tears of a Webdesigner",
        d: "Red Sea",
        }
        correct answer: "b"
    question: "How much of the Earth is water?"
        {
        a: "57%",
        b: "93%",
        c: "72%",
        d: "Water is a myth, 0%",
        }
        correct answer: "c"
    question: "--PLACEHOLDER QUESTION--"
        {
        a: "--PLACEHOLDER ANSWER--",
        b: "--PLACEHOLDER ANSWER--",
        c: "--PLACEHOLDER ANSWER--",
        d: "--PLACEHOLDER ANSWER--",
        }
        correct answer: "c"
    
    question: "--PLACEHOLDER QUESTION--"
        {
        a: "--PLACEHOLDER ANSWER--",
        b: "--PLACEHOLDER ANSWER--",
        c: "--PLACEHOLDER ANSWER--",
        d: "--PLACEHOLDER ANSWER--",
        }
        correct answer: "c"

    question: "--PLACEHOLDER QUESTION--"
        {
        a: "--PLACEHOLDER ANSWER--",
        b: "--PLACEHOLDER ANSWER--",
        c: "--PLACEHOLDER ANSWER--",
        d: "--PLACEHOLDER ANSWER--",
        }    
        correct answer: "c"
    question: "--PLACEHOLDER QUESTION--"
        {
        a: "--PLACEHOLDER ANSWER--",
        b: "--PLACEHOLDER ANSWER--",
        c: "--PLACEHOLDER ANSWER--",
        d: "--PLACEHOLDER ANSWER--",
        } 
        correct answer: "c"
    question: "--PLACEHOLDER QUESTION--"
        {
        a: "--PLACEHOLDER ANSWER--",
        b: "--PLACEHOLDER ANSWER--",
        c: "--PLACEHOLDER ANSWER--",
        d: "--PLACEHOLDER ANSWER--",
        }
}]

function nextQuestion(){
    currentSlide++;
}