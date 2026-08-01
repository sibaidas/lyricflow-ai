// LyricFlow AI Main Controller

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


// Upload
const videoInput = document.getElementById("videoInput");


// Preview
const videoPreview = document.getElementById("videoPreview");
const videoInfo = document.getElementById("videoInfo");


// Editor
const editorVideo = document.getElementById("editorVideo");
const captionText = document.getElementById("captionText");
const captionOverlay = document.getElementById("captionOverlay");
const progress = document.querySelector(".progress");


// Current project data
let project = {

    video:null,
    name:"",
    size:""

};



// HOME → UPLOAD

newProjectBtn.addEventListener("click",()=>{

    homeScreen.classList.remove("active");
    uploadScreen.classList.add("active");

});




// UPLOAD → HOME

backHomeBtn.addEventListener("click",()=>{

    uploadScreen.classList.remove("active");
    homeScreen.classList.add("active");

});




// VIDEO SELECT

videoInput.addEventListener("change",()=>{


    const file = videoInput.files[0];


    if(!file) return;


    project.video = URL.createObjectURL(file);

    project.name = file.name;

    project.size = 
    (file.size / 1024 / 1024).toFixed(2)+" MB";


    videoPreview.src = project.video;


    videoInfo.innerHTML = `

    <b>${project.name}</b>
    <br>
    Size: ${project.size}

    `;


    uploadScreen.classList.remove("active");
    previewScreen.classList.add("active");


});





// PREVIEW → EDITOR

continueBtn.addEventListener("click",()=>{


    editorVideo.src = project.video;


    previewScreen.classList.remove("active");
    editorScreen.classList.add("active");


});






// EDITOR BACK

editorBack.addEventListener("click",()=>{


    editorScreen.classList.remove("active");
    homeScreen.classList.add("active");


});






// LIVE CAPTION EDITOR

captionText.addEventListener("input",()=>{


    const text = captionText.value;


    captionOverlay.innerText =
    text || "Your captions will appear here";



    // Connect with editor engine

    if(typeof LyricEditor !== "undefined"){

        LyricEditor.setCaption(text);

    }


});






// TIMELINE PROGRESS


editorVideo.addEventListener("timeupdate",()=>{


    if(editorVideo.duration){


        let percent =
        (editorVideo.currentTime /
        editorVideo.duration) * 100;


        progress.style.width =
        percent+"%";


    }


});





console.log("LyricFlow AI Controller Loaded");
