// create vue app
const app = Vue.createApp({
    // data, functions, template for the app

    // create data function
    data() {
        // return data object
        return {
            greeting: 'Good Morning',
            transactions: [
                { price: 16, category: 'Food', title: 'Lunch', isIncome: true },
                { price: 5, category: 'Transport', title: 'Bus', isIncome: false },
                { price: 14, category: 'Food', title: 'Lunch', isIncome: true },
                { price: 6, category: 'Transport', title: 'Bus', isIncome: false },
            ],
            name: 'John Doe',
            showForm: true,
            balance: 2000
        }
    },
    methods: {
        changeGreeting() {
            // this references component instance
            this.greeting = this.greeting === 'Good Morning' ? 'Good Afternoon' : this.greeting === 'Good Afternoon' ? 'Good Evening' : 'Good Morning'
        },

        toggleShowForm() {
            this.showForm = !this.showForm
        },
    }
})

// mounts app to the DOM where id = app
app.mount('#app')