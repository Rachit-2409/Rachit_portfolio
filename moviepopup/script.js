let button = document.getElementById('btn');
let video_box = document.querySelector('.videocontainer');
let close = document.getElementById('close');
let video = document.querySelector('video');

close.addEventListener('click', ()=>{
    video_box.style.display = "none";
    video.pause();
    video.currentTime = 0;
})

button.addEventListener('click', ()=>{
    video_box.style.display = "block";
    video.play();
})