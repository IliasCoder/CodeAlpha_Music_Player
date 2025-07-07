// Playlist: Array of song objects (title, src, cover, colors, artist)
const playlist = [
  {
    title: 'Dreams',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    cover: 'https://www.bensound.com/bensound-img/dreams.jpg',
    colors: ['#4f46e5', '#6366f1']
  },
  {
    title: 'Energy',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-energy.mp3',
    cover: 'https://www.bensound.com/bensound-img/energy.jpg',
    colors: ['#f59e42', '#f43f5e']
  },
  {
    title: 'Sunny',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
    cover: 'https://www.bensound.com/bensound-img/sunny.jpg',
    colors: ['#fbbf24', '#fde68a']
  },
  {
    title: 'Jazz Comedy',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-jazzcomedy.mp3',
    cover: 'https://www.bensound.com/bensound-img/jazzcomedy.jpg',
    colors: ['#1db954', '#191414']
  },
  {
    title: 'Once Again',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3',
    cover: 'https://www.bensound.com/bensound-img/onceagain.jpg',
    colors: ['#eab308', '#fbbf24']
  },
  {
    title: 'A New Beginning',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
    cover: 'https://www.bensound.com/bensound-img/anewbeginning.jpg',
    colors: ['#6366f1', '#1db954']
  },
  {
    title: 'Creative Minds',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
    cover: 'https://www.bensound.com/bensound-img/creativeminds.jpg',
    colors: ['#f43f5e', '#6366f1']
  },
  {
    title: 'Going Higher',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-goinghigher.mp3',
    cover: 'https://www.bensound.com/bensound-img/goinghigher.jpg',
    colors: ['#1ed760', '#6366f1']
  },
  {
    title: 'Ukulele',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3',
    cover: 'https://www.bensound.com/bensound-img/ukulele.jpg',
    colors: ['#fbbf24', '#1db954']
  },
  {
    title: 'Memories',
    artist: 'Bensound',
    src: 'https://www.bensound.com/bensound-music/bensound-memories.mp3',
    cover: 'https://www.bensound.com/bensound-img/memories.jpg',
    colors: ['#6366f1', '#f43f5e']
  }
];

// DOM Elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume-bar');
const muteBtn = document.getElementById('mute');
const volumeIcon = document.getElementById('volume-icon');
const muteIcon = document.getElementById('mute-icon');
const songTitle = document.getElementById('song-title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const coverImage = document.getElementById('cover-image');
const backgroundBlur = document.getElementById('background-blur');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Mobile player elements
const playPauseBtnMobile = document.getElementById('play-pause-mobile');
const playIconMobile = document.getElementById('play-icon-mobile');
const pauseIconMobile = document.getElementById('pause-icon-mobile');
const prevBtnMobile = document.getElementById('prev-mobile');
const nextBtnMobile = document.getElementById('next-mobile');
const seekBarMobile = document.getElementById('seek-bar-mobile');
const volumeBarMobile = document.getElementById('volume-bar-mobile');
const muteBtnMobile = document.getElementById('mute-mobile');
const volumeIconMobile = document.getElementById('volume-icon-mobile');
const muteIconMobile = document.getElementById('mute-icon-mobile');
const songTitleMobile = document.getElementById('song-title-mobile');
const currentTimeElMobile = document.getElementById('current-time-mobile');
const durationElMobile = document.getElementById('duration-mobile');

const albumsGrid = document.getElementById('albums-grid');

let currentSong = 0;
let isPlaying = false;
let isDark = false;

// Now Playing Bar DOM
const nowPlayingBar = document.getElementById('now-playing-bar');
const npbCover = document.getElementById('npb-cover');
const npbTitle = document.getElementById('npb-title');
const npbArtist = document.getElementById('npb-artist');
const npbPlay = document.getElementById('npb-play');
const npbPlayIcon = document.getElementById('npb-play-icon');
const npbPauseIcon = document.getElementById('npb-pause-icon');
const npbPrev = document.getElementById('npb-prev');
const npbNext = document.getElementById('npb-next');
const npbSeek = document.getElementById('npb-seek');
const npbCurrent = document.getElementById('npb-current');
const npbDuration = document.getElementById('npb-duration');
const npbMute = document.getElementById('npb-mute');
const npbVolume = document.getElementById('npb-volume');
const npbVolumeIcon = document.getElementById('npb-volume-icon');
const npbMuteIcon = document.getElementById('npb-mute-icon');
const desktopPlayer = document.getElementById('desktop-player-container');
const stickyFooter = document.querySelector('.sticky-footer');

// Load song by index
function loadSong(index) {
  const song = playlist[index];
  audio.src = song.src;
  songTitle.textContent = song.title;
  songTitleMobile.textContent = song.title;
  if (document.querySelector('.player-artist')) {
    document.querySelectorAll('.player-artist').forEach(el => el.textContent = song.artist);
  }
  coverImage && (coverImage.src = song.cover);
  coverImage && (coverImage.alt = song.title + ' artwork');
  seekBar && (seekBar.value = 0);
  seekBarMobile && (seekBarMobile.value = 0);
  currentTimeEl && (currentTimeEl.textContent = '0:00');
  currentTimeElMobile && (currentTimeElMobile.textContent = '0:00');
  durationEl && (durationEl.textContent = '0:00');
  durationElMobile && (durationElMobile.textContent = '0:00');
  // Dynamic background
  setBackgroundGradient(song.colors);
}

// Play current song
function playSong() {
  audio.play();
  isPlaying = true;
  playIcon.style.display = 'none';
  pauseIcon.style.display = '';
  playIconMobile.style.display = 'none';
  pauseIconMobile.style.display = '';
  playPauseBtn.setAttribute('aria-label', 'Pause');
  playPauseBtnMobile.setAttribute('aria-label', 'Pause');
}

// Pause current song
function pauseSong() {
  audio.pause();
  isPlaying = false;
  playIcon.style.display = '';
  pauseIcon.style.display = 'none';
  playIconMobile.style.display = '';
  pauseIconMobile.style.display = 'none';
  playPauseBtn.setAttribute('aria-label', 'Play');
  playPauseBtnMobile.setAttribute('aria-label', 'Play');
}

// Next song
function nextSong() {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
  playSong();
}

// Previous song
function prevSong() {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  loadSong(currentSong);
  playSong();
}

// Format time in mm:ss
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Update seek bar and time
function updateProgress() {
  seekBar.value = audio.currentTime;
  seekBarMobile.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  currentTimeElMobile.textContent = formatTime(audio.currentTime);
}

// Set seek bar max when metadata loaded
audio.addEventListener('loadedmetadata', () => {
  seekBar.max = Math.floor(audio.duration);
  seekBarMobile.max = Math.floor(audio.duration);
  durationEl.textContent = formatTime(audio.duration);
  durationElMobile.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', updateProgress);

// Seek
seekBar.addEventListener('input', () => {
  audio.currentTime = seekBar.value;
  seekBarMobile.value = seekBar.value;
});
seekBarMobile.addEventListener('input', () => {
  audio.currentTime = seekBarMobile.value;
  seekBar.value = seekBarMobile.value;
});

// Play/Pause button
playPauseBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
});
playPauseBtnMobile.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
});

