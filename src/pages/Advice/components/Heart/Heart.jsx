function Heart({ svgClass, pathClass }) {
  return (
    <svg
      id='heart-svg'
      width='196'
      height='173'
      viewBox='0 0 196 173'
      xmlns='http://www.w3.org/2000/svg'
      className={`${svgClass}`}
    >
      <path
        id='heart-path'
        d='M48.5005 12C75.7005 9.6 94.5005 28.3333 100.501 38C110.501 1.5 143.5 0.5 161.5 0.5C179.5 0.5 203.5 22 192.5 69C183.7 106.6 144.5 153.667 126 172.5C87.6668 153.5 9.30051 107.3 2.50051 74.5C-5.99949 33.5 14.5005 15 48.5005 12Z'
        className={`${pathClass}`}
      />
    </svg>
  );
}
export default Heart;
