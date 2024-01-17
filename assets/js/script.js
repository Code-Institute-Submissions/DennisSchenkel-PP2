// General ------------------------------------

// Import professions.json
import professions from "../data/professions.json" assert { type: 'json' };

// Import platforms.json
import platforms from "../data/platforms.json" assert { type: 'json' };

// Parameters for calculation Arrey(Profession, Seniority, Array{Selectet Platforms}, Budget)
let parameters = {};


// Header ------------------------------------

/** processSteps 
 * This changes the steps bubbles in the header, depending on the step the user is at 
 */
function processSteps(stepNumber) {
    
    // Highlight active step
    let getStep = document.getElementById("step_"+(stepNumber));
    let getStepBack = document.getElementById("step_"+(stepNumber+1));

    // If you go back, this will check the step you have been at and change it back to not active and not done.
    if (stepNumber > 1) {
        let getStepBefore = document.getElementById("step_"+(stepNumber-1));

        // Marks the previously compleated step as done
        if (getStepBefore.parentNode.className = "step_active") {
            getStepBefore.parentNode.className = "step_done";
        }
    }

    // Marks the current step as active
    if (getStep.parentNode.className = "step") {
        getStep.parentNode.className = "step_active";
    }

    // Marks the next step as not active if the user went a step back
    if  (stepNumber < 4) {
        if (getStepBack.parentNode.className = "step_active") {
            getStepBack.parentNode.className = "step";
        }
    }
};

function stepName(stepNumber) {
    let stepName = document.getElementById("step_name");

    if (stepNumber == 1) {
        stepName.innerHTML = `<p>Step 1: Select talent to reach</p>`;
    } if (stepNumber == 2) {
        stepName.innerHTML = `<p>Step 2: Choose platforms to use</p>`;
    } if (stepNumber == 3) {
        stepName.innerHTML = `<p>Step 3: Define budget to allocate</p>`;
    } if (stepNumber == 4) {
        stepName.innerHTML = `<p>Step 4: Results & recommendations</p>`;
    }
}

// Start Page ------------------------------------

/** Start: Start Button functionality */
function startButton () {
    let nextBtn0 = document.getElementById("next_btn_0");
    nextBtn0.addEventListener("click", htmlStep1);
}

// Trigger the startButton function at the start of the app
startButton();


// HTML Content ------------------------------------

// Step 1 HTML
let newContentDivHTML1 = `
<form id="form_1">
    <div class="form_element">
        <label for="profession_dropdown"><h2>Select profession you are trying to reach?</h2></label><br>                        
        <select id="profession_dropdown" name="profession">
        <option value="Profession">Profession</option>
        </select>
    </div>

    <div class="form_element">
        <h2>What level of seniority are you looking for?</h2><br>
        <input type="radio" class="seniority_radio" id="senior_lvl" name="senior_lvl" value="Senior">
        <label for="senior_lvl">Senior</label><br>
        <input type="radio" class="seniority_radio" id="mid_lvl" name="mid_lvl" value="Midlevel">
        <label for="mid_lvl">Midlevel</label><br>
        <input type="radio" class="seniority_radio" id="junior_lvl" name="junior_lvl" value="Junior">
        <label for="junior_lvl">Junior</label><br>
        <input type="radio" class="seniority_radio" id="student_lvl" name="student_lvl" value="Student">
        <label for="student_lvl">Student</label><br>
    </div>

    <div class="nav_buttons">
        <!-- Button to start page - No JS like the rest -->
        <a href="index.html">
            <button type="button" class="buttons" id="previous_btn_1">Previous</button>
        </a>
        <button type="button" class="buttons" id="next_btn_1">Next</button>
    </div>
</form>
`;

// Step 2 HTML
let newContentDivHTML2 = `
<h2>Choose the platforms to use</h2>
                
<div id="platform-imgs">
</div>
<div class="nav_buttons">
    <button type="button" class="buttons" id="previous_btn_2">Previous</button>
    <button type="button" class="buttons" id="next_btn_2">Next</button>
</div>
`;

