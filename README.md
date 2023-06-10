## Structure of repository

We have two main parts in this repo. First is an API in **.NET** ecosystem and second is monorepo in **JavaScript**. 

We used monorepo because it gives us easy way to give permissions for devs in easy way and it provides linear git history of changes in whole system. 

## Description of repository elements

Currently we have several applications:

1. First is a blog platform currently available at [GreenOn Software](https://greenonsoftware.com). We migrating it to **Next** from **Gatsby**.

2. Second is an app for musicans [jamjam](https://jamjambeings.com) - we are migrating it from **CRA** to **Next**.

3. Third is **design-system** implementation with reusable not domain specific UI. Its called **figa-ui**.

4. We have also other reusable parts like **figa-hooks** which implements reusable not app specific hooks. 

## I have idea for app

That's great. We can implement it together faster by using currently prepared codebase. 

Describe it on a dedicated channel in **Discord**.

## I have suggestions

That's great. If it's related to codebase just prepare PR with showcase and describe it. 

You can also describe it on **Discord**
.

## I see a bug in app or other ugly crap

Raise an issue and add images or gifs - we'll cover it. 

## Do I need to write tests? 

Yes 👍. We want to have scalable and easy to spot problems codebase so we need tests. 

If you have problems or there is a help required just ask for help on **Discord** or in **PR**. 

## How to run app, lib or tests? 

Check **COMMANDS.MD** file or **main package.json** file. 


# Generation and install commands

## Install nx script

1. `npm i -g create-nx-workspace@latest --legacy-peer-deps`

## Generating repository

1. `npx create-nx-workspace@latest`

## Generating React SPA app

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

# Run commands

1. `cd .\system\`

2. Storybook for figa-ui: `npx nx run figa-ui:storybook`
3. Next.js app for blog content: `npx nx serve blog`
4. React SPA app for blog management: `npx nx serve blog-creator`
5. Running dedicated apps: `npx nx run-many --parallel --target=serve --projects=blog,blog-creator`
6. Running all apps: `npx nx run-many --target=serve --all`
7. Migrating to latest nx and bumping packages: `npx nx migrate latest`
8. Running lint for all apps: `npx nx run-many --target=lint --all`
9. Running lint for all apps and fix: `npx nx run-many --target=lint --all --fix`
10. Running tests with watch options for project: `npx nx run-many --target=test --projects=figa-hooks --watch`
11. Displaying installed plugins and plugins to install: `npx nx list`.
12. Update nx cloud when 401: `npx nx g @nrwl/nx-cloud:init`
13. Running e2e tests: `npx nx run jamjam-e2e:e2e --watch`

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
