import React from 'react'
import ReactDOM from 'react-dom/client'
import { Player } from '../src/'

const root = document.getElementById('webvtt-player')

ReactDOM.createRoot(root).render(
  <Player
    audio={root.dataset.audio}
    transcript={root.dataset.transcript}
    metadata={root.dataset.metadata}
    preload={true} />
)
