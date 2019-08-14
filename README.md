# Node Nimiq LoginFile generator

## Installation

`$ npm install`

`$ npx tsc`

## Usage

`$ node ./dist/app.js`

## Changes
Modified the [LoginFile](https://github.com/nimiq/keyguard/blob/master/src/lib/LoginFile.js) and [QrEncoder](https://github.com/nimiq/keyguard/blob/master/src/lib/QrEncoder.js) classes from the Nimiq Keyguard.

Used JSDom to simulate a HTML document and the Node Canvas package to for generating images.