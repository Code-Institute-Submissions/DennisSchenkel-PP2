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






// Start Page ------------------------------------


function loadStart(event) {
    // Change HTML to start
}

    // Start Button
let nextBtn0 = document.getElementById("next_btn_0");
nextBtn0.addEventListener("click", loadStep1);



// Step 1 ------------------------------------


function loadStep1(event) {
    // Load HTML of step1
}

    // Load Professions to dropdown
function loadProfessions() {

} ;

    // Step 1 Logic
function step1(event) {
    
    // Get selected profession
    let selectedProfession = document.getElementById("profession_dropdown");
    console.log(selectedProfession.value);

    // Selected profession is added to parameters object
    parameters.profession = selectedProfession.value;

    // Get selected seniority
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

    // loadstep2(event)
    console.log(parameters);

}

    // Step 1 Next Button
let nextBtn1 = document.getElementById("next_btn_1");
nextBtn1.addEventListener("click", step1);





// Step 2 ------------------------------------


    // If logo of platform is selected the logo becomes colored. 
    // In one object all platforms are included with value "false". 
    // If selected, value changes to "true".
    // With click on next platforms with "true" are added to parameters object.



function loadStep2(event) {
    // Load HTML of step2
}

    // Step 1 Logic
function step2(event) {



    // loadstep3(event)

}

    // Step 2 Next Button
let nextBtn2 = document.getElementById("next_btn_2");
nextBtn2.addEventListener("click", step2);
    
    // Step 2 Previous Button
let previousBtn2 = document.getElementById("previous_btn_2");
previousBtn2.addEventListener("click", loadStep1);
    




// Step 3 ------------------------------------



    // Validation if Budget is bigger then 200€ and smaller then 20.000€

function loadStep3(event) {
    // Load HTML of step3
}

    // Step 1 Logic
function step3(event) {

    
    // loadstep4(event)

}

    // Step 3 Next Button
let nextBtn3 = document.getElementById("next_btn_3");
nextBtn3.addEventListener("click", step3);
    
    // Step 3 Previous Button
let previousBtn3 = document.getElementById("previous_btn_3");
previousBtn3.addEventListener("click", loadStep2);



// Step 4 ------------------------------------


function loadStep4(event) {
    // Load HTML of step4
}

    // Step 4 Logic (Calculate results)
function step4(event) {

    // Change HTML to start or previous

}

    // Step 4 Next Button - Restart - Goes back to index.html

    // Step 4 Previous Button
let previousBtn4 = document.getElementById("previous_btn_4");
previousBtn4.addEventListener("click", loadStep3);
    
