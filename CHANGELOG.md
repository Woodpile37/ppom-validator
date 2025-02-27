# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0]
### Changed
- Fix issue with fetching files the first time extension is installed ([#39](https://github.com/MetaMask/ppom-validator/pull/39))
- Fix url construction for fetching blockaid files from CDN ([#40](https://github.com/MetaMask/ppom-validator/pull/40))

## [0.2.0]
### Changed
- Adding code to verify signature of data blobs fetched from CDN ([#35](https://github.com/MetaMask/ppom-validator/pull/35))
- Rate limit requests to the provider ([#28](https://github.com/MetaMask/ppom-validator/pull/28))
- Validate path of data files ([#27](https://github.com/MetaMask/ppom-validator/pull/27))

## [0.1.2]
### Changed
- Change in way new ppom module is initialised ([#29](https://github.com/MetaMask/ppom-validator/pull/29))

## [0.1.1]
### Added
- Improvements in CDN data fetching ([#15](https://github.com/MetaMask/ppom-validator/pull/15))
- Mobile integration ([#14](https://github.com/MetaMask/ppom-validator/pull/14))
- Caching data for multiple networks ([#10](https://github.com/MetaMask/ppom-validator/pull/10))
- Adding periodic sync for ppom data ([#6](https://github.com/MetaMask/ppom-validator/pull/6))

## [0.0.1]
### Added
- Add PPOM middleware ([#5](https://github.com/MetaMask/ppom-validator/pull/5))
- Add PPOM controller ([#4](https://github.com/MetaMask/ppom-validator/pull/4))
- Add PPOM wasm code ([#3](https://github.com/MetaMask/ppom-validator/pull/3))
- Add storage class for PPOM data ([#1](https://github.com/MetaMask/ppom-validator/pull/1))
- Initialize the repo from https://github.com/MetaMask/metamask-module-template ([#2](https://github.com/MetaMask/ppom-validator/pull/2))

### Changed
- Restrict provider access to PPOM ([#7](https://github.com/MetaMask/ppom-validator/pull/7))
- Integrate with ppom npm module ([#8](https://github.com/MetaMask/ppom-validator/pull/8))

[Unreleased]: https://github.com/MetaMask/ppom-validator/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/MetaMask/ppom-validator/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/MetaMask/ppom-validator/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/MetaMask/ppom-validator/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/MetaMask/ppom-validator/compare/v0.0.1...v0.1.1
[0.0.1]: https://github.com/MetaMask/ppom-validator/releases/tag/v0.0.1
