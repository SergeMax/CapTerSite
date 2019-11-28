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
var imgPanel1 = document.getElementById("imgPanel1");
var textTerres = document.getElementById("textTerres");
var textP1 = document.getElementById("textP1");
var textP2 = document.getElementById("textP2");
var imgPanel2 = document.getElementById("imgPanel2");

var textP3 = document.getElementById("textP3");
var imgPanel3 = document.getElementById("imgPanel3");
var textP4 = document.getElementById("textP4");
var imgPanel4 = document.getElementById("imgPanel4");
var indice1 = document.getElementById("indice1");
var indice2 = document.getElementById("indice2");
var indice3 = document.getElementById("indice3");
var indice4 = document.getElementById("indice4");
var indice5 = document.getElementById("indice5");
var imgPanel51 = document.getElementById("imgPanel5-1");
var imgPanel54 = document.getElementById("imgPanel5-4");
var textP5 = document.getElementById("textP4");



var indexPanel =1;





var hauteur_fenetre = window.innerHeight;
var hauteur_fenetre_Corrige = (0.20 * window.innerHeight);
var hauteur_pannel = (0.95 * window.innerHeight);



var indice = 0.01;


onglet[1].style.opacity = 1;
onglet[1].style.borderTopColor = "rgb(0, 0, 0)";



$(document).ready(function () {
    indice1.classList.add("active");

    setTimeout(function () {
    setInterval(function () {
        indice = indice + 0.02;

        divIntro.style.opacity = "" + (1 - indice);
    }, 10);

    }, 200);

        setTimeout(function () {
            onglet[4].style.opacity = 1;
            imgPanel1.style.marginLeft = "0";
            imgPanel1.style.opacity = "1";
            textP1.style.opacity = "1";
        }, 400);

    setTimeout(function () {
        onglet[3].style.opacity = 1;
    }, 800);

    setTimeout(function () {
        onglet[2].style.opacity = 1;
    }, 1200);

    setTimeout(function () {
    }, 1600);
    setTimeout(function () {
        onglet[0].style.opacity = 1;
    }, 1600);

    setTimeout(function () {
        imgPetitLogoNav.style.transition = "opacity 4s";
    }, 500);

    setTimeout(function () {
        divIntro.style.display = "none";
        imgPetitLogoNav.style.opacity = 0.7;
    }, 1000);


});


function update_menu() {

    var scroll_Y = window.scrollY;



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
        indexPanel = 5;

        navbarSectionText.style.color = "black";
        imgPanel51.style.opacity = "1";
        imgPanel54.style.opacity = "1";

        if (window.matchMedia("(min-width: 700px)").matches) {
            imgPanel54.style.left = "55vw";
            imgPanel51.style.left = "8vw";

        } else {
            imgPanel54.style.left = "35vw";
            imgPanel51.style.left = "8vw";
        }


        for (var i = 0; i < onglet.length; i++) {
            onglet[i].classList.remove("ongletSurFondBlanc");
            onglet[i].classList.add("ongletSurFondGris");

        }


        textP5.style.opacity = "0.7";
        indice5.classList.add("active");
        indice4.classList.remove("active");
        indice3.classList.remove("active");
        indice2.classList.remove("active");
        indice1.classList.remove("active");


    } else if (scroll_Y  > ((hauteur_fenetre - hauteur_fenetre_Corrige) + hauteur_pannel + hauteur_pannel)) {
        indexPanel = 4;
        navbarSectionText.style.color = "black";

        if (window.matchMedia("(min-width: 700px)").matches) {
            imgPanel4.style.left = "30vw";
            imgPanel4.style.width = "60vw";
            imgPanel4.style.top = "0vh";

        } else {
            imgPanel4.style.left = "-10vw";
            imgPanel4.style.width = "100vw";
        }

        for (var i = 0; i < onglet.length; i++) {
            onglet[i].classList.add("ongletSurFondBlanc");
            onglet[i].classList.remove("ongletSurFondGris");

        }



        indice5.classList.remove("active");

        imgPanel4.style.opacity = "1";
        textP4.style.opacity = "0.7";
        indice4.classList.add("active");
        indice3.classList.remove("active");


    } else if (scroll_Y > ((hauteur_fenetre - hauteur_fenetre_Corrige) + hauteur_pannel)) {
        indexPanel = 3;

        navbarSectionText.style.color = "black";
        imgPanel3.style.marginLeft = "-10vw";
        imgPanel3.style.opacity = "1";
        textP3.style.opacity = "1";
        imgPanel3.style.marginTop = "-2vh";
        indice4.classList.remove("active");
        indice3.classList.add("active");
        indice2.classList.remove("active");
        for (var i = 0; i < onglet.length; i++) {
            onglet[i].classList.remove("ongletSurFondBlanc");
            onglet[i].classList.add("ongletSurFondGris");
        }

    } else if (scroll_Y > hauteur_fenetre - hauteur_fenetre_Corrige) {
        indexPanel = 2;

        navbarSectionText.style.color = "black";

        imgPanel2.style.marginLeft = "0";
        imgPanel2.style.opacity = "1";
        textP2.style.opacity = "1";
        for (var i = 0; i < onglet.length; i++) {
            onglet[i].classList.add("ongletSurFondBlanc");
            onglet[i].classList.remove("ongletSurFondGris");
        }

        indice3.classList.remove("active");
        indice2.classList.add("active");
        indice1.classList.remove("active");


        imgPetitLogoNav.style.opacity = 0.7;
        // On n'utilise pas .className = "sticky" ni .setAttribute("class", "sticky") car ces manières de faire remplacent tout l'attribut "class"
    } else {
        indexPanel = 1;
        indice1.classList.add("active");
        indice2.classList.remove("active");
        for (var i = 0; i < onglet.length; i++) {
            onglet[i].classList.remove("ongletSurFondBlanc");
            onglet[i].classList.add("ongletSurFondGris");
        }
        navbarSectionText.classList.remove("displaynone");
        navbarSectionText.style.color = "black";

        imgPetitLogoNav.style.transition = "opacity 0.2s";

    }
}


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


