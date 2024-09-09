// create vue app
const app = Vue.createApp({
    // data, functions, template for the app

    // create data function
    data() {
        // return data object
        return {
            greeting: 'Good Morning',
            name: 'John Doe',
            age: 20,
            showAge: true
        }
    },
    methods: {
        changeGreeting() {
            // this references component instance
            this.greeting = this.greeting === 'Good Morning' ? 'Good Afternoon' : this.greeting === 'Good Afternoon' ? 'Good Evening' : 'Good Morning'
        },
        changeName(name) {
            this.name = name
        }
    }
})

// mounts app to the DOM where id = app
app.mount('#app')