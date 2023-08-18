import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const motivationCards = useSelector((state) => state.motivationCards);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMotivationCards = motivationCards.filter((card) =>
    card.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Search Motivation Cards</h1>
      <input
        type="text"
        placeholder="Search"
        className="border p-2 rounded-md mb-4"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredMotivationCards.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{card.user}</h2>
            <p className="text-gray-600 italic">{card.motivationWord}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
