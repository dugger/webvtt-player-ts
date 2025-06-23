import React from 'react'
import PropTypes from 'prop-types'
import Transcript from './Transcript'
import Metadata from './Metadata'
import Search from './Search'
import './Player.css'

class Player extends React.Component {

  constructor() {
    super()
    this.state = {
      loaded: false,
      currentTime: 0,
      query: ''
    }
    this.track = React.createRef()
    this.metatrack = React.createRef()
    this.audio = React.createRef()

    this.onLoaded = this.onLoaded.bind(this)
    this.seek = this.seek.bind(this)
    this.onTrackLoaded = this.onTrackLoaded.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
  }

  componentDidMount() {
    // Attach native load event to <track>
    if (this.track.current) {
      this.track.current.addEventListener('load', this.onTrackLoaded);
    }
    // Fallback: also check if cues are already available
    this.onLoaded();
  }

  componentWillUnmount() {
    if (this.track.current) {
      this.track.current.removeEventListener('load', this.onTrackLoaded);
    }
  }

  render () {
    let track = null
    let metatrack = null
    if (this.state.loaded) {
      track = this.track.current.track
      metatrack = this.metatrack.current.track
    }
    const preload = this.props.preload ? "true" : "false"
    const metadata = this.props.metadata
      ? <Metadata
        url={this.props.metadata}
        seek={this.seek}
        track={metatrack} />
      : ""
    return (
      <div className="webvtt-player">
        <div className="media">
          <div className="player">
            <audio
              controls
              crossOrigin="anonymous"
              onLoadedData={this.onLoaded}
              preload={preload}
              ref={this.audio}>
              <source src={this.props.audio} />
              <track default
                kind="subtitles"
                src={this.props.transcript}
                ref={this.track} />
              <track default
                kind="metadata"
                src={this.props.metadata}
                ref={this.metatrack} />
            </audio>
          </div>
          <div className="tracks">
            <Transcript 
              url={this.props.transcript} 
              seek={this.seek} 
              track={track} 
              query={this.state.query} />
            {metadata}
          </div>
          <Search query={this.state.query} updateQuery={this.updateQuery} />
        </div>
      </div>
    )
  }

  onLoaded() {
    // fallback: if cues are already available
    const track = this.track.current && this.track.current.track;
    if (track && track.cues && track.cues.length > 0) {
      this.setState({ loaded: true })
    }
  }

  onTrackLoaded() {
    const track = this.track.current && this.track.current.track;
    if (track && track.cues && track.cues.length > 0) {
      this.setState({ loaded: true })
    }
  }

  seek(secs) {
    this.audio.current.currentTime = secs
    this.audio.current.play()
  }

  updateQuery(query) {
    this.setState({query: query})
  }

}

Player.propTypes = {
  audio: PropTypes.string,
  transcript: PropTypes.string,
  metadata: PropTypes.string,
  preload: PropTypes.bool,
  query: PropTypes.string
}

export default Player