audio.addEventListener('ended', nextSong);

// Next/Prev buttons
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
nextBtnMobile.addEventListener('click', nextSong);
prevBtnMobile.addEventListener('click', prevSong);

// Volume
volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value;
  volumeBarMobile.value = volumeBar.value;
  updateVolumeIcons();
});
volumeBarMobile.addEventListener('input', () => {
  audio.volume = volumeBarMobile.value;
  volumeBar.value = volumeBarMobile.value;
  updateVolumeIcons();
});

// Mute/Unmute
muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  updateVolumeIcons();
});
muteBtnMobile.addEventListener('click', () => {
  audio.muted = !audio.muted;
  updateVolumeIcons();
});

audio.addEventListener('volumechange', () => {
  volumeBar.value = audio.muted ? 0 : audio.volume;
  volumeBarMobile.value = audio.muted ? 0 : audio.volume;
  updateVolumeIcons();
});

function updateVolumeIcons() {
  if (audio.muted || audio.volume === 0) {
    volumeIcon.style.display = 'none';
    muteIcon.style.display = '';
    volumeIconMobile.style.display = 'none';
    muteIconMobile.style.display = '';
  } else {
    volumeIcon.style.display = '';
    muteIcon.style.display = 'none';
    volumeIconMobile.style.display = '';
    muteIconMobile.style.display = 'none';
  }
}

// Keyboard accessibility
[playPauseBtn, nextBtn, prevBtn, muteBtn].forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') btn.click();
  });
});
[playPauseBtnMobile, nextBtnMobile, prevBtnMobile, muteBtnMobile].forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') btn.click();
  });
});

// Dynamic background gradient
function setBackgroundGradient(colors) {
  backgroundBlur.style.background = `linear-gradient(120deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
}

// Dark mode toggle
function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark-mode');
    isDark = true;
    themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>';
  } else {
    document.body.classList.remove('dark-mode');
    isDark = false;
    themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/>';
  }
}

// Detect system dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setDarkMode(true);
}

themeToggle.addEventListener('click', () => {
  setDarkMode(!isDark);
});

// Render albums grid
function renderAlbums() {
  if (!albumsGrid) return;
  albumsGrid.innerHTML = '';
  playlist.forEach((album, idx) => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${album.title} by ${album.artist}`);
    card.innerHTML = `
      <img src="${album.cover}" alt="${album.title} album cover" class="album-cover" />
      <div class="album-title">${album.title}</div>
      <div class="album-artist">${album.artist}</div>
    `;
    card.addEventListener('click', () => {
      currentSong = idx;
      loadSong(currentSong);
      playSong();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        currentSong = idx;
        loadSong(currentSong);
        playSong();
      }
    });
    albumsGrid.appendChild(card);
  });
}

