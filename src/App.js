import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import Image from './assets/icons/robotic.svg';
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  
  const [showBot, toggleBot] = useState(false);

  return (
    <div className="App">
      {showBot && (
        <div className="App-container">
          <Chatbot 
            config={config} 
            actionProvider={ActionProvider}
            messageParser={MessageParser} 
            placeholderText="Écrivez ici"
          />
        </div>
      )}
      <button className="app-chatbot-button" onClick={() => toggleBot((prev) => !prev)}>
        <img src={Image} alt="" className="app-chatbot-button-icon" />
      </button>
    </div>
  );
}

export default App;
