// LyricFlow AI Caption Engine
// Phase 2 Foundation


const CaptionEngine = {


    captions: [],


    addCaption(start, end, text){

        this.captions.push({

            start:start,
            end:end,
            text:text

        });

        console.log("Caption Added:", text);

    },



    clear(){

        this.captions = [];

    },



    getCurrent(time){


        return this.captions.find(caption =>

            time >= caption.start &&
            time <= caption.end

        );


    },



    loadSample(){


        this.captions = [

            {
                start:0,
                end:5,
                text:"Welcome to LyricFlow AI"
            },

            {
                start:5,
                end:10,
                text:"Create beautiful lyrical videos"
            }

        ];


    }



};



console.log("Caption Engine Loaded");
