// LyricFlow AI Caption Generator
// Connected with API Manager


const CaptionGenerator = {


    isProcessing: false,


    async generate(mediaFile, language = "auto"){


        if(!mediaFile){

            console.log(
                "No media selected"
            );

            return [];

        }



        if(this.isProcessing){

            console.log(
                "Already generating captions..."
            );

            return [];

        }



        this.isProcessing = true;



        try{


            console.log(
                "Starting AI caption generation..."
            );



            let result;



            // Send file to API Manager

            if(typeof APIManager !== "undefined"){


                result = await APIManager.transcribe(

                    mediaFile,

                    language

                );


            }
            else{


                throw new Error(
                    "API Manager not loaded"
                );


            }






            if(!result.success){


                console.log(
                    result.message
                );


                return [];

            }







            const captions = result.segments.map(
                
                segment => ({


                    start: segment.start,


                    end: segment.end,


                    text: segment.text.trim()



                })

            );







            // Send captions to Caption Engine

            if(typeof CaptionEngine !== "undefined"){



                CaptionEngine.clear();




                captions.forEach(caption => {



                    CaptionEngine.addCaption(


                        caption.start,


                        caption.end,


                        caption.text


                    );


                });



            }






            console.log(
                "Captions generated:",
                captions
            );



            return captions;



        }



        catch(error){


            console.error(
                "Caption generation failed:",
                error
            );


            return [];

        }



        finally{


            this.isProcessing = false;


        }


    }



};



console.log(
"Caption Generator Connected To API"
);
