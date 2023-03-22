/** @jsxImportSource preact */

import { store } from '../../store';
import type { JSX } from 'preact';
import { useState } from 'preact/hooks';

export default () => {
  const [input, setInput] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const handleAdd = () => {
    if (!input) {
      setValid(false);
      return;
    }

    store.addTodo({
      completed: false,
      id: Date.now(),
      text: input,
    });

    setInput('');
    setValid(true);
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleChange = ({
    currentTarget,
  }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setInput(currentTarget.value);
  };

  return (
    <div class='relative w-full'>
      <input
        value={input}
        onKeyUp={handleEnter}
        onInput={handleChange}
        type='text'
        id='input'
        placeholder='write something to do'
        class={`block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none ${
          valid === true
            ? 'focus:ring-blue-300 border-green-300'
            : 'focus:ring-red-500 border-red-300'
        }`}
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
