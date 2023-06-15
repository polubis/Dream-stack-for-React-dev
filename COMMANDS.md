# Run commands

Before you execute any command make sure you are in correct directory. Type: `cd .\system\` firstly.

- Storybook for figa-ui: `npx nx run figa-ui:storybook`
- Next.js app for blog content: `npx nx serve blog`
- React SPA app for blog management: `npx nx serve blog-creator`
- Running dedicated apps: `npx nx run-many --parallel --target=serve --projects=blog,blog-creator`
- Running all apps: `npx nx run-many --target=serve --all`
- Migrating to latest nx and bumping packages: `npx nx migrate latest`
- Running lint for all apps: `npx nx run-many --target=lint --all`
- Running lint for all apps and fix: `npx nx run-many --target=lint --all --fix`
- Running tests with watch options for project: `npx nx run-many --target=test --projects=figa-hooks --watch`
- Displaying installed plugins and plugins to install: `npx nx list`.
- Update nx cloud when 401: `npx nx g @nrwl/nx-cloud:init`
- Running e2e tests: `npx nx run jamjam-e2e:e2e --watch`

# Other commands - just for historical context (ignore it)

## Generating React SPA app

Remember to add different port numbers if you want to run more than 1 application in the same time in **project.json** files.

```json
"serve": {
    "options": {
        "buildTarget": "blog:build",
        "dev": true,
        "port": 3001
    },
}
```

1. `cd .\system\`
2. `npx nx g @nrwl/next:application jamjam`

## Generating Next.js app with TypeScript

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

## Generating hooks library in React

1. `cd .\system\`
2. `npx nx generate @nrwl/react:library figa-hooks`
