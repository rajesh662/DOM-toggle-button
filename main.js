
let color = ["black","white"];



let card = document.querySelector(".card");
 function onoff(){
    card.style.backgroundColor=color[Math.floor(Math.random()*color.length)]
    card.style.color=color[Math.floor(Math.random()*color.length)]

}

