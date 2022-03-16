//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Que tengas buen dia";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Hora de comer";
} else {
    elSaludo = "Sueña con los angelitos";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("inicial")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=4&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan(" ¿Sabía usted que " + starWars.results[3].name + " tiene el pelo de color " + starWars.results[0].hair_colort + " ?").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
    createSpan(" ¿Sabía usted que " + starWars.results[1].name + " tiene los ojos de color " + starWars.results[1].eye_color + " ?").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}
