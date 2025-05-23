import React, { useState } from 'react';
import story from './data/story.tsx';
import StoryNode from './components/StoryNode';

function App() {
  const [currentNodeKey, setCurrentNodeKey] = useState('0');
  const currentNode = story[currentNodeKey];

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${currentNode?.backgroundImage || '/img/couisine.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '40px'
  };

  const handleChoice = (nextNodeKey) => {
    setCurrentNodeKey(nextNodeKey);
  };

  return (
    <div style={backgroundStyle}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // blanc avec 80% d'opacité
        padding: '20px',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: 'auto',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}
      >
        <h1>👰🏻 Tradwife simulator 💍</h1>
        <StoryNode node={currentNode} onChoice={handleChoice} />
      </div>
    </div>
  );
}

export default App;