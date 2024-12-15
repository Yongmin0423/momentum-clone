const songs = [
  {
    song: "All I Want for Christmas is You",
    singer: "Mariah Carey",
    src: "songs/Mariah Carey - All I Want For Christmas Is You (Lyrics).mp3",
  },
  {
    song: "Last Christmas",
    singer: "Wham!",
    src: "songs/Wham! - Last Christmas (Lyrics).mp3",
  },
  {
    song: "Santa Tell Me",
    singer: "Ariana Grande",
    src: "songs/Ariana Grande  Santa Tell Me.mp3",
  },
  {
    song: "What Christmas Means to Me",
    singer: "Boyzone",
    src: "songs/Boyzone - What Christmas Means To Me.mp3",
  },
  {
    song: "Christmas Without You",
    singer: "Ava Max",
    src: "songs/Ava Max - Christmas Without You [Official Audio].mp3",
  },
  {
    song: "Christmas Tree Farm",
    singer: "Taylor Swift",
    src: "songs/Taylor Swift  Christmas Tree Farm (Lyrics).mp3",
  },
  {
    song: "25th",
    singer: "Tori Kelly",
    src: "songs/25th by Tori Kelly (Lyrics).mp3",
  },
  {
    song: "Santa Claus is Coming to Town",
    singer: "Michael Bolton",
    src: "songs/Michael Bolton - Santa Claus Is Coming to Town (Audio).mp3",
  },
  {
    song: "Snowman",
    singer: "Sia",
    src: "songs/Sia - Snowman.mp3",
  },
];

const song = document.querySelector("#songs span:first-child");
const singer = document.querySelector("#songs span:last-child");
const audio = document.getElementById("audio-player");

const todaysSong = songs[Math.floor(Math.random() * songs.length)];

song.innerText = todaysSong.song;
singer.innerText = `- ${todaysSong.singer}`;
audio.src = todaysSong.src;
