$(document).ready(function () {

    let picObj = {
        "https://github.com/herivillaz/HarryPotter-Quiz/raw/master/AssetsReadMe/homepage.png": {
            url: "https://github.com/herivillaz/HarryPotter-Quiz/raw/master/AssetsReadMe/video.gif",
            description: "Code Quiz",
            project: "A timed code quiz with multiple-choice questions inspired on Harry Potter."
        },
        "https://github.com/herivillaz/homework3-PasswordGenerator/raw/master/Assets/03-javascript-homework-demo.png": {
            url: "https://github.com/herivillaz/homework3-PasswordGenerator/raw/master/Assets/video.gif",
            description: "Password generator",
            project: "An application that generates a random password based on user-selected criteria."
        },
        "https://github.com/herivillaz/Weather_Dashboard/raw/master/Assets/AssetsReadme/homepage.png": {
            url: "https://github.com/herivillaz/Weather_Dashboard/raw/master/Assets/AssetsReadme/video.gif",
            description: "Weather Dashboard",
            project: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS using [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities."
        },
        "https://github.com/herivillaz/Day-Planner/raw/master/Assets/ReadMe/home.png": {
            url: "https://github.com/herivillaz/Day-Planner/raw/master/Assets/05-third-party-apis-homework-demo.gif",
            description: "Day Planner, Scheduler",
            project: "Day Planner/Work Scheduler App is a sample application that can be used to manage your day-to-day engagements and work Scheduler."
        },
        "https://github.com/herivillaz/explore-outdoors/raw/master/assets/homepage.png": {
            url: "https://github.com/herivillaz/explore-outdoors/raw/master/assets/videoapp.gif",
            description: "Explore Outdoors",
            project: "A day trip planner linked to the 400+ National Parks with a user-friendly interface. Allow users to locate all parks within their state. User can refine their search by filtering through themes and activities."
        },
        "https://github.com/herivillaz/burger/raw/master/assets/homepage.png": {
            url: "https://github.com/herivillaz/burger/raw/master/assets/video.gif",
            description: "Eat da Burger",
            project: "A restaurant app that lets users input the names of burgers they'd like to eat."
        },
        "https://github.com/herivillaz/Note-Taker/raw/master/Assets/homepage.png": {
            url: "https://github.com/herivillaz/Note-Taker/raw/master/Assets/test.gif",
            description: "Note Taker",
            project: " Application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. In the Business Context For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed."
        },
        "./assetsREADME/stella.png" : {
            url: "https://github.com/microxgleek94/Project2/raw/master/public/assets/images/stella.gif",
            description: "Stella Vybzz",
            project: "A social music application where users can search an artist's songs, albums & playlists, then build their own bespoke playlists that they can share with their friends."
        },
        "https://github.com/herivillaz/Employee-tracker/raw/master/Assets/schema.png": {
            url: "https://github.com/herivillaz/Employee-tracker/raw/master/Assets/demo.gif",
            description: "Employee Tracker",
            project: "A solution for managing a company's employees using node, inquirer, and MySQL. Build a command-line application that at a minimum allows the user to: Add departments, roles, employees, View departments, roles, employees, Update employee roles. TO USE THIS APP GO TO THE REPO AND CLONE IT."
        },
        "https://github.com/herivillaz/Template-Engine-Employee-Summary/raw/master/Assets/homepage.png": {
            url: "https://github.com/herivillaz/Template-Engine-Employee-Summary/raw/master/Assets/video1.gif",
            description: "Template Engine Employee Summary",
            project: "Software engineering team generator command line application. TO USE THIS APP GO TO THE REPO AND CLONE IT"
        }
    }
    $(".portfolio").on("click", function () {
        let source = $(this).attr("src");
        console.log(source);
        $(".modal-body").html(`<img src="${picObj[source].url}" width=465 height= 250></br><p>${picObj[source].description}</br>${picObj[source].project}</br> You can visit the Github version to check the code in the "Code button" or try the deployed application in the "name of the project button"</p>`);
    })
});