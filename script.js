/* UPDATE NAMA */

function updateNama(){

    let nama = document.getElementById("namaTamu").value;

    if(nama.trim() == ""){
        nama = "Tamu Undangan";
    }

    document.getElementById("guestName").innerHTML = nama;

}

/* BUKA UNDANGAN */

function bukaUndangan(){

    const opening = document.getElementById("opening");
    const main = document.getElementById("mainContent");

    opening.style.opacity = "0";
    opening.style.transition = "1s";

    setTimeout(() => {

        opening.style.display = "none";

        main.style.display = "block";
        main.classList.add("fade-in");

    }, 1000);

}
