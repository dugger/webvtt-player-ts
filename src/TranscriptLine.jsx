import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './TranscriptLine.css'

function TranscriptLine({ cue, seek, query }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    cue.onenter = () => setIsActive(true)
    cue.onexit = () => setIsActive(false)
    // Cleanup not needed as these are overwritten on unmount
    // eslint-disable-next-line
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

function startTime(t) {
  return formatSeconds(t)
}
function endTime(t) {
  return formatSeconds(t)
}
function formatSeconds(t) {
  let mins = Math.floor(t / 60)
  if (mins < 10) mins = `0${mins}`
  let secs = Math.floor(t % 60)
  if (secs < 10) secs = `0${secs}`
  return `${mins}:${secs}`
}

TranscriptLine.propTypes = {
  cue: PropTypes.object,
  seek: PropTypes.func,
  query: PropTypes.string,
}

export default TranscriptLine
