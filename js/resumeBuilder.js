/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var name = "Kevin Bottoms";
 var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);
console.log(s);
