function sjekkTilgang() {
    if (sessionStorage.getItem("side3") !== "true") {
        window.location.href = "index2.html"; // Send tilbake til innlogging
    }
}

function sjekkPassordForSide3() {
    const passord = "bilde"; // Passord til Side 2
    const brukerPassord = document.getElementById("passord").value;

    if (brukerPassord === passord) {
        sessionStorage.setItem("side4", "true"); // Gi tilgang til Side 2
        window.location.href = "index4.html"; // Gå til Side 2
    } else {
        alert("Feil passord!");
    }
}
