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
        <input type="number" id="budget" required><span id="currency-symbol">€</span>
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
    
    // Get selected profession
    let selectedProfession = document.getElementById("profession_dropdown");

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

    let budget = document.getElementById("budget");
    // console.log(budget.value);                                                                            // Delete later
    
    if (budget.value >= 300 && budget.value <= 20000) {
        parameters.budget = budget.value;
        htmlStep4(event);
    } else {
        alert("Your budget has to between 300€ and 20.000€")
    };

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


// Step 4 ------------------------------------

/** Step 4: Logic*/
function logicStep4() {

    let resultProfession = parameters.profession;
    let resultBudget = parameters.budget;

    let resultMultipliers = parameters.multipliers;

    getMultipliers();


    // Create arrays to fill with selected platforms and associated CPCs
    let resultPlatforms = [];
    let resultCPC = [];
    let resultRatings = [];

    getPlatformName(resultPlatforms);
    getPlatformCPC(resultCPC);
    getPlatformRating(resultRatings);


    console.log(resultPlatforms);
    console.log(resultCPC);
    console.log(resultRatings);

    console.log("Multipliers are: "+parameters.multipliers);


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
};



/** Gets multipliers from selected profession in parameters object */
function getMultipliers() {

    let i = 0;    
    let seniority = parameters.seniority;                                                                             

    for (i in professions.professions) {
        if (professions.professions[i].profession == parameters.profession) {

            let demandMultiplier = professions.professions[i].demandMultiplier;
            let seniorityMultiplier = professions.professions[i].seniorityMultiplier[seniority.toLowerCase()];  // ToLowerCase because caseing in json and parameters is different
    
            let candidateSearchedMultiplier = seniorityMultiplier+demandMultiplier;

            parameters.multipliers = candidateSearchedMultiplier;   
            console.log("yes")    

        }  

    }
};




// Gets platform name and associated CPC of selected platforms in parameter objects.  
//  Fills two new arrays with those values.
//  Each associated pair has the same index in each array.


/** Search for name of selected platform and push it to seperate array */
function getPlatformName(resultPlatforms) {
 
    // Push every selected Platform in a seperate array
    for (let i in parameters.platforms) {     
        let p = parameters.platforms[i];       // Name of the platform
        resultPlatforms.push(p);
    };
}

/** Search for CPC assosiated to selected platforms and push it to seperate array */ 
function  getPlatformCPC(resultCPC) {    
    for (let i in parameters.platforms) {     
        let p = parameters.platforms[i];       // Name of the platform
    
        let platformCPCObject = platforms.platforms;
        let platformIndexSelector = platformCPCObject.find(n => n.platform == p);
        let platformCPC = platformIndexSelector.platformAvgCPC;
            resultCPC.push(platformCPC);
    }
}

/** Search for platform rating for each selected platform and push it to seperate array */
function  getPlatformRating(resultRatings) {

    for (let i in parameters.platforms) {     
        let p = parameters.platforms[i];       // Name of the platform

        for (let y in professions.professions) {
            if (professions.professions[y].profession == parameters.profession) {
                let ratingResult = professions.professions[y].rating[p.toLowerCase()];  // toLowerCase because platforms in json are in low case and in parameters in high case

                resultRatings.push(ratingResult);
            }
        }
    }
}

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






console.log("platform rating "+professions.professions[1].rating.xing);           // Platform rating

