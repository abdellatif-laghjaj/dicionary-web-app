const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    vuetify: new Vuetify(),
}).mount('#app')