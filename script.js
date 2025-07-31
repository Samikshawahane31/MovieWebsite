function toggleVideo() {
    const trailor = document.querySelector('.trailor');
    const video = trailor.querySelector('video'); 
    video.pause();
    trailor.classList.toggle('active');
}
