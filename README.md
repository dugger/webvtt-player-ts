# webvtt-player-ts

*webvtt-player-ts* is a [React] component, fully written in **TypeScript**, that lets you play an audio file while viewing its [WebVTT] subtitles as an interactive transcript. Take a look at the [example site] to get a sense of what this means.

*webvtt-player-ts* was developed as part of the [Unlocking the Airwaves] project which received generous support from the [National Endowment for the Humanities].

## Installation

```bash
npm install webvtt-player-ts
```

## Usage (TypeScript or JavaScript)

```tsx
import { Player } from "webvtt-player-ts";

<Player
  audio="https://example.org/audio.mp3"
  transcript="https://example.org/transcript.vtt"
/>
```

### Props

#### `Player` component
| Prop         | Type     | Description |
|--------------|----------|-------------|
| `audio`      | `string` | URL of the audio file |
| `transcript` | `string` | URL of the WebVTT transcript file |
| `metadata`   | `string` | (optional) URL of the WebVTT metadata file |
| `preload`    | `boolean`| (optional) Preload the audio |

#### TypeScript Example

```tsx
import { Player } from "webvtt-player-ts";

<Player
  audio="/audio.mp3"
  transcript="/transcript.vtt"
  metadata="/metadata.vtt"
  preload={true}
/>
```

## Development & Demo (Vite)

This project uses [Vite](https://vitejs.dev/) for development and building. To run the example/demo locally:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The demo is located in the `example/` directory and uses TypeScript.

To build the library for production:

```bash
npm run build
```

The output will be in the `dist/` directory as both ESM and UMD modules.

## OHMS Metadata Track

*webvtt-player-ts* can also display a WebVTT metadata track. The metadata object is modeled after the [OHMS Indexing system](http://ohda.matrix.msu.edu/2014/11/indexing-interviews-in-ohms/).

Fields supported:

```json
{
  "title": "",
  "title_alt": "",
  "synopsis": "",
  "synopsis_alt": "",
  "keywords": "",
  "keywords_alt": "",
  "subjects": "",
  "subjects_alt": "",
  "gpspoints": {
    "gps": "00.0000000, 00.0000000",
    "gps_zoom": "0",
    "gps_text": "",
    "gps_text_alt": ""
  },
  "hyperlinks": {
    "hyperlink": "http://example.org",
    "hyperlink_text": "",
    "hyperlink_text_alt": ""
  }
}
```

`gpspoints` will be displayed as a link to Google Maps and `hyperlinks` will be displayed as a link.

The metadata track can be loaded with the `metadata` parameter.

## Using Without React

You can use webvtt-player-ts outside of a React project if you use the built JavaScript bundle from the [latest release](https://github.com/umd-mith/webvtt-player/releases) directly in the browser. Simply provide an anchor element with the id `webvtt-player` and use `data-audio` and `data-transcript` attributes to point to the audio and transcript files (`data-metadata` is optional):

```html
<div id="webvtt-player"
     data-audio="audio.mp3"
     data-transcript="transcript.vtt"
     data-metadata="metadata.vtt" />
```

You should be able to find the latest build as part of the webvtt demo site:

https://umd-mith.github.io/webvtt-player/webvtt-player.js

To generate the JavaScript file run the following command which will write them to the `dist` directory:

    npm run build

[WEBVTT]: https://en.wikipedia.org/wiki/WebVTT
[JavaScript API]: https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API
[React]: https://reactjs.org/
[example site]: https://umd-mith.github.io/webvtt-player
[Unlocking the Airwaves]: https://mith.umd.edu/research/unlocking-the-airwaves/
[National Endowment for the Humanities]: https://www.neh.gov/
