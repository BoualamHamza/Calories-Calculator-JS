"use strict";
function formBase(){
    let myListe = document.getElementById("select-ingredient");
    for(let i = 0; i<data.length; i++){
        let option  = document.createElement("option");
        option.id = data[i].id;
        let firstWord = data[i].categorie.charAt(0).toUpperCase() +  data[i].categorie.slice(1);;
        let secondWord = data[i].ingredient;
        let text = firstWord.concat(' - ', secondWord);
        option.appendChild(document.createTextNode(text));
        myListe.appendChild(option);
        
    }
}
function reloadForm(){
    let compteur = document.getElementById('compteur');
    let reloadButton = document.createElement("button");
    reloadButton.id = "recharge";
    reloadButton.appendChild(document.createTextNode("recharger la page"));
    compteur.appendChild(reloadButton);
    reloadButton.addEventListener("click", function() {
        window.location.reload("Refresh");
    })
}

function compteurSet(){
    let ingredientListe = document.getElementById("select-ingredient");
    let displayId = ingredientListe.options[ingredientListe.selectedIndex].id;
    let valeur = document.querySelector("input").value ;
    let energie = 0;
    let proteines = 0;
    let glucides = 0; 
    let lipides = 0;
    let sucres = 0;
    for(let i=0; i<data.length; i++){
        if(data[i].id == displayId){
            energie += data[i].energie * valeur / 100 ;
            proteines += data[i].proteines * valeur / 100 ;
            glucides += data[i].glucides * valeur / 100 ;
            lipides += data[i].lipides * valeur / 100 ;
            sucres += data[i].sucres * valeur / 100 ;
        }
    }
    return [energie, proteines, glucides, lipides, sucres];
}