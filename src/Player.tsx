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
  searchPosition?: 'top' | 'bottom'
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
      const t = track.current && (track.current as any).track as { cues: VTTCueLike[] }
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
    const t = track.current && (track.current as any).track as { cues: VTTCueLike[] }
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

  let trackObj: { cues: VTTCueLike[] } | null = null
  let metatrackObj: { cues: VTTCueLike[] } | null = null
  if (loaded) {
    trackObj = track.current && (track.current as any).track as { cues: VTTCueLike[] }
    metatrackObj = metatrack.current && (metatrack.current as any).track as { cues: VTTCueLike[] }
  }
  const preload = props.preload ? 'true' : 'false'
  const metadata = props.metadata ? (
    <Metadata seek={seek} track={metatrackObj ?? undefined} />
  ) : (
    ''
  )

  const searchComponent = <Search query={query} updateQuery={updateQuery} position={props.searchPosition || 'bottom'} />
  const searchPosition = props.searchPosition || 'bottom'

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
        {searchPosition === 'top' && searchComponent}
        <div className="tracks">
          <Transcript 
            seek={seek} 
            track={trackObj ?? undefined} 
            query={query} />
          {metadata}
        </div>
        {searchPosition === 'bottom' && searchComponent}
      </div>
    </div>
  )
}

export default Player