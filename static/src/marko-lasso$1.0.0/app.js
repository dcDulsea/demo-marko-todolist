$_mod.def("/marko-lasso$1.0.0/app", function(require, exports, module, __filename, __dirname) { var nextId = 0;

class TodoApp {
    constructor(){
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

    // set todos(newTodo) {
    //   this.todos = newTodo;
    //   this._emitChange();
    // }
    //
    // get todos() {
    //   return this.todos;
    // }

    addTodo(newTodo){
      this.todos = this.todos.concat({
        title: newTodo,
        nextId: nextId++,
        complete: false
      })
      console.log(this.todos);
    }
}
module.exports = new TodoApp();

});