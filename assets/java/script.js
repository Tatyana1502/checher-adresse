// const urlApi = "https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port";
// const urlApi = "https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&postcode=44380";
// const urlApi = "https://api-adresse.data.gouv.fr/search/?q=paris&type=street";
// const urlApi = "https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&autocomplete=0";
const urlApi = "https://geo.api.gouv.fr/communes?codePostal&field=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=son&geometry=centre";

let radioElement;
let Rue;
// let Nom = document.querySelector("#Identite_Nom");
// console.log("Nom: ", Nom.value);
// let Prenom = document.querySelector("#Identite-Prenom");
// console.log("Prenom: ", Prenom.value);
// let mail = document.querySelector("#Identite-E-mail");
// console.log("E-mail: ", mail.value);
radioElement = document.getElementById('radioElement');
document.querySelectorAll("input[type='radio']").forEach(async radio => {
    radio.addEventListener("change", async () => {
    document.querySelector('select');
        if (radio.value == "Monsieur") {
            console.log("Monsieur");
            
        } 
        else {
            console.log("Madame");
        }  
   })        
})

document.querySelector("button").addEventListener("click", () => {
    let Nom = document.querySelector("#Identite_Nom");
console.log("Nom: ", Nom);
let Prenom = document.querySelector("#Identite-Prenom");
console.log("Prenom: ", Prenom.value);
let mail = document.querySelector("#Identite-E-mail");
console.log("E-mail: ", mail.value);

//  let Nom = document.querySelector("#Identite_Nom");
//  console.log("Nom: ", Nom.value);
//  let Prenom = document.querySelector("#Identite-Prenom");
//  console.log("Prenom: ", Prenom.value);
//  let mail = document.querySelector("#Identite-E-mail");
//  console.log("E-mail: ", mail.value);

 let RueSelected = document.querySelector("select").value;
 console.log(RueSelected);
 let Lettre = Rue.find((Rue) => Rue.value == RueSelected);
 console.log(RueSelected);
 console.log(Lettre);

})

async function RueChoisir () {
    const res = await fetch(urlApi);
    Rue = await res.json();
    console.log("Rue : ", Rue);
    // Rue.forEach(element => {
    //     let monOption = document.createElement("option");
    //     monOption.value = element.name;
    //     monOption.innerText = element.name;
    //     document.querySelector('select').appendChild(monOption); 
    // })
    // let RueSelected = document.querySelector("select").value;
    // console.log(RueSelected);
    // let Lettre = Rue.find((Rue) => Rue.name == RueSelected);
    // console.log(RueSelected);
    // console.log(Lettre);
}
RueChoisir ()
// RueChoisir
// const res = await fetch(urlApi);
// allPokemons = await res.json();
// console.log(allPokemons);

// function getElement(element_name) {
//     if (!this.element_cache[element_name]){
//     this.element_cache[element_name] = document.getElementById(element_name + this.Identite_Nom);
//     console.log("Nom: ", this.Identite_Nom);
// }
// }

// let RueChoisir;
// RueChoisir.forEach(element => {
//     let monOption = document.createElement("option");
//     monOption.value = element.at;
//     monOption.innerText = element.at;
//     document.querySelector('select').appendChild(monOption);
// })