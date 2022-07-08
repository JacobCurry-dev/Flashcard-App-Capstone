import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, readDeck } from "../utils/api/index";

const ViewDeck = ({ deck, setDeck, deckId, history }) => {

useEffect(() => {
    readDeck(deckId).then(setDeck);
}, [deckId, setDeck]);

  const handleDelete = (deckId) => {
    if (window.confirm("Delete this deck? You won't be able to recover it.")) {
      deleteDeck(deckId);
      history.go(-1);
    }
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">{deck.name}</Link>
          </li>
        </ol>
      </nav>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
          {/* <Link type='button' className='btn btn-dark'>Edit</Link> */}
          <Link
            to={`/decks/${deckId}/study`}
            type="button"
            className="btn btn-primary"
          >
            Study
          </Link>
          {/* <Link type='button' className='btn btn-primary'>+ Add Cards</Link> */}
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger"
          >
            Delete Deck
          </button>                          
        </div>
      </div>
      <h3>Cards</h3>
      {
        <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Question:</h5>
              <p className="card-text">{'cardFront'}</p>    {/* cardFront and cardBack are currently just placeholders for later*/}
              
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Answer:</h5>
              <p className="card-text">{'cardBack'}</p>     {/* cardFront and cardBack are currently just placeholders for later*/}
              <button type='button' href="#" className="btn btn-primary">View</button>
              <button type='button' href="#" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default ViewDeck;
