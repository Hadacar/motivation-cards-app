import React from 'react';
import CreateCard from '../components/CreateCard';
import { useDispatch } from 'react-redux';
import { addMotivationCard } from '../store/MotivationCardSlice'; 


const CreateCardPage = () => {
    const dispatch = useDispatch(); // Get the dispatch function
  
    const handleCardCreate = (newCard) => {
      dispatch(addMotivationCard(newCard)); // Dispatch the action with the new card data
    };
  
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Create Motivation Card</h1>
        <CreateCard onCardCreate={handleCardCreate} />
      </div>
    );
  };
  
export default CreateCardPage;
