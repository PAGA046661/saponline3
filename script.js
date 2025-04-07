// Define audio tracks
const audioTracks = {
    track1: new Audio('./O Saathi.mp3'),
    track2: new Audio('./Pachtaoge.mp3'),
    track3: new Audio('./Phir Mohabbat.mp3'),
    track4: new Audio('./Sach Keh Raha Hai.mp3'),
    track5: new Audio('./Saiyaara.mp3'),
    track6: new Audio('./Sanam Teri Kasam.mp3'),
    track7: new Audio('./Tera Ban Jaunga.mp3'),
    track8: new Audio('./Tere Liye.mp3'),
    track9: new Audio('./Teri Yaadon Mein.mp3'),
    track10: new Audio('./Thodi Jagah.mp3'),
    track11: new Audio('./Tu Dua Hai Dua.mp3'),
    track12: new Audio('./Tu Hai Ki Nahi.mp3'),
    track13: new Audio('./Tujhe Kaise, Pata Na Chala.mp3'),
    track14: new Audio('./Tum Hi Aana.mp3'),
    track15: new Audio('./Tum Jo Aaye.mp3'),
    track16: new Audio('./Uska Hi Banana.mp3'),
    track17: new Audio('./Woh Lamhe Woh Baatein.mp3'),
    track18: new Audio('./Ye Tune Kya Kiya.mp3'),
    track19: new Audio('./Yeh Jism.mp3'),
    track20: new Audio('./Zihaal e Miskin.mp3'),  
    };

// Function to play or pause individual tracks based on checkbox
function toggleMusic(checkbox) {
    const track = checkbox.getAttribute('data-audio');
    const audio = audioTracks[track];
    
    if (checkbox.checked) {
        audio.play();
    } else {
        audio.pause();
    }
}

// JavaScript to handle theme toggling
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });
});
