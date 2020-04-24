
let automobiliai=["VW", "Audi", "Jeep", "MINI", "Subaru", "Mazda", "Fiat", "Seat", "Honda", "Nissan"];

//console.log(automobiliai.length); //parodo masyvo ilgį


let lastElement= automobiliai.push("BMW");
//console.log(automobiliai);

let last= automobiliai.push("fiktyvus");
//console.log(automobiliai);
let trinuPaskutini= automobiliai.pop();
//console.log(automobiliai);

//istrinti is masyvo pradzios
let pirmas= automobiliai.shift();
//console.log(automobiliai);

//splice metodas: 1-kur, 2-kiek, 3-ka ideti
let naujasMasyvas=automobiliai.splice(4, 1, "splizinu");
//console.log(automobiliai);

//splice metodas: 1-nuo kurio pradeti 2-kiek istrinti
automobiliai.splice(0, 5);
//console.log(automobiliai);

let kopijaAtsargai=automobiliai.slice();
console.log(kopijaAtsargai);

console.log(automobiliai.reverse());


information = "<ul>";
for (i = 0; i < automobiliai.length; i++) {
    information += "<li>" + automobiliai[i] + "</li>";
}
information += "</ul>";

document.getElementById("irasui").innerHTML = information;


