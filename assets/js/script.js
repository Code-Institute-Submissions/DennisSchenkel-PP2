// ------- General ------------------------------------------------------------------------------------------------------------

// Import professions.json
import professions from "../data/professions.json" assert { type: 'json' };

// Import platforms.json
import platforms from "../data/platforms.json" assert { type: 'json' };

// Parameters for calculation Arrey(Profession, Seniority, Array{Selectet Platforms}, Budget)
let parameters = {};


// ------- Header ------------------------------------------------------------------------------------------------------------

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

/** Each step gets its step nameing under the step number in the header */
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


// ------- Start Page ------------------------------------------------------------------------------------------------------------

/** Start: Start Button functionality */
function startButton () {
    
    let nextBtn0 = document.getElementById("next_btn_0");
    nextBtn0.addEventListener("click", htmlStep1);
}

// Trigger the startButton function at the start of the app
startButton();


// ------- HTML Content ------------------------------------------------------------------------------------------------------------

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
            <input type="radio" class="seniority_radio" id="senior_lvl" name="seniority" value="Senior">
            <label for="senior_lvl">Senior</label><br>
            <input type="radio" class="seniority_radio" id="mid_lvl" name="seniority" value="Midlevel">
            <label for="mid_lvl">Midlevel</label><br>
            <input type="radio" class="seniority_radio" id="junior_lvl" name="seniority" value="Junior">
            <label for="junior_lvl">Junior</label><br>
            <input type="radio" class="seniority_radio" id="student_lvl" name="seniority" value="Student">
            <label for="student_lvl">Student</label>
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
            <input type="number" id="budget" required<span id="currency-symbol">€</span>
        </form>
        <p>Please make sure to enter a budget of at least 300€ and not more then 20.000€.</p>
    </div>
    <div class="nav_buttons">
        <button type="button" class="buttons" id="previous_btn_3">Previous</button>
        <button type="button" class="buttons" id="next_btn_3">Results</button>
    </div>
    `;

// Step 4 HTML: Find in function resultToHTML()


// ------- Step 1 ------------------------------------------------------------------------------------------------------------

/** Step 1: Logic */
function logicStep1() {
    
    // Triggering the functions to get selected profession, seniority and associated multiplier
    getProfesssion();
    getSeniority();
    getMultipliers();
};

/** Step 1: Buttons */
function btnStep1() {

    // Step 1 Next Button
    let nextBtn1 = document.getElementById("next_btn_1");
    nextBtn1.addEventListener("click", logicStep1);

    // Step 1 Previous Button is codet into HTML and leads to index.html
};

/** Step 1: Load HTML */
function htmlStep1() {

    // Define active step number
    let stepNumber = 1;
    
    // Process step description in heading is changed
    processSteps(stepNumber);

    // Change number and text in header
    stepName(stepNumber)

    // Load HTML for active step
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML1;

    // Loading all professions and seniority information from professions.json
    loadProfessions();

    // Loading event listener for bottons on page 
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


// ------- Step 2 ------------------------------------------------------------------------------------------------------------

/** Step 2: Logic */
function logicStep2() {

    /* Logos are loaded by function loadLogos().
    loadLogos() triggerd by loading HTML.

    Selection of platforms managed by function selectPlatforms().
    selectPlatforms() is triggered by eventListener. */

    // Check if at least 1 platform was selected
    if (parameters.platforms[0] == null) {
        alert("You have to select at least 1 platform")
    } else {
        htmlStep3();
    };
};

/** Step 2 Buttons */
function btnStep2() {

    // Step 2 Next Button
    let nextBtn2 = document.getElementById("next_btn_2");
    nextBtn2.addEventListener("click", logicStep2);
    
    // Step 2 Previous Button
    let previousBtn2 = document.getElementById("previous_btn_2");
    previousBtn2.addEventListener("click", htmlStep1);
};

/** Step 2: Load HTML */
function htmlStep2() {

    // Define active step number
    let stepNumber = 2;

    // Process step in heading is changed
    processSteps(stepNumber);

    // Process step description in heading is changed
    stepName(stepNumber)

    // Load HTML for active step
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML2;

    // Loading platform and logo information from platforms.json
    loadLogos();

    // Loading event listener for bottons on page 
    btnStep2(stepNumber);
};

/* Step 2: Platform Logo List 
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
};


// ------- Step 3 ------------------------------------------------------------------------------------------------------------

/** Step 3: Logic */
function logicStep3() {

    // Get budget from form and send it to the parameters object
    getBudget();
};

/** Step 3: Buttons */
function btnStep3() {
    // Step 3 Next Button
    let nextBtn3 = document.getElementById("next_btn_3");
    nextBtn3.addEventListener("click", logicStep3);
    
    // Step 3 Previous Button
    let previousBtn3 = document.getElementById("previous_btn_3");
    previousBtn3.addEventListener("click", htmlStep2);
};

/** Step 3: Load HTML */
function htmlStep3() {

    // Define active step number
    let stepNumber = 3;

    // Process step in heading is changed
    processSteps(stepNumber);

    // Process step description in heading is changed
    stepName(stepNumber)

    // Load HTML for active step
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML3;

    // Loading event listener for bottons on page 
    btnStep3(stepNumber);
};

/** Step 3: Get budget from form and send it to the parameters object */
function getBudget() {
    let budget = document.getElementById("budget");
    
    // If budget is within a good range, go to next step. Else give alert
    if (budget.value >= 300 && budget.value <= 20000) {
        parameters.budget = Number(budget.value);
        htmlStep4();
    } else {
        alert("Your budget has to between 300€ and 20.000€")
    };
}


// ------- Step 4 ------------------------------------------------------------------------------------------------------------

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
    let resultBudget = parameters.budget;
    let resultMultipliers = parameters.multipliers;

    // Trigger the meta function for calculating the results
    calculateResults(resultRatings, resultBudget, resultCPCs, resultMultipliers, resultPlatforms);
};

/** Step 4: Buttons */
function btnStep4() {
    
    // Step 4 Previous Button
    let previousBtn4 = document.getElementById("previous_btn_4");
    previousBtn4.addEventListener("click", htmlStep3);
};

/** Step 4: Load HTML */
function htmlStep4() {
   
    // Define active step number
    let stepNumber = 4;

    // Process step description in heading is changed
    stepName(stepNumber)

    // Process step in heading is changed
    processSteps(stepNumber);

    // Triggering logic of step 4 to calculate and display results
    logicStep4()


    // Loading event listener for bottons on page 
    btnStep4(stepNumber);
};

/* Gets platform name and associated CPC of selected platforms in parameter objects.  
Fills two new arrays with those values.
Each associated pair has the same index in each array. */

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

/** Step 4: Triggers multiple functions to calculate the final resilt, created needed arrays and triggers the generation of step 4 results HTML page */
function calculateResults(resultRatings, resultBudget, resultCPCs, resultMultipliers, resultPlatforms) {

    // Array with the percentage of the budget allocated to each platform
    let distributionPercentage = [];
    // Array with the total amount of budgets allocated to each platform
    let distributionAmounts = [];
    // Array with the final CPCs for each platform calculated with the average CPC of each platform and the profession multiplier
    let platformCPC = [];
    // Array with the total amount of clicks for each platform
    let platformClicks = [];
    // Array with objects for each platform with assosiated values
    let listOfResults = [];

    // Triggering multiple functions to calculates values as intermediate step to the final results
    calculatePercentageDistribution(distributionPercentage, resultRatings);
    calculateAmountDistribution(distributionPercentage,resultBudget, distributionAmounts);
    calculateClicks(distributionAmounts, resultCPCs, platformClicks, resultMultipliers, platformCPC);

    // Takes calculated results and other information and creates an array of objects where each object stands for one selected platform and its results.
    createListOfResults(platformCPC, platformClicks, distributionAmounts, distributionPercentage, resultPlatforms, resultRatings, listOfResults);

    // Trigger the creation of the final results step 4 HTML page
    resultsToHTML(listOfResults) 
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

    // Based on total rating points and rating points of each platform this calculate and pushs percentage of budget for each selected platform into array
    for (let i in resultRatings) {
        platformPercentage = resultRatings[i] / totalRatingPoints;
        distributionPercentage.push(parseFloat(platformPercentage.toFixed(2)));
    };   
};

/** Step 4: Calculates what total amount of the budget is allocated to each selected platform. */
function calculateAmountDistribution(distributionPercentage, resultBudget, distributionAmounts){
    
    let budgetOfPlatform = 0;
    for (let i in distributionPercentage) {
        budgetOfPlatform = resultBudget * distributionPercentage[i];        
        distributionAmounts.push(Number(budgetOfPlatform));
    }
};

/** Step 4: Calculates the amount of clicks based on the budget of each platform and the calculated CPC for each platform */
function calculateClicks(distributionAmounts, resultCPCs, platformClicks, resultMultipliers, platformCPC) {
    
    let clickPrice = 0;

    for (let i in distributionAmounts) {
        let resultMultipliedCPC = (resultCPCs[i] * resultMultipliers);
        clickPrice = distributionAmounts[i] / resultMultipliedCPC;
        platformClicks.push(clickPrice.toFixed(0));
        platformCPC.push(resultMultipliedCPC.toFixed(2));
    }
};

/** Step 4: Creates a array with all platforms and results in it */
function createListOfResults(platformCPC, platformClicks, distributionAmounts, distributionPercentage, resultPlatforms, resultRatings, listOfResults) {

    for (let i in resultPlatforms) {
        let objectInListOfObjects = {};
        objectInListOfObjects.PlatformName = resultPlatforms[i];
        objectInListOfObjects.PlatformRating = resultRatings[i];
        objectInListOfObjects.BudgetAmount = distributionAmounts[i];
        objectInListOfObjects.BudgetPercentage = distributionPercentage[i];
        objectInListOfObjects.PlatformCPC = platformCPC[i];
        objectInListOfObjects.PlatformClicks = platformClicks[i];
        listOfResults.push(objectInListOfObjects);
    }
    listOfResults.sort((a, b) => b.PlatformRating - a.PlatformRating);

    console.log(listOfResults);                                                                                                 // Delete later
};

/** Step 4: Created the step 4 HTML page using the array of results created in createListOfResults() */
function resultsToHTML(listOfResults) {
    
    // Define intro text to the result page
    let resultContentHTML = `
        <h3>Results</h3>
            <br>
            <div class="searched-talent">
               <p>You are looking for talents that are <b>${parameters.profession}</b></p><br>
            <div>
            <div class="overall-budget">
               <p>Your overall Budget is <b>${parameters.budget}€</b></p><br>
            <div>
                <p>Considering these information we recommend the following distribution of your budget:</p>            
            </div>
            <br>
        <ol>
        `;

        // Add the results for each platform on the page
        for (let i in listOfResults) {
            let resultElement = listOfResults[i];

            if (resultElement.PlatformRating === 0) {
                resultContentHTML += `  
                <div class="bad-platform">
                    <p><b>Don't use this platform for reaching your target audience. It will not be of good use.</b></p> 
                    <li>
                        <div class="platform-name"><p>Platform name: <b>${resultElement.PlatformName}</b></p></div>
                        <div class="platform-budget"><p>Platform budget: <b>${resultElement.BudgetAmount.toFixed(2)}€</b></p></div>
                        <div class="platform-budget-percentage"><p>Platform budget percentage: <b>${resultElement.BudgetPercentage * 100}%</b></p></div>
                        <div class="platform-cpc"><p>Platform CPC: <b>${resultElement.PlatformCPC}€</b></p></div>
                        <div class="platform-clicks"><p>Platform Clicks: <b>${resultElement.PlatformClicks}</b></p></div>
                        <div class="platform-rating"><p>Platform Rating: <b>${resultElement.PlatformRating}</b></p></div>
                    </li>
                    <br>
                </div>
                    `;
            } else if (resultElement.PlatformRating === 1) {
                resultContentHTML += `  
                <div class="semibad-platform">
                    <p><b>This is not a good platform for your purposes. But try it with a little budget</b></p> 
                    <li>
                        <div class="platform-name"><p>Platform name: <b>${resultElement.PlatformName}</b></p></div>
                        <div class="platform-budget"><p>Platform budget: <b>${resultElement.BudgetAmount.toFixed(2)}€</b></p></div>
                        <div class="platform-budget-percentage"><p>Platform budget percentage: <b>${(resultElement.BudgetPercentage * 100).toFixed(2)}%</b></p></div>
                        <div class="platform-cpc"><p>Platform CPC: <b>${resultElement.PlatformCPC}€</b></p></div>
                        <div class="platform-clicks"><p>Platform Clicks: <b>${resultElement.PlatformClicks}</b></p></div>
                        <div class="platform-rating"><p>Platform Rating: <b>${resultElement.PlatformRating}</b></p></div>
                    </li>
                    <br>
                </div>
                    `;
            } else if (resultElement.PlatformRating === 2) {
                resultContentHTML += `  
                <div class="mediocre-platform">
                    <p><b>This platform is okay for your purposes. Use it with a small budget but don't expect it do blow up.</b></p> 
                    <li>
                        <div class="platform-name"><p>Platform name: <b>${resultElement.PlatformName}</b></p></div>
                        <div class="platform-budget"><p>Platform budget: <b>${resultElement.BudgetAmount.toFixed(2)}€</b></p></div>
                        <div class="platform-budget-percentage"><p>Platform budget percentage: <b>${(resultElement.BudgetPercentage * 100).toFixed(2)}%</b></p></div>
                        <div class="platform-cpc"><p>Platform CPC: <b>${resultElement.PlatformCPC}€</b></p></div>
                        <div class="platform-clicks"><p>Platform Clicks: <b>${resultElement.PlatformClicks}</b></p></div>
                        <div class="platform-rating"><p>Platform Rating: <b>${resultElement.PlatformRating}</b></p></div>
                    </li>
                    <br>
                </div>

                    `;        
            } else if (parseInt(i) == 0) {
                resultContentHTML += 
                `<div class="top-platform">
                    <p><b>TOP PLATFORM</b></p>
                    <li>
                        <div class="platform-name"><p>Platform name: <b>${resultElement.PlatformName}</b></p></div>
                        <div class="platform-budget"><p>Platform budget: <b>${resultElement.BudgetAmount.toFixed(2)}€</b></p></div>
                        <div class="platform-budget-percentage"><p>Platform budget percentage: <b>${(resultElement.BudgetPercentage * 100).toFixed(2)}%</b></p></div>
                        <div class="platform-cpc"><p>Platform CPC: <b>${resultElement.PlatformCPC}€</b></p></div>
                        <div class="platform-clicks"><p>Platform Clicks: <b>${resultElement.PlatformClicks}</b></p></div>
                        <div class="platform-rating"><p>Platform Rating: <b>${resultElement.PlatformRating}</b></p></div>
                    </li>
                    <br>
                </div>
                `;
            } else if (parseInt(i) == 1) {
                resultContentHTML += `
                <div class="good-platform">
                    <p><b>Second best Platform</b></p>    
                    <li>
                        <div class="platform-name"><p>Platform name: <b>${resultElement.PlatformName}</b></p></div>
                        <div class="platform-budget"><p>Platform budget: <b>${resultElement.BudgetAmount.toFixed(2)}€</b></p></div>
                        <div class="platform-budget-percentage"><p>Platform budget percentage: <b>${(resultElement.BudgetPercentage * 100).toFixed(2)}%</b></p></div>
                        <div class="platform-cpc"><p>Platform CPC: <b>${resultElement.PlatformCPC}€</b></p></div>
                        <div class="platform-clicks"><p>Platform Clicks: <b>${resultElement.PlatformClicks}</b></p></div>
                        <div class="platform-rating"><p>Platform Rating: <b>${resultElement.PlatformRating}</b></p></div>
                    </li>
                    <br>
                </div>
                    `;
            } else if (parseInt(i) == 2) {
                resultContentHTML += `
                <div class="good-platform">
                    <p><b>Third best Platform</b></p>    
                    <li>
                        <div class="platform-name"><p>Platform name: <b>${resultElement.PlatformName}</b></p></div>
                        <div class="platform-budget"><p>Platform budget: <b>${resultElement.BudgetAmount.toFixed(2)}€</b></p></div>
                        <div class="platform-budget-percentage"><p>Platform budget percentage: <b>${(resultElement.BudgetPercentage * 100).toFixed(2)}%</b></p></div>
                        <div class="platform-cpc"><p>Platform CPC: <b>${resultElement.PlatformCPC}€</b></p></div>
                        <div class="platform-clicks"><p>Platform Clicks: <b>${resultElement.PlatformClicks}</b></p></div>
                        <div class="platform-rating"><p>Platform Rating: <b>${resultElement.PlatformRating}</b></p></div>
                    </li>
                    <br>
                </div>
                    `;
            };
        };

       // if (no platform is selected, recommend one with rating 5) {} dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        resultContentHTML += `
            </ol>
            <br>
            <div class="additional-recommentation">
                <p>In consideration of the target audience, your budget and your selected platforms, we would recommend to furthermore use the following platforms:</p>
            <div>
            <br>
            <ul>
                <li>LinkedIn</li>
                <li>Stack Overflow</li>
            </ul>
            <br>
            `;
        
        // Add buttons to the end of the page
        resultContentHTML += `
        <div class="nav_buttons">
            <button type="button" class="buttons" id="previous_btn_4">Previous</button>
            <!-- Button to start page - No JS like the rest --!>
        <a href="index.html">
            <button type="button" class="buttons" id="next_btn_4">Restart</button>
        </a>
        </div>
        `;

    let resultContent = document.getElementById("content_div");
    resultContent.innerHTML = resultContentHTML;
};