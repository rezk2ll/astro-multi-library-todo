import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import type { Todo } from '../types';

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'TodoStore',
      properties: [
        {
          key: 'todos',
          serialize: (value) => JSON.stringify(value),
          deserialize: (value) => JSON.parse(value),
        },
      ],
      storage: window.localStorage,
      stringify: true,
    });
  }

  get items() {
    return store.todos;
  }

  /**
   * Adds a new item to the list.
   *
   * @param {Todo} todo - the new todo item
   */
  addTodo = (todo: Todo): void => {
    this.todos = [...this.todos, todo];
  };

  /**
   * Removes an item from the list.
   *
   * @param {number} id - the item id to be removed.
   */
  removeTodo = (id: number): void => {
    this.todos = this.todos.filter(({ id: todoId }) => todoId !== id);
  };

  /**
   * Toggles an item complete status.
   *
   * @param {number} id - the item id to be toggled.
   */
  toggle = (id: number): void => {
    this.todos = this.todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
  };
}

export const store = new TodoStore();
