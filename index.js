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
    experiences: [{
            title: "Tasktop Technologies",
            position: "Junior Software Engineer",
            date: "April 2018 – Dec 2018",
            description: [{
                    project: "Introduced blue-green deployments for support websites and migrated them to Amazon EKS.",
                    skills: ["Amazon EKS", "Kubernetes", "Terraform", "Nginx", "Docker"]
                },
                {
                    project: "Decreased build times by implementing a caching solution for the AWS spot-fleet build slaves.",
                    skills: [" AWS spot-fleet EC2", "Packer", "Terraform", "Artifactory", "Jenkins", "Bash"]
                },
                {
                    project: "Improved the build and release pipelines by dockerizing tests and automating release steps.",
                    skills: ["Jenkins", " Jenkins Job DSL", "Docker", "Ruby", "Ansible"]
                },
                {
                    project: "Increased release cycle awareness across teams by creating a release dashboard.",
                    skills: ["Tableau", "Jenkins", "Ruby", "Docker"]
                },
                {
                    project: "Built product license and download report generator",
                    skills: ["PHP", "JavaScript", "Datatables.js"]
                }
            ]
        },
        {
            title: "PayPal Inc.",
            position: "Quality Assurance Automation Engineer",
            date: "Aug 2017 – Apr 2018",
            description: [{
                    project: "Developed a web application to visualize test results.",
                    skills: ["Angular", "D3"]
                },
                {
                    project: "Demonstrated how domain driven design concepts could be applied to existing architecture by building a test framework POC",
                    skills: ["Java", "Spring Data JPA", " Hibernate", "Docker", "PostgreSQL"]
                }
            ]
        }
    ],
    projects: [{
            title: "YouTube playlist creator",
            date: "2018",
            description: "Built an application that takes a list of song names as inputs and creates a YouTube playlist.",
            skills: "OAuth API, YouTube API, Node, Express"
        },
        {
            title: "Music preference quiz",
            date: "2018",
            description: "Built a quiz which allows users to rate song playlists and compare them with other user ratings",
            skills: "Angular, D3, YouTube API, Node, Express, MongoDB"
        },
        {
            title: "Socket Rocket",
            date: "2018",
            description: "Developed a chat application using Java sockets.",
            skills: "Java, Sockets, publish-subscribe pattern"
        },
        {
            title: "Twitter Clone",
            date: "2018",
            description: "Created a web application which mimics Twitter's main and user pages.",
            skills: "React, Redux, Node, Express, MongoDB",
        },
        {
            title: "Jira Story Slackbot",
            date: "2018",
            description: "Built a Slack bot which allows users to create Jira stories from within slack.",
            skills: "Jira API, Slack API, Node, Express, Heroku"
        }
    ],
    skills: [
        "Java", "JavaScript", "Ruby", "C", "TypeScript", "AWS", "kubernetes", "Docker", "Terraform", "Packer", "Git", "Ansible", "Nginx", "Apache", "FluentD/FluentBit", "Spring Framework", "Hibernate", "PostgreSQL", "MongoDB", "Angular", "React", "D3", "Express", "Node.js", "IntelliJ Idea", "Android Studio", "Maven", "Threads", "Semaphores"
    ],
}

var html = template(newContext);

fs.writeFile("output-index.html", html, function() {
    console.log(html);
})