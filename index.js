var Handlebars = require('handlebars');

var fs = require("fs");
var source = fs.readFileSync("./index.html").toString();

var template = Handlebars.compile(source);
var context = {
    me: {
        name: { firstName: "Anastasiya", lastName: "Sokha" },
        linkedIn: "LinkedIn",
        phone: "1-(234)-234-2445",
        email: "anastasiya.vt.s@gmail.com"
    },
    experiences: [
        { title: "the supermarket", position: "cashsier", date: "forever", description: ["I didn't do much", "MORE DESCRIPITONS"], skills: ["I used the cash register", "dododoo"] },
        { title: "freelance nothing", position: "bnbbbumming around", date: "yesterday", description: ["I didn't do much", "EVEN MORE DESCRIPTIONS"], skills: ["my ass", "my other ass"] }
    ],
    projects: [
        { title: "burnt umberella tumbler", date: "never", description: "in flanders field, the poppies grow. under the stars they lie watching eternity, so far away from it all.", skills: "my ass" },
        { title: "spleen reticulator", date: "never", description: "my grandmother, all she ever heard were the sweet sounds of the ancients", skills: "the story of my life" }
    ],
    skills: [
        "adobe photoshop", "youtube", "jenkins", "docker", "writing", "kubernetes", "java", "javascript", "typescript"
    ],
    education: "sigh"
};
var html = template(context);

fs.writeFile("output-index.html", html, function() {
    console.log(html);
})