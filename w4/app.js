const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};
// My daily desicion done for work are to enjoy and have fun while working.

// Setting global varibales that show the times I do things when working.
//let emailCheck = 10
//let lunchBreak = 12
//let zoomCall = true;
//let phoneCall = false;

showOnPage(
  "<b> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Iris Daily Desicions for Work</b>"
);
//showOnPage('<br><strong>This is an explanation of my global data based on my daily desicions for work:</br></strong>')
//showOnPage('Check emails around' + ' ' + 10 + 'a.m')
//showOnPage('I will take lunch break at' + ', ' + 12 + 'p.m')
//showOnPage('zoomCall =' + ' ' + zoomCall)
//showOnPage('phoneCall =' + ' ' + phoneCall)
showOnPage("<b>-----------------Work Day Desicions-------------------<b>");

//Week 4 New Code. Object Methods in use.
// Use of object here. And using const instead of let.
const workStart = {
  time: 8,
  name: "Iris",
  ready: "ready 45 minutes before work starts,",
  location: "Parlier",
};
showOnPage(
  `It is ${workStart.time} a.m. ${workStart.name} is ${workStart.ready} and works in ${workStart.location}.`
),
  (lunchBreak = {
    time: 12,
    food: "Salad with avocado toast",
    drink: "Ginger Lemon Iced Tea",
  });
showOnPage(
  `It is ${lunchBreak.time} p.m time for lunch. Today I will have ${lunchBreak.food} and for my drink ${lunchBreak.drink}`
);
// Use of object refrence to show the total emails I have and how many I have checked to output how many I have left.
const checkEmail = {
    name: "Iris",
    time: "time to check emails",
    totalEmail: 0,
    checkHalf: 0,
  },
  allEmail = function (emails, totalEmail) {
    emails.totalEmail = emails.totalEmail + totalEmail;
  },
  halfEmail = function (emails, checkHalf) {
    emails.checkHalf = emails.checkHalf + checkHalf;
  },
  emailsSummary = function (emails) {
    let balance = emails.totalEmail - emails.checkHalf;
    return `${checkEmail.name} it is ${checkEmail.time} you have ${balance} emails left. All in total ${emails.totalEmail} you have checked ${emails.checkHalf}`;
  },
  isZoom = function (zoomcall) {
    return zoomcall.length > 7 && !zoomcall.includes("zoomcall");
  },
  isPhoneCall = function (phonecall) {
    return phonecall.length > 9 && !phonecall.includes("phonecall");
  };
allEmail(checkEmail, 60);
halfEmail(checkEmail, 21);
showOnPage(emailsSummary(checkEmail));

showOnPage("Zoom call is true I will attend work meeting.");
showOnPage(isZoom("abc123!@#$%^&")); //True since lettering is greater than zoomcall total count of 7.

showOnPage("Phone Call is false. I will leave call for later.");
showOnPage(isPhoneCall("123@tHe")); // False since phonecall lettering is not greater than phonecall count of 9.

// Using return Value/Function (Function 1 used) Added semicolon to code.

//let dailyChoice = function (fullTime) {
//let startTime = 8;

// if ((startTime <= 8)) {
//  return `It is ${fullTime} a.m time for work! Remember to relax and not stress about it!`;
//  }
// };

// let result = dailyChoice(8);
// showOnPage(result);

// Function 2 Email Check
//let emailTime = function (checkEmail) {

// if ((checkEmail <= 10)) {
// return `It is ${checkEmail}. Alright time to check on emails and respond to clients. Lets Go! Once done, I will get my lunch break. `;
// }
// };
// let time = emailTime(10);
// showOnPage(time);

// Using Scope local variables for email check, lunch break, and free time.

//if (emailCheck) {
// showOnPage(emailCheck)
// let lunchBreak = 'Alright, email checking is complete, time for my lunch. Lets go! There is nothing better than learning to see food as energy. FYI Im vegetarian!'
//showOnPage(lunchBreak)

//if (lunchBreak) {
// let freeTime = 'I will add my free time to my lunch break and get a siesta for the mean time. Why Not!'

//}
//}

// Using logical to determine and/or with if and else if

//if (zoomCall && phoneCall) {
// showOnPage(
// "Oh no...Both zoom and phone at the same time. I will get back to each at different times."
// );
//  } else if (zoomCall || phoneCall) {
//showOnPage(
// "OK good zoom call meeting first lets do this Iris" +
//  " " +
//  "<b>YOU GOT THIS</b>, these zoom calls are mostly based on new learning or getting creative with editing photos."
// );
//  }
