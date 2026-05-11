function updateNama(){

    let nama = document.getElementById("namaTamu").value;

    if(nama.trim() == ""){
        nama = "Tamu Undangan";
    }

    document.getElementById("guestName").innerHTML = nama;

}

/* MUSIC */

const music = document.getElementById("background-music");

if(music){

    // volume musik
    music.volume = 0.7;

    // paksa looping
    music.loop = true;

    // jika browser menghentikan lagu
    music.addEventListener("ended", function(){

        music.currentTime = 0;
        music.play();

    });

}

/* BUKA UNDANGAN */

function bukaUndangan(){

    const opening = document.getElementById("opening");
    const main = document.getElementById("mainContent");

    // animasi fade out
    opening.classList.add("fade-out");

    // tampilkan konten
    main.style.display = "block";

    setTimeout(() => {

        opening.style.display = "none";

        main.classList.add("fade-in");

        // play musik
        if (music) {

            music.play().then(() => {

                console.log("Musik diputar");

            }).catch(error => {

                console.log("Autoplay diblokir:", error);

            });

        }

    }, 800);

}
