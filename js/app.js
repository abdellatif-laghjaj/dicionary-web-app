const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            url: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
            word: '',
        }
    },
    methods: {
        search: function () {
            const full_url = this.url + this.word
            fetch(full_url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                }
                );
        },
    },
}).mount('#app');