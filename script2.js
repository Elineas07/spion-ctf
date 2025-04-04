function sjekkTilgang() {
    if (sessionStorage.getItem("index2") !== "true") {
        window.location.href = "index.html"; // Send tilbake til innlogging
    }
}

function sjekkPassordForSide2() {
    const passord = "detteerpassordet"; // Passord til Side 2
    const brukerPassord = document.getElementById("passord").value;

    if (brukerPassord === passord) {
        sessionStorage.setItem("side3", "true"); // Gi tilgang til Side 2
        window.location.href = "index3.html"; // Gå til Side 2
    } else {
        alert("Feil passord!");
    }
}