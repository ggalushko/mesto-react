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
    if (
      e.target.classList.contains("popup") ||
      e.target.classList.contains("button-close")
    ) {
      setEditProfilePopupIsOpened(false);
      setAddCardPopupIsOpened(false);
      setChangeAvatarPopupIsOpened(false);
      setDeleteCardPopupIsOpened(false);
      setSelectedCard({});
    }
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={() => setEditProfilePopupIsOpened(true)}
        onAddCard={() => setAddCardPopupIsOpened(true)}
        onEditAvatar={() => setChangeAvatarPopupIsOpened(true)}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      <ChangeAvatarPopup
        isOpened={changeAvatarPopupIsOpened}
        onClose={closeAllPopups}
      />
      <EditProfilePopup
        isOpened={editProfilePopupIsOpened}
        onClose={closeAllPopups}
      />
      <AddCardPopup isOpened={addCardPopupIsOpened} onClose={closeAllPopups} />
      <DeleteCardPopup
        isOpened={deleteCardPopupIsOpened}
        onClose={closeAllPopups}
      />
    </>
  );
}
