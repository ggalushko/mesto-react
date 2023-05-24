import "../index.css";
import EditProfilePopup from "./EditProfilePopup";
import { useState } from "react";
import { ChangeAvatarPopup } from "./ChangeAvatarPopup";
import { ImagePopup } from "./ImagePopup";
import { AddCardPopup } from "./AddCardPopup";
import { DeleteCardPopup } from "./DeleteCardPopup";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

export function App() {
  const [editProfilePopupIsOpened, setEditProfilePopupIsOpened] =
    useState(false);
  const [addCardPopupIsOpened, setAddCardPopupIsOpened] = useState(false);
  const [changeAvatarPopupIsOpened, setChangeAvatarPopupIsOpened] =
    useState(false);
  const [deleteCardPopupIsOpened, setDeleteCardPopupIsOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (e) => {
    setSelectedCard({ name: e.target.alt, link: e.target.src });
  };
  const closeAllPopups = (e) => {
    setEditProfilePopupIsOpened(false);
    setAddCardPopupIsOpened(false);
    setChangeAvatarPopupIsOpened(false);
    setDeleteCardPopupIsOpened(false);
    setSelectedCard({});
  };

  const handleClosePopup = (e) => {
    if (
      e.target.classList.contains("popup") ||
      e.target.classList.contains("button-close")
    ) {
      closeAllPopups();
    }
  };

  const handleEditProfile = () => setEditProfilePopupIsOpened(true);
  const handleAddCard = () => setAddCardPopupIsOpened(true);
  const handleEditAvatar = () => setChangeAvatarPopupIsOpened(true);

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfile}
        onAddCard={handleAddCard}
        onEditAvatar={handleEditAvatar}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup onClose={handleClosePopup} card={selectedCard} />
      <ChangeAvatarPopup
        isOpened={changeAvatarPopupIsOpened}
        onClose={handleClosePopup}
      />
      <EditProfilePopup
        isOpened={editProfilePopupIsOpened}
        onClose={handleClosePopup}
      />
      <AddCardPopup
        isOpened={addCardPopupIsOpened}
        onClose={handleClosePopup}
      />
      <DeleteCardPopup
        isOpened={deleteCardPopupIsOpened}
        onClose={handleClosePopup}
      />
    </>
  );
}