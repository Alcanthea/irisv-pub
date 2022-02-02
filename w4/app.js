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
    "<b> &ensp;&ensp;&ensp;&ensp;Iris Daily Desicions for Work/ Email Checking</b>"
  );
  //showOnPage('<br><strong>This is an explanation of my global data based on my daily desicions for work:</br></strong>')
  //showOnPage('Check emails around' + ' ' + 10 + 'a.m')
  //showOnPage('I will take lunch break at' + ', ' + 12 + 'p.m')
  //showOnPage('zoomCall =' + ' ' + zoomCall)
  //showOnPage('phoneCall =' + ' ' + phoneCall)
  showOnPage("<b>--------------------Email Checking Desicions---------------------<b>");
  
  //Week 4 Code. Object Method in use.
  // Use of object here. And using const instead of let.
  // Have a Monday to Wednesday work email check.
  const dailyChoice = {
    emailSize: 0, 
    partOfEmail: 0, 
    emailCheck: function (totalEmail, days, halfEmail, certainEmail) {
    
      showOnPage(`<b>${days}:</b>`);
      showOnPage(`There is ${totalEmail} to be checked this morning.`);
      showOnPage(`There is ${halfEmail} with importance to reply.`);
      showOnPage(`Only ${certainEmail} will be checked for today.`);
// If there is to many emails I will mostly only do half of the emails.
      if (totalEmail > 45 && halfEmail >= certainEmail) {
        //this.emailSize = this.emailSize + partOfEmail;
        //this.partOfEmail = this.partOfEmail;
        showOnPage(`<b>Only will have time to check half of the emails!</b>`);
// If a miracle I will have no emails for the day.    
      } else if (totalEmail >= 60 && halfEmail <= certainEmail) {
        showOnPage( 'No emails for today will have a bit of free time.');
// Sometime the email count is crazy high I do some then get back to them after a break.
      } else if (totalEmail > 60 && halfEmail < certainEmail) {
        showOnPage('Time is limited I will come back to the emails.');
      } 
        
    }
  };
  showOnPage(`<br><b>Morning Email Check Monday to Wednesday Daily Choice</b>`)
  dailyChoice.emailCheck(59, 'Monday Morning Email Check', 32, 29);
  dailyChoice.emailCheck(38, 'Tuesday Morning Email Check', 11, 22);
  dailyChoice.emailCheck(0, 'Wednesday Morning Email Check', 0, 0);
  showOnPage(`No emails for today Yay!! Will have a bit of free time ${dailyChoice.emailSize - dailyChoice.partOfEmail} emails in the day.`
  );
  
  
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
  