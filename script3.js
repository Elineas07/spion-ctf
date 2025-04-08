const API_URL = "http://localhost:3000/svar3";

async function hentSvar() {
    const res = await fetch(API_URL)
    const svar = await res.json()
    return svar
}
function sjekkTilgang() {
    if (sessionStorage.getItem("index3") !== "true") {
        window.location.href = "index2.html"; // Send tilbake til innlogging
    }
}

function sjekkPassordForSide3() {
    hentSvar().then((fraServer) => {
        const brukerPassord = document.getElementById("passord").value;

        sessionStorage.setItem("index4", "false");
    
        if (brukerPassord === fraServer.svar) {
            sessionStorage.setItem("index4", "true"); // Husk at brukeren har tilgang
            window.location.href = "index4.html"; // Send videre
        } else {
            alert("Feil passord!");
        }

    })

   
}