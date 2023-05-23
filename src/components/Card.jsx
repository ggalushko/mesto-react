import React from "react";

export function Card({ name, link, likes, onClick }) {
  return (
    <article className="card">
      <button type="reset" className="card__delete-button"></button>
      <img src={link} alt={name} className="card__image" onClick={onClick} />
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <div className="button-container">
          <button type="button" className="like-button"></button>
          <p className="button-caption">{likes}</p>
        </div>
      </div>
    </article>
  );
}
