var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	video.autoplay = false;
    video.loop = false;
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video - volume: " +(video.volume * 100).toFixed(0) + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slow Down Video — playback rate:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1 / 0.9;
	console.log("Speed Up Video — playback rate:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
	console.log("Skip Ahead — current time:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
  const muteBtn = document.querySelector("#mute");
    if (video.muted) {
        muteBtn.textContent = "Unmute";
    } else {
        muteBtn.textContent = "Mute";
    }
    console.log("Muted?");
});

document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
    console.log("Volume changed to:", video.volume * 100 + "%");
});
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Old School style");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Original style");
});