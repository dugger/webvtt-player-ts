import React from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from './src/index.js';

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>WebVTT Player Demo</h1>
    <Player
      audio="example/data/audio.mp3"
      transcript="example/data/transcript.vtt"
      metadata="example/data/metadata.vtt"
      preload={true}
    />
  </div>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />); 