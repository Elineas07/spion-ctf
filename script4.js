const API_URL = "http://localhost:3000/svar4";

async function hentSvar() {
    const res = await fetch(API_URL)
    const svar = await res.json()
    return svar
}
function sjekkTilgang() {
    if (sessionStorage.getItem("index4") !== "true") {
        window.location.href = "index3.html"; // Send tilbake til innlogging
    }
}

function sjekkPassordForSide4() {
    hentSvar().then((fraServer) => {
        const brukerPassord = document.getElementById("passord").value;

        sessionStorage.setItem("index5", "false");
    
        if (brukerPassord === fraServer.svar) {
            sessionStorage.setItem("index5", "true"); // Husk at brukeren har tilgang
            window.location.href = "index5.html"; // Send videre
        } else {
            alert("Feil passord!");
        }

    })

   
}