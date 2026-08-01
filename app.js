// LyricFlow AI Main Controller
// Engine Communication Version


const homeScreen = document.getElementById("homeScreen");
const uploadScreen = document.getElementById("uploadScreen");
const previewScreen = document.getElementById("previewScreen");
const editorScreen = document.getElementById("editorScreen");


const newProjectBtn = document.getElementById("newProjectBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const continueBtn = document.getElementById("continueBtn");
const editorBack = document.getElementById("editorBack");


const videoInput = document.getElementById("videoInput");


const videoPreview = document.getElementById("videoPreview");
const editorVideo = document.getElementById("editorVideo");
const videoInfo = document.getElementById("videoInfo");


const captionText = document.getElementById("captionText");
const captionOverlay = document.getElementById("captionOverlay");

const progress = document.querySelector(".progress");



let project = {

    video:null,

    name:"",

    size:""

};




// HOME → UPLOAD

newProjectBtn.onclick = ()=>{


    homeScreen.classList.remove("active");

    uploadScreen.classList.add("active");


};




// UPLOAD → HOME

backHomeBtn.onclick = ()=>{


    uploadScreen.classList.remove("active");

    homeScreen.classList.add("active");


};






// MEDIA SELECT


videoInput.onchange = ()=>{


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
    ${project.size}

    `;



    uploadScreen.classList.remove("active");

    previewScreen.classList.add("active");


};







// OPEN EDITOR


continueBtn.onclick = ()=>{


    editorVideo.src = project.video;


    previewScreen.classList.remove("active");

    editorScreen.classList.add("active");



    // Apply default style

    StyleEngine.apply(
        captionOverlay
    );


};







// BACK


editorBack.onclick = ()=>{


    editorScreen.classList.remove("active");

    homeScreen.classList.add("active");


};









// CAPTION SYSTEM


captionText.oninput = ()=>{


    const text = captionText.value;



    captionOverlay.innerText =
    text || "Your captions will appear here";



    // Save caption

    if(typeof CaptionEngine !== "undefined"){


        CaptionEngine.addCaption(
            0,
            10,
            text
        );


    }




    // Apply style


    if(typeof StyleEngine !== "undefined"){


        StyleEngine.apply(
            captionOverlay
        );


    }



};








// VIDEO TIMELINE


editorVideo.ontimeupdate = ()=>{


    if(editorVideo.duration){


        const percentage =

        (editorVideo.currentTime /
        editorVideo.duration) * 100;



        progress.style.width =
        percentage+"%";


    }


};





console.log(
"LyricFlow AI Engine Connected"
);
