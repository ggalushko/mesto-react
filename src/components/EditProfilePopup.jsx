import { PopupWithForm } from "./PopupWithForm";

function EditProfilePopup({ isOpened, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpened={isOpened}
      onClose={onClose}
    >
      <input
        required
        minLength="2"
        maxLength="40"
        type="text"
        className="form__input form__input_name"
        placeholder="Имя"
        name="name"
        autoComplete="off"
      />
      <p className="error-message name-error"></p>
      <input
        minLength="2"
        maxLength="200"
        required
        type="text"
        className="form__input form__input_about"
        placeholder="О себе"
        name="about"
        autoComplete="off"
      />
      <p className="error-message about-error"></p>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
