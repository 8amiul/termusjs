const totalMusic = music_src.length;
let currentMusicPlaying = 0;
var audio = new Audio(music_src[currentMusicPlaying]);

audio.volume = (20 / 100);

let timeMusic = document.querySelector('.musicTime');
let titleMusic = document.querySelector('.musicTitle');
let artistMusic = document.querySelector('.musicArtist');
let AlbumMusic = document.querySelector('.musicAlbum');

let pauseMusic = document.querySelector('#music-pause');
pauseMusic.addEventListener("click", function () {
    if (audio.paused)
        audio.play();
    else
        audio.pause();
});


function fetchMusicTags () {
    jsmediatags.read(music_src[currentMusicPlaying], {
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

let nextMusic = document.querySelector('#music-next');
nextMusic.addEventListener("click", function () {
    if (currentMusicPlaying < totalMusic-1)
    {
        currentMusicPlaying++;
        audio.pause();
        audio.currentTime = 0;
        audio = null;
        fetchMusicTags();
        audio = new Audio(music_src[currentMusicPlaying]);
        audio.play();

    }
}) 

let previousMusic = document.querySelector('#music-previous');
previousMusic.addEventListener("click", function () {
    if (currentMusicPlaying > 0)
    {
        currentMusicPlaying--;
        audio.pause();
        audio.currentTime = 0;
        audio = null;
        fetchMusicTags();
        audio = new Audio(music_src[currentMusicPlaying]);
        audio.play();
    }
})

let forwardMusic = document.querySelector('#music-forward');
forwardMusic.addEventListener("click", function () {
    if (audio.currentTime + 10 <= audio.duration)
        audio.currentTime += 10;
})

let rewindMusic = document.querySelector('#music-rewind');
rewindMusic.addEventListener("click", function () {
    if (audio.currentTime - 10 >= 0)
        audio.currentTime -= 10;
})



function printTimeMusic() {

    let totalSeconds = Math.trunc(audio.currentTime);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    let totalSecondsDuration = Math.trunc(audio.duration);
    let hoursDur = Math.floor(totalSecondsDuration / 3600);
    let minutesDur = Math.floor((totalSecondsDuration % 3600) / 60);
    let secondsDur = totalSecondsDuration % 60;

    if (totalSecondsDuration >= 3600)
        timeMusic.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${hours.toString().padStart(2, '0')}:${minutesDur.toString().padStart(2, '0')}:${secondsDur.toString().padStart(2, '0')}`;
    else
        timeMusic.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${minutesDur.toString().padStart(2, '0')}:${secondsDur.toString().padStart(2, '0')}`;
    setTimeout(printTimeMusic, 100);
}
printTimeMusic();

