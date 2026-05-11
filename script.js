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
    const music = document.getElementById("background-music");

    // PLAY MUSIC LANGSUNG SETELAH KLIK
    if(music){

        music.volume = 0.7;
        music.loop = true;

        const playPromise = music.play();

        if(playPromise !== undefined){

            playPromise
            .then(() => {

                console.log("Musik diputar");

            })
            .catch((error) => {

                console.log("Autoplay gagal:", error);

            });

        }

    }

    // ANIMASI
    opening.classList.add("fade-out");

    main.style.display = "block";

    setTimeout(() => {

        opening.style.display = "none";

        main.classList.add("fade-in");

    }, 800);

}
