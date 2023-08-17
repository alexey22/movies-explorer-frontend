import './FilterCheckbox.css';

function FilterCheckbox({ isShort, setIsShort }) {
  return (
    <div className='filter'>
      <div className='filter__line'></div>

      <label className='filter__label' htmlFor='short'>
        <input
          className='filter__checkbox'
          type='checkbox'
          id='short'
          defaultChecked={isShort}
          onChange={() => setIsShort(!isShort)}
        />
        <span className='filter__visible-checkbox'></span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
