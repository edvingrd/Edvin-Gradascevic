// Funktion, die unter bestimmten Bedingungen einen Fehler auslöst
function errorAuswerfen(parameter) {
    if (parameter <= 3) {
      throw new Error('Ein Fehler ist aufgetreten!');
    } else {
      console.log('Kein Fehler bei Parameter:', parameter);
    }
    // um besser die einzelnen Zeilen zu erkennen
    console.log("------------------------------");
  }
  function startButton()
  {
    // Schleife, um die Funktion 10-20 Mal aufzurufen
  const SchleifenAnzahl = Math.floor(Math.random() * 11) + 10; // Zufällige Anzahl von Aufrufen zwischen 10 und 20
  
  for (let i = 0; i < SchleifenAnzahl; i++) {
    const zufälligerParameter = Math.floor(Math.random() * 10); // Zufälliger Parameter zwischen 0 und 9
    try {
    errorAuswerfen(zufälligerParameter);
    } catch (error) {
      console.error(error.message);
    }
  }
}
  