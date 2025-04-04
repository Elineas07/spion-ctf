function sjekkTilgang() {
    if (sessionStorage.getItem("side4") !== "true") {
        window.location.href = "index3.html"; // Send tilbake til innlogging
    }
}

function sjekkPassordForSide4() {
    const passord = "safe"; // Passord til Side 2
    const brukerPassord = document.getElementById("passord").value;

    if (brukerPassord === passord) {
        sessionStorage.setItem("side5", "true"); // Gi tilgang til Side 2
        window.location.href = "index5.html"; // Gå til Side 2
    } else {
        alert("Feil passord!");
    }
}
