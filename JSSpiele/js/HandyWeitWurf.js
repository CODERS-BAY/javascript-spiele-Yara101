
let versuche = document.getElementById('tryCounter').value;
let v0 = document.getElementById('wurfweite').value;
let g = document.getElementById('select').value;


let counter = 0;
let tryCounter;

function result(){
    

if( versuche > counter) {
    let winkel = document.getElementById('winkel').value * (Math.PI / 180);
    let wurfweite = ((v0 * v0 ) * Math.sin(2 * winkel)) / g;
    wurfweite = Math.round(wurfweite);

    let entfernungZummonster = Math.round() * 90 +   10;
    entfernungZummonster =  Math.round(entfernungZummonster)


    counter ++


    if(wurfweite == entfernungZummonster){
        let winner = document.createTextNode('Gewonnen');

        body.append(winner);

    }else {

        let monster = entfernungZummonster-wurfweite;
      
        let result1 = document.createTextNode('nicht getroffen, Versuch noch einmal');
      
        body.append( result1);
        
    }


}
}



function changeScreen(readTries) {
tryCounter =  document.getElementById('tryCounter').value;
    if(readTries)
        triesCounter = parseInt(document.getElementById('tryCounter').value);
    
        console.log(triesCounter);

    screen1.classList.toggle('active');
    screen2.classList.toggle('active');

}


