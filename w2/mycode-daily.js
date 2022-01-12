// Showing on Page for code done to webpage. 

const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
// My daily desicion done for work are to enjoy and have fun while working.

// Setting global varibales that show the times I do things when working.

let startTime = 8
let emailCheck = 10
let lunchBreak = 12
let freeTime = 1
let zoomCall= true
let phoneCall=false

    
showOnPage('Iris Daily Desicions for Work')
showOnPage('<b>This is an explanation of my global data based on my daily desicions for work</b>')
showOnPage('Work Start Time is at' + ' ' + startTime + 'a.m')
showOnPage('Check emails around' + ' ' + emailCheck + 'a.m')
showOnPage('I will take lunch break at' + ', ' + lunchBreak + 'p.m')
showOnPage('zoomCall =' + ' ' + zoomCall)
showOnPage('phoneCall =' + ' ' + phoneCall)
showOnPage('----Global Veriable Use----')

// Using if for time work Boolean with comparison

if (startTime >= 9) {
    showOnPage('Lets begin work and play music! Time to have fun lets get building websites')
}
 if (startTime <= 10) {
    showOnPage('Still not time for work lets drink a green tea, sit, relax and meditate! Remember to remind yourself that no matter the challenges of the day YOU GOT THIS.')
}

// Using Scope local variables for email check, lunch break, and free time. 

if (emailCheck) {
    showOnPage(emailCheck)
    let lunchBreak = 'Alright, email checking is complete, time for my lunch. Lets go! There is nothing better than learning to see food as energy. FYI Im vegetarian!'
    showOnPage(lunchBreak)

    if (lunchBreak) {
       let freeTime = 'I will add my free time to my lunch break and get a siesta for the mean time. Why Not!'
        
    }
}


// Using logical to determine and/or with if and else if

if (zoomCall && phoneCall) {
    showOnPage('Oh no...Both zoom and phone at the same time. I will get back to each at different times.')
} else if (zoomCall || phoneCall) {
    showOnPage('OK good zoom call meeting first lets do this Iris' + ' ' + '<b>YOU GOT THIS</b>, these zoom calls are mostly based on new learning or getting creative with editing photos.')
}