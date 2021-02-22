const inquirer = require("inquirer");
const fs = require("fs");
const { defaultCipherList } = require("constants");

//Function for questions the user answers in the command line.

inquirer.prompt([
    
    { //Title
        type: "input",
        name: "title",
        message:"What is the title of your project?",
        default: "To Be Finalised"
    },

    { //Short description
        type: "input",
        name: "shortdesc",
        message:"Write a short sentence briefly describing the project.",
        default: "A short description of the project can be inserted here."
    },

    { //Full Description
        type: "input",
        name: "description",
        message:"Write a more detailed description of your project.",
        default: "A detailed description of the project can be inserted here."
    },

    {//Installation
        type: "input",
        name: "installation",
        message:"What are the steps required to run this project?"
    },

    {//Usage
        type: "input",
        name: "usage",
        message:"What is this project used for? "
    },

    {//Screenshot
        type: "input",
        name: "screenshot",
        message:"Enter the URL of a screenshot or video.",
        default: "![alt text] (images/screenshot.png)"
    },

    {//badges
        type: "list",
        name: "badges",
       message: "Please chose a license?",
        choices: [    {name: "MIT", value: 0},
                    {name:"GNU GPLv3", value: 1},
                    {name: "Apache-2.0", value: 2},
                    {name: "ISC", value: 3}],
        default: "MIT"
     },

    {//Badge
        type: "input",
        name: "badge",
        message:"Input your badge URL here. (For more info, go to https://shields.io/)",
        default: "![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet)"
    },

    {//Contributing
        type: "input",
        name: "contributing",
        message:"How can you contribute?",
        default: "For any constructive suggestions, please feel free to contact me via my Github page."
    },
 
    {//Authors
        type: "input",
        name: "authors",
        message:"Who are the author(s) of this project?"
    },

    {//Tests
        type: "input",
        name: "tests",
        message: "Please add any testing that should be performed.",
        default: "The first test is to run the program, submitting answers to all questions." 
    },
    //Contact Info

    {//Github
        type: "input",
        name: "github",
        message:"What is your Github username?"
        
    },
    {
        type: "input",
        name: "githubURL",
        message:"What is your Github profile URL?",
        default: "https://github.com/sallyxp"
    },
     
    {//LinkedIn
        type: "input",
        name: "linkedinURL",
        message:"What is your LinkedIn profile URL?",
        default: "www.linkedin.com/in/sallyhello1"
    },

    {//Email
        type: "input",
        name: "email",
        message:"What is your email address?",
        default: "sallyhello1@yahoo.com"
    }

    ]).then(answers => {
    const { title, badge, badges, shortdesc, description, installation, usage, screenshot,

         contributing,  tests, github, githubURL, authors, linkedinURL,  email} = answers;





const READMEfile = `# ${title} 
![GitHub license](${badge})(${badges})
### ${shortdesc}
## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Authors](#authors)
- [Screenshots](#screenshots)
- [Video](#video)
- [Tests](#tests)
- [Contact Me](#contact-me)
## *Description* 
${description}
## *Installation*
${installation}
## *Usage* 
${usage}
## *Contributing*
${contributing}
## *Authors*
${authors}
## *Screenshot*
${screenshot} 
## *Video*
## *Tests*
${tests}
## *Contact Me*
- Github: **[${github}](${githubURL})
- LinkedIn: **[${authors}](${linkedinURL})  
- Email: **[${email}](mailto:${email})
This project is ${badge} licensed.
&copy; 2020 ${authors}`

//Generating the README file with fs.write.
fs.writeFileSync("README.md", READMEfile, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Great! You're all set.");
    }
});

    });