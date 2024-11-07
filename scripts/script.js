// var testBtn = document.getElementById("testBtn");
// function testFunc() {
//     document.write("Hello!");
// }

// testBtn.addEventListener('click', testFunc);

var aboutBtn = document.getElementById("aboutBtn");
var hideBtn = document.getElementById("back");

function showAbout() {
    const aboutBox = document.getElementById("about");
    aboutBox.classList.remove("slideOut");
    aboutBox.classList.add("slideIn");
}

function hideAbout() {
    const aboutBox = document.getElementById("about");
    aboutBox.classList.remove("slideIn");
    aboutBox.classList.add("slideOut");
}

aboutBtn.addEventListener('click', showAbout);
hideBtn.addEventListener('click', hideAbout);