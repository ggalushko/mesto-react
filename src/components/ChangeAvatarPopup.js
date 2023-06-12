import { useState, useContext, useEffect } from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function ChangeAvatarPopup({ isOpened, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputValue);
  }
  useEffect(() => {
    setInputValue("");
  }, [currentUser]);

  return (
    <PopupWithForm
      name="change-avatar"
      title="Редактировать профиль"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="url"
        className="form__input form__input_link"
        placeholder="Ссылка на картинку"
        name="link"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="error-message link-error"></p>
    </PopupWithForm>
  );
}
