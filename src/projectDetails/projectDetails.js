const projectDetails = [
    {
        id: 0,
        name: "Smartbrain Face Detection",
        img: require('./smartbrain.png'),
        excerpt: "This web application allows the user to detect faces in the image uploaded by them. It makes use of Clarifai face detection API",
        description: [
            "This web application allows the user to detect faces in the image uploaded by them. It makes use of Clarifai face detection API.",
            "Users can register and upload the image. An entry count is maintained for every user which indicates how many times the user has detected faces.",
            "Front End of the app is created using React. NodeJS, ExpressJS is used for server side scripting. PostgreSql is used to store user information.",
            "External Libraries like Bcrypt and KnexJS are also used.",
            "The app is deployed on heroku along with the server and database."
        ],
        tech: "HTML5, CSS3, JS, React, NodeJS, ExpressJS, postgreSQL",
        website: "https://smartbrain-face-detection.herokuapp.com/",
        github: "https://github.com/keyur22/smartbrain-face-detection"
    },
    {
        id: 1,
        name: "Robofriends",
        img: require('./robofriends.png'),
        excerpt: "This app allows the user to search his friend by name from a collection of robofriends",
        description: [
            "This app allows the user to search his friend by name from a collection of robofriends.",
            "JSONPlaceholder API is used to get user data.",
            "Robohash Web service is used to create robot avatars of users."
        ],
        tech: "HTML5, CSS3, JS, React, Redux, Redux-Thunk",
        website: "https://keyur22.github.io/robofriends-v2/",
        github: "https://github.com/keyur22/robofriends-v2"
    },
    {
        id: 2,
        name: "Budget App",
        img: require('./budget.png'),
        excerpt: "A budget app to track income and expenses for the current month",
        description: [
            "This application allows users to track their incomes and expenses for the current month.",
            "ES5 Javascript was used to implement OOP in the application.",
            "It makes use of modular pattern. It is divided into independent modules working together thus achieving the purpose of Object Oriented Programming in JS."
        ],
        tech: "HTML5, CSS3, JS, Bootstrap",
        website: "https://keyur22.github.io/budget-app/",
        github: "https://github.com/keyur22/budget-app"
    }
];

export default projectDetails;