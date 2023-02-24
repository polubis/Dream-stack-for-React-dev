# Commands

## Install nx script

`npm i -g create-nx-workspace@latest --legacy-peer-deps`

## Generating repository

`npx create-nx-workspace@latest`

## Generating React SPA app

`cd .\system\`
`npx nx g @nrwl/react:application blog-creator`

## Generating React styled-components based UI library

`cd .\system\`
`npx nx g @nrwl/react:lib figa-ui`

## Generating pure TS library

`cd .\system\`
`npx nx generate @nrwl/js:lib utils`

## Adding storybook to figa-ui library

`cd .\system\`
`npm i --save @nrwl/storybook --legacy-peer-deps`
`npx nx g @nrwl/storybook:configuration figa-ui --uiFramework=@storybook/react`

Running: `npx nx run figa-ui:storybook`