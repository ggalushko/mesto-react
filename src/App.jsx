import "./index.css";
import EditProfilePopup from "./components/EditProfilePopup";
import { useState } from "react";

import { ChangeAvatarPopup } from "./components/ChangeAvatarPopup";
import { ImagePopup } from "./components/ImagePopup";
import { AddCardPopup } from "./components/AddCardPopup";
import { DeleteCardPopup } from "./components/DeleteCardPopup";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

export default function App() {
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
