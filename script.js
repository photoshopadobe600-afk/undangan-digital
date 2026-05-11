function updateNama(){

    let nama = document.getElementById("namaTamu").value;

    if(nama.trim() == ""){
        nama = "Tamu Undangan";
    }

    document.getElementById("guestName").innerHTML = nama;

}

/* AMBIL AUDIO */

const music = document.getElementById("background-music");

/* BUKA UNDANGAN */

function bukaUndangan(){

    const opening = document.getElementById("opening");
    const main = document.getElementById("mainContent");

    // play music
    if(music){

        music.volume = 0.7;

        music.play()
        .then(() => {

            console.log("Musik berhasil diputar");

        })
        .catch((err) => {

            console.log("Gagal play:", err);

        });

    }

    // animasi fade
    opening.classList.add("fade-out");

    main.style.display = "block";

    setTimeout(() => {

        opening.style.display = "none";

        main.classList.add("fade-in");

    }, 800);
