import './Tooltip.css';

function Tooltip(props) {
  function handlePopupClose(evt) {
    if (evt.target.classList.contains('overlay_opened')) {
      props.onClose();
    }
  }

  return (
    <div
      className={`overlay${props.isOpen ? ' overlay_opened' : ''}`}
      onClick={handlePopupClose}
    >
      <div className="tooltip">
        <h2 className="tooltip__title">{props.content.title}</h2>
        <p className="tooltip__text">{props.content.text}</p>
        <button
          className="tooltip__button-close"
          type="button"
          onClick={props.onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Tooltip;
