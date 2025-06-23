import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Transcript from './Transcript.jsx'
import Metadata from './Metadata.jsx'
import Search from './Search.jsx'
import './Player.css'

function Player(props) {
  const [loaded, setLoaded] = useState(false)
  const [query, setQuery] = useState('')
  const track = useRef()
  const metatrack = useRef()
  const audio = useRef()

  // Attach native load event to <track> on mount
  useEffect(() => {
    const currentTrack = track.current
    if (currentTrack) {
      currentTrack.addEventListener('load', onTrackLoaded)
    }
    // Fallback: also check if cues are already available
    onLoaded()
    return () => {
      if (currentTrack) {
        currentTrack.removeEventListener('load', onTrackLoaded)
      }
    }
    // eslint-disable-next-line
  }, [])

  function onLoaded() {
    const t = track.current && track.current.track
    if (t && t.cues && t.cues.length > 0) {
      setLoaded(true)
    }
  }

  function onTrackLoaded() {
    const t = track.current && track.current.track
    if (t && t.cues && t.cues.length > 0) {
      setLoaded(true)
    }
  }

  function seek(secs) {
    if (audio.current) {
      audio.current.currentTime = secs
      audio.current.play()
    }
  }

  function updateQuery(q) {
    setQuery(q)
  }

  let trackObj = null
  let metatrackObj = null
  if (loaded) {
    trackObj = track.current.track
    metatrackObj = metatrack.current.track
  }
  const preload = props.preload ? 'true' : 'false'
  const metadata = props.metadata ? (
    <Metadata url={props.metadata} seek={seek} track={metatrackObj} />
  ) : (
    ''
  )

  return (
    <div className="webvtt-player">
      <div className="media">
        <div className="player">
          <audio
            controls
            crossOrigin="anonymous"
            onLoadedData={onLoaded}
            preload={preload}
            ref={audio}>
            <source src={props.audio} />
            <track default
              kind="subtitles"
              src={props.transcript}
              ref={track} />
            <track default
              kind="metadata"
              src={props.metadata}
              ref={metatrack} />
          </audio>
        </div>
        <div className="tracks">
          <Transcript 
            url={props.transcript} 
            seek={seek} 
            track={trackObj} 
            query={query} />
          {metadata}
        </div>
        <Search query={query} updateQuery={updateQuery} />
      </div>
    </div>
  )
}

Player.propTypes = {
  audio: PropTypes.string,
  transcript: PropTypes.string,
  metadata: PropTypes.string,
  preload: PropTypes.bool,
  query: PropTypes.string
}

export default Player