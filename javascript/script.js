function footerAlign() {
    $('footer').css('display', 'block');
    $('footer').css('height', 'auto');
    var footerHeight = $('footer').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('footer').css('height', footerHeight);
}

$(document).ready(function() {
    footerAlign();
});

$(window).resize(function() {
    footerAlign();
});


$("#all-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
});

$("#tm-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
});

$("#org-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
});

$("#notes-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
});


$("#focused-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
});

$("#hw-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
});

$("#misc-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
});

new TypeIt("#banner-text", {
        speed: 40,
        deleteSpeed: 80,
        startDelay: 900,
        waitUntilVisible: true,
    })
    .type("Stay Productive & Healthy this Fall Semester. ", {
        delay: 400
    })
    .move(-46)
    .type('Resources to ')
    .move('END')
    .go();

function hasTouch() {
    return 'ontouchstart' in document.documentElement ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}


function showAll() {

    var activeButton, inactiveButton;

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("org-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("focused-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("hw-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("misc-btn");
    inactiveButton.classList.remove("active-btn");

    activeButton = document.getElementById("all-btn");
    activeButton.classList.add("active-btn");

    var tmCard, i;
    tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        if (tmCard[i].style.display === "none") {
            tmCard[i].style.display = "block";
        }
    }

    var orgCard = document.querySelectorAll(".org");
    for (i = 0; i < orgCard.length; i++) {
        if (orgCard[i].style.display === "none") {
            orgCard[i].style.display = "block";
        }
    }

    var notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        if (notesCard[i].style.display === "none") {
            notesCard[i].style.display = "block";
        }
    }

    var focusCard = document.querySelectorAll(".focus");
    for (i = 0; i < focusCard.length; i++) {
        if (focusCard[i].style.display === "none") {
            focusCard[i].style.display = "block";
        }
    }

    var hwCard = document.querySelectorAll(".hw");
    for (i = 0; i < hwCard.length; i++) {
        if (hwCard[i].style.display === "none") {
            hwCard[i].style.display = "block";
        }
    }

    var miscCard = document.querySelectorAll(".misc");
    for (i = 0; i < miscCard.length; i++) {
        if (miscCard[i].style.display === "none") {
            miscCard[i].style.display = "block";
        }
    }
}

function showTimeManagement() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("tm-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("org-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("focused-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("hw-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("misc-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    //show tm card
    var tmCard, i;
    tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        if (tmCard[i].style.display === "none") {
            tmCard[i].style.display = "block";
        }
    }

    //hide all the other cards
    var orgCard = document.querySelectorAll(".org");
    for (i = 0; i < orgCard.length; i++) {
        orgCard[i].style.display = "none";
    }

    var notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }

    var focusCard = document.querySelectorAll(".focus");
    for (i = 0; i < focusCard.length; i++) {
        focusCard[i].style.display = "none";
    }

    var hwCard = document.querySelectorAll(".hw");
    for (i = 0; i < hwCard.length; i++) {
        hwCard[i].style.display = "none";
    }

    var miscCard = document.querySelectorAll(".misc");
    for (i = 0; i < miscCard.length; i++) {
        miscCard[i].style.display = "none";
    }
}

function showOrganization() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("org-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("focused-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("hw-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("misc-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    //show org card
    var orgCard, i;
    orgCard = document.querySelectorAll(".org");
    for (i = 0; i < orgCard.length; i++) {
        if (orgCard[i].style.display === "none") {
            orgCard[i].style.display = "block";
        }
    }

    //hide all the other cards

    var notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }

    var focusCard = document.querySelectorAll(".focus");
    for (i = 0; i < focusCard.length; i++) {
        focusCard[i].style.display = "none";
    }

    var hwCard = document.querySelectorAll(".hw");
    for (i = 0; i < hwCard.length; i++) {
        hwCard[i].style.display = "none";
    }

    var miscCard = document.querySelectorAll(".misc");
    for (i = 0; i < miscCard.length; i++) {
        miscCard[i].style.display = "none";
    }

    var tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }
}

function showNotes() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("notes-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("focused-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("hw-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("misc-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("org-btn");
    inactiveButton.classList.remove("active-btn");


    //show notes card
    var notesCard, i;
    notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        if (notesCard[i].style.display === "none") {
            notesCard[i].style.display = "block";
        }
    }

    //hide all the other cards
    var focusCard = document.querySelectorAll(".focus");
    for (i = 0; i < focusCard.length; i++) {
        focusCard[i].style.display = "none";
    }

    var hwCard = document.querySelectorAll(".hw");
    for (i = 0; i < hwCard.length; i++) {
        hwCard[i].style.display = "none";
    }

    var miscCard = document.querySelectorAll(".misc");
    for (i = 0; i < miscCard.length; i++) {
        miscCard[i].style.display = "none";
    }

    var tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }

    var orgCard = document.querySelectorAll(".org");
    for (i = 0; i < orgCard.length; i++) {
        orgCard[i].style.display = "none";
    }
}

