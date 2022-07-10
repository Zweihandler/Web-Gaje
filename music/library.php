<?php
$page = 'lib';

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style3.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <title>Main Page</title>
</head>

<body>
    <header>
        <div class="menu_side">
            <h1><img src="img/spo.png" alt="">Spotipu</h1>
            <div class="playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>Playlist</h4>
                <h4 class="uctive"><span></span><i class="bi bi-plus-square-fill"></i>Create Playlist</h4>
                <h4 class="uctive"><span></span><i class="bi bi-heart-fill"></i>Liked Song</h4>
            </div>
            <div class="menu_song">
                <li class="songItem">
                    <span>01</span>
                    <img src="img/1.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="1"></i>
                </li>
                <li class="songItem">
                    <span>02</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="2"></i>
                </li>
                <li class="songItem">
                    <span>03</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="3"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="4"></i>
                </li>
                <li class="songItem">
                    <span>05</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="5"></i>
                </li>
                <li class="songItem">
                    <span>06</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="6"></i>
                </li>
                <li class="songItem">
                    <span>07</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="7"></i>
                </li>
                <li class="songItem">
                    <span>08</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="8"></i>
                </li>
                <li class="songItem">
                    <span>09</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="9"></i>
                </li>
                <li class="songItem">
                    <span>10</span>
                    <img src="img/2.jpg" alt="">
                    <h5>Song Tittle <br>
                        <div class="subtitle">Artist Name</div>
                    </h5><i class="bi playList bi-play-circle-fill" id="10"></i>
                </li>

            </div>
        </div>

        <div class="song_side">
            <nav>
                <ul>
                    <li><a href="index.php" class="nope">DISCOVER</a></li>
                    <li><a href="library.php" class="one">YOUR LIBRARY</a></li>
                    <li><a href="#" class="nope">ON DEMAND</a></li>
                    <li><a href="#" class="nope">PODCAST</a></li>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search Here...">
                    <div class="search_result">
                        <!--<a href="#" class="card">
                            <img src="img/1.jpg" alt="">
                            <div class="content">
                                As It Was <br>
                                <div class="subtitle">Harry Styles</div>
                            </div>
                        </a> -->
                    </div>
                </div>
                <div class="user">
                    <img src="user.png" alt="">
                </div>
                <div class="container-logout">
                    <form action="" method="POST" class="login-email">
                        <?php echo $_SESSION['username']; ?>
                        <div class="input-group">
                            <a href="logout.php" class="btn">Logout</a>
                        </div>
                    </form>
                </div>
            </nav>

            <div class="library">
                <h2>Playlist</h2>

            </div>
            <div class="data">
                <li class="book">
                    <div class="img_p">
                        <img src="disco.JPG" alt="">
                        <i class="bi playList bi-play-circle-fill"></i>
                    </div>
                    <h5>Local Files <br>
                        <div class="subs">File from your computer</div>
                    </h5>
                </li>

                <li class="book">
                    <div class="img_p">
                        <img src="disco.JPG" alt="">
                        <i class="bi playList bi-play-circle-fill"></i>
                    </div>
                    <h5>DMCA-Free Song <br>
                        <div class="subs">Argofox record label</div>
                    </h5>
                </li>
                <li class="book">
                    <div class="img_p">
                        <img src="disco.JPG" alt="">
                        <i class="bi playList bi-play-circle-fill"></i>
                    </div>
                    <h5>My Playlist <br>
                        <div class="subs">By The User</div>
                    </h5>
                </li>
                <li class="book">
                    <div class="img_p">
                        <img src="disco.JPG" alt="">
                        <i class="bi playList bi-play-circle-fill"></i>
                    </div>
                    <h5>Discover Weekly <br>
                        <div class="subs">Your weekly mixtape of music</div>
                    </h5>
                </li>
                <li class="book">
                    <div class="img_p">
                        <img src="disco.JPG" alt="">
                        <i class="bi playList bi-play-circle-fill"></i>
                    </div>
                    <h5>Local Files <br>
                        <div class="subs">File from your computer</div>
                    </h5>
                </li>
                <li class="book">
                    <div class="img_p">
                        <img src="disco.JPG" alt="">
                        <i class="bi playList bi-play-circle-fill"></i>
                    </div>
                    <h5>Local Files <br>
                        <div class="subs">File from your computer</div>
                    </h5>
                </li>
                <li class="book">
                    <div class="img_p">
                        <img src="disco.JPG" alt="">
                        <i class="bi playList bi-play-circle-fill"></i>
                    </div>
                    <h5>Local Files <br>
                        <div class="subs">File from your computer</div>
                    </h5>
                </li>

            </div>
        </div>



        <div class="master_play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="img/2.jpg" alt="" id="poster_master">
            <h5 id="title">
                Current Song
                <div class="subtitle">Current Artist</div>
            </h5>
            <div class="icon">
                <i class="bi shuffle bi-music-note-beamed">next</i>
                <i class="bi bi-skip-start-fill" id="back"></i>
                <i class="bi bi-play-fill" id="masterPlay"></i>
                <i class="bi bi-skip-end-fill" id="next"></i>
                <i class="bi bi-cloud-arrow-down-fill" id="download_music"></i>
            </div>
            <span id="currentStart">0:00</span>
            <div class="bar">
                <input type="range" id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentEnd">0:30</span>
            <div class="vol">
                <i class="bi bi-volume-up-fill" id="vol_icon"></i>
                <input type="range" min="0" max="100" id="vol">
                <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>

            </div>
        </div>

    </header>
    <script src="App.js"></script>
</body>

</html>