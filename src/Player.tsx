import React, { useState, useRef, useEffect } from 'react'
import Transcript from './Transcript'
import Metadata from './Metadata'
import Search from './Search'
import { VTTCueLike } from './types'
import './Player.css'

export interface PlayerProps {
  audio?: string
  transcript?: string
  metadata?: string
  preload?: boolean
  query?: string
}

interface TrackWithCues {
  cues: VTTCueLike[]
}

function Player(props: PlayerProps) {
  const [loaded, setLoaded] = useState(false)
  const [query, setQuery] = useState('')
  const track = useRef<HTMLTrackElement>(null)
  const metatrack = useRef<HTMLTrackElement>(null)
  const audio = useRef<HTMLAudioElement>(null)

  // Attach native load event to <track> on mount
  useEffect(() => {
    const currentTrack = track.current
    function onTrackLoaded() {
      const t = track.current && (track.current as unknown as { track: TrackWithCues }).track
      if (t && t.cues && t.cues.length > 0) {
        setLoaded(true)
      }
    }
    if (currentTrack) {
      currentTrack.addEventListener('load', onTrackLoaded)
    }
    onLoaded()
    return () => {
      if (currentTrack) {
        currentTrack.removeEventListener('load', onTrackLoaded)
      }
    }
     
  }, [])

  function onLoaded() {
    const t = track.current && (track.current as unknown as { track: TrackWithCues }).track
    if (t && t.cues && t.cues.length > 0) {
      setLoaded(true)
    }
  }

  function seek(secs: number) {
    if (audio.current) {
      audio.current.currentTime = secs
      audio.current.play()
    }
  }

  function updateQuery(q: string) {
    setQuery(q)
  }

  let trackObj: TrackWithCues | null = null
  let metatrackObj: TrackWithCues | null = null
  if (loaded) {
    trackObj = track.current && (track.current as unknown as { track: TrackWithCues }).track
    metatrackObj = metatrack.current && (metatrack.current as unknown as { track: TrackWithCues }).track
  }
  const preload = props.preload ? 'true' : 'false'
  const metadata = props.metadata ? (
    <Metadata seek={seek} track={metatrackObj ?? undefined} />
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
          <Search query={query} updateQuery={updateQuery} />
          <Transcript 
            seek={seek} 
            track={trackObj ?? undefined} 
            query={query} />
          {metadata}
        </div>
      </div>
    </div>
  )
}

export default Player