function showFocused() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("focused-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("hw-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("misc-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("org-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    //show notes card
    var focusCard, i;
    focusCard = document.querySelectorAll(".focus");
    for (i = 0; i < focusCard.length; i++) {
        if (focusCard[i].style.display === "none") {
            focusCard[i].style.display = "block";
        }
    }

    //hide all the other cards
    var hwCard = document.querySelectorAll(".hw");
    for (i = 0; i < hwCard.length; i++) {
        hwCard[i].style.display = "none";
    }

    var miscCard = document.querySelectorAll(".misc");
    for (i = 0; i < miscCard.length; i++) {
        miscCard[i].style.display = "none";
    }

    var tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }

    var orgCard = document.querySelectorAll(".org");
    for (i = 0; i < orgCard.length; i++) {
        orgCard[i].style.display = "none";
    }

    var notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }
}

function showHealthWellness() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("hw-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("misc-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("org-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("focused-btn");
    inactiveButton.classList.remove("active-btn");

    //show notes card
    var hwCard, i;
    hwCard = document.querySelectorAll(".hw");
    for (i = 0; i < hwCard.length; i++) {
        if (hwCard[i].style.display === "none") {
            hwCard[i].style.display = "block";
        }
    }

    //hide all the other cards
    var miscCard = document.querySelectorAll(".misc");
    for (i = 0; i < miscCard.length; i++) {
        miscCard[i].style.display = "none";
    }

    var tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }

    var orgCard = document.querySelectorAll(".org");
    for (i = 0; i < orgCard.length; i++) {
        orgCard[i].style.display = "none";
    }

    var notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }

    var focusCard = document.querySelectorAll(".focus");
    for (i = 0; i < focusCard.length; i++) {
        focusCard[i].style.display = "none";
    }
}

function showMiscellaneous() {
    var activeButton, inactiveButton;

    activeButton = document.getElementById("misc-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("org-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("focused-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("hw-btn");
    inactiveButton.classList.remove("active-btn");


    //show notes card
    var miscCard, i;
    miscCard = document.querySelectorAll(".misc");
    for (i = 0; i < miscCard.length; i++) {
        if (miscCard[i].style.display === "none") {
            miscCard[i].style.display = "block";
        }
    }

    //hide all the other cards
    var tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }

    var orgCard = document.querySelectorAll(".org");
    for (i = 0; i < orgCard.length; i++) {
        orgCard[i].style.display = "none";
    }

    var notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }

    var focusCard = document.querySelectorAll(".focus");
    for (i = 0; i < focusCard.length; i++) {
        focusCard[i].style.display = "none";
    }

    var hwCard = document.querySelectorAll(".hw");
    for (i = 0; i < hwCard.length; i++) {
        hwCard[i].style.display = "none";
    }
}



function selectorNav() {
    var x = document.getElementById("selectionNav").value;

    if (x === "All") {
        showAll();
        $('html, body').animate({
            scrollTop: $("#content-resource").offset().top
        }, 300);
    } else if (x === "Managing Time") {
        showTimeManagement();
        $('html, body').animate({
            scrollTop: $("#content-resource").offset().top
        }, 300);
    } else if (x === "Staying Organized") {
        showOrganization();
        $('html, body').animate({
            scrollTop: $("#content-resource").offset().top
        }, 300);
    } else if (x === "Taking Notes") {
        showNotes();
        $('html, body').animate({
            scrollTop: $("#content-resource").offset().top
        }, 300);
    } else if (x === "Staying Focused") {
        showFocused();
        $('html, body').animate({
            scrollTop: $("#content-resource").offset().top
        }, 300);
    } else if (x === "Health & Wellness") {
        showHealthWellness();
        $('html, body').animate({
            scrollTop: $("#content-resource").offset().top
        }, 300);
    } else if (x === "Miscellaneous") {
        showMiscellaneous();
        $('html, body').animate({
            scrollTop: $("#content-resource").offset().top
        }, 300);
    }
}

function chevronClick() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 300);
}

window.onscroll = function() {
    myCustomStickyNav()
};

var showAfter = document.getElementById("first-resource");
var chevron = document.getElementById("chevronDiv");
var sticky = showAfter.offsetTop;

function myCustomStickyNav() {
    if (window.pageYOffset >= sticky) {
        chevron.classList.add("chevronShow")
    } else {
        chevron.classList.remove("chevronShow");
    }
}