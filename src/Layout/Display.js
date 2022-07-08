import { deleteDeck, listDecks } from "../utils/api";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Display({ history }) {

  const [cardDeck, setCardDeck] = useState([]);

  useEffect(() => {
    listDecks()
    .then((deck) =>setCardDeck(deck));
  }, []);

  const handleDelete = (deckId) => {
    if (window.confirm("Delete this deck? You won't be able to recover it.")) {
      deleteDeck(deckId);
      history.go(0);
    }
  }

  return (
  <div>
    <Link to="/decks/new" type="button" className="btn btn-dark">+ Create Deck</Link>
    {Object.entries(cardDeck).map(([_, value]) => (
    <div key={value.id} className="card">
      <div className="card-body">
        <h5 className="card-title">{value.name}</h5>
        <h6 className="card-subtitle">Number of Cards: {value.cards.length}</h6>
        <p className="card-text">{value.description}</p>
        <Link to={`/decks/${value.id}`} type="button" className="btn btn-secondary">
          View
        </Link>
        <Link to={`/decks/${value.id}/study`} type="button" className="btn btn-primary">
          Study
        </Link>
        <button type="button" className = "btn btn-danger" onClick={() => handleDelete(value.id)}>
            Delete Deck
        </button>
      </div>
    </div>
    ))}
  </div>);
}
