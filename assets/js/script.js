// Import professions.json
import professions from "../data/professions.json" assert { type: 'json' };

// Import platforms.json
import platforms from "../data/platforms.json" assert { type: 'json' };

console.log(platforms.platforms[0].platform);
console.log(platforms.platforms[1].platform);
console.log(platforms.platforms[2].platform);


console.log(professions.professions[1]);

// Parameters for calculation Arrey(Profession, Seniority, Array{Selectet Platforms}, Budget)
let parameters = {};



// Functions to be used

function processSteps() {

};

function navPreviousNext() {
    
    
    // If on page one -> no previous

    // If on page three -> results

    // If on page four -> restart

}

// Step 1 Next Button

let click = document.getElementById("next_btn_1");
click.addEventListener("click", step1);





// Start Page ------------------------------------




// Step 1 ------------------------------------

function loadProfessions() {

} ;

function step1(event) {
    let selectedProfession = document.getElementById("profession_dropdown");
    console.log(selectedProfession.value);
    // Selected profession is added to parameters object
    parameters.profession = selectedProfession.value;

    let senior = document.getElementById('senior_lvl');
    let midlevel = document.getElementById('mid_lvl');
    let junior = document.getElementById('junior_lvl');
    let student = document.getElementById('student_lvl');

    // Selected seniority is checked and added to parameters object
    if (senior.checked) {
        parameters.seniority = senior.value;
    } else if (midlevel.checked) {
        parameters.seniority = midlevel.value;
    } else if (junior.checked) {
        parameters.seniority = junior.value;
    } else if(student.checked) {
        parameters.seniority = student.value;
    } else {
        alert("Please select a seniority level you are looking for!");
    }

    console.log(parameters);

}


// Step 2 ------------------------------------


    // If logo of platform is selected the logo becomes colored. 
    // In one object all platforms are included with value "false". 
    // If selected, value changes to "true".
    // With click on next platforms with "true" are added to parameters object.


function loadPlatforms() {

};

function selectorPlatforms() {

    // Was at least one value selected?

};


// Step 3 ------------------------------------


function validateBudget() {

    // Validation if Budget is bigger then 200€ and smaller then 20.000€

};



// Step 4 ------------------------------------


function generateResults() {

};


