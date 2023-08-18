import React from 'react';
import MotivationCard from '../components/MotivationCard';
import { useSelector } from 'react-redux';

const Home = () => {

  const motivationCards = useSelector((state) => state.motivationCards);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Motivation Cards</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {motivationCards.map((card, index) => (
          <MotivationCard key={index} user={card.user} motivationWord={card.motivationWord} />
        ))}
      </div>
    </div>
  );
};

export default Home;
