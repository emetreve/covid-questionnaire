function Error({ content }) {
  return (
    <div>
      <p className='pl-5 pt-2 text-error lowercase tracking-tight'>{content}</p>
    </div>
  );
}

export default Error;
