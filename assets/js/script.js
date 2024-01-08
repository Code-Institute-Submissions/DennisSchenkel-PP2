// General ------------------------------------

// Import professions.json
import professions from "../data/professions.json" assert { type: 'json' };

// Import platforms.json
import platforms from "../data/platforms.json" assert { type: 'json' };

// Parameters for calculation Arrey(Profession, Seniority, Array{Selectet Platforms}, Budget)
let parameters = {};


// Header ------------------------------------

function processSteps() {

};


// Start Page ------------------------------------

// Start: Button
let nextBtn0 = document.getElementById("next_btn_0");
nextBtn0.addEventListener("click", htmlStep1);


// HTML Content ------------------------------------

// Step 1 HTML
let newContentDivHTML1 = `
    <form id="form_1">
        <div class="form_element">
            <label><h2>Select profession you are trying to reach?</h2></label><br>                        
            <select id="profession_dropdown" name="profession">
            <option value="Profession">Profession</option>
            </select>
        </div>

        <div class="form_element">
            <label><h2>What level of seniority are you looking for?</h2></label><br>
            <input type="radio" class="seniority_radio" id="senior_lvl" name="seniority" value="Senior">
            <label for="html">Senior</label><br>
            <input type="radio" class="seniority_radio" id="mid_lvl" name="seniority" value="Midlevel">
            <label for="css">Midlevel</label><br>
            <input type="radio" class="seniority_radio" id="junior_lvl" name="seniority" value="Junior">
            <label for="javascript">Junior</label><br>
            <input type="radio" class="seniority_radio" id="student_lvl" name="seniority" value="Student">
            <label for="javascript">Student</label><br>
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
<div class="content">
    <h2>What is your budget?</h2>
    <p>Step 3</p>
    <form>
        <input type="number">
    </form>
    <div class="nav_buttons">
        <button type="button" class="buttons" id="previous_btn_3">Previous</button>
        <button type="button" class="buttons" id="next_btn_3">Results</button>
    </div>
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
    };

    // htmlStep2(event)
    console.log(parameters); // Delete later
    htmlStep2(event);
};

/** Step 1: Buttons */
function btnStep1() {
    let nextBtn1 = document.getElementById("next_btn_1");
    nextBtn1.addEventListener("click", logicStep1);
};

/** Step 1: Load HTML */
function htmlStep1(event) {
    
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML1;

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
function btnStep2() {
    // Step 2 Next Button
    let nextBtn2 = document.getElementById("next_btn_2");
    nextBtn2.addEventListener("click", logicStep2);
    
    // Step 2 Previous Button
    let previousBtn2 = document.getElementById("previous_btn_2");
    previousBtn2.addEventListener("click", htmlStep1);
};

/** Step 2: Load HTML */
function htmlStep2(event) {

    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML2;

    loadLogos();
    btnStep2();
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
    console.log("That worked! "+this.id+" was selected!") // Delete later
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

    console.log(parameters); // Delete later
    console.log(parameters.platforms); // Delete later

};


// Step 3 ------------------------------------

    // Validation if Budget is bigger then 200€ and smaller then 20.000€

/** Step 3: Logic */
function logicStep3(event) {

    
    htmlStep4(event)

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
function htmlStep3(event) {
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML3;

    btnStep3();
};


// Step 4 ------------------------------------

/** Step 4: Logic*/
function logicStep4(event) {

    // Change HTML to start or previous

};

/** Step 4: Buttons */
function btnStep4() {
    // Step 4 Previous Button
    let previousBtn4 = document.getElementById("previous_btn_4");
    previousBtn4.addEventListener("click", htmlStep3);
};

/** Step 4: Load HTML */
function htmlStep4(event) {
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML4;

    btnStep4();
};



