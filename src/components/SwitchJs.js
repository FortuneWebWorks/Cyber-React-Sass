import '../styles/SwitchJs.scss';

const SwitchJs = ({ onClick }) => {
  return (
    <div className='switchjs__container'>
      <label className='switch'>
        <input type='checkbox' onClick={onClick || null} />
        <div className='slider'></div>
      </label>
    </div>
  );
};

export default SwitchJs;
