const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            listTodo: []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.listTodo.push(this.newTodo);
                this.newTodo = ''; 
            }
        },
        deleteTodo(index) {
            this.listTodo.splice(index, 1);
        }
    }
});
app.mount('#app')