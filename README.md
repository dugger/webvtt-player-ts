# webvtt-player-ts

*webvtt-player-ts* is a [React] component, fully written in **TypeScript**, that lets you play an audio file while viewing its [WebVTT] subtitles as an interactive transcript.

The original *webvtt-player* was developed as part of the [Unlocking the Airwaves] project which received generous support from the [National Endowment for the Humanities].

This fork is a modified version of the original *webvtt-player* to use TypeScript and work with React 19.

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