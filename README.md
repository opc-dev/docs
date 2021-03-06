# Broward County Web Style Guide

This is the Gatsby site that generates the static HTML, CSS & JS files that are then uploaded to Broward County's intranet site for regulatory & training purposes. It is proudly maintained by the Office of Public Communication's web development team.

## Getting Started

### Local development (Windows)

#### 1. Set up your environment

1. Install [Node](https://nodejs.org) & [NPM](https://www.npmjs.com/get-npm) globally
2. In your terminal, run `cd path/to/docs` to get in to the `docs` directory

#### 2. Get all the dependencies

1. Install dependencies by running `npm install`
2. Run `yarn`

\* if errors occur while running `yarn`, you may also need to try:

- updating Node by running `npm install npm@latest -g` (or downloading latest version from [nodejs.org](https://nodejs.org)),
- fixing dependency issues by running `npm audit fix`, and/or
- installing Microsoft's Build Tools by running `npm install --global --production windows-build-tools` from Powershell (as Administrator, which may require one-time ETS support)
- upgrading Yarn by running `yarn upgrade`

#### 3. Install & Run Gatsby

1. Install Gatsby CLI by running `npm i -g gatsby-cli`
2. Fix any dependency issues by running `npm audit fix`
3. To edit, run `npm run develop`
4. To build, run `npm run build --prefix-paths`
5. To cancel an active Gatsby develop/build process, press `ctrl + C` while in terminal and agree to cancel if prompted

#### 4. Editing Gatsby

For general questions related to editing the Doctocat theme, have a look at the really great [documentation](https://primer.style/doctocat/usage/customization) Github put together for it. Here are a few basic instructions for common procedures on this site:

##### 1. Content

1. To edit content within the pages, edit the respective markdown file located within the `content/` folder

##### 2. Navigation

1. To edit the left navigation of the site, edit the `nav.yaml` file located within the `docs/src/@primer/gatsby-theme-doctocat/` folder

##### 3. Components

1. To edit a component (pretty much anything on the site), you'll need to [shadow](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) it. This basically means you'll make a copy of the component file nested down inside the theme (in this case, Doctocat) in the `node_modules` folder (sorry, you'll have to dig around a little to find what you're looking for - if I could read your mind and tell you where it was, I would but alas: no can do), then edit it and save it into the `docs/src/@primer/gatsby-theme-doctocat/components/` folder. Your new component file will override the one in the `node_modules`

#### 5. Generate Static Site (for publishing to SharePoint)

**Note:** Generated files will show up in your `docs/public` folder. In order to avoid duplicate files or other issues, you can **delete** all contents inside the `docs/public` folder _before_ doing the following:

1. In your local `docs` folder, run `npm run build --prefix-paths`
2. Rename all `.html` file extensions to `.aspx`
   1. In Windows command prompt, run `cd path/to/docs` (this is **very important** that you are in the correct directory so you don't mess with other files)
   2. Run `for /r %x in (*.html) do ren "%x" *.aspx`
3. Copy **all** of the content from the `docs/public/` folder & past it all into the SharePoint directory you want it to live in (probably somewhere in `Site Pages`)
   1. Easiest way is to
      1. Navigate to subsite site contents directory in a browser
      2. Select the `Edit Library` option from the `Customize Library` section of the `Library` tab on the SharePoint ribbon.
      3. Replace all files in directory with your own
4. Double everything looks alright ("double" because you already checked locally before pushing changes live, right?)

#### 6. Version Control

##### Basic git workflow

1. Make a branch for yourself
2. Clone it to your desktop
3. Do your development thing
4. Create & merge a pull request
5. Rinse & repeat

\* You may have to fix line-endings by running `git config --global core.autocrlf true` if you receive a CRLF error.

##### Setup, stage, commit, push & pull request

1. `cd path/to/docs`
2. `git init` (first time only)
3. `git add .` (or specify individual files instead of `.` if you want)
4. `git commit -m "your commit message"`
5. `git push origin <your-branch>`
6. Submit a pull-request if you are ready for your work to be reviewed and published to the live site

### Resources, Tips & Notes

#### Helpful VSCode plugins

- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) (markdown syntax help)
- [MDX Preview](https://marketplace.visualstudio.com/items?itemName=xyc.vscode-mdx-preview) (markdown live preview)

#### Markdown Help

- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
