// Screens
const homeScreen = document.getElementById("homeScreen");
const uploadScreen = document.getElementById("uploadScreen");
const previewScreen = document.getElementById("previewScreen");
const editorScreen = document.getElementById("editorScreen");

// Buttons
const newProjectBtn = document.getElementById("newProjectBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const continueBtn = document.getElementById("continueBtn");
const editorBack = document.getElementById("editorBack");

// Inputs
const videoInput = document.getElementById("videoInput");

// Preview
const videoPreview = document.getElementById("videoPreview");
const videoInfo = document.getElementById("videoInfo");

// Editor
const editorVideo = document.getElementById("editorVideo");
const captionText = document.getElementById("captionText");
const captionOverlay = document.getElementById("captionOverlay");
const progress = document.querySelector(".progress");

let currentVideo = null;

// Home → Upload
newProjectBtn.onclick = () => {
    homeScreen.classList.remove("active");
    uploadScreen.classList.add("active");
};

// Upload → Home
backHomeBtn.onclick = () => {
    uploadScreen.classList.remove("active");
    homeScreen.classList.add("active");
};

// Select Video
videoInput.onchange = () => {

    const file = videoInput.files[0];

    if(!file) return;

    currentVideo = URL.createObjectURL(file);

    videoPreview.src = currentVideo;

    videoInfo.innerHTML = `
        <strong>${file.name}</strong><br>
        ${(file.size/1024/1024).toFixed(2)} MB
    `;

    uploadScreen.classList.remove("active");
    previewScreen.classList.add("active");
};

// Preview → Editor
continueBtn.onclick = () => {

    editorVideo.src = currentVideo;

    previewScreen.classList.remove("active");
    editorScreen.classList.add("active");
};

// Editor → Home
editorBack.onclick = () => {

    editorScreen.classList.remove("active");
    homeScreen.classList.add("active");
};

// Live Caption Preview
captionText.addEventListener("input", () => {
    captionOverlay.innerText = captionText.value || "Your captions will appear here";
});

// Timeline Progress
editorVideo.addEventListener("timeupdate", () => {

    if(editorVideo.duration){

        const percent =
        (editorVideo.currentTime/editorVideo.duration)*100;

        progress.style.width = percent + "%";
    }

});
