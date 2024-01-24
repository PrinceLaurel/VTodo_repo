const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
        listTodo: [],
        editingIndex: -1,
        editedTodo: '',
        listDone: []
        }
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
    },
    editTodo(index) {
        this.editingIndex = index;
        this.editedTodo = this.listTodo[index];
    },
    saveEdit(index) {
        this.listTodo[index] = this.editedTodo;
            this.cancelEdit();
    },
    cancelEdit() {
        this.editingIndex = -1;
        this.editedTodo = '';
    }
}
});
app.mount('#app');