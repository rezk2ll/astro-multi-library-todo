/** @jsxImportSource preact */

type PropsType = {
  size?: 'small' | 'big';
};

export default ({ size = 'big' }: PropsType) => (
  <svg
    class={`${size === 'big' ? 'w-28 h-28' : 'h-6 w-6 md:hover:animate-pulse'}`}
    viewBox='-256 -256 512 512'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlSpace='preserve'
  >
    <path
      d='M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z'
      fill='#673ab8'
    />
    <ellipse
      cx='0'
      cy='0'
      stroke-width='16px'
      rx='75px'
      ry='196px'
      fill='none'
      stroke='white'
      transform='rotate(52.5)'
    />
    <ellipse
      cx='0'
      cy='0'
      stroke-width='16px'
      rx='75px'
      ry='196px'
      fill='none'
      stroke='white'
      transform='rotate(-52.5)'
    />
    <circle cx='0' cy='0' r='34' fill='white' />
  </svg>
);
