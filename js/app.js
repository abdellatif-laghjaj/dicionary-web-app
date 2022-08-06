const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            url: ' https://api.dictionaryapi.dev/api/v2/entries/en/',
            word: '',
            fields: {
                word: '',
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
                    this.output = JSON.parse(JSON.stringify(data));
                    
                    //create the fields object
                    this.fields.word = this.output[0].word;
                    this.fields.definition = this.output[0].meaning[0].definition;
                    this.fields.example = this.output[0].meaning[0].example;
                    this.fields.audio = this.output[0].audio;

                    // console.log("Original data: ", data);
                    // console.log("Output: ", this.output);
                    // console.log("Output: ", this.output[0].word);
                })
                .catch(error => alert(error));
        },
    },
}).mount('#app');