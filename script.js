// Song, Artist, Link, photo
const songs = [['Complicated', 'Avril Lavigne', 'https://www.youtube.com/embed/5NPBIwQyPWE?autoplay=1', 'https://people.com/thmb/8jq3bMokr0HV3OqZYpadWZAFzJk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(353x0:355x2):format(webp)/avril-lavigne-0-c837748df95542a4b5cd511cbde2300d.png'],
               ['Sk8er Boi', 'Avril Lavigne', 'https://www.youtube.com/embed/TIy3n2b7V9k?autoplay=1', 'https://people.com/thmb/8jq3bMokr0HV3OqZYpadWZAFzJk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(353x0:355x2):format(webp)/avril-lavigne-0-c837748df95542a4b5cd511cbde2300d.png'],
               ['Tears Don\'t Fall', 'Bullet For My Valentine', 'https://www.youtube.com/embed/9sTQ0QdkN3Q?autoplay=1', 'https://cdn-images.dzcdn.net/images/cover/4b3b512613d9e586f63f227991536a29/500x500-000000-80-0-0.jpg'],
               ['Face Down', 'The Red Jumpsuit Apparatus', 'https://www.youtube.com/embed/6Ux6SlOE9Qk?autoplay=1', 'https://i.scdn.co/image/ab67616d0000b273f98edbc89407338a90437d34'],
               ['King For A Day', 'Pierce The Veil', 'https://www.youtube.com/embed/icXUkIfZxyg?autoplay=1', 'https://i.scdn.co/image/ab67616d00001e025163cf231c5eee40bb9a87e6'],
               ['Taste Of Ink', 'The Used', 'https://www.youtube.com/embed/aJXRFcyWgdk?autoplay=1', 'https://i.scdn.co/image/ab67616d00001e02e0827a6cec3f1574249ec8c0'],
               ['Misery Business', 'Paramore', 'https://www.youtube.com/embed/aCyGvGEtOwc?autoplay=1', 'https://matrix-music.com/wp-content/uploads/2024/04/paramore-riot.jpeg.webp'],
               ['Hard Times', 'Paramore', 'https://www.youtube.com/embed/AEB6ibtdPZc?autoplay=1', 'https://matrix-music.com/wp-content/uploads/2024/04/paramore-riot.jpeg.webp'],
               ['I Write Sins Not Tragedies', 'Panic! At The Disco', 'https://www.youtube.com/embed/vc6vs-l5dkc?autoplay=1', 'https://i.discogs.com/r7CVZKAZrcIvdcEmV4NRg1SDSZW-25Pkzu9jI98Z15Q/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMTQ5/MDQ5LTE2Njg5MDkx/NDAtNjYxMy5qcGVn.jpeg'],
               ['All The  Small Things', 'Blink 182', 'https://www.youtube.com/embed/9Ht5RZpzPqw?autoplay=1', 'https://people.com/thmb/Q-igYgGXwAb6gRphPyTZvUT3bLA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x359:1001x361):format(webp)/blink-182-1-ea965e0c570a4873ad96333b23b09137.jpg']];
let index = 0;
let menuOn = false;
let playing = false;
const songList = [];
const image = document.getElementById('song-cover');
const nextButton = document.getElementById('forward');
const playButton = document.getElementById('play');
const backButton = document.getElementById('backward');
const player = document.getElementById('song');
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');

// Functionality
// Play the song
function playSong() {
    player.src = songs[index][2];
    changePlayButton();
    playing = true;
    displaySongInfo();
}

// Reset the song
function pauseSong() {
    player.src = '';
    changePlayButton();
    playing = false;
}

// Play the next song
function nextSong() {
    if (index === songs.length - 1) {
        index = 0;
    } else {
        index++;
    }
    player.src = songs[index][2];
    playing = false;
    changePlayButton();
    playing = true;
    displaySongInfo(); 
}

// Play the previous song
function previousSong() {
    if (index === 0) {
        index = songs.length - 1;
    } else {
        index--;
    }
    player.src = songs[index][2];
    playing = false;
    changePlayButton();
    playing = true;
    displaySongInfo();
}

// Display song information
function displaySongInfo() {
    document.getElementById('song-title').innerHTML = songs[index][0];
    document.getElementById('song-artist').innerHTML = songs[index][1];
    image.src = songs[index][3];
}

// Show the menu
function showMenu() {
    menu.style.display = 'block';
    menuOn = true;
    changeMenuButton();
}

// Close the menu
function closeMenu() {
    menu.style.display = 'none';
    menuOn = false;
    changeMenuButton();
}

// Play the clicked on song
function playClickedSong() {
    for (let i = 0; i < songList.length; i++) {
        songList[i].addEventListener('click', () => {
            index = i;
            playing = false;
            playSong();
            closeMenu();
        });
    }
}

// Event listeners
// Add event listener to buttons
playButton.addEventListener('click', () => {
    if (playing === false) {
        playSong();
    } else {
        pauseSong();
    }
});

nextButton.addEventListener('click', () => {
    nextSong();
});

backButton.addEventListener('click', () => {
    previousSong();
});

menuButton.addEventListener('click', () => {
    if (menuOn === false) {
        showMenu();
    } else {
        closeMenu();
    }
});

// Styling
// Change the play button
function changePlayButton() {
    if (playing === true) {
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        playButton.innerHTML = '<i class="fas fa-stop"></i>';
    }
}

// Change the menu button
function changeMenuButton() {
    if (menuOn === true) {
        menuButton.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

// Add the songs to the menu
for (let i = 0; i < songs.length; i++) {
    const song = document.createElement('div');
    song.classList.add('song');
    song.innerHTML = `<h3 class="song-title">${songs[i][0]}</h3><h4 class="song-artist">${songs[i][1]}</h4>`;
    menu.appendChild(song);
    songList.push(song);
    console.log(songList);
}

playClickedSong();