// Add artist to player UI
function addArtistToPlayer() {
  if (songTitle && !document.querySelector('.player-artist')) {
    const artist = document.createElement('div');
    artist.className = 'player-artist';
    artist.style.fontSize = '1rem';
    artist.style.color = 'var(--muted-color)';
    artist.style.fontWeight = '500';
    artist.style.marginTop = '-0.5rem';
    artist.style.marginBottom = '0.5rem';
    songTitle.insertAdjacentElement('afterend', artist);
  }
  if (songTitleMobile && !document.getElementById('player-artist-mobile')) {
    const artist = document.createElement('div');
    artist.className = 'player-artist';
    artist.id = 'player-artist-mobile';
    artist.style.fontSize = '0.95rem';
    artist.style.color = 'var(--muted-color)';
    artist.style.fontWeight = '500';
    artist.style.marginTop = '-0.4rem';
    artist.style.marginBottom = '0.3rem';
    songTitleMobile.insertAdjacentElement('afterend', artist);
  }
}

// Initialize
addArtistToPlayer();
renderAlbums();
loadSong(currentSong);
updateVolumeIcons();

function showNowPlayingBar() {
  if (nowPlayingBar) nowPlayingBar.style.display = '';
  if (desktopPlayer) desktopPlayer.style.display = 'none';
  if (stickyFooter) stickyFooter.style.display = 'none';
}
function hideNowPlayingBar() {
  if (nowPlayingBar) nowPlayingBar.style.display = 'none';
  if (desktopPlayer) desktopPlayer.style.display = '';
  if (stickyFooter) stickyFooter.style.display = '';
}

function updateNowPlayingBar() {
  if (!nowPlayingBar) return;
  const song = playlist[currentSong];
  npbCover.src = song.cover;
  npbCover.alt = song.title + ' cover';
  npbTitle.textContent = song.title;
  npbArtist.textContent = song.artist;
  npbSeek.max = Math.floor(audio.duration) || 0;
  npbSeek.value = audio.currentTime;
  npbCurrent.textContent = formatTime(audio.currentTime);
  npbDuration.textContent = formatTime(audio.duration);
  npbVolume.value = audio.muted ? 0 : audio.volume;
  if (audio.muted || audio.volume === 0) {
    npbVolumeIcon.style.display = 'none';
    npbMuteIcon.style.display = '';
  } else {
    npbVolumeIcon.style.display = '';
    npbMuteIcon.style.display = 'none';
  }
  if (isPlaying) {
    npbPlayIcon.style.display = 'none';
    npbPauseIcon.style.display = '';
  } else {
    npbPlayIcon.style.display = '';
    npbPauseIcon.style.display = 'none';
  }
}

// Wire up Now Playing Bar controls
if (npbPlay) {
  npbPlay.onclick = () => (isPlaying ? pauseSong() : playSong());
}
if (npbPrev) {
  npbPrev.onclick = prevSong;
}
if (npbNext) {
  npbNext.onclick = nextSong;
}
if (npbSeek) {
  npbSeek.oninput = () => {
    audio.currentTime = npbSeek.value;
    seekBar && (seekBar.value = npbSeek.value);
    seekBarMobile && (seekBarMobile.value = npbSeek.value);
  };
}
if (npbVolume) {
  npbVolume.oninput = () => {
    audio.volume = npbVolume.value;
    volumeBar && (volumeBar.value = npbVolume.value);
    volumeBarMobile && (volumeBarMobile.value = npbVolume.value);
    updateNowPlayingBar();
  };
}
if (npbMute) {
  npbMute.onclick = () => {
    audio.muted = !audio.muted;
    updateNowPlayingBar();
  };
}

// Keep Now Playing Bar in sync with audio
if (audio) {
  audio.addEventListener('timeupdate', updateNowPlayingBar);
  audio.addEventListener('loadedmetadata', updateNowPlayingBar);
  audio.addEventListener('volumechange', updateNowPlayingBar);
}

// Show Now Playing Bar when a song is played
const originalPlaySong = playSong;
playSong = function() {
  showNowPlayingBar();
  originalPlaySong.apply(this, arguments);
  updateNowPlayingBar();
};
// Hide Now Playing Bar if paused and at start (optional)
const originalPauseSong = pauseSong;
pauseSong = function() {
  originalPauseSong.apply(this, arguments);
  updateNowPlayingBar();
};

// When a new album is clicked, Now Playing Bar will show via playSong()
// On page load, hide Now Playing Bar
hideNowPlayingBar(); 