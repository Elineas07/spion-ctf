const API_URL = "http://localhost:3000/svar1";

async function hentSvar() {
    const res = await fetch(API_URL)
    const svar = await res.json()
    return svar
}
console.log("4759")

function sjekkPassord() {
    hentSvar().then((fraServer) => {
        const brukerPassord = document.getElementById("passord").value;

        sessionStorage.setItem("index2", "false");
    
        if (brukerPassord === fraServer.svar) {
            sessionStorage.setItem("index2", "true"); // Husk at brukeren har tilgang
            window.location.href = "index2.html"; // Send videre
        } else {
            alert("Feil passord!");
        }

    })

   
}
