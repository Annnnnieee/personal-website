var Handlebars = require('handlebars');

var fs = require("fs");
var source = fs.readFileSync("./index.html").toString();

var template = Handlebars.compile(source);

var newContext = {
    me: {
        name: { firstName: "Anastasiya", lastName: "Sokha" },
        linkedIn: "LinkedIn",
        email: "anastasiya.vt.s@gmail.com"
    },
    experiences: [
        {
            title: "UBC Launchpad",
            position: "Technical Lead",
            date: "April 2019 – Present",
            description: [{
                    project: "Mentored a team of university level developers in producing a variety of software projects from start to finish.",
                    skills: ["Teamwork", "Project Breakdown", "Task Estimation", "Leadership"]
                },
                {
                    project: "Organized the club and performed executive tasks such as website maintenance, recruiting, event planning, and team structuring.",
                    skills: ["Communication", "Planning", "Leadership"]
                }
            ]
        },
        
        {
            title: "Tasktop Technologies",
            position: "Junior Software Engineer",
            date: "April 2018 – Dec 2018",
            description: [{
                    project: "Increased deployment consistency and reliability by introducing a blue-green strategy for support websites and migrated them to Amazon EKS. Previously, there were many web applications existing on different platforms with different deployment patterns.",
                    skills: ["Amazon EKS", "Kubernetes", "Terraform", "Nginx", "Docker"]
                },
                {
                    project: "Decreased build times by implementing a caching solution for the AWS spot-fleet build slaves. This allowed developers to build their software more quickly, since the spot-fleet didn't need to spend extra time to warm the cache.",
                    skills: [" AWS spot-fleet EC2", "Packer", "Terraform", "Artifactory", "Jenkins", "Bash"]
                },
                {
                    project: "Improved the build and release pipeline by dockerizing tests and automating release steps.",
                    skills: ["Jenkins", " Jenkins Job DSL", "Docker", "Ruby", "Ansible"]
                }
            ]
        },
        {
            title: "PayPal Inc.",
            position: "QA Automation Engineer",
            date: "Aug 2017 – Apr 2018",
            description: [{
                    project: "Increased application health awareness by creating a web dashboard to visualize test results.",
                    skills: ["Javascript", "Angular", "D3"]
                },
                {
                    project: "Demonstrated how domain driven design concepts could be applied to existing architecture by building a test framework POC.",
                    skills: ["Java", "Spring Data JPA", " Hibernate", "Docker", "PostgreSQL"]
                }
            ]
        }
    ],
    projects: [
        {
            title: "ParkInsight - Microsoft Azure AI Hackathon (Top 25)",
            date: "2019",
            description: "Developed a mobile application for those affected with parkinsons to determine a relationship between their lifestyle choices and presenting symptoms.",
            skills: "Java, Android, Tensorflow, LSTM neural network"
        },
        {
            title: "Budget Smart Sockets",
            date: "2019",
            description: "Prevented house fires and saved money by building wifi controlled power sockets that automatically cut power to appliances with the touch of a button. You'll never forget the rice cooker on again!",
            skills: "Python, Raspberry Pi"
        },
        {
            title: "Gatsby - Open Source",
            date: "2019",
            description: "Contributor to framework configuration management.",
            skills: "Javascript"
        },
        {
            title: "Urban Survival Guide",
            date: "2019",
            description: "For the thirsty, the dirty, and those with an urgency. This web application lists information about nearby facilities such as water fountains, showers, and washrooms within an organization.",
            skills: "Python, Javascript, Postgresql, React, Docker"
        },
        {
            title: "Mimic",
            date: "2019",
            description: "A text generator that used different ML models to mimic the style of the input text (Trump's tweets, Shakespeare).",
            skills: "Python, Tensorflow, Markov chain, LSTM, Javascript, React"
        },
        {
            title: "Music Taste Analyzer",
            date: "2018",
            description: "Have you ever wondered how your music tastes compare with those around you? No? That's ok, this revolutionary online quiz will tell you anyway! The Music Taste Analyzer allows users to rate curated song playlists and compare their results with other users.",
            skills: "Javascript, Angular, D3, YouTube API, Node, Express, MongoDB"
        }
    ],
    skills: [
        "Java", "JavaScript", "TypeScript", "AWS", "kubernetes", "Docker", "Terraform", "Git", "Ansible", "Nginx", "Apache", "FluentD/FluentBit", "Spring Framework", "Hibernate", "PostgreSQL", "MongoDB", "Angular", "React", "D3", "Node", "Express", "IntelliJ Idea", "Android Studio", "Maven"
    ],
}

var html = template(newContext);

fs.writeFile("output-index.html", html, function() {
    console.log(html);
})