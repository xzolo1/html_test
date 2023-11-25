/*var form = document.querySelector(".startedForm");
var formBtn = document.querySelector(".body__form-wrapper-contact-btn");
var fName = form.querySelector(".form-fname");
var lName = form.querySelector(".form-lname");
var mail = form.querySelector(".form-mail");
var message = form.querySelector(".form-mes");
var fields  = form.getElementsByClassName("form-control");

fName.addEventListener("click", function () {
    if (fName.value === "Required field") {
        fName.value = "";
        fName.style.color = "";
    }

});
lName.addEventListener("click", function () {
    if (lName.value === "Required field") {
        lName.value = "";
        lName.style.color = "";
    }
});
mail.addEventListener("click", function () {
    if (mail.value === "Required field") {
        mail.value = "";
        mail.style.color = "";
    }
});
form.addEventListener("submit", function () {
    event.preventDefault();

    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            fields[i].style.color = "red";
            fields[i].value = "Required field";
        } else {
            alert("NICE");
            break;
        }
    }
});*/


let slideNow = 1;
let slideCount = document.querySelectorAll(".header__wrapper-info").length;
let translateWidth = 0;

document.querySelectorAll(".header__wrapper-menu-item").forEach(
    function (slide) {
        slide.addEventListener("click", function (){
            let viewWidth = document.querySelector(".header__wrapper-info");

            slide.src="img/slide-unactive.svg";


            if (slideNow === slideCount || slideNow <=0 || slideNow > slideCount) {
                document.querySelector(".header__slide-viewport-wrapper").style = "transform: translate(0, 0)";
                slideNow = 1;
            } else {
                slideNow = slide.dataset.id - 1;
                translateWidth = -viewWidth.offsetWidth * slideNow;
                document.querySelector(".header__slide-viewport-wrapper").style = "transform: translate(" + translateWidth + "px, 0)";
                slideNow++;
            }
        });
    }
);
