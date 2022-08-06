new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        message: 'Hello Vue!',
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/hello',
    },
    methods: {
        fetchData: function() {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    console.log(data[0].license.name);
                });
        }
    },
    created: function() {
        this.fetchData();
    }
})