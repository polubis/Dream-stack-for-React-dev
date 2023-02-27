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

## Run commands

`cd .\system\`

Storybook for figa-ui: `npx nx run figa-ui:storybook`
Next.js app for blog content: `npx nx serve blog`
React SPA app for blog management: `npx nx serve blog-creator`
Running dedicated apps: `npx nx run-many --parallel --target=serve --projects=blog,blog-creator`
Running all apps: `npx nx run-many --target=serve --all`

> Remember to add different port numbers if you want to run more than 1 application in the same time in  **project.json** files.

```json
"serve": {
    "options": {
        "buildTarget": "blog:build",
        "dev": true,
        "port": 3001
    },
}
```