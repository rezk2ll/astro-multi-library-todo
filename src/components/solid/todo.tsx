/** @jsxImportSource solid-js */

import type { JSXElement } from 'solid-js';
import { Display } from './display';
import Icon from './icon';
import { Input } from './input';

export default (): JSXElement => (
  <>
    <div class='fixed animate-float shadow-none top-20 left-[60%] md:top-1/3 md:left-[80%]'>
      <Icon />
    </div>
    <div class='flex flex-col h-full'>
      <div class='flex-grow overflow-x-auto'>
        <Display />
      </div>
      <Input />
    </div>
  </>
);
