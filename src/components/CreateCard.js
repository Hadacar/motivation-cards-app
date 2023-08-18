import React, { useState } from 'react';

const CreateCard = ({ onCardCreate }) => {
  const [user, setUser] = useState('');
  const [motivationWord, setMotivationWord] = useState('');

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleMotivationWordChange = (event) => {
    setMotivationWord(event.target.value);
  };

  const handleCreateCard = () => {
    if (user && motivationWord) {
      // Call a function to add the new card to the list
      onCardCreate({ user, motivationWord });

      // Clear input fields after card creation
      setUser('');
      setMotivationWord('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Create New Motivation Card</h2>
      <div className="mb-4">
        <label htmlFor="user" className="block font-semibold mb-1">
          User:
        </label>
        <input
          type="text"
          id="user"
          className="border p-2 w-full rounded-md"
          value={user}
          onChange={handleUserChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="motivationWord" className="block font-semibold mb-1">
          Motivation Word:
        </label>
        <textarea
          id="motivationWord"
          className="border p-2 w-full rounded-md"
          rows="3"
          value={motivationWord}
          onChange={handleMotivationWordChange}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleCreateCard}
      >
        Create Card
      </button>
    </div>
  );
};

export default CreateCard;
