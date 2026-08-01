// LyricFlow AI API Manager
// Groq Whisper Connection Foundation


const APIManager = {


    provider: "groq",

    isConnected: false,


    async transcribe(file, language = "auto"){


        if(!file){

            throw new Error(
                "No media file provided"
            );

        }



        console.log(
            "Sending file for transcription:",
            file.name
        );



        const formData = new FormData();


        formData.append(
            "file",
            file
        );


        formData.append(
            "language",
            language
        );



        /*
        
        IMPORTANT:

        This URL will later point to our secure backend.

        Example:

        Browser
            ↓
        LyricFlow Server
            ↓
        Groq Whisper API
            ↓
        Transcript


        */



        try{


            const response = await fetch(

                "YOUR_BACKEND_URL/transcribe",

                {

                    method:"POST",

                    body:formData

                }

            );




            if(!response.ok){


                throw new Error(
                    "Transcription failed"
                );


            }




            const data =
            await response.json();



            this.isConnected = true;



            return {


                success:true,


                segments:
                data.segments || []


            };



        }



        catch(error){


            console.error(
                "API Error:",
                error
            );



            return {


                success:false,


                message:error.message,


                segments:[]


            };


        }



    },





    setProvider(name){


        this.provider = name;


    },





    status(){


        return {


            provider:this.provider,


            connected:this.isConnected


        };


    }



};



console.log(
"Groq API Manager Ready"
);
