/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "Kevin Bottoms");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");


$("#header").append(formattedRole);
$("#header").prepend(formattedName);
