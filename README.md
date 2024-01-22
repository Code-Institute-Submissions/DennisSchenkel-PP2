<h1 align="center">Embra Ads Assistant</h1>

[Find the deployed project here](https://dennisschenkel.github.io/PP2/)

The Embra Ads Assistant is a tool that helps companies HR department in their effort to reach talents to generate applications and fill open positions with them. The tool helps to find the right platform to place advertising and allocate budget to gain the best results.

![Mockup](documentation/images/mockup.png)

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

### General features on each page

### Accessibility

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

### Lighthouse Testing

### Known & unfixed bugs

## Credits

### Content

- All content was written and created by Dennis Schenkel.

###  Media

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


## Frontend features

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


## Logic features

- 6 professions can be selected and more can be added by editing the json file
- 4 levels of seniority can be selected



## Technical features

- Implementation of JSON files as datasource for easy update
- List of platforms is dynamicaly created using information from the JSON file

- Logos of platforms are implemented as images and not with FontAwesome for data privacy reasons.


## ToDos

- Aria labeling
- Delete empty lines



## Assets & Tools used

- Platform logos by FontAwesome
- Fonts by GoogleFonts

- Adobe Illustrator
- Balsamiq
- Visual Studio Code


## To mention
- Final budget amount can vary due to rounding errors.
- When going one step back, the former selected information are deleted from the array and they have to be put in again.
    - In a next version I would implement a feature, that the former selected values are still selected, even when going back and forth between steps
- I worked with arrays and the indexing in each array has to be consistently the same to the selected platform
- In a new version of the application I would try working with objects instead of so many arrays





## Notice

- For a real world project I would prefere to have a selection of multiple professions with an input field.
- With consideration of time and scope for this project, I decided to go with the selection of only one profession with a dropdown.