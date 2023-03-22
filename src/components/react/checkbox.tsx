import { store } from '../../store';

type PropsType = {
  id: number;
  completed: boolean;
}

export default ({ id, completed }: PropsType): JSX.Element => (
  <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
    <input
      type='checkbox'
      name='toggle'
      id={`toggle-${id}`}
      checked={completed}
      className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
      onClick={() => store.toggle(id)}
    />
    <label
      htmlFor={`toggle-${id}`}
      className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
    />
  </div>
);
