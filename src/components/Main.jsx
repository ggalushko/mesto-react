import { useState, useEffect } from "react";
import avatar from "../images/user.jpg";
import { api } from "../utils/Api";
import { Card } from "./Card";

export function Main({ onEditProfile, onAddCard, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userAbout, setUserAbout] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserAbout(userData.about);
        setAvatarURL(userData.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__dark-layout" onClick={onEditAvatar}>
            <img
              src={avatarURL || avatar}
              alt="картинка профиля"
              className="profile__picture"
            />
          </div>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userAbout}</p>
          <button
            type="button"
            className="profile__button profile__button_type_edit"
            onClick={onEditProfile}
          />
          <button
            type="button"
            className="profile__button profile__button_type_add"
            onClick={onAddCard}
          />
        </section>
        <section className="cards">
          {cards.map((card) => {
            return <Card onClick={onCardClick} name={card.name} link={card.link} id={card._id} likes={card.likes.length} />;
          })}
        </section>
      </main>
    </>
  );
}
