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

    document.getElementById("opening").style.display = "none";

    document.getElementById("mainContent").style.display = "block";

}