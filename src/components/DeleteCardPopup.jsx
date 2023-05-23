import { PopUpWithForm } from "./PopUpWithForm";

export function DeleteCardPopup({ isOpened, onClose }) {
  return (
    <PopUpWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
      isOpened={isOpened}
      onClose={onClose}
    >
      <p className="error-message link-error"></p>
    </PopUpWithForm>
  );
}
