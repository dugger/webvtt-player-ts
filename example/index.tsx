import React from 'react'
import { createRoot } from 'react-dom/client'
import { Player } from '../src/'

const root = document.getElementById('webvtt-player')

if (root) {
  createRoot(root).render(
    <Player
      audio={root.dataset.audio}
      transcript={root.dataset.transcript}
      metadata={root.dataset.metadata}
      searchPosition={root.dataset.searchPosition as 'top' | 'bottom'}
      preload={true} />
  )
}
