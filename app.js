const homeScreen = document.getElementById("homeScreen");
const projectScreen = document.getElementById("projectScreen");

const newProjectBtn = document.getElementById("newProjectBtn");
const backBtn = document.getElementById("backBtn");

const videoInput = document.getElementById("videoInput");
const audioInput = document.getElementById("audioInput");

// Open New Project Screen
newProjectBtn.addEventListener("click", () => {
    homeScreen.classList.remove("active");
    projectScreen.classList.add("active");
});

// Back to Home Screen
backBtn.addEventListener("click", () => {
    projectScreen.classList.remove("active");
    homeScreen.classList.add("active");
});

// Video Selected
videoInput.addEventListener("change", () => {
    if(videoInput.files.length){
        alert("🎬 Video Selected:\n" + videoInput.files[0].name);
    }
});

// Audio Selected
audioInput.addEventListener("change", () => {
    if(audioInput.files.length){
        alert("🎵 Audio Selected:\n" + audioInput.files[0].name);
    }
});
