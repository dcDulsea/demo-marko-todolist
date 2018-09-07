$_mod.def("/marko-lasso$1.0.0/src/components/app", function(require, exports, module, __filename, __dirname) { var EventEmitter = require('/events$1.1.1/events'/*"events"*/);
var nextId = 0;

class TodoApp extends EventEmitter {
    constructor(){
      super();
      this.todos = [
        {
          title: 'learn marko',
          complete: true,
          id: nextId++
        },
        {
          title: 'find the docs',
          complete: false,
          id: nextId++
        },
        {
          title: 'programing project',
          complete: false,
          id: nextId++
        }
      ];
    }
    addTodo(newTodo){
      let todo = {
        title: newTodo,
        complete: false,
        id: nextId++
      }
      this.todos.push(todo);
      console.log(this.todos);
    }
}
module.exports = new TodoApp();

});