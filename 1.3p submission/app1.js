const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            books: [
            ],
            newBook: {
                title: '',
                pageNumber: '',
                author: '',
                age: ''
            }
        };
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        addBook() {
            this.books.push({ ...this.newBook });
            
            this.newBook = {
                title: '',
                pageNumber: '',
                author: '',
                age: ''
            };
        }
    }
});

app.mount('#app');
