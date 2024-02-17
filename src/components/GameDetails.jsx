import React from 'react';

const GameDetails = ({ game }) => {
  return (
    <div className="game-details-row">
      <img src={game.imageUrl} alt={game.title} className="game-details-image" />
      <div className="game-details-content">
        <h3>{game.title}</h3>
        {/* Additional details here */}
      </div>
    </div>
  );
};

export default GameDetails;
