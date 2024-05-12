"use strict"

// these are our teams
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

// this is our window.onload function that runs code once the dom is loaded
window.onload = function () {
    // load a default option before loading the real teams
    let theDropdown = document.querySelector("#footballSelect");

    // creating an html element with a specific value and text
    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a team";
    defaultOption.value = "";

    theDropdown.appendChild(defaultOption);

    initDropdown();

    // grab our button off the page
    let theForm = document.querySelector("#footballForm");

    // when out button is clicked, call displayFootballTeam
    theForm.addEventListener("submit", displayFootballTeam);
};

// this function will display the details about our football team
function displayFootballTeam(event) {
    event.preventDefault();

    // get the dropdown from the page
    let theDropdown = document.querySelector("#footballSelect");

    // get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex;

    // the selected index now needs to be subtracted by 1 because we created a default option
    let selectedTeam = teams[selectedIndex - 1];

    let results = document.querySelector("#results");

    // if I have a selected team, show it, if I don't, delete the text on screen
    if (selectedTeam !== undefined) {
        results.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
    } else {
        results.innerHTML = null;
    }

    // I couldn't tell you why this line is here? It's just what the workbook wants?
    return false;
}

function initDropdown() {

    // get the dropdown from the HTML document and assign it to a variable
    let theDropdown = document.querySelector("#footballSelect");

    // get the total number of teams we have for use in the loop
    let numberOfTeams = teams.length;

    for (let i = 0; i < numberOfTeams; i++) {

        // lets create a new option
        let newOption = document.createElement("option");

        // set the text content for our new option, what our user sees
        newOption.textContent = teams[i].name;

        // set the value for the option
        newOption.value = teams[i].code;

        theDropdown.appendChild(newOption);
    }
}