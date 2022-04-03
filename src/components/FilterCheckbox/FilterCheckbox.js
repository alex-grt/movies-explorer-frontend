import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label className="switch">
      <input
        className={`switch__checkbox${props.isShort ? ' switch__checkbox_checked' : ''}`}
        type="checkbox"
        value={props.isShort}
        onClick={props.toggleShort}
      />
      <span className="switch__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
