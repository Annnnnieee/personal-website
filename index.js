var Handlebars = require('handlebars');

var fs = require("fs");
var source = fs.readFileSync("./index.html").toString();

var template = Handlebars.compile(source);
var context = {name: "Arnie", experiences: "dididi", projects: "yes, i did", education: "sigh"};
var html    = template(context);

fs.writeFile("output-index.html",html, function(){
    console.log(html);
})
