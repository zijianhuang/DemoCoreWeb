# Test with React Heroes
This is based on "Tour of the Heroes", the official Angular tutorial demo. It demonstrates how a React + TypeScript app talks to a real backend through a generated client API.

## App
1. Launch Web API with `StartCoreWebApi.ps1`.
2. Run `npm start` or `npm run dev` to launch the Vite dev server.

Or check the online demo at: https://zijianhuang.github.io/DemoCoreWeb/react

## Test with Web API
1. Launch Web API with `StartCoreWebApi.ps1`.
2. Run `npm test`.

## Test Cases
Run `npm test`

Or run `runtest.ps1` so the test cases talk to the local Web API launched by `StartCoreWebApi.ps1`.

Or run `runtestRemote.ps1` so the test cases talk to a public Web API.

**Hints:**
The test configuration is loaded from either `apiConfigConstantsRemote.js` or `apiConfigConstants.js`, as declared in `vitestSetup.ts`.

## Build
Run `npm run build` to create a production bundle under `build/DemoCoreWeb/react`.

`buildProdGhPages.ps1` keeps the same GitHub Pages deployment layout and now calls the Vite build.

## Available Scripts
### `npm start` or `npm run dev`
Starts the Vite dev server.

### `npm test`
Runs Vitest once in `jsdom`.

### `npm run build`
Builds the app with Vite using the `/DemoCoreWeb/react/` base path.

### `npm run preview`
Serves the production build locally.
