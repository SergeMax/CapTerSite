var menu = document.getElementsByClassName("menu");
var navbarSectionText = document.getElementById("sectionPlacement");
var imgPetitLogoNav = document.getElementById("imgPetitLogoNav");
var imgBurger = document.getElementById("imgBurger");
var divTextLeDomaine = document.getElementById("divTextCapitalsTerre");
var divPhraseTop = document.getElementById("phraseTop");
var divLogoNav = document.getElementById("divLogoNav");
var divVideo = document.getElementById("bgvid");
var fleche = document.getElementById("section05");
var onglet = document.getElementsByClassName("onglet");
var panel1 = document.getElementById("panel1");
var imgBandeOblique = document.getElementById("imgLogoNav");
var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");


var panel2 = document.getElementById("panel2");
var divIntro = document.getElementById("divIntro");
var textCapital = document.getElementById("textCapitalsTerre");
var textTerres = document.getElementById("textTerres");


var indice = 0.01;


onglet[2].style.opacity = 1;
onglet[2].style.borderTopColor = "rgb(0, 0, 0)";







var i;
$(document).ready(function () {

    setTimeout(function () {
    setInterval(function () {
        indice = indice + 0.02;

        divIntro.style.opacity = "" + (1 - indice);
    }, 10);

    }, 200);



        setTimeout(function () {
            onglet[4].style.opacity = 1;


        }, 400);

    setTimeout(function () {

        onglet[3].style.opacity = 1;

    }, 800);

    setTimeout(function () {


    }, 1200);

    setTimeout(function () {
        onglet[1].style.opacity = 1;


    }, 1600);
    setTimeout(function () {
        onglet[0].style.opacity = 1;


    }, 2000);



    setTimeout(function () {
        imgPetitLogoNav.style.transition = "opacity 4s";



    }, 500);



    setTimeout(function () {
        divIntro.style.display = "none";

        imgPetitLogoNav.style.opacity = 0.7;



    }, 2400);


});


function update_menu() {

    var scroll_Y = window.scrollY;
    var hauteur_fenetre = window.innerHeight;
    var hauteur_fenetre_Corrige = (0.20 * window.innerHeight);
    var hauteur_pannel = (0.95 * window.innerHeight);


    var hauteur_menu = menu.offsetHeight;

    // divPhraseTop.style.opacity = ""+ (1 - (scroll_Y-50)/100);
    //  divPhraseTop.style.opacity = ""+ (1 - (scroll_Y-50)/100);
    //divVideo.style.opacity = ""+ ((1 - (scroll_Y-500)/200)-0.3);



    if (scroll_Y > 50) {
        fleche.style.opacity = 0;

    }

    if (scroll_Y > 500) {
        fleche.style.opacity = 0;

    }

    if (scroll_Y > ((hauteur_fenetre - hauteur_fenetre_Corrige) + hauteur_pannel + hauteur_pannel + hauteur_pannel + hauteur_pannel)) {
        navbarSectionText.style.color = "black";
    } else if (scroll_Y > ((hauteur_fenetre - hauteur_fenetre_Corrige) + hauteur_pannel + hauteur_pannel + hauteur_pannel)) {
        navbarSectionText.style.color = "black";

    } else if (scroll_Y > ((hauteur_fenetre - hauteur_fenetre_Corrige) + hauteur_pannel + hauteur_pannel)) {
        navbarSectionText.style.color = "black";

    } else if (scroll_Y > ((hauteur_fenetre - hauteur_fenetre_Corrige) + hauteur_pannel)) {
        navbarSectionText.style.color = "black";

    } else if (scroll_Y > hauteur_fenetre - hauteur_fenetre_Corrige) {
        navbarSectionText.style.color = "black";
        // navbarSectionText.style.backgroundColor = "rgba(255,255,255,0.4)";

       /* for (i = 0; i < onglet.length; i++) {
            onglet[i].classList.add("ongletSurFondBlanc");
        }*/

        imgPetitLogoNav.style.opacity = 0.7;
        // On n'utilise pas .className = "sticky" ni .setAttribute("class", "sticky") car ces manières de faire remplacent tout l'attribut "class"
    } else {

        navbarSectionText.classList.remove("displaynone");
        navbarSectionText.style.color = "black";
        // navbarSectionText.style.backgroundColor = "rgba(255,255,255,0)";

        /*for (i = 0; i < onglet.length; i++) {
            onglet[i].classList.remove("ongletSurFondBlanc");
        }*/

        imgPetitLogoNav.style.transition = "opacity 0.2s";

    }
}

function load() {

    function scroll_to(contenu) {
        $('html, body').animate({
            scrollTop: $(this.contenu).offset().top
        }, 1000);
    }

//        scroll_to(document.body);

}

//$(document).ready(load());

window.addEventListener("scroll", update_menu);

//window.addEventListener("scroll", switchCase);

//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
    // initiate an animation to a certain page element:
    $('html, body').stop().animate(
        {scrollTop: targetElement.offset().top + 1}, // move window so target element is at top of window
        speed, // speed in milliseconds
        'linear' // easing
    ); // end animate
} // end scrollThere function definition


//--- START NAV-ITEM CLICK EVENTS ---//
// when the user clicks a nav item:
/*
$("#leftSidebar ul li a").click(function (e) {

    e.preventDefault(); // don't jump like a typical html anchor

    // find the index of the "#" character in the href string...
    var startOfName = $(this).attr('href').indexOf("#"),
        // ...then use it as the argument in the slice() method (add 1 so you don't include the # character).
        clickRef = $(this).attr('href').slice(startOfName + 1),
        targetEl = $('a[name=' + clickRef + ']'); // select the element this link is pointing to

    // scroll there smoothly:
    scrollThere(targetEl, 400);

}); */// end click
//--- END NAV-ITEM CLICK EVENTS ---//


//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):

window.addEventListener("mousewheel", swipe);

//$(window).on('mousewheel', function (e) {
function swipe(e) {

    // get Y-axis value of each div:
    var div1y = $('#panel1').offset().top;

    var div2y = $('#panel2').offset().top;
    var div3y = $('#panel3').offset().top,
        div4y = $('#panel4').offset().top,
        div5y = $('#panel5').offset().top,
        div6y = $('#panel6').offset().top;
    // get window's current scroll position:

    var lastScrollTop = $(this).scrollTop();
    // for getting user's scroll direction:
    var scrollDirection,
        // for determining the previous and next divs to scroll to, based on lastScrollTop:
        targetUp,
        targetDown,
        // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
        targetElement;

    // get scroll direction:
    if (e.deltaY < 0) {
        scrollDirection = 'up';
        console.log("scrool direction deltay up")
    } else if (e.deltaY >= 0) {
        scrollDirection = 'down';
        console.log("scrool direction deltay down")

    } // end if

    // prevent default behavior (page scroll):
    //e.preventDefault();

    // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
    if (lastScrollTop === div1y) {
        targetUp = $('#panel1');
        targetDown = $('#panel2');
    } else if (lastScrollTop === div2y) {
        targetUp = $('#panel1');
        targetDown = $('#panel3');
    } else if (lastScrollTop === div3y) {
        targetUp = $('#panel2');
        targetDown = $('#panel4');
    } else if (lastScrollTop === div4y) {
        targetUp = $('#panel3');
        targetDown = $('#panel5');
    } else if (lastScrollTop === div5y) {
        targetUp = $('#panel4');
        targetDown = $('#panel6');
    } else if (lastScrollTop === div6y) {
        targetUp = $('#panel5');
        targetDown = $('#panel6');
    } else if (scrollDirection == "down" && lastScrollTop < div2y + 50 || lastScrollTop < div2y - 50) {
        targetUp = $('#panel1');
        targetDown = $('#panel2');
    } else if (scrollDirection == "down" && lastScrollTop < div3y + 50 || lastScrollTop < div3y - 50) {
        targetUp = $('#panel2');
        targetDown = $('#panel3');
    } else if (scrollDirection == "down" && lastScrollTop < div4y + 50 || lastScrollTop < div4y - 50) {
        targetUp = $('#panel3');
        targetDown = $('#panel4');
    } else if (scrollDirection == "down" && lastScrollTop < div5y + 50 || lastScrollTop < div5y - 50) {
        targetUp = $('#panel4');
        targetDown = $('#panel5');
    } else if (scrollDirection == "down" && lastScrollTop < div6y + 50 || lastScrollTop < div6y - 50) {
        targetUp = $('#panel5');
        targetDown = $('#panel6');
    } else if (scrollDirection == "down" && lastScrollTop > div6y || lastScrollTop < div7y - 50) {
        targetUp = $('#panel6');
        targetDown = $('#panel6');
    } // end else if

    // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
    if (scrollDirection === 'down') {
        targetElement = targetDown;
        console.log("scroll direction down");
    } else if (scrollDirection === 'up') {
        targetElement = targetUp;
        console.log("scroll direction up");
    } // end else if

    // scroll smoothly to the target element:
    scrollThere(targetElement, 600);

}

//}); // end on mousewheel event
//--- END SCROLL EVENTS ---//


//--- START SHOW/HIDE SIDE PANEL EVENTS ---//
// open the sidePanel when the button is clicked/tapped:
$("#sidePanelButton").click(function (e) {
    e.preventDefault();
    $("#sidePanel").addClass("open");
    $("#mainStack").addClass("shift");
}); // end click

// close the sidePanel when the X is clicked/tapped:
$("#sidePanelClose").click(function (e) {
    e.preventDefault();
    $("#sidePanel").removeClass("open");
    $("#mainStack").removeClass("shift");
}); // end click
//--- END SHOW/HIDE SIDE PANEL EVENTS ---//
