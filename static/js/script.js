const totalMusic = music_src.length;
let currentMusicPlaying = 0;
//var audio = new Audio(music_src[currentMusicPlaying].src);
var audio = new Audio();

audio.volume = 1;

let timeMusic = document.querySelector('.musicTime');
let titleMusic = document.querySelector('.musicTitle');
let artistMusic = document.querySelector('.musicArtist');
let AlbumMusic = document.querySelector('.musicAlbum');



let musicVolumeSlider = document.querySelector('#volume-slider')
musicVolumeSlider.value = audio.volume * 100;
let musicVolumeHTML = document.querySelector('.musicVolume');

let playPauseButtonIcon = document.querySelector(".play-pause-svg"); 

musicVolumeSlider.addEventListener("change", function () {
    audio.volume = musicVolumeSlider.value / 100;
})

function musicLoad(musicPlayingNumber) {
    audio.pause();
    audio.currentTime = 0;
    audio = null;
    currentMusicPlaying = musicPlayingNumber;
    fetchMusicTags();
    audio = new Audio(music_src[currentMusicPlaying].link)
    audio.volume = musicVolumeSlider.value / 100;
    audio.play()
}

let pauseMusic = document.querySelector('#music-pause');
pauseMusic.addEventListener("click", function () {
    if (audio.paused)
        if (audio.src == "")
            musicLoad(currentMusicPlaying)
        else
            audio.play();
    else
        audio.pause();
});

let musicList = document.querySelector('.music-list');
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < totalMusic; i++)
    {
        let listItem = document.createElement('li');
        let listItemButton = document.createElement('button');
        listItemButton.setAttribute('type', "button");
        listItemButton.setAttribute('class', "music-list-item");

        listItemButton.innerText = music_src[i].title;

        listItemButton.addEventListener("click", function () {
            currentMusicPlaying = i;
            musicLoad(currentMusicPlaying)
        })

        listItem.appendChild(listItemButton)
        musicList.appendChild(listItem)
    }

})



function fetchMusicTags () {
    titleMusic.innerText = music_src[currentMusicPlaying].title;
    artistMusic.innerHTML = music_src[currentMusicPlaying].artist;
    AlbumMusic.innerText = music_src[currentMusicPlaying].album;

    jsmediatags.read(music_src[currentMusicPlaying].link, {
        onSuccess: function(tag) {
            var picture = tag.tags.picture;
            var base64String = "";
            for (var i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
            }
            var albumCoverUri = "data:" + picture.format + ";base64," + window.btoa(base64String);

            document.getElementById('musicAlbum-cover').src = albumCoverUri;
    }});
}
fetchMusicTags()

/*
function fetchMusicTags () {
    jsmediatags.read(music_src[currentMusicPlaying].link, {
        onSuccess: function(tag) {
            titleMusic.innerText = tag.tags.title;
            artistMusic.innerText = tag.tags.artist;
            AlbumMusic.innerText = tag.tags.album;
            if (tag.tags.picture)
            {
                var picture = tag.tags.picture;
                var base64String = "";
                for (var i = 0; i < picture.data.length; i++) {
                    base64String += String.fromCharCode(picture.data[i]);
                }
                var albumCoverUri = "data:" + picture.format + ";base64," + window.btoa(base64String);

                document.getElementById('musicAlbum-cover').src = albumCoverUri;
            }
        }
    });
}
fetchMusicTags();
*/



let nextMusic = document.querySelector('#music-next');


function nextMusicFunc() {
    if (audio.src == "")
        musicLoad(currentMusicPlaying)
    if (currentMusicPlaying < totalMusic-1)
        {
            currentMusicPlaying++;
            musicLoad(currentMusicPlaying)
        }
}
nextMusic.addEventListener("click", nextMusicFunc); 

let previousMusic = document.querySelector('#music-previous');
previousMusic.addEventListener("click", function () {
    if (currentMusicPlaying > 0)
    {
        currentMusicPlaying--;
        musicLoad(currentMusicPlaying);
    }
})

let forwardMusic = document.querySelector('#music-forward');
const forwardSecond = 10;
forwardMusic.addEventListener("click", function () {
    if (audio.currentTime + forwardSecond <= audio.duration)
        audio.currentTime += forwardSecond;
})

let rewindMusic = document.querySelector('#music-rewind');
const rewindSecond = 10;
rewindMusic.addEventListener("click", function () {
    if (audio.currentTime - rewindSecond >= 0)
        audio.currentTime -= rewindSecond;
})

let listToggleBtn = document.querySelector(".list-toggle-btn")
let listToggleBtnSvg = document.querySelector(".list-toggle-btn-svg")
musicList.style.display = "none"
listToggleBtn.addEventListener("click", function () {
    if (musicList.style.display == "none") {
        musicList.style.display = "block"
        listToggleBtnSvg.src = "/static/svg/chevron-up.svg"
    }
    else {
        musicList.style.display = "none"
        listToggleBtnSvg.src = "/static/svg/chevron-down.svg"
    }
})

let musicProgressSlider = document.querySelector('#progress-slider')
musicProgressSlider.value = 0;

musicProgressSlider.addEventListener("change", function() {
    audio.currentTime = (musicProgressSlider.value * audio.duration) / 100;

})

function loop_100ms() {

    if (audio.paused)
        playPauseButtonIcon.src = "static/svg/play.svg";
    else 
        playPauseButtonIcon.src = "static/svg/pause.svg";

    if (currentMusicPlaying != totalMusic-1)
    {
        if (audio.ended)
            nextMusicFunc();
    }

    musicVolumeHTML.innerText = `Vol: ${Math.trunc(audio.volume * 100)}%`;

    if (audio.src != "") {

        let totalSecondsDuration = Math.trunc(audio.duration);
        let hoursDur = Math.floor(totalSecondsDuration / 3600);
        let minutesDur = Math.floor((totalSecondsDuration % 3600) / 60);
        let secondsDur = totalSecondsDuration % 60;

        let totalSeconds = Math.trunc(audio.currentTime);
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;


        if (totalSecondsDuration >= 3600)
            timeMusic.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${hours.toString().padStart(2, '0')}:${minutesDur.toString().padStart(2, '0')}:${secondsDur.toString().padStart(2, '0')}`;
        else
            timeMusic.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${minutesDur.toString().padStart(2, '0')}:${secondsDur.toString().padStart(2, '0')}`;
    }
        setTimeout(loop_100ms, 100);
}

function loop_1000ms() {

    if (audio.src != "")
        musicProgressSlider.value = (audio.currentTime / audio.duration) * 100;
        setTimeout(loop_1000ms, 1000)
}
loop_100ms();
loop_1000ms();



/*
let DATA = [
	
]
for (let i = 0; i < links.length; i++)
{
	let obj = new Object();
	obj.link = links[i];
	jsmediatags.read(links[i], {
    onSuccess: function(tag) {
    obj.title = tag.tags.title;
		obj.artist = tag.tags.artist;
		obj.album = tag.tags.album;
		obj.year = tag.tags.year;		
  }});
	DATA[i] = obj;
}
*/