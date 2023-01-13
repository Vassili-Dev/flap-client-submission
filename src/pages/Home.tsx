import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Parts Counter</h1>
      <hr />
      <ul>
        {parts.map(part => (
          <li key={part.name} onClick={() => setSelectedPart(part.name)}>
            {part.name} {part.amount}
            <button onClick={() => dispatch(incrementPart(part.name))}>
              +
            </button>
            <button onClick={() => dispatch(decrementPart(part.name))}>
              -
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Part Info</h2>
      {selectedPart &&
        (() => {
          const part = parts.find(x => x.name === selectedPart);

          return (
            <div>
              <h3>Name: {part.name}</h3>
              <h3>Amount: {part.amount}</h3>
              <h3>Description: Lorem Ipsum dolor sit amet</h3>
            </div>
          );
        })()}
    </div>
  );
};

export default Home;

/* Nick's Notes, TO REMOVE
    Challenges Present:
        - Event Propogation (Lines 19,22)
        - Simple CSS Selection Highlighting (Line 17)
        - React Key Collision/IDs (Lines 17, 19, 22, 32)
*/
