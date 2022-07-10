const music = new Audio('audio/2.mp3');

const songs = [{
    id: '1',
    songName: `As It Was <br>
    <div class="subtitle">Harry Styles</div>`,
    poster: "img/1.jpg"

},
{
    id: '2',
    songName: `One Right Now <br>
<div class="subtitle">Post Malone & The Weeknd</div>`,
    poster: "img/2.jpg"

},
{
    id: '3',
    songName: `Circles <br>
<div class="subtitle">Post Malone</div>`,
    poster: "img/3.jpg"

},
{
    id: '4',
    songName: `22<br>
<div class="subtitle">Taylor Swift</div>`,
    poster: "img/4.jpg"

},
{
    id: '5',
    songName: `That What I Like <br>
<div class="subtitle">Bruno Mars</div>`,
    poster: "img/5.jpg"

},
{
    id: '6',
    songName: `Fireworks <br>
<div class="subtitle">Katy Parry</div>`,
    poster: "img/6.jpg"

},
{
    id: '7',
    songName: `Everything That I Wanted <br>
<div class="subtitle">Billie Eilish</div>`,
    poster: "img/7.jpg"

},
{
    id: '8',
    songName: `Stay <br>
<div class="subtitle">Kid Laroy & Justin Bieber</div>`,
    poster: "img/8.jpg"

},
{
    id: '9',
    songName: `Clarity <br>
<div class="subtitle">Zeed</div>`,
    poster: "img/9.jpg"

},
{
    id: '10',
    songName: `Something Just Like This <br>
<div class="subtitle">Coldplay</div>`,
    poster: "img/10.jpg"

},
{
    id: '11',
    songName: `Glimps Of Us <br>
<div class="subtitle">Joji</div>`,
    poster: "img/11.jpg"

},
{
    id: '12',
    songName: `My Universe <br>
<div class="subtitle">Coldplay & BTS</div>`,
    poster: "img/12.jpg"

},
{
    id: '13',
    songName: `Sah Sah <br>
<div class="subtitle">Marshmellow</div>`,
    poster: "img/13.jpg"

},
{
    id: '14',
    songName: `Teenagers <br>
<div class="subtitle">The Summer Set</div>`,
    poster: "img/14.jpg"

},
{
    id: '15',
    songName: `Left And Right <br>
<div class="subtitle">Charlie Puth</div>`,
    poster: "img/15.jpg"

},
{
    id: '16',
    songName: `Break My Soul <br>
<div class="subtitle">Beyonce</div>`,
    poster: "img/16.jpg"

},
{
    id: '17',
    songName: `Vegas <br>
<div class="subtitle">Doja Cat</div>`,
    poster: "img/17.jpg"

},
{
    id: '18',
    songName: `I Ain't Worried <br>
<div class="subtitle">OneRepublic</div>`,
    poster: "img/18.jpg"

},
{
    id: '19',
    songName: `Pressure <br>
<div class="subtitle">Paramore</div>`,
    poster: "img/19.jpg"

},
{
    id: '20',
    songName: `Ghost <br>
<div class="subtitle">Justin Bieber</div>`,
    poster: "img/20.jpg"

},
{
    id: '21',
    songName: `Chandlier <br>
<div class="subtitle">Sia</div>`,
    poster: "img/21.jpg"

},
{
    id: '22',
    songName: `Numb <br>
<div class="subtitle">Marshmellow & Khalid</div>`,
    poster: "img/22.jpg"

},
{
    id: '23',
    songName: `Shivers <br>
<div class="subtitle">Ed Sheeran</div>`,
    poster: "img/23.jpg"

},
{
    id: '24',
    songName: `Hold My Hand <br>
<div class="subtitle">Lady Gaga</div>`,
    poster: "img/24.jpg"

},
{
    id: '25',
    songName: `Be Kind <br>
<div class="subtitle">Halsey</div>`,
    poster: "img/25.jpg"

},

{
    id: '26',
    songName: `Love Sick Girls <br>
<div class="subtitle">Blacpink</div>`,
    poster: "img/26.jpg"

},

]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// search data start 
let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `<img src="${poster}" alt="">
    <div class="content">
      ${songName}
    </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }

    }
})
// search data end

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playList')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgba(255, 255, 255, 0.1)';
    })
}

let index = 0;
let poster_master = document.getElementById('poster_master');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playList')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });


        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    console.log(music_curr);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

const next_music = () => {
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.add('active1');
    if (index == songs.length) {
        index == 0;
    }
    index++;
    music.src = `audio/${index}.mp3`;
    poster_master.src = `img/${index}.jpg`;
    music.play();
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    makeAllPlays();
    document.getElementsByClassName('playList')[index - 1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playList')[index - 1].classList.add('bi-pause-circle-fill');
}


const repeat_music = () => {
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.add('active1');
    index;
    music.src = `audio/${index}.mp3`;
    poster_master.src = `img/${index}.jpg`;
    music.play();
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    makeAllPlays();
    document.getElementsByClassName('playList')[index - 1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playList')[index - 1].classList.add('bi-pause-circle-fill');
}


const random_music = () => {
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.add('active1');
    if (index == songs.length) {
        index == 0;
    }
    index = Math.floor((Math.random() * songs.length) + 1);
    music.src = `audio/${index}.mp3`;
    poster_master.src = `img/${index}.jpg`;
    music.play();
    let songTitles = songs.filter((els) => {
        return els.id == index;
    })

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    })
    makeAllPlays();
    document.getElementsByClassName('playList')[index - 1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playList')[index - 1].classList.add('bi-pause-circle-fill');
}


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/${index}.mp3`;
    poster_master.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });


    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });


    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat";
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random";
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next";
            break;
    }
});

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;
    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;


    }
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
});

