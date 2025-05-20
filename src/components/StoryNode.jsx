import React from 'react';
import ChoiceButton from './ChoiceButton';

function StoryNode({ node, onChoice }) {
  return (
    <div>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{node.text}</p>
      <div>
        {node.choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            text={choice.text}
            onClick={() => onChoice(choice.next)}
          />
        ))}
      </div>
    </div>
  );
}

export default StoryNode;