// Step 3 HTML
let newContentDivHTML3 = `
<div id="budget-form">
    <form>
        <label for="budget"><h2>What is your budget?</h2></label>
        <input type="number" id="budget" required value="2000"><span id="currency-symbol">€</span>
    </form>
    <p>Please make sure to enter a budget of at least 300€ and not more then 20.000€.</p>
</div>
<div class="nav_buttons">
    <button type="button" class="buttons" id="previous_btn_3">Previous</button>
    <button type="button" class="buttons" id="next_btn_3">Results</button>
</div>
`;

// Step 4 HTML
let newContentDivHTML4 = `
<div class="content">
    <h2>Results</h2>
    <p>Step 4</p>
    <div class="nav_buttons">
        <button type="button" class="buttons" id="previous_btn_4">Previous</button>
        <!-- Button to start page - No JS like the rest --!>
        <a href="index.html">
            <button type="button" class="buttons" id="next_btn_4">Restart</button>
        </a>
    </div>
</div>
`;


// Step 1 ------------------------------------

/** Step 1: Logic */
function logicStep1(event) {
    
    getProfesssion();
    getSeniority();
    getMultipliers();

    // htmlStep2(event)
    console.log(parameters); // Delete later
};

/** Step 1: Buttons */
function btnStep1() {
    let nextBtn1 = document.getElementById("next_btn_1");
    nextBtn1.addEventListener("click", logicStep1);
};

/** Step 1: Load HTML */
function htmlStep1(event) {

    let stepNumber = 1;

    stepName(stepNumber)

    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML1;

    processSteps(stepNumber);
    loadProfessions();
    btnStep1();
};

/** Step 1: Load Professions to dropdown
 * Fills the professions dropdown with the elements defined in the professions.json.
 * Professions are added to the dropdown by adding the html by using a for loop.
 */
function loadProfessions() {

    let professionDropdown = document.getElementById("profession_dropdown");
    let newDropdownHTML = "";
    
    for (let i in professions.professions) {
        newDropdownHTML += `<option value="${professions.professions[i].profession}">${professions.professions[i].profession}</option>`;
    };
    
    professionDropdown.innerHTML = newDropdownHTML;

};

/** Step 1: Get selected profession out of dropdown and add it to parameters */
function getProfesssion() {
    // Get selected profession
    let selectedProfession = document.getElementById("profession_dropdown");

    // Selected profession is added to parameters object
    parameters.profession = selectedProfession.value;
};

/** Step 1: Get selected seniority level out of form and add it to parameters */
function getSeniority() {
    // Get selected seniority
    let senior = document.getElementById('senior_lvl');
    let midlevel = document.getElementById('mid_lvl');
    let junior = document.getElementById('junior_lvl');
    let student = document.getElementById('student_lvl');

    // Selected seniority is checked and added to parameters object
    if (senior.checked) {
        parameters.seniority = senior.value;
        htmlStep2(event);
    } else if (midlevel.checked) {
        parameters.seniority = midlevel.value;
        htmlStep2(event);
    } else if (junior.checked) {
        parameters.seniority = junior.value;
        htmlStep2(event);
    } else if(student.checked) {
        parameters.seniority = student.value;
        htmlStep2(event);
    } else {
        alert("Please select a seniority level you are looking for!");
    };
};

/** Step 1: Gets multipliers from selected profession in parameters object */
function getMultipliers() {

    let i = 0;    
    let seniority = parameters.seniority;                                                                             

    for (i in professions.professions) {
        if (professions.professions[i].profession == parameters.profession) {

            let demandMultiplier = professions.professions[i].demandMultiplier;
            let seniorityMultiplier = professions.professions[i].seniorityMultiplier[seniority.toLowerCase()];  // ToLowerCase because caseing in json and parameters is different
    
            let candidateSearchedMultiplier = seniorityMultiplier+demandMultiplier;

            parameters.multipliers = parseFloat(candidateSearchedMultiplier);     

        }  
    }
};


