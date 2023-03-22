/** @jsxImportSource solid-js */

import { createSignal, JSX } from 'solid-js';
import { store } from '../../store';

export const Input = (): JSX.Element => {
  const [input, setInput] = createSignal<string>('');
  const [valid, setValid] = createSignal<boolean>(true);

  const handleAdd = () => {
    console.log(input())
    if (!input().length) {
      setValid(false);
      return;
    }

    store.addTodo({
      completed: false,
      id: Date.now(),
      text: input(),
    });

    setValid(true);
    setInput('');
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  return (
    <div class='relative w-full'>
      <input
        onkeyup={handleEnter}
        type='text'
        id='input'
        onchange={handleChange}
        value={input()}
        placeholder='write something to do'
        classList={{
          'focus:ring-blue-300 border-green-300': valid(),
          'focus:ring-red-500 border-red-300': !valid(),
        }}
        class='block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none '
        required
      />
      <button
        type='submit'
        onClick={handleAdd}
        class='text-gray-900 absolute right-2.5 bottom-2.5 bg-green-400 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
      >
        Add
      </button>
    </div>
  );
};
