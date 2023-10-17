// Funktion, die unter bestimmten Bedingungen einen Fehler auslöst
function errorAuswerfen(parameter) {
    if (parameter < 5) {
      document.getElementById("anzeige1").innerHTML = "Fehler bei diesem Parameter";
      document.getElementById("anzeige").innerHTML = "";
      throw new Error('Ein Fehler ist aufgetreten!');
    } else {
      document.getElementById("anzeige").innerHTML = 'Kein Fehler bei diesem Parameter';
      document.getElementById("anzeige1").innerHTML = "";
      console.log('Kein Fehler bei Parameter');
    }
    // um besser die einzelnen Zeilen zu erkennen
    console.log("------------------------------");
  }
  function startButton()
  {
  // Schleife, um die Funktion 10-20 Mal aufzurufen
  //const SchleifenAnzahl = Math.floor(Math.random() * 20) ; // Zufällige Anzahl von Aufrufen zwischen 10 und 20
  
  for (let i = 0; i < 1; i++) {
    const zufälligerParameter = Math.floor(Math.random() * 10); // Zufälliger Parameter zwischen 0 und 10
    try {
    errorAuswerfen(zufälligerParameter);
    } catch (error) {
      console.error("Fehler bei diesem Parameter");
    }
  }
}