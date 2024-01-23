<h1 align="center">Embra Ads Assistant</h1>

[Find the deployed project here](https://dennisschenkel.github.io/PP2/)

The Embra Ads Assistant is a tool that helps companies HR department in their effort to reach talents to generate applications and fill open positions with them. The tool helps to find the right platform to place advertising and allocate budget to gain the best results.

![Mockup](documentation/images/mockups.png)

## Table of Contents

## User Experience (UX)

                    ### User Stories

                    - Find the right platforms to use

                    - Allocate budgets

                    - Find new platforms to use

                    #### First time visitors should be able to

                    #### Returning visitors should be able to


## Design

Since the focus of the tool is in its functionality, the design is very minimalistic and without images, videos or any special design elements.

To keep it simple, the tool is designed with a width of 350px and does not use any media queries.


### Color Scheme

The color scheme for the tool is simple and provide a sufficient contrast. More colors are used on the final result page.
![Color Scheme - Tool](documentation/images/eaa-colors.png)

The colors used on the final result page 
![Color Scheme - Results](documentation/images/eaa-colors-results.png)


### Typography

For the Embra Ads Assistant primarily the font Lato.

- Lato offers a clean and easy to read style and at the same time not to common.

Weights used are:
- H1, H2, H3: 600


### Wireframes

![Index.html wireframes](documentation/wireframes/wireframes.png)


## Features

### Frontend features

- Process flow in header
    - The steps in the header change depending on the active step
    - Steps also change when going back to a previous step

- Navigation
    - On the front page is only one button to start the process.
    - On all steps within the process the user has two buttons to use.
        - Next step
        - Previous step
    - On the final result page the "Next step" button is called "Restart" and redirects to the index.html
    - On the right side of the footer on every page is a link to the imprint.html

- Step 1: Profession selection
    - The profession of the taget group can be selected by using a dropdown menu
    - The level of seniority has to be choosen by using one of four radio buttons
        - If no seniority level was selected, an alert is triggerd and proceesing is not possible until one was selected

- Step 2: Platform selection
    - Logos change color when hovering over them
        - Done by changing the opacity since the image has a color itself
    - When selected, the colore changes permanently
        - Done by changing the opacity since the image has a color itself
    - Logos can be deselected and change back their color.
    - At least one platform has to beselected. Otherwise a alert is triggert and proceeding is not possible until one or more platforms have been selected

- Step 3: Budget selection
    - Budget has to be within a reasonable range of a min. of 300€ and a max. of 20.000€
    - If the choosen budget is not withing that range, an alert is triggerd when trying to go to the next step

                        - Step 4: Results
                            - 

- Imprint page 
    - Only as placeholder for later


### Logic features

- 6 professions can be selected and more can be added by editing the json file
- 4 levels of seniority can be selected


### Technical features

- Implementation of JSON files as datasource for easy update
- List of platforms is dynamicaly created using information from the JSON file

- Logos of platforms are implemented as images and not with FontAwesome for data privacy reasons.


### Accessibility

To garantee a good accessibility, to the following aspects have been payed attention:

- Use of Sementic HTML on all pages.
- Aria-Labels added to all links and buttons.
- When choosing the colors I aimed for a suffciant contrast.






## Technologies used

For creating this website, the following technologies have been used.


### Languages Used

Languages used are the following:
- HTML
- CSS
- JavaScript


### Frameworks, Libraries & Programs Used

- [Visual Studio Code](https://code.visualstudio.com/) - As IDE
- [GitHub](https://github.com/) - As host for the repository and to deploy the website to make the preview visible to visitors
- [Git](https://git-scm.com/) - Used as integrated feature in Visual Studio Code for version control in combination with GitHub
- [Google Fonts](https://fonts.google.com/) - To import the 'Lato' font
- [Font Awesome](https://fontawesome.com/) - Icons for the platform selection and results. FontAwesome was not integrated by using JavaScript but by downloading in icon files and uploading them to the images directory.

- [Balsamiq](https://balsamiq.com/) - For wireframes
- [Adobe](https://www.adobe.com/de/products/illustrator.html) Illustrator - For editing the FontAwesome icons.
- [ui.dev](https://ui.dev/amiresponsive) - For generating the Mockup
- [coolors] (https://coolors.co/) - For generating the color sheme vizualisation
- [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) - For performance and accessibility testing


## Deployment

This page is deployed on GitHub pages.
The process of deploying the website are as followed:
- When logged in to GitHub, the 'Settings' navigation item is to find in the top navigation bar. This has to selected.
- On the then opening page is a navigation bar on the left side. Here choose 'Pages'.
- In the now opening settings page the  following settings habe to be made.
- In the dropdown menu choose 'Deploy from branch'.
- In the first dropdown below chooss 'main'.
- In the secon dropdown choose '/root'.
- After saving these settings the page is deployed.
- GitHub needs a few seconds and after refreshing the page a button to the deployed page is displayed in the top with 'Visit site' on it.

[Find the deployed project here](https://dennisschenkel.github.io/PP2/)

## Testing

### Validator Testing

HTML:

W3C HTML validation for the index.html site:
![Index.html W3C Validator](documentation/images/index-html-valitation.png)

W3C HTML validation for the imprint.html site:
![Imprint.html W3C Validator](documentation/images/imprint-html-valitation.png)

- No errors could be found by the W3C validator.

CSS:
Jigsaw CSS validation for the styles.css
![Style.css Jigsaw Validator](documentation/images/css-validation.png)

- No errors could be found by the Jigsaw validator.


JavaScrips:
JSHint validation for the script.hs
![Style.css Jigsaw Validator](documentation/images/js-validation.png)

- After a first validation multiple missing were added and unnecessary semicolons have been deleted.
- Multiple "use strict" statements were added as recommended by JSHint.
- One "use strict" is missing as mentioned by JSHint, but when added, it leads to a different warning. So is was not added.
- On multiple for loops addidtional if statements with .hasOwnProperty(i) have been added as recommended by JSHint.
- In one case a function declared within a loop is referencing to an outer scoped variable, which may leed to confusion regarding the sementics.

- Furthermore JSHints shows a total of 16 warnings. Non of them are errors and prevent the code from working as planed.
- Most warnings are associated with the import of the two json files, which are done correctly but JSHint seems to not like.


                                    ### Lighthouse Testing

                                    ### Known & unfixed bugs



## Credits

### Content

- All content was written and created by Dennis Schenkel.

###  Media

- The platform icons have been downloaded from FontAwesome and edited with Adobe Illustrator.
- No further images or videos where used.

###  Acknowledgments

- Thanks to Gareth McGirr for providing great mentorship as part of the Code Academy course.
- Thanks to Kay and the community for awesome weekly calls and exchange.





## Platforms

### Platforms Data

- Name
- Average Cost Per Click (CPC)

### Platforms Added

- LinkedIn
- Xing
- Facebook
- Instagram
- Twitter
- TikTok
- YouTube
- Twitch
- Google Search
- Google Display
- Bing Search
- StackOverflow
- Reddit
- Spotify


## Professions

- Software Developer
- Software Engineer
- Project Manager (Software)
- Marketing Manager
- Sales Manager
- HR Manager

### Profession Data

- Platform
- Platform Rating
- Demand Multiplier
- Seniority Multiplyer

### Platform Rating

- Perfect (Value 5)
- Great (Value 4)
- Good (Value 2)
- Okay (Value 1)
- Bad (Value 0)

### Seniority Levels

- Senior
- Midlevel
- Junior
- Student


## ToDos

- Check for Aria labeling
- Delete empty lines
- Beautify results





## Possible improvements

- For a real world project I would prefere to have a selection of multiple professions with a text input field.
- With consideration of time and scope for this project, I decided to go with the selection of only one profession with a dropdown.
- For improved navigation I would add keydown eventListener for enter end delete for goint to the next step (enter) or going a step back (delete).
- When going one step back, the former selected information are deleted from the array and they have to be put in again.
    - In a next version I would implement a feature, that the former selected values are still selected, even when going back and forth between steps
- I worked with arrays and the indexing in each array has to be consistently the same to the selected platform. That can potentially lead to problems.
    - In a new version of the application I would try working with more objects instead of so many arrays.