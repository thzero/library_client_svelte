[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# library_client_svelte

## Requirements

### NodeJs

[NodeJs](https://nodejs.org) version 18+

### Svelte Application

npm create vite@latest myapp -- --template svelte
cd myapp
npm install
npm run dev

### Installation

[![NPM](https://nodei.co/npm/@thzero/library_client_svelte.png?compact=true)](https://npmjs.org/package/@thzero/library_client_svelte)


```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

jsconfig.json
```js
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
```

vite.config.js
```js
import path from 'path'
```
```js
let configEnv = process.env.NODE_ENV
console.log('svelte.config.NODE_ENV', configEnv)
const config = process.env._CONFIG
console.log('svelte.config._CONFIG', config)
if (config) {
	const filename = path.join(__dirname, `./src/config/${configEnv}.json`)
	console.log('svelte.config.filename', filename)
	fs.writeFileSync(filename, config)
	const contents = fs.readFileSync(filename, 'utf8')
	console.log('svelte.config.file', contents)
}
else
	configEnv = 'development'
console.log('svelte.config.NODE_ENV', configEnv)
```
```js
    resolve:{
        alias:{
        '@/': `${path.resolve(__dirname, 'src')}/`,
        'local-config': `${path.join(__dirname, `./src/config/${configEnv}.json`)}`
        },
    },
```
