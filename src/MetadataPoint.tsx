import React from 'react'
import { MetadataCue, VTTCueLike } from './types'
import './MetadataPoint.css'

export interface MetadataPointProps {
  cue: VTTCueLike;
  seek: (secs: number) => void;
}

function MetadataPoint({ cue, seek }: MetadataPointProps) {
  const data: MetadataCue = JSON.parse(cue.text)
  const titleAlt = data.title_alt ? <h3 className="titleAlt">{data.title_alt}</h3> : ''
  const synopsis = data.synopsis ? (
    <div className="field">
      <span>Synopsis</span>
      {data.synopsis}
    </div>
  ) : ''
  const synopsisAlt = data.synopsis_alt ? <div>{data.synopsis_alt}</div> : ''
  const keywords = data.keywords ? (
    <div className="field">
      <span>Keywords: </span>
      {data.keywords}
    </div>
  ) : ''
  const keywordsAlt = data.keywords_alt ? (
    <div className="field">
      <span>Alternative Keywords: </span>
      {data.keywords_alt}
    </div>
  ) : ''
  const subjects = data.subjects ? (
    <div className="field">
      <span>Subjects: </span>
      {data.subjects}
    </div>
  ) : ''
  const subjectsAlt = data.subjects_alt ? (
    <div className="field">
      <span>Alternative Subjects: </span>
      {data.subjects_alt}
    </div>
  ) : ''
  const gpsLink = data.gpspoints.gps ? (
    <div className="field">
      <span>Geo: </span>
      <a href={`https://www.google.com/maps/@?api=1&map_action=map&center=${data.gpspoints.gps}&zoom=${data.gpspoints.gps_zoom}`}>{data.gpspoints.gps_text}</a>
    </div>
  ) : ''
  const hyperlinks = data.hyperlinks.hyperlink_text ? (
    <div className="field">
      <span>Links: </span>
      <a href={data.hyperlinks.hyperlink}>{data.hyperlinks.hyperlink_text}</a>
    </div>
  ) : ''
  return (
    <div className="point">
      <div className="time" onClick={() => seek(cue.startTime)}>
        [{startTime(cue.startTime)}]
      </div>
      <div className="text">
        <h2 className="title" onClick={() => seek(cue.startTime)}>{data.title}</h2>
        {titleAlt}
        {synopsis}
        {synopsisAlt}
        {keywords}
        {keywordsAlt}
        {subjects}
        {subjectsAlt}
        {gpsLink}
        {hyperlinks}
      </div>
    </div>
  )
}

function startTime(t: number): string {
  return formatSeconds(t)
}
function formatSeconds(t: number): string {
  const mins = Math.floor(t / 60);
  const secs = Math.floor(t % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default MetadataPoint;