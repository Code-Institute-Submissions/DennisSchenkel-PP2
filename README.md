
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