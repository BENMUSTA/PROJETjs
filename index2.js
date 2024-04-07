const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const but3 = document.getElementById("but3");
const but4 = document.getElementById("but4");
const modalContact = document.getElementById("modalContact");
const videoContainer = document.getElementById("videoContainer");
const photosContainer = document.getElementById("photosContainer");
const cvContainer = document.getElementById("cvContainer");



but1.addEventListener("click", function() {
    modalContact.style.display = "block";
});


document.getElementsByClassName("close")[0].addEventListener("click", function() {
    modalContact.style.display = "none";
});


but2.addEventListener("click", function() {
    videoContainer.classList.remove("hidden");
});


but3.addEventListener("click", function() {
    photosContainer.classList.remove("hidden");
});


but4.addEventListener("click", function() {
    window.open('Feriel-Djerroud.pdf', '_blank');
});