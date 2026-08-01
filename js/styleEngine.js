// LyricFlow AI Style Engine
// Controls caption appearance


const StyleEngine = {


    settings: {

        font: "Poppins",

        size: 32,

        color: "#ffffff",

        shadow: true,

        glow: false,

        animation: "fade"

    },



    apply(element){


        if(!element) return;


        element.style.fontFamily =
        this.settings.font;



        element.style.fontSize =
        this.settings.size + "px";



        element.style.color =
        this.settings.color;



        if(this.settings.shadow){

            element.style.textShadow =
            "0 4px 15px rgba(0,0,0,0.9)";

        }
        else{

            element.style.textShadow =
            "none";

        }



        if(this.settings.glow){


            element.style.textShadow =
            "0 0 15px " +
            this.settings.color;


        }


        this.animate(element);


    },




    setFont(font){

        this.settings.font = font;

    },



    setColor(color){

        this.settings.color = color;

    },



    setSize(size){

        this.settings.size = size;

    },




    setAnimation(type){

        this.settings.animation = type;

    },





    animate(element){


        element.classList.remove(
            "captionFade",
            "captionPop",
            "captionSlide"
        );



        if(this.settings.animation === "fade"){


            element.classList.add(
                "captionFade"
            );


        }



        if(this.settings.animation === "pop"){


            element.classList.add(
                "captionPop"
            );


        }



        if(this.settings.animation === "slide"){


            element.classList.add(
                "captionSlide"
            );


        }


    }



};



console.log("Style Engine Loaded");
