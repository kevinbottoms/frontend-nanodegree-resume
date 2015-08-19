/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Kevin Bottoms",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "015119054715",
    "email" : "webdev@kevinbottoms.com",
    "github" : "kevinbottoms",
    "twitter" : "NA",
    "location" : "Germany"
  },
  "welcomeMessage" : "We got to move these color TV's",
  "skills" : [
    "HTML5", "CSS3", "JavaScript", "Responsive Design"
  ],
  "bioPic" : "images/me.jpg"
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);

  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(formattedName);

  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
}

var education = {
  "schools" : [
    {
      "name" : "University of Maryland University College",
      "city" : "Wiesbaden",
      "degree" : "Masters",
      "major" : "Software Engineering",
      "dates" : 2015,
      "url" : "http://umuc.edu"
    },
    {
      "name" : "University of Maryland University College",
      "city" : "Wiesbaden",
      "degree" : "BS",
      "major" : "Digital Media and Web Technology",
      "dates" : 2014,
      "url" : "http://umuc.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Frontend Web Developer Course",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://udacity.com"
    }
  ]
}

education.display = function() {
  for (studies in education.schools) {
    $("#education").append(HTMLschoolStart);

    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[studies].name));
    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[studies].degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[studies].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[studies].city));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[studies].dates));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[studies].major));
  }
}

var work = {
  "jobs" : [
    {
      "employer" : "UMUC",
      "title" : "Senior Military Education Coordinator",
      "dates" : "December 2004 - Present",
      "location" : "Wiesbaden",
      "description" : "Helped manage employees with the goal of facilitating higher education in military communities. Coordinated class schedules, staff and resources to ensure success in a deadline and result oriented environment."
    },
    {
      "employer" : "AAFES",
      "title" : "Accounting Associate",
      "dates" : "December 2003 - December 2004",
      "location" : "Hanau",
      "description" : "Responsible for the recording and tracking of financial transactions for multiple exchange facilities. Handled sensitive data and ensured financial policies were adhered to while also inspecting possible fraud, waste and abuse."
    }
  ]
}

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }
}

var projects = {
  "projects" : [
    {
      "title" : "Bootstrap and Responsive Design",
      "dates" : "2015",
      "description" : "A prototype of a responsive web site utilizing the Bootstrap framework that shows a proficiency in responsive web site design.",
      "images" : [
        "images/project1.jpg"
      ]
    },
    {
      "title" : "Javascript and JQuery",
      "dates" : "2015",
      "description" : "A resume generated using an HTML template populated using JavaScript/JQuery.",
      "images" : [
        "images/project2.jpg"
      ]
    }
  ]
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
      }
    }
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
  logClicks(x, y);
})
