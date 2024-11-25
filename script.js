function calculate() {
    const charge = parseFloat(document.getElementById("charge").value);
    const testType = document.getElementById("testType").value;
    let result = "";

    if (isNaN(charge) || charge <= 0) {
        result = "Veuillez entrer une charge admissible valide.";
    } else {
        if (charge < 5) {
            if (testType === "statique") {
                result = "Valeur d'essai statique : " + (charge * 1.33).toFixed(2) + " tonnes.";
            } else {
                result = "Valeur d'essai dynamique : " + (charge * 1.1).toFixed(2) + " tonnes.";
            }
        } else {
            if (testType === "statique") {
                result = "Valeur d'essai statique : " + (charge * 1.5).toFixed(2) + " tonnes.";
            } else {
                result = "Valeur d'essai dynamique : " + (charge * 1.2).toFixed(2) + " tonnes.";
            }
        }
    }

    document.getElementById("result").innerText = result;
}
