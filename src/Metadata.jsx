import React from 'react'
import PropTypes from 'prop-types'
import MetadataPoint from './MetadataPoint.jsx'
import './Track.css'

function Metadata({ track, seek, url }) {
  const lines = []
  if (track && track.cues) {
    for (let i = 0; i < track.cues.length; i++) {
      lines.push(
        <MetadataPoint
          key={`point-${i}`}
          cue={track.cues[i]}
          active={false}
          seek={seek}
        />
      )
    }
  }
  return <div className="track">{lines}</div>
}

Metadata.propTypes = {
  track: PropTypes.object,
  url: PropTypes.string,
  seek: PropTypes.func,
}

export default Metadata
