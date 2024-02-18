import React from 'react';

const GameDetails = ({ game }) => {
  return (
    <div className="game-details-row">
      <img src={game.imageUrl} alt={game.title} className="game-details-image" />
    </div>
  );
};

export default GameDetails;
