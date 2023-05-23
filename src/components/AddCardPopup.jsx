import { PopupWithForm } from "./PopupWithForm";

export function AddCardPopup({ isOpened, onClose }) {
  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpened={isOpened}
      onClose={onClose}
    >
      <input
        required
        minLength="2"
        maxLength="30"
        type="text"
        className="form__input form__input_name"
        placeholder="Название"
        name="name"
        autoComplete="off"
      />
      <p className="error-message name-error"></p>
      <input
        required
        type="url"
        className="form__input form__input_link"
        placeholder="Ссылка на картинку"
        name="link"
        autoComplete="off"
      />
      <p className="error-message link-error"></p>
    </PopupWithForm>
  );
}
