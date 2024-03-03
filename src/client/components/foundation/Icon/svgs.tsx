const FaArrowLeft = () => (
  <svg
    fill='currentColor'
    height='1em'
    stroke='currentColor'
    strokeWidth='0'
    viewBox='0 0 448 512'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z' />
  </svg>
);

const FaArrowRight = () => (
  <svg
    fill='currentColor'
    height='1em'
    stroke='currentColor'
    strokeWidth='0'
    viewBox='0 0 448 512'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z' />
  </svg>
);

const FaCheckCircle = () => (
  <svg
    fill='currentColor'
    height='1em'
    stroke='currentColor'
    strokeWidth='0'
    viewBox='0 0 512 512'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' />
  </svg>
);

const FaPlay = () => (
  <svg
    fill='currentColor'
    height='1em'
    stroke='currentColor'
    strokeWidth='0'
    viewBox='0 0 448 512'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z' />
  </svg>
);

const FaShoppingCart = () => (
  <svg
    fill='currentColor'
    height='1em'
    stroke='currentColor'
    strokeWidth='0'
    viewBox='0 0 576 512'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z' />
  </svg>
);

const FaUser = () => (
  <svg
    fill='currentColor'
    height='1em'
    stroke='currentColor'
    strokeWidth='0'
    viewBox='0 0 448 512'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z' />
  </svg>
);

export const svgs = {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaShoppingCart,
  FaUser,
} as const;
