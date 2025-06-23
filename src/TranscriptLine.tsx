import React, { useState, useEffect } from 'react'
import { VTTCueLike } from './types'
import './TranscriptLine.css'

export interface TranscriptLineProps {
  cue: VTTCueLike
  seek: (secs: number) => void
  query?: string
}

function TranscriptLine({ cue, seek, query }: TranscriptLineProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    cue.onenter = () => setIsActive(true)
    cue.onexit = () => setIsActive(false)
    // Cleanup not needed as these are overwritten on unmount
     
  }, [cue])

  let style = ''
  if (query && cue.text.match(new RegExp(query, 'i'))) {
    style = 'match'
  } else if (isActive) {
    style = 'active'
  }

  return (
    <div className={`${style} line`} onClick={() => seek(cue.startTime)}>
      <div className="time">
        [{startTime(cue.startTime)} - {endTime(cue.endTime)}]
      </div>
      <div
        className={`${style} text`}
        dangerouslySetInnerHTML={{ __html: cue.text }}
      />
    </div>
  )
}

function startTime(t: number): string {
  return formatSeconds(t)
}
function endTime(t: number): string {
  return formatSeconds(t)
}
function formatSeconds(t: number): string {
  const mins = Math.floor(t / 60);
  const secs = Math.floor(t % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default TranscriptLine;