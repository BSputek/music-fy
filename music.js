const musics = [
    ""
]
let currentMusic = {
    audio:null,
    url:null
};
let musicIsPlaying = false;
const playButtons = [...document.getElementsByClassName("playPauseButton")];
let currentTime;

playButtons.forEach(element => {
    element.addEventListener("click",()=>{
        if(musicIsPlaying==false){
            element.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            if(currentMusic.url!=element.value){
                currentMusic.audio = new Audio(element.value);
                currentMusic.url = element.value;
            }
        currentMusic.audio.play();
        musicIsPlaying=true;
        }else if(musicIsPlaying==true){
            playButtons.forEach(element=>{
                element.innerHTML = `<i class="fa-solid fa-play"></i>`;
            })
            if(currentMusic.url!=element.value){
                currentMusic.audio.pause();
                currentMusic.audio = new Audio(element.value);
                currentMusic.url = element.value;
                currentMusic.audio.play();
                element.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            }else{
                        currentMusic.audio.pause();
                        musicIsPlaying=false;
            }
        }
    })
});

// currentMusic.addEventListener("timeupdate", ()=>{
//     currentTime = currentMusic.currentTime;
// });


