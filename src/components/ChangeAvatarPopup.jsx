import { PopUpWithForm } from "./PopUpWithForm";

export function ChangeAvatarPopup({ isOpened, onClose }) {
  return (
    <PopUpWithForm
      name="change-avatar"
      title="Редактировать профиль"
      isOpened={isOpened}
      onClose={onClose}
    >
      <input
        required
        type="url"
        className="form__input form__input_link"
        placeholder="Ссылка на картинку"
        name="link"
        autoComplete="off"
      />
      <p className="error-message link-error"></p>
    </PopUpWithForm>
  );
}
