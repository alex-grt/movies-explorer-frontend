import './Tooltip.css';

function Tooltip() {
  return (
    <div className="overlay overlay_opened">
      <div className="tooltip">
        <h2 className="tooltip__title">500</h2>
        <p className="tooltip__text">Ошибка сервера</p>
        <button
          className="tooltip__button-close"
          type="button"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Tooltip;
