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

    document.getElementById("opening").classList.add("fade-out");

    document.getElementById("mainContent").style.display = "block";

    setTimeout(() => {

        document.getElementById("opening").style.display = "none";

        document.getElementById("mainContent").classList.add("fade-in");

        // Putar musik setelah animasi
        const music = document.getElementById("background-music");
        if (music) {
            music.play().catch(error => {
                console.log("Autoplay diblokir, musik akan mulai setelah interaksi pengguna.");
            });
        }

    }, 800);

}
