export const GITHUB_BASE_URL = 'https://www.github.com/DevelopWithAP'; 

export default [
    {
        id: 0,
        title: 'Movies App Backend',
        challenge: `To develop a RESTful back end service`,
        solution: `An Express Web Detail that utilises AWS Lambda`,
        features: `Third-party API integration, secure user data management`,
        imageUrl: '',
        stack: ['Node.js', 'TypeScript', 'Docker', 'MongoDB', 'AWS Lambda'],
        link: `${GITHUB_BASE_URL}/movies-app-be`
    },
    {
        id: 1,
        title: 'Movies App Frontend',
        challenge: `To build a feature rich UI as a Web client for the Movies App backend`,
        solution: `A React UI built with TypeScript that allows users to sign up, filter by selected parameters as well as 'favourite' an entry.`,
        features: `Responsive design, custom styling, form validation`,
        imageUrl: '',
        stack: ['React', 'TypeScript', 'CSS'],
        link: `${GITHUB_BASE_URL}/movies-app-fe`
    },
    {
        id: 2,
        title: 'Storefront API',
        challenge: `To develop a RESTful back end service for an online store`,
        solution: `An Express Web Detail that allows for data persistence across all application entitites.`,
        features: `Supports all CRUD operations, user authentication and testing`,
        imageUrl: 'https://my-portfolio-static.s3.eu-west-2.amazonaws.com/static/images/rest_with_node.png',
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Jasmine'],
        link: `${GITHUB_BASE_URL}/storefront-api`
    },
    {
        id: 3,
        title: 'Image Processing API',
        challenge: `To build a Web client that perfoms image resizing on the browser`,
        solution: `An Express Web Detail that accepts user input as URL parameters`,
        features: `Simple and reliable use cases.`,
        imageUrl: 'https://my-portfolio-static.s3.eu-west-2.amazonaws.com/static/images/image-processing-api.png',
        stack: ['Node.js', 'Express.js', 'TypeScript', 'Jasmine'],
        link: `${GITHUB_BASE_URL}/image-processing-api`
    },
    {
        id: 4,
        title: 'Mailer',
        challenge: `To build a UI that allows users to read, reply to and archive / unarchive emails.`,
        solution: `A Django RESTful client with a vanilla JavaScript UI.`,
        features: `UI is intuitive and updated asynchronously via JavaScript. Data is persisted on the server.`,
        imageUrl: 'https://my-portfolio-static.s3.eu-west-2.amazonaws.com/static/images/mail.png',
        stack: ['Python', 'Django', 'Javascript', 'HTML', 'Bootstrap CSS'],
        link: `${GITHUB_BASE_URL}/mail`
    },
    {
        id: 5,
        title: 'Network',
        challenge: `To build a full stack clone of a social media app.`,
        solution: `A Django RESTful server with a vanilla JavaScript UI.`,
        features: `Supports all CRUD operations and functionality such as 'liking' a 'post'.`,
        imageUrl: 'https://my-portfolio-static.s3.eu-west-2.amazonaws.com/static/images/network.png',
        stack: ['Python', 'Django,', 'JavaScript', 'HTML', 'Bootstrap CSS'],
        link: `${GITHUB_BASE_URL}/network`
    }
];