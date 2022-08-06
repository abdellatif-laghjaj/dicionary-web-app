import {createApp} from 'vue';

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
            
        },
    },
}).mount('#app');