// Step 2 ------------------------------------

/** Step 2: Logic */
function logicStep2(event) {

    // Logos are loaded by function loadLogos().
    // loadLogos() triggerd by loading HTML.

    // Selection of platforms managed by function selectPlatforms().
    // selectPlatforms() is triggered by eventListener.

    htmlStep3(event);
};

/** Step 2 Buttons */
function btnStep2(stepNumber) {

    // Step 2 Next Button
    let nextBtn2 = document.getElementById("next_btn_2");
    nextBtn2.addEventListener("click", logicStep2);
    
    // Step 2 Previous Button
    let previousBtn2 = document.getElementById("previous_btn_2");
    previousBtn2.addEventListener("click", htmlStep1);
};

/** Step 2: Load HTML */
function htmlStep2(event) {

    let stepNumber = 2;

    stepName(stepNumber)

    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML2;

    processSteps(stepNumber);
    loadLogos();
    btnStep2(stepNumber);
};

/** Step 2: Platform Logo List 
 * Loads the platform logos from sources defined in the platform.json.
 * Each logo is added by a for loop.
 */
function loadLogos() {
    
    let platformImages = document.getElementById("platform-imgs");
    let logoList = "";

    // Loading logo for each platform and declaring a unique ID for each.
    for (let i in platforms.platforms) {
        let imgSelected = platforms.platforms[i].imgLogoURL;
        let platformName = platforms.platforms[i].platform;

        logoList += `<div class="img-raster-element"><img id="${platformName}" class="platform-logos" src="${imgSelected}"><p>${platformName}</p></div>`;

        platformImages.innerHTML = logoList;
    };

    // Adding event listeners to each logo.
    for (let i in platforms.platforms) {
 
        let platformName = platforms.platforms[i].platform;
        let logoSelect = document.getElementById(platformName);        
        logoSelect.addEventListener('click', selectPlatforms);

    };

    // Create array within parameters object for selected platforms
    parameters.platforms = [];
};

/** Step 2: Select and unselect logos */
function selectPlatforms() {
    // console.log("That worked! "+this.id+" was selected!")                                                      // Delete later
    let selectingLogo = document.getElementById(this.id);
    
    // Changing logo to selected or unselected and adding/removing it from parameters array
    if (selectingLogo.className === "platform-logos") {
        selectingLogo.className = "platform-logos-selected"
        // Add selected platform to platforms array inside parameters object
        parameters.platforms.push(this.id);
    } else {
        selectingLogo.className = "platform-logos";
        // Find index of selected platform in array
        let index = parameters.platforms.indexOf(this.id);
        // Remove selected platform from array
        parameters.platforms.splice(index, 1);
    };

    // console.log(parameters);                                                                                 // Delete later
};


// Step 3 ------------------------------------

/** Step 3: Logic */
function logicStep3(event) {

    getBudget();

    console.log(parameters);                                                                                     // Delete later
};

/** Step 3: Buttons */
function btnStep3(stepNumber) {
    // Step 3 Next Button
    let nextBtn3 = document.getElementById("next_btn_3");
    nextBtn3.addEventListener("click", logicStep3);
    
    // Step 3 Previous Button
    let previousBtn3 = document.getElementById("previous_btn_3");
    previousBtn3.addEventListener("click", htmlStep2);
};

/** Step 3: Load HTML */
function htmlStep3(event) {

    let stepNumber = 3;

    stepName(stepNumber)

    let contentDiv = document.getElementById("content_div");

    contentDiv.innerHTML = newContentDivHTML3;

    processSteps(stepNumber);
    btnStep3(stepNumber);
};

