const homeScreen = document.getElementById("homeScreen");
const projectScreen = document.getElementById("projectScreen");
const previewScreen = document.getElementById("previewScreen");

const newProjectBtn = document.getElementById("newProjectBtn");
const backBtn = document.getElementById("backBtn");
const backProjectBtn = document.getElementById("backProjectBtn");
const continueBtn = document.getElementById("continueBtn");

const videoInput = document.getElementById("videoInput");
const audioInput = document.getElementById("audioInput");

const videoPreview = document.getElementById("videoPreview");
const fileInfo = document.getElementById("fileInfo");

// Open Project Screen
newProjectBtn.addEventListener("click", () => {
    homeScreen.classList.remove("active");
    projectScreen.classList.add("active");
});

// Back to Home
backBtn.addEventListener("click", () => {
    projectScreen.classList.remove("active");
    homeScreen.classList.add("active");
});

// Back to Project Screen
backProjectBtn.addEventListener("click", () => {
    previewScreen.classList.remove("active");
    projectScreen.classList.add("active");
});

// Video Selected
videoInput.addEventListener("change", () => {

    const file = videoInput.files[0];

    if(!file) return;

    projectScreen.classList.remove("active");
    previewScreen.classList.add("active");

    videoPreview.src = URL.createObjectURL(file);
    videoPreview.style.display = "block";

    fileInfo.innerHTML = `
        <p><strong>File:</strong> ${file.name}</p>
        <p><strong>Size:</strong> ${(file.size/1024/1024).toFixed(2)} MB</p>
        <p><strong>Type:</strong> ${file.type}</p>
    `;

    continueBtn.style.display = "block";
});

// Audio Selected
audioInput.addEventListener("change", () => {

    const file = audioInput.files[0];

    if(!file) return;

    projectScreen.classList.remove("active");
    previewScreen.classList.add("active");

    videoPreview.style.display = "none";

    fileInfo.innerHTML = `
        <p><strong>Audio:</strong> ${file.name}</p>
        <p><strong>Size:</strong> ${(file.size/1024/1024).toFixed(2)} MB</p>
        <p><strong>Type:</strong> ${file.type}</p>
    `;

    continueBtn.style.display = "block";
});

// Continue Button
continueBtn.addEventListener("click", () => {
    alert("🚧 Editor screen coming in Version 4!");
});
