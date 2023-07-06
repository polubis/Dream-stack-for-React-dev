# Quick start

Here you find basic info and useful links. 

## First run

Clone repository and open it in your IDE. Remember to have `node v16.20.1` and `npm 8.8.0` versions. 

Next type following commands:

1. `cd system`
2. `npm i --legacy-peer-deps`
3. Then run anything you want. It can be app, more than one apps, storybook or other. Check **COMMANDS.md** file for more. 

## Structure of repository

We have two main parts in this repo. First is an API in **.NET** ecosystem and second is monorepo in **JavaScript**. 

We used monorepo because it gives us easy way to give permissions for devs and it provides linear git history of changes in whole system. 

Thanks to this everyone will be able to track progress. 

## Description of repository elements

Currently we have several applications:

1. First is a blog platform currently available at [GreenOn Software](https://greenonsoftware.com). We migrating it to **Next** from **Gatsby**.

2. Second is an app for musicans [jamjam](https://jamjambeings.com) - we are migrating it from **CRA** to **Next**.

3. Third is **design-system** implementation with reusable not domain specific UI. Its called **figa-ui**.

4. We have also other reusable parts like **figa-hooks** which implements reusable not app specific hooks.
