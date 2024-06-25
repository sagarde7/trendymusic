const allsongs = {
    "Arijit Singh - Sajni": "albums/m1.mp3",
    "Honey Singh - Love Dose": "albums/m2.mp3",
    "AR RAHMAN - OLD REMIX": "albums/m3.mp3",
    "SHREYA - VE KAMLIYA": "albums/m4.mp3",
    "DILJIT - NAINA": "albums/m5.mp3",
    "Angaaron":"albums/m6.mp3",
    "Bhairava anthem":"albums/m7.mp3",
    "Houdini-Eminem":"albums/m8.mp3",
    "Fear Song":"albums/m9.mp3",
    "Nadaaniyan":"albums/m10.mp3",
    "Still Rollin":"albums/m11.mp3",
    "ONE":"albums/m12.mp3",
    "Starboy":"albums/m13.mp3",
    "Cheap Thrills":"albums/m14.mp3",
    "Solid":"albums/m15.mp3",
    "Lily":"albums/m16.mp3",
    "Alone":"albums/m18.mp3",
    "On my way":"albums/m17.mp3",
    "Play":"albums/m19.mp3",
    "Faded":"albums/m20.mp3"
};

console.log(allsongs);

const imgs = document.querySelectorAll("img");
let gif = document.getElementById('gif');
let masterSongName = document.querySelector("#masterSongName");
let seekbar = document.querySelector(".seekbar");

const audioMap = {};

let currentPlayingAudio = null;

imgs.forEach(img => {
    img.addEventListener("mouseover",()=>{
        const hide = document.querySelector(".hide");
        if(hide.style.display==="block"){
            hide.style.display="none";
        }
        else{
            hide.style.display="block";
        }
        console.log("sdf");
        
    })
    img.addEventListener("click", () => {
        const clas = img.getAttribute("class");
        console.log(clas);
        
        if (!allsongs[clas]) {
            console.error(`No song found for class: ${clas}`);
            return;
        }

        if (currentPlayingAudio) {
            currentPlayingAudio.pause();
            currentPlayingAudio.currentTime = 0;
            gif.style.opacity = 0;
        }

        if (!audioMap[clas]) {
            audioMap[clas] = new Audio(allsongs[clas]);
        }

        let seeker = document.querySelector(".audio");
        seeker.innerHTML = `<audio controls>
            <source src="${allsongs[clas]}" id="audio" type="audio/mp3">
        </audio>`;
        
        masterSongName.innerHTML = `<b>${clas}</b>`;
        seekbar.style.backgroundColor = "white";

        const audioElement = seeker.querySelector("audio");
        audioElement.addEventListener("play", () => {
            gif.style.opacity = 1;
            document.title=`${clas}- It's trending`;
            currentPlayingAudio = audioElement;
        });
        audioElement.addEventListener("pause", () => {
            gif.style.opacity = 0;
            document.title=`Trendy Music`;

            currentPlayingAudio = null;
        });
        audioElement.addEventListener("ended", () => {
            gif.style.opacity = 0;
            document.title=`Trendy Music`;

            currentPlayingAudio = null;
        });

        audioElement.play();
        currentPlayingAudio = audioElement;
        gif.style.opacity = 1;
        document.title=`${clas}- It's trending`;

    });
});

document.querySelector(".audio").addEventListener("click", (event) => {
    if (event.target.tagName === "AUDIO") {
        if (event.target.paused) {
            gif.style.opacity = 0;
        } else {
            gif.style.opacity = 1;
        }
    }
});


