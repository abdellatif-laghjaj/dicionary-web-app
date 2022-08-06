const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            url: ' https://api.dictionaryapi.dev/api/v2/entries/en/',
            word: '',
        }
    },
    methods: {
        searchWord() {
            const full_url = this.url + this.word;
            fetch(full_url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => alert(error));
        },
    },
}).mount('#app');