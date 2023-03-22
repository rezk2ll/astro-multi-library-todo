import { useState } from 'react';
import { store } from '../../store';

export default (): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const handleAdd = () => {
    if (!input.length) {
      setValid(false);
      return;
    }

    store.addTodo({
      completed: false,
      text: input,
      id: Date.now(),
    });

    setValid(true);
    setInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className='relative w-full'>
      <input
        onKeyUp={handleEnter}
        type='text'
        id='input'
        onChange={handleChange}
        value={input}
        placeholder='write something to do'
        className={`block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none ${
          valid
            ? 'focus:ring-blue-300 border-green-300'
            : 'focus:ring-red-500 border-red-300'
        }`}
        required
      />
      <button
        type='submit'
        onClick={handleAdd}
        className='text-gray-900 absolute right-2.5 bottom-2.5 bg-green-400 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
      >
        Add
      </button>
    </div>
  );
};
