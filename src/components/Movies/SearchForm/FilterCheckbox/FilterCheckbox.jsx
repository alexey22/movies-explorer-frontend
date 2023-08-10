import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter'>
      <div className='filter__line'></div>
      <input className='filter__checkbox' type='checkbox' id='short' />
      <label className='filter__label' htmlFor='short'>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
