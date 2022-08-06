const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            url: ' https://api.dictionaryapi.dev/api/v2/entries/en/',
            word: '',
            output: null,
        }
    },
    methods: {
        searchWord() {
            const full_url = this.url + this.word;
            fetch(full_url)
                .then(response => response.json())
                .then(data => {
                    this.output = JSON.parse(JSON.stringify(data));
                    console.log("Original data: ", data);
                    console.log("Output: ", this.output);
                    console.log("Output: ", this.output[0].word);
                })
                .catch(error => alert(error));
        },
    },
}).mount('#app');