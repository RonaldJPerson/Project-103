const studentName = "Joe";
const role = "full stack developer student";
const professor = "his professor";
let bragLine = "I can handle both front-end and back-end!";
let project = "a website";
let frontEndMagic = "buttons that were perfect, menus that werealigned and styled nicely, and a webpage background that changed colors every time you scrolled.";
let backEndResponse = "Error 404: Coffee Not Found";
let smartRemark = "That’s not a bug… it’s a feature. The server runs only on caffeine!";


let story = `${studentName} was a ${role} who proudly told ${professor}, “${bragLine}”
For the class project, he built ${project} where the front-end looked amazing—${frontEndMagic}.
But when the professor clicked “Submit,” the back-end proudly responded with:
${backEndResponse}.
${studentName} grinned and said, “${smartRemark}”`;


console.log(story);


bragLine = "I can debug faster than lightning!";
frontEndMagic = "buttons that sang a song when pressed and a feature that told jokes to the user";
backEndResponse = "Error 500: Internal Server Error: Too many requests!";
smartRemark = "Relax, professor, the server can't tell you if its down because it is too busy being down...besides it is trying to singing you a song!";

let alternateStory = `${studentName} was a ${role} who proudly told ${professor}, “${bragLine}”
For the class project, he built ${project} where the front-end looked amazing—${frontEndMagic}.
But when the professor clicked “Submit,” the back-end proudly responded with:
${backEndResponse}.
${studentName} grinned and said, “${wittyRemark}”`;

console.log(alternateStory);