/** Step 3: Get budget from form and send it to the parameters object */
function getBudget() {
    let budget = document.getElementById("budget");
    
    if (budget.value >= 300 && budget.value <= 20000) {
        parameters.budget = Number(budget.value);
        htmlStep4();
    } else {
        alert("Your budget has to between 300€ and 20.000€")
    };
}


// Step 4 ------------------------------------

/** Step 4: Logic*/
function logicStep4() {

    // Create arrays to fill with selected platforms and associated CPCs
    let resultPlatforms = [];
    let resultCPCs = [];
    let resultRatings = [];

    // Trigger functions to get values for the calculation of the end result
    getPlatformName(resultPlatforms);
    getPlatformCPC(resultCPCs);
    getPlatformRating(resultRatings);
  

    // Create globel variables for easier work
    let resultProfession = parameters.profession;
    let resultBudget = parameters.budget;
    let resultMultipliers = parameters.multipliers;



    calculateResults(resultRatings, resultBudget, resultCPCs, resultMultipliers);




    console.log(resultPlatforms);
    console.log(resultCPCs);
    console.log(resultRatings);
    console.log("Multipliers are: "+parameters.multipliers);


};

/** Step 4: Buttons */
function btnStep4(stepNumber) {
    // Step 4 Previous Button
    let previousBtn4 = document.getElementById("previous_btn_4");
    previousBtn4.addEventListener("click", htmlStep3);
};

/** Step 4: Load HTML */
function htmlStep4(event) {
   
    let stepNumber = 4;
   
    stepName(stepNumber)

    logicStep4()

    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML4;

    processSteps(stepNumber);
    btnStep4(stepNumber);
};

// Gets platform name and associated CPC of selected platforms in parameter objects.  
//  Fills two new arrays with those values.
//  Each associated pair has the same index in each array.

/** Step 4: Search for name of selected platform and push it to seperate array */
function getPlatformName(resultPlatforms) {
 
    // Push every selected Platform in a seperate array
    for (let i in parameters.platforms) {     
        // Name of the platform
        let p = parameters.platforms[i];
        resultPlatforms.push(p);
    };
};

/** Step 4: Search for CPC assosiated to selected platforms and push it to seperate array */ 
function  getPlatformCPC(resultCPCs) {    
    for (let i in parameters.platforms) {     
        // Name of the platform
        let p = parameters.platforms[i]; 
    
        let platformCPCObject = platforms.platforms;
        let platformIndexSelector = platformCPCObject.find(n => n.platform == p);
        let platformCPC = platformIndexSelector.platformAvgCPC;
            resultCPCs.push(parseFloat(platformCPC));
    }
};

/** Step 4: Search for platform rating for each selected platform and push it to seperate array */
function  getPlatformRating(resultRatings) {

    for (let i in parameters.platforms) {     
        // Name of the platform
        let p = parameters.platforms[i];

        for (let y in professions.professions) {
            if (professions.professions[y].profession == parameters.profession) {
                let ratingResult = professions.professions[y].rating[p.toLowerCase()];  // toLowerCase because platforms in json are in low case and in parameters in high case

                resultRatings.push(ratingResult);
            }
        }
    }
};

/** Step 4:        */
function calculateResults(resultRatings, resultBudget, resultCPCs, resultMultipliers) {

    // Array with the percentage of the budget allocated to each platform
    let distributionPercentage = [];
    // Array with the total amount of budgets allocated to each platform
    let distributionAmounts = [];
    // Array with the final CPCs for each platform calculated with the average CPC of each platform and the profession multiplier
    let platformCPC = [];
    // Array with the total amount of clicks for each platform
    let platformClicks = [];
 
    calculatePercentageDistribution(distributionPercentage, resultRatings);
    calculateAmountDistribution(distributionPercentage,resultBudget, distributionAmounts);
    calculateClicks(distributionAmounts, resultCPCs, platformClicks, resultMultipliers, platformCPC);






    console.log("The total budget is: "+resultBudget);                                                                                                // Delete later
    console.log("The budget for each platform is: "+distributionAmounts);                                                                                                // Delete later
    console.log("The CPC for each platform is: "+platformCPC);                                                                                                // Delete later
    console.log("The the total amount of clicks for each platform is: "+platformClicks);                                                                                                // Delete later


    console.log("das budget ist: "+resultBudget);                                                                                                // Delete later
    console.log("Beträge: "+distributionAmounts);                                                                                                 // Delete later  
    //



    
};



