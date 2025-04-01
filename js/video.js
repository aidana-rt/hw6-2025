var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log('Auto play is set to ' + video.autoplay);
	video.loop = false;
	console.log('Loop is set to ' + video.loop);
	video.load();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate.toFixed(5));
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed up video");
	video.playbackRate /= 0.9; // Inverse of slow down
	console.log("Speed is " + video.playbackRate.toFixed(5));
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip ahead");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime.toFixed(2));
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
		console.log("Unmute");
	} else {
		video.muted = true;
		this.textContent = "Unmute";
		console.log("Mute");
	}
});

document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("Current value is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});


