# Gatsby Starter Kontent Lumen

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Kentico/gatsby-kontent-starter-lumen/master/LICENSE)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-cloud)
[![Live demo](https://img.shields.io/badge/-Live%20Demo-brightgreen.svg)](https://gatsby-starter-kontent-lumen.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2adc83d6-9eba-45fc-b95c-c205e75d3189/deploy-status)](https://app.netlify.com/sites/gatsby-starter-kontent-lumen/deploys)

Lumen is a minimal, lightweight and mobile-first starter for creating blogs using
[Gatsby](https://github.com/gatsbyjs/gatsby).

This is an edited clone of
[gatsby-starter-lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) and [gatsby-v2-starter-lumen](https://github.com/GatsbyCentral/gatsby-v2-starter-lumen)
migrated for getting content from headless CMS
[Kontent](https://kontent.ai/).

![Page Screenshot](https://i.imgur.com/jVImqT2.jpg)

## Features

+ Content from [Kontent](http://kontent.ai/) headless CMS.
+ Lost Grid ([peterramsing/lost](https://github.com/peterramsing/lost)).
+ Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg).
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
+ Stylesheet built using SASS and [BEM](http://getbem.com/naming/)-Style naming.
+ Syntax highlighting in code blocks.
+ Sidebar menu built using a configuration block.
+ Archive organized by tags and categories.
+ Automatic Sitemap generation.
+ Google Analytics support.

## Getting Started

### Requirements

+ [Node.js](https://nodejs.org/)

### Create codebase

1. Click on "Use this repository" button to [create your own repository from this template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

### Create content source

1. Go to [app.kontent.ai](https://app.kontent.ai) and [create empty project](https://docs.kontent.ai/tutorials/set-up-kontent/projects/manage-projects#a-creating-projects)
1. Go to "Project Settings", select API keys and copy
    + Project ID
    + Management API key **require Bussines tier or higher or Trial account**
1. Install [Kontent Backup Manager](https://github.com/Kentico/kontent-backup-manager-js) and import data to newly created project from [`kontent-backup.zip`](./kontent-backup.zip) file (place appropriate values for `apiKey` and `projectId` arguments):

    ```sh
    npm i -g @kentico/kontent-backup-manager

    kbm --action=restore --apiKey=<Management API key> --projectId=<Project ID> --zipFilename=kontent-backup
    ```

    > Alternatively, you can use the [Template Manager UI](https://kentico.github.io/kontent-template-manager/import-from-file) for importing the content.

1. Go to your Kontent project and [publish all the imported items](https://docs.kontent.ai/tutorials/write-and-collaborate/publish-your-work/publish-content-items).

### Join codebase and content data

Copy [`.env.template`](`./.env.template`) and name it `.env` then set the `KONTENT_PROJECT_ID` environment variable to value from Kontent -> "Project Settings" ->  API keys -> Project ID.

> This step is made automatically when running `npm install` - it is defined as a `prepare` script in `package.json`.

**You are now ready to use the site as your own!**

## Development

Install the dependencies and run development environment

```sh
npm install  // Also creates a .env file from .env.template file if no .env file exists
npm run develop
```

## Site production build

Install the dependencies and run production build

```sh
npm install // Also creates a .env file from .env.template file if no .env file exists
npm run build
```

### Production Deploy

Before deploying to production add own google analytics `trackingId` to [`gatsby-config.js`].

## Deploy with Netlify

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kentico/gatsby-starter-kontent-lumen)

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

## Folder Structure

```
└── src
    ├── assets
    │   ├── fonts
    │   │   └── fontello-771c82e0
    │   │       ├── css
    │   │       └── font
    │   └── scss
    │       ├── base
    │       ├── mixins
    │       └── pages
    ├── components
    │   ├── Article
    │   ├── ArticleTemplateDetails
    │   ├── CategoryTemplateDetails
    │   ├── Links
    │   ├── Layout
    │   ├── Menu
    │   ├── PageTemplateDetails
    │   ├── Sidebar
    │   └── TagTemplateDetails
    ├── pages
    └── templates
```

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/gatsby-starter-kontent-lumen?pixel)
