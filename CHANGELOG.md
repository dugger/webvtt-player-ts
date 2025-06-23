# Changelog for webvtt-player-ts

## [1.0.0] - 2024-12-19
### Added
- **Search bar positioning**: New `searchPosition` prop to control search bar placement ('top' | 'bottom')
- **Metadata display**: Full support for WebVTT metadata tracks with OHMS Indexing system
- **TypeScript support**: Complete TypeScript migration with proper type definitions
- **Modern build system**: Migrated to Vite for faster development and building
- **ESLint v9+ configuration**: Modern linting setup with TypeScript and React support
- **Improved examples**: Separate examples for with/without metadata functionality

### Changed
- **Major version bump**: Stable 1.0.0 release with all modern React patterns
- **Component architecture**: Migrated all components to functional components using React hooks
- **Development experience**: Improved with hot reloading, TypeScript checking, and linting
- **Example structure**: Cleaner separation between basic and advanced features
- **CSS organization**: Better styling with position-specific search bar styles

### Technical Improvements
- **Type safety**: Replaced `any` types with proper TypeScript interfaces
- **Build optimization**: Vite provides faster development and optimized production builds
- **Code quality**: ESLint ensures consistent code style and catches potential issues
- **Modern React**: Uses React 19 with latest patterns and best practices

### Removed
- **Legacy dependencies**: Removed prop-types in favor of TypeScript
- **Old build system**: Replaced with modern Vite configuration

---

## [0.1.0] - 2024-06-XX
### Added
- ESLint v9+ configuration with TypeScript and React support
- Linting scripts to package.json
- TODO.md for project roadmap

### Changed
- Migrated all components to functional components using React hooks
- Migrated codebase to TypeScript
- Switched build system to Vite
- Updated README for TypeScript/Vite usage
- Improved type safety and replaced most `any` types
- Moved search bar to be above transcript
- Updated CSS for new layout and full-width search bar
- Cleaned up unused dependencies and scripts

### Removed
- Removed unused `utils` directory
- Removed prop-types dependency

---

## Older changes
- See previous commits for details prior to 0.1.0 