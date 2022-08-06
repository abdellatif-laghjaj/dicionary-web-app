const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            url: ' https://api.dictionaryapi.dev/api/v2/entries/en/',
            word: '',
            fields: {
                word: '',
                phonetic: '',
                definition: '',
                example: '',
                audio: '',
            },
            output: [],
        }
    },
    methods: {
        searchWord() {
            const full_url = this.url + this.word;
            fetch(full_url)
                .then(response => response.json())
                .then(data => {
                    
                    //create the fields object
                    this.fields.word = data[0].word;
                    this.fields.phonetic = data[0].phonetic;
                    this.fields.definition = data[0].meanings[0].definitions[0].definition;
                    this.fields.example = data[0].meanings[0].definitions[0].example;
                    this.fields.audio = data[0].phonetics[0].audio;

                    console.log(this.fields);

                    this.output.push(this.fields);

                    // console.log("Original data: ", data);
                    // console.log("Output: ", this.output);
                    // console.log("Output: ", this.output[0].word);
                })
                .catch(error => alert(error));
        },
        playAudio(audio){
            const audio = new Audio(audio);
            audio.play();
        }
    },
}).mount('#app');