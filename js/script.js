// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const app = new Vue({
    el: '#app',
    data: {
        newTodoText: '',
        todos: [
            // {
            //     text: 'Fare i compiti',
            //     done: false
            // },
            // {
            //     text: 'Fare la spesa',
            //     done: true
            // },
            // {
            //     text: 'Fare il bucato',
            //     done: false
            // }
        ]
  },
  created() {
    this.todos = [
      {
        text: "Fare i compiti",
        done: false,
      },
      {
        text: "Fare la spesa",
        done: true,
      },
      {
        text: "Fare il bucato",
        done: false,
      },
    ];
  },
  methods: {
    addTodo() {
      // let text = this.newTodoText;
      // push inseriamo elemento in fondo
      // con unshift all'inizio
      if (this.newTodoText.trim().length > 0) {
        this.todos.unshift({
          text: this.newTodoText,
          done: false,
        });
        this.newTodoText = '';
      }
    },
    removeTodo(todoIndex) {
      this.todos.splice(todoIndex, 1);
    },
    toggleDone(todoIndex) {
      // if (this.todos[todoIndex].done) {
      //   this.todos[todoIndex].done = false;
      // } else {
      //   this.todos[todoIndex].done = true;
      // }
      
      this.todos[todoIndex].done = !this.todos[todoIndex].done;
    }
  }
})