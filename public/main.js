const app = Vue.createApp({
    data() {
        return {
        newTodo: '',
        listTodo: [],
        editingIndex: -1,
        editedTodo: '',
        listDone: [],
        allTasksCompleted: false
        }
    },
    computed: {
        showDoneMessage() {
            return this.listTodo.length === 0 && this.allTasksCompleted;
        }
    },
    methods: {
    addTodo() {
        if (this.newTodo.trim() !== '') {
            this.listTodo.push(this.newTodo);
            this.newTodo = '';
            this.allTasksCompleted = false;
            this.saveDataLocally(); 
        }
    },
    deleteTodo(index) {
        this.listTodo.splice(index, 1);
        this.allTasksCompleted = true;
        this.saveDataLocally();
    },
    deleteDone(index) {
        this.listDone.splice(index, 1);
        this.saveDataLocally();
    },
    editTodo(index) {
        this.editingIndex = index;
        this.editedTodo = this.listTodo[index];
        this.saveDataLocally();
    },
    saveEdit(index) {
        this.listTodo[index] = this.editedTodo;        
        this.editingIndex = -1;
        this.editedTodo = '';
        this.saveDataLocally();
    },
    markDone(index) {
        const task = this.listTodo.splice(index, 1)[0];
        this.listDone.push(task);
        this.allTasksCompleted = true;
        this.saveDataLocally();
    },
    moveToTodo(index) {
        const moveBackTask = this.listDone.splice(index, 1)[0];
        this.listTodo.push(moveBackTask);
        this.saveDataLocally();
    },
    saveDataLocally() {
        localStorage.setItem('todoAppData', JSON.stringify ({
            listTodo: this.listTodo,
            listDone: this.listDone
        }));
    },
    loadDataLocally() {
        const storedData = localStorage.getItem('todoAppData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            this.listTodo = parsedData.listTodo || [];
            this.listDone = parsedData.listDone || [];
        }
    }
},
mounted() {
    this.loadDataLocally();
}
});
app.mount('#app');