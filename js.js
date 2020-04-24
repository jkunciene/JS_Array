
let automobiliai=["VW", "Audi", "Jeep", "MINI", "Subaru", "Mazda", "Fiat", "Seat", "Honda", "Nissan"];

console.log(automobiliai.length); //parodo masyvo ilgį


let lastElement= automobiliai.push("BMW");
console.log(automobiliai);

let last= automobiliai.push("fiktyvus");
console.log(automobiliai);
let trinuPaskutini= automobiliai.pop();
console.log(automobiliai);

information = "<ul>";
for (i = 0; i < automobiliai.length; i++) {
    information += "<li>" + automobiliai[i] + "</li>";
}
information += "</ul>";

document.getElementById("irasui").innerHTML = information;


