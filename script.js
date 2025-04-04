console.log("4759")
function sjekkPassord() {
    const passord = "4759"; // Passord til Side 1
    const brukerPassord = document.getElementById("passord").value;
    sessionStorage.setItem("index2", "false");


    if (brukerPassord === passord) {
        sessionStorage.setItem("index2", "true"); // Husk at brukeren har tilgang
        window.location.href = "index2.html"; // Send videre
    } else {
        alert("Feil passord!");
    }
}

