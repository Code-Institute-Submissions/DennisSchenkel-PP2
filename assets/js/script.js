// General ------------------------------------

// Import professions.json
import professions from "../data/professions.json" assert { type: 'json' };

// Import platforms.json
import platforms from "../data/platforms.json" assert { type: 'json' };

// Parameters for calculation Arrey(Profession, Seniority, Array{Selectet Platforms}, Budget)
let parameters = {};

// console.log(platforms.platforms[0].platform);
// console.log(professions.professions[1].profession);


// Header ------------------------------------

function processSteps() {

};



// Start Page ------------------------------------

    // Start Button
let nextBtn0 = document.getElementById("next_btn_0");
nextBtn0.addEventListener("click", htmlStep1);


// HTML Content ------------------------------------

    // HTML Step 1
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

    // HTML Step 2
let newContentDivHTML2 = `
    <h2>Choose the platforms to use</h2>
                    
    <div id="platform-imgs">
    </div>
    <div class="nav_buttons">
        <button type="button" class="buttons" id="previous_btn_2">Previous</button>
        <button type="button" class="buttons" id="next_btn_2">Next</button>
    </div>
`;

    // HTML Step 3
let newContentDivHTML3 = `
    <p>Step 3</p>
    <div class="nav_buttons">
        <button type="button" class="buttons" id="previous_btn_3">Previous</button>
        <button type="button" class="buttons" id="next_btn_3">Results</button>
    </div>
`;

    // HTML Step 4
let newContentDivHTML4 = `
<p>Step 4</p>
<div class="nav_buttons">
    <button type="button" class="buttons" id="previous_btn_4">Previous</button>
    <!-- Button to start page - No JS like the rest -->
    <a href="index.html">
        <button type="button" class="buttons" id="next_btn_4">Restart</button>
    </a>
</div>
`;


// Step 1 ------------------------------------

/**
 * Load Professions to dropdown
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

/** Step 1 Logic */
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
    console.log(parameters);
    htmlStep2(event);
};

/** Buttons Step 1 */
function btnStep1() {
    let nextBtn1 = document.getElementById("next_btn_1");
    nextBtn1.addEventListener("click", logicStep1);
};

/** Load Step 1 HTML */
function htmlStep1(event) {
    
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML1;

    loadProfessions();
    btnStep1();
};


// Step 2 ------------------------------------

    // If logo of platform is selected the logo becomes colored. 
    // In one object all platforms are included with value "false". 
    // If selected, value changes to "true".
    // With click on next platforms with "true" are added to parameters object.

/** Logic Step 2 */
function logicStep2(event) {


    htmlStep3(event);

};

/** Buttons Step 2 */
function btnStep2() {
    // Step 2 Next Button
    let nextBtn2 = document.getElementById("next_btn_2");
    nextBtn2.addEventListener("click", logicStep2);
    
    // Step 2 Previous Button
    let previousBtn2 = document.getElementById("previous_btn_2");
    previousBtn2.addEventListener("click", htmlStep1);
};

/** Load Step 2 HTML */
function htmlStep2(event) {

    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML2;

    btnStep2();
    images();
};


// Step 3 ------------------------------------

    // Validation if Budget is bigger then 200€ and smaller then 20.000€

/** Logic Step 3 */
function logicStep3(event) {

    
    htmlStep4(event)

};

/** Buttons Step 3 */
function btnStep3() {
    // Step 3 Next Button
    let nextBtn3 = document.getElementById("next_btn_3");
    nextBtn3.addEventListener("click", logicStep3);
    
    // Step 3 Previous Button
    let previousBtn3 = document.getElementById("previous_btn_3");
    previousBtn3.addEventListener("click", htmlStep2);
};

/** Load Step 3 HTML */
function htmlStep3(event) {
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML3;

    btnStep3();
};


// Step 4 ------------------------------------

/** Logic Step 4 */
function logicStep4(event) {

    // Change HTML to start or previous

};

/** Buttons Step 4 */
function btnStep4() {
    // Step 4 Previous Button
    let previousBtn4 = document.getElementById("previous_btn_4");
    previousBtn4.addEventListener("click", htmlStep3);
};

/** Load Step 4 HTML */
function htmlStep4(event) {
    let contentDiv = document.getElementById("content_div");
    contentDiv.innerHTML = newContentDivHTML4;

    btnStep4();
};










console.log(platforms.platforms[0].imgUnelectedURL);



function images() {
    let imgSelected = platforms.platforms[0].imgUnelectedURL;
    console.log(imgSelected);


    let platformImages = document.getElementById("platform-imgs");

    let platformImgs = `<img class="platform-images" src="${imgSelected}">`;

    platformImages.innerHTML = platformImgs;

};

