import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="switch">
      <input className="switch__checkbox" type="checkbox" />
      <span className="switch__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
