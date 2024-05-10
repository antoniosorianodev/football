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
    initDropdown();

    // grab our button off the page
    let theButton = document.querySelector("#theButton");

    // when out button is clicked, call displayFootballTeam
    theButton.addEventListener("click", displayFootballTeam);
};

// this function will display the details about our football team
function displayFootballTeam() {

    // get the dropdown from the page
    let theDropdown = document.querySelector("#footballSelect");

    // get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex;

    let selectedTeam = teams[selectedIndex];

    let results = document.querySelector("#results");

    results.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
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