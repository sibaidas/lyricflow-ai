// LyricFlow AI Main Controller
// Caption Generator Connected Version


const homeScreen = document.getElementById("homeScreen");
const uploadScreen = document.getElementById("uploadScreen");
const previewScreen = document.getElementById("previewScreen");
const editorScreen = document.getElementById("editorScreen");


const newProjectBtn = document.getElementById("newProjectBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const continueBtn = document.getElementById("continueBtn");
const editorBack = document.getElementById("editorBack");

const generateCaptionBtn = document.getElementById("generateCaptionBtn");


const videoInput = document.getElementById("videoInput");

const videoPreview = document.getElementById("videoPreview");
const editorVideo = document.getElementById("editorVideo");
const videoInfo = document.getElementById("videoInfo");


const captionText = document.getElementById("captionText");
const captionOverlay = document.getElementById("captionOverlay");

const progress = document.querySelector(".progress");



let project = {

    video:null,

    file:null,

    name:"",

    size:""

};





// HOME → UPLOAD

newProjectBtn.onclick = ()=>{

    homeScreen.classList.remove("active");

    uploadScreen.classList.add("active");

};





// BACK HOME

backHomeBtn.onclick = ()=>{

    uploadScreen.classList.remove("active");

    homeScreen.classList.add("active");

};






// MEDIA UPLOAD

videoInput.onchange = ()=>{


    const file = videoInput.files[0];


    if(!file) return;



    project.file = file;


    project.video =
    URL.createObjectURL(file);



    project.name = file.name;


    project.size =
    (file.size / 1024 / 1024).toFixed(2)+" MB";



    videoPreview.src =
    project.video;



    videoInfo.innerHTML = `

    <b>${project.name}</b>

    <br>

    Size: ${project.size}

    `;



    uploadScreen.classList.remove("active");

    previewScreen.classList.add("active");


};








// OPEN EDITOR

continueBtn.onclick = ()=>{


    editorVideo.src =
    project.video;


    previewScreen.classList.remove("active");

    editorScreen.classList.add("active");



    if(typeof StyleEngine !== "undefined"){

        StyleEngine.apply(
            captionOverlay
        );

    }


};








// BACK FROM EDITOR

editorBack.onclick = ()=>{


    editorScreen.classList.remove("active");

    homeScreen.classList.add("active");


};








// MANUAL CAPTION INPUT

captionText.oninput = ()=>{


    const text =
    captionText.value;



    captionOverlay.innerText =
    text || "Your captions will appear here";



    if(typeof CaptionEngine !== "undefined"){


        CaptionEngine.clear();


        CaptionEngine.addCaption(

            0,

            10,

            text

        );


    }




    if(typeof StyleEngine !== "undefined"){


        StyleEngine.apply(
            captionOverlay
        );


    }


};









// AI CAPTION GENERATION BUTTON


generateCaptionBtn.onclick = async ()=>{


    if(!project.file){

        alert(
            "Please upload a video first"
        );

        return;

    }



    generateCaptionBtn.innerText =
    "⏳";



    const captions =
    await CaptionGenerator.generate(
        project.file
    );



    if(captions.length){


        captionText.value =
        captions[0].text;



        captionOverlay.innerText =
        captions[0].text;



        alert(
            "AI captions generated!"
        );


    }



    generateCaptionBtn.innerText =
    "🤖";


};









// VIDEO TIMELINE


editorVideo.ontimeupdate = ()=>{


    if(editorVideo.duration){


        const percent =

        (editorVideo.currentTime /
        editorVideo.duration)*100;



        progress.style.width =
        percent+"%";


    }


};





console.log(
"LyricFlow AI Caption System Connected"
);
