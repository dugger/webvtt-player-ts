import React from 'react'
import PropTypes from 'prop-types'
import TranscriptLine from './TranscriptLine.jsx'
import './Track.css'

function Transcript({ track, seek, query, url }) {
  const lines = []
  if (track && track.cues) {
    for (let i = 0; i < track.cues.length; i++) {
      lines.push(
        <TranscriptLine
          key={`line-${i}`}
          cue={track.cues[i]}
          active={false}
          seek={seek}
          query={query}
        />
      )
    }
  }
  return <div className="track">{lines}</div>
}

Transcript.propTypes = {
  track: PropTypes.object,
  url: PropTypes.string,
  seek: PropTypes.func,
  query: PropTypes.string,
}

export default Transcript
