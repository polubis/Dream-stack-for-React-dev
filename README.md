# Commands

## Install nx script

1. `npm i -g create-nx-workspace@latest --legacy-peer-deps`

## Generating repository

1. `npx create-nx-workspace@latest`

## Generating React SPA app

1. `cd .\system\`
2. `npx nx g @nrwl/react:application blog-creator`

## Generating React styled-components based UI library

1. `cd .\system\`
2. `npx nx g @nrwl/react:lib figa-ui`

## Generating pure TS library

1. `cd .\system\`
2. `npx nx generate @nrwl/js:lib utils`

## Adding storybook to figa-ui library

1. `cd .\system\`
2. `npm i --save @nrwl/storybook --legacy-peer-deps`
3. `npx nx g @nrwl/storybook:configuration figa-ui --uiFramework=@storybook/react`

## Run commands

1. `cd .\system\`

2. Storybook for figa-ui: `npx nx run figa-ui:storybook`
3. Next.js app for blog content: `npx nx serve blog`
4. React SPA app for blog management: `npx nx serve blog-creator`
5. Running dedicated apps: `npx nx run-many --parallel --target=serve --projects=blog,blog-creator`
6. Running all apps: `npx nx run-many --target=serve --all`
7. Migrating to latest nx and bumping packages: `npx nx migrate latest`
8. Running lint for all apps: `npx nx run-many --target=lint --all`
9. Running lint for all apps and fix: `npx nx run-many --target=lint --all --fix`

> Remember to add different port numbers if you want to run more than 1 application in the same time in **project.json** files.

```json
"serve": {
    "options": {
        "buildTarget": "blog:build",
        "dev": true,
        "port": 3001
    },
}
```
