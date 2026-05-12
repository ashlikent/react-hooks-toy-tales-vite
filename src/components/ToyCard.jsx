import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {

function handleDeleteClick() {
  fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE",
  }).then(() => onDeleteToy(toy.id));
}

  function handleLikeClick() {
    const updatedToy = {
      ...toy,
      likes: toy.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedToy.likes,
      }),
    })
      .then((response) => response.json())
      .then((updatedToyData) => onUpdateToy(updatedToyData));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{toy.likes} Likes </p>

      <button onClick={handleLikeClick} className="like-btn">
        Like {"<3"}
      </button>

      <button onClick={handleDeleteClick} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
