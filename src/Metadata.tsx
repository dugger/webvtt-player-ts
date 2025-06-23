import React from 'react'
import MetadataPoint from './MetadataPoint'
import { VTTCueLike } from './types'
import './Track.css'

export interface MetadataProps {
  track?: { cues: VTTCueLike[] };
  seek?: (secs: number) => void;
}

function Metadata({ track, seek }: MetadataProps) {
  const lines = []
  if (track && track.cues) {
    for (let i = 0; i < track.cues.length; i++) {
      lines.push(
        <MetadataPoint
          key={`point-${i}`}
          cue={track.cues[i]}
          seek={seek!}
        />
      )
    }
  }
  return <div className="track">{lines}</div>
}

export default Metadata
