import Display from './display';
import Icon from './icon';
import Input from './input';

export default (): React.ReactElement => (
  <>
    <div className='fixed animate-float shadow-none top-20 left-[60%] md:top-1/3 md:left-[80%]'>
      <Icon />
    </div>
    <div className='flex flex-col h-full'>
      <div className='flex-grow overflow-x-auto'>
        <Display />
      </div>
      <Input />
    </div>
  </>
);
