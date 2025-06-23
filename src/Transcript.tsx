import React from 'react'
import TranscriptLine from './TranscriptLine'
import { VTTCueLike } from './types'
import './Track.css'

export interface TranscriptProps {
  track?: { cues: VTTCueLike[] };
  seek?: (secs: number) => void;
  query?: string;
}

function Transcript({ track, seek, query }: TranscriptProps) {
  const lines = []
  if (track && track.cues) {
    for (let i = 0; i < track.cues.length; i++) {
      lines.push(
        <TranscriptLine
          key={`line-${i}`}
          cue={track.cues[i]}
          seek={seek!}
          query={query}
        />
      )
    }
  }
  return <div className="track">{lines}</div>
}

export default Transcript
