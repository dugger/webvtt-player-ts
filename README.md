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
| Prop             | Type                    | Description |
|------------------|-------------------------|-------------|
| `audio`          | `string`                | URL of the audio file |
| `transcript`     | `string`                | URL of the WebVTT transcript file |
| `metadata`       | `string`                | (optional) URL of the WebVTT metadata file |
| `preload`        | `boolean`               | (optional) Preload the audio |
| `searchPosition` | `'top' \| 'bottom'`     | (optional) Position of the search bar |

#### TypeScript Example

```tsx
import { Player } from "webvtt-player-ts";

<Player
  audio="/audio.mp3"
  transcript="/transcript.vtt"
  metadata="/metadata.vtt"
  searchPosition="top"
  preload={true}
/>
```

## Development & Demo (Vite)

This project uses [Vite](https://vitejs.dev/) for development and building. To run the example/demo locally:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The demo includes:
- **Basic example**: Transcript only (`index.html`)
- **Advanced example**: Transcript with metadata (`annotations.html`)

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

## Search Bar Positioning

The search bar can be positioned at the top or bottom of the transcript area using the `searchPosition` prop:

```tsx
// Search bar at bottom (default)
<Player audio="..." transcript="..." />

// Search bar at top
<Player audio="..." transcript="..." searchPosition="top" />
```

## Version 1.0.0 Features

- ✅ **TypeScript Support**: Full TypeScript migration with proper type definitions
- ✅ **Modern React**: React 19 with hooks and functional components
- ✅ **Vite Build System**: Fast development and optimized production builds
- ✅ **Metadata Support**: OHMS Indexing system for rich content annotation
- ✅ **Flexible Search**: Configurable search bar positioning
- ✅ **ESLint v9+**: Modern linting with TypeScript and React support
- ✅ **Improved Examples**: Separate examples for basic and advanced features

## Contributing

This project uses modern development tools:
- **TypeScript** for type safety
- **Vite** for fast development and building
- **ESLint** for code quality
- **React 19** with latest patterns

## License

MIT License - see [LICENSE](LICENSE) file for details.