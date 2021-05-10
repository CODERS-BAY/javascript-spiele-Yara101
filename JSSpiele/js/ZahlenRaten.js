let Ratezahl;
let Zufallszahl;


Zufallszahl = Math.ceil(Math.random() * 100);

function play() {
    
	Ratezahl = parseInt(document.getElementById('zahl').value);
	if (Ratezahl > Zufallszahl) {
		
		alert("Zu groß");
	}
	if (Ratezahl < Zufallszahl) {
		
		alert("Zu klein");
	}
	if (Ratezahl == Zufallszahl) {
		
		alert("Richtig!");
		alert("Du hast " + Versuche + " Versuche gebraucht.");
		alert("Es wird eine neue Zufallszahl generiert.");
		
	}
}
function reset() {
    
    document.getElementById("zahl").value = '';
    
}
