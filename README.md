### Start
`yarn` </br>
`yarn start`</br>

### SCSS types checking
Set in VSCode config settings - `"typescript.tsdk": "./node_modules/typescript/lib"` </br>
[more details](https://www.npmjs.com/package/typescript-plugin-css-moduless)

#### On husky crashes:
1. delete yarn.lock
2. delete node_modules
3. delete git hooks: `rm -rf .git/hooks`
4. install husky: `yarn add -D husky@4.3.8`

### Components architecture
![components-architecture](https://github.com/slotovi4/compilation-react-ts-scss-assets/blob/master/assets/images/conponents-architecture.png?raw=true)

### API architecture
![api-architecture](https://github.com/slotovi4/compilation-react-ts-scss-assets/blob/master/assets/images/api-architecture.png?raw=true)
