import { useState, useEffect, useContext } from "react";
import defaultAvatar from "../images/user.jpg";
import { api } from "../utils/Api";
import { Card } from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function Main({ onEditProfile, onAddCard, onEditAvatar, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const { name, about, avatar } = currentUser;

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__dark-layout" onClick={onEditAvatar}>
          <img
            src={avatar || defaultAvatar}
            alt="картинка профиля"
            className="profile__picture"
          />
        </div>
        <h1 className="profile__name">{name}</h1>
        <p className="profile__about">{about}</p>
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
          return (
            <Card
              onClick={onCardClick}
              name={card.name}
              link={card.link}
              key={card._id}
              likes={card.likes.length}
            />
          );
        })}
      </section>
    </main>
  );
}
