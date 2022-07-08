import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import { createDeck } from "../utils/api";

const MakeDeck = () => {
  const inititalFormState = {
    name: '',
    description: '',
  }
  const history = useHistory();
  const [formData, setFormData] = useState({...inititalFormState})

  const handleChange = ({target}) => {
  setFormData({
    ...formData,
    [target.id]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(formData);
    setFormData({...inititalFormState})
    history.go(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        className="form-control"
        id="name" 
        onChange={handleChange} 
        value={formData.name} 
        required={true}
        />
        <small id="littleText" className="form-text text-muted">
          Please enter the name of your deck.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
        className="form-control"
        rows="5"
        id="description"
        onChange={handleChange}
        value={formData.description}
        required={true}>
        </textarea>
        <small id="littleText" className="form-text text-muted">
          Please enter a description of your deck.
        </small>
      </div>
      <button  type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MakeDeck;
