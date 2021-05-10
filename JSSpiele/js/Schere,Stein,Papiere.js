let counter;

let punktSpieler = 0;
let punktComputer = 0;


var gewinnbedingung=3;

let ausgedachteZahl;


console.log('Hallo Welt');

function addCounter(){
    
    counter =document.getElementById('counterInput').value;
    if (counter < 1){
      
        addPopUp('Bitte geben Sie eine Zahl über 0 ein');

    }else {
        
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    }
}





function play(bildNummer){

    ausgedachteZahl = Math.ceil(Math.random() * 3);

    //Muster Bilder tauschen
    userChoiceImg.setAttribute('src', 'images/bild' + bildNummer + '.jpg'); 
    pcChoiceImg.setAttribute('src', 'images/bild' + ausgedachteZahl + '.jpg');

    document.getElementById('userCounterContainer').innerHTML = '<strong>'+ punktSpieler + '</strong>';
       
    document.getElementById('pcCounterContainer').innerHTML = punktComputer;


    //Die Symbolen vergleichen
    if( ausgedachteZahl == bildNummer ){
        alert("Unentschieden")
    }


    //Schere und Papier
    else if( ausgedachteZahl == 1 && bildNummer == 3 ){

        punktComputer++;

        alert("Computer gewinnt mit Schere gegen Spieler mit Papier" );
    }

    else if( ausgedachteZahl == 3 && bildNummer == 1 ){

        punktSpieler++;        

        alert("Spieler gewinnt mit Schere gegen Computer mit Papier" );
    }


    //Papier und Stein
    else if( ausgedachteZahl == 3 && bildNummer == 2 ){
        punktComputer++;
        alert("Computer gewinnt mit Papier gegen Spieler mit Stein" );
    }

    else if( ausgedachteZahl == 2 && bildNummer == 3 ){
        punktSpieler++;
        alert("Spieler gewinnt mit Papier gegen Spieler mit Stein" );
    }



    //Stein und Schere    
    else if( ausgedachteZahl == 2 && bildNummer == 1 ){
        punktComputer++;
        alert("Computer gewinnt mit Stein gegen Spieler mit Schere" );
    }

    else if( ausgedachteZahl == 1 && bildNummer == 2 ){
        punktSpieler++;
        alert("Spieler gewinnt mit Stein gegen Spieler mit Schere" );
    }
    userCounterContainer.innerHTML=punktSpieler;
    pcCounterContainer.innerHTML=punktComputer;  

}
    
       

    
