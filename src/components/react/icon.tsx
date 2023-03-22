type PropsType = {
  size?: "small" | "big";
}

export default ({ size = "big" }: PropsType) => (
  <svg
    className={`${size === 'small' ? 'w-6 h-6 hover:animate-pulse': 'w-28 h-28'}`}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-11.5 -10.23174 23 20.46348'
  >
    <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
    <g stroke='#61dafb' strokeWidth='1' fill='none'>
      <ellipse rx='11' ry='4.2' />
      <ellipse rx='11' ry='4.2' transform='rotate(60)' />
      <ellipse rx='11' ry='4.2' transform='rotate(120)' />
    </g>
  </svg>
);
