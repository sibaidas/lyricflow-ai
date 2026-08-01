// LyricFlow AI Language Engine
// Supports multilingual lyrics


const LanguageEngine = {


    currentLanguage: "auto",


    supportedLanguages: {

        auto: "Auto Detect",

        en: "English",

        hi: "Hindi",

        bn: "Bengali",

        as: "Assamese",

        pa: "Punjabi",

        ta: "Tamil",

        te: "Telugu"

    },



    setLanguage(language){

        if(this.supportedLanguages[language]){

            this.currentLanguage = language;

        }


        console.log(
            "Language selected:",
            this.supportedLanguages[this.currentLanguage]
        );

    },




    getLanguage(){

        return this.currentLanguage;

    },




    isSupported(language){

        return Boolean(
            this.supportedLanguages[language]
        );

    },




    detect(text){

        // Basic detection foundation
        // AI detection will be added later


        if(/[অ-৿]/.test(text)){

            return "bn";

        }


        if(/[अ-ह]/.test(text)){

            return "hi";

        }


        return "en";


    }




};


console.log("Language Engine Loaded");
