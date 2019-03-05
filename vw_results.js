"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Alex A. Somoza
   Date: 3-4-19  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
//This creates the reportHTML variable and inserts html code to display h1 text on the docuement.
var reportHTML = "<h1>" + raceTitle + "</h1>";
//This for loop creates part of the table by looping through every item in the "race" array and calculates numbers for each item and adds the table to the reportHTML variable.
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}

document.getElementsByTagName("section")[0].innerHTML = reportHTML;
//This function creates more of teh table by getting more items and calculates numbers for each item and places them into the table in the rowHTML variable. The second for loop will add a bar while using the the createBar function.
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";

        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }

        rowHTML += "</tr>";

    }
    return rowHTML;
}


/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}
//This function will add html code to figure out the types of the bars for each party type. For each party type there will be slightly different code. 
function createBar(partyType) {
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>"

            break;

        case "R":
            barHTML = "<td class='rep'></td>"

            break;

        case "I":
            barHTML = "<td class='ind'></td>"

            break;
    }
    return barHTML;
}