indice1.onclick = function() {
    window.scrollTo({top: 0, behavior: "smooth"});
    indice1.classList.add("active");
    indice2.classList.remove("active");
    indice3.classList.remove("active");
    indice4.classList.remove("active");
    indice5.classList.remove("active");


}
indice2.onclick = function() {
    window.scrollTo({top: hauteur_pannel, behavior : "smooth"});
    indice2.classList.add("active");
    indice1.classList.remove("active");
    indice3.classList.remove("active");
    indice4.classList.remove("active");
    indice5.classList.remove("active");

}
indice3.onclick = function() {
    window.scrollTo({top: hauteur_pannel*2, behavior : "smooth"});
    indice3.classList.add("active");
    indice1.classList.remove("active");
    indice2.classList.remove("active");
    indice4.classList.remove("active");
    indice5.classList.remove("active");

}
indice4.onclick = function() {
    window.scrollTo({top: hauteur_pannel*3, behavior : "smooth"});
    indice4.classList.add("active");
    indice1.classList.remove("active");
    indice2.classList.remove("active");
    indice3.classList.remove("active");
    indice5.classList.remove("active");

}


indice5.onclick = function() {
    window.scrollTo({top: hauteur_pannel*4, behavior : "smooth"});
    indice5.classList.add("active");
    indice1.classList.remove("active");
    indice2.classList.remove("active");
    indice3.classList.remove("active");
    indice4.classList.remove("active");

}



window.addEventListener("mousewheel", swipe);

//$(window).on('mousewheel', function (e) {
function swipe(e) {

    // get Y-axis value of each div:
    var div1y = $('#panel1').offset().top;

    var div2y = $('#panel2').offset().top;
    var div3y = $('#panel3').offset().top,
        div4y = $('#panel4').offset().top,
        div5y = $('#panel5').offset().top;
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
    } else if (scrollDirection == "down" && lastScrollTop < div2y + 0 || lastScrollTop < div2y - 5) {
        targetUp = $('#panel1');
        targetDown = $('#panel2');
    } else if (scrollDirection == "down" && lastScrollTop < div3y + 5 || lastScrollTop < div3y - 5) {
        targetUp = $('#panel2');
        targetDown = $('#panel3');
    } else if (scrollDirection == "down" && lastScrollTop < div4y + 5 || lastScrollTop < div4y - 5) {
        targetUp = $('#panel3');
        targetDown = $('#panel4');
    } else if (scrollDirection == "down" && lastScrollTop < div5y + 5 || lastScrollTop < div5y - 5) {
        targetUp = $('#panel4');
        targetDown = $('#panel5');
    } else if (scrollDirection == "down" && lastScrollTop < div6y + 5 || lastScrollTop < div6y - 5) {
        targetUp = $('#panel5');
        targetDown = $('#panel6');
    }

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




/*
document.addEventListener("DOMContentLoaded", function() {
    var wrap = document.getElementById('wrap');
    var fps = new FullPageScroll(wrap);
    var indicator = document.createElement('div');
    indicator.id = 'indicator';
    var slideIndicators = [];
    fps.slides.forEach(function(slide, index){
        var slideIndicator = document.createElement('div');
        slideIndicator.onclick = function() {
            fps.goToSlide(index);
        }
        if (index === fps.currentSlide) {
            slideIndicator.className = "active";
        }
        indicator.appendChild(slideIndicator);
        slideIndicators.push(slideIndicator);
    });
    document.body.appendChild(indicator);
    fps.onslide = function() {
        slideIndicators.forEach(function(slideIndicator, index) {
            if (index === fps.currentSlide) {
                slideIndicator.className = "active";
            } else {
                slideIndicator.className = "";
            }
        });
    }
});
*/