/** Step 4: Calculates what percentage of the budget is allocated to each selected platform. */
function calculatePercentageDistribution(distributionPercentage, resultRatings) {
    // The total of all rating points given to all platforms that are selected
    let totalRatingPoints = 0;
    // The percentage each selected platform holds of the total of rating points
    let platformPercentage = 0;

    // Calculate total of platform rating points
    for (let i in resultRatings) {
        totalRatingPoints = totalRatingPoints + resultRatings[i];
    };

    console.log("Total rating points are: "+totalRatingPoints);                                                                                                // Delete later

    // Based on total rating points and rating points of each platform this calculate and pushs percentage of budget for each selected platform into array
    for (let i in resultRatings) {
        platformPercentage = resultRatings[i] / totalRatingPoints;
        distributionPercentage.push(parseFloat(platformPercentage.toFixed(2)));
    };
    console.log("prozente: "+distributionPercentage);                                                                                                           // Delete late     
   
};

/** Step 4: Calculates what total amount of the budget is allocated to each selected platform. */
function calculateAmountDistribution(distributionPercentage, resultBudget, distributionAmounts){
    let budgetOfPlatform = 0;
    for (let i in distributionPercentage) {
        budgetOfPlatform = resultBudget * distributionPercentage[i];

        console.log("Budget je Plattform: "+budgetOfPlatform);   
        
        distributionAmounts.push(Number(budgetOfPlatform));
    }
};

/** Step 4: Calculates the amount of clicks based on the budget of each platform and the calculated CPC for each platform */
function calculateClicks(distributionAmounts, resultCPCs, platformClicks, resultMultipliers, platformCPC) {
    let clickPrice = 0;
    console.log("Die CPCs sind:" +resultMultipliers);                                                                                                        // Delete late

    for (let i in distributionAmounts) {
        let resultMultipliedCPC = (resultCPCs[i] * resultMultipliers);
        clickPrice = distributionAmounts[i] / resultMultipliedCPC;
        platformClicks.push(clickPrice.toFixed(0));
        platformCPC.push(resultMultipliedCPC);
    }
    console.log("Die finalen Platform-CPCs sind:" +platformCPC);                                                                                                        // Delete late

    console.log("Clicks je Plattform: "+platformClicks);                                                                                                          // Delete late

};




    // console.log(parameters.platforms["2"]);
    // console.log("Job "+professions.professions[1].profession);                           // Profession name
    // console.log("Demand multi "+professions.professions[1].demandMultiplier);            // Demand multiplier
    // console.log("Senior "+professions.professions[1].seniorityMultiplier.senior);        // Seniority multiplier (senior)
    // console.log("Midlevel "+professions.professions[1].seniorityMultiplier.midlevel);    // Seniority multiplier (midlevel)
    // console.log("Junior "+professions.professions[1].seniorityMultiplier.junior);        // Seniority multiplier (junior)
    // console.log("Student "+professions.professions[1].seniorityMultiplier.student);      // Seniority multiplier (student)
    //  console.log("CPC "+platforms.platforms[i].platformAvgCPC);                          // Avg platform CPC
    // console.log(parameters.profession);                                                  // Profession from parameters object
    // console.log(parameters.seniority);                                                   // Senioritx from parameters object
    // console.log(parameters.platforms);                                                   // Platforms array from parameters object
    // console.log(parameters.budget);                                                      // Budget from parameters object