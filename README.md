# Broward County Web Style Guide

This is the Gatsby site that generates the static HTML, CSS & JS files that are uploaded to Broward County's intranet site for regulatory & training purposes. It is proudly maintained by the Office of Public Communication's web development team. Usage instructions below.

## Getting Started

### Local development (Windows)

#### 1. Set up your environment

1. Install [Node](https://nodejs.org) & [NPM](https://www.npmjs.com/get-npm) globally
2. In your terminal, run `cd path/to/docs` to get in to the `docs` directory

#### 2. Get all the dependencies

3. Install dependencies by running `npm install`
4. Run `yarn` \*

- \*if errors occur while running `yarn`, you may also need to try:
  - updating Node by running `npm install npm@latest -g` (or downloading latest version from [nodejs.org](https://nodejs.org)),
  - fixing dependency issues by running `npm audit fix`, and/or
  - installing Microsoft's Build Tools by running `npm install --global --production windows-build-tools` from Powershell (as Administrator, which may require one-time ETS support)

#### 3. Install & Run Gatsby

5. Install Gatsby CLI by running `npm i -g gatsby-cli`
6. Fix any dependency issues by running `npm audit fix`
7. To edit, run `npm run develop`
8. To build, run `npm run build --path-prefix`
9. To cancel an active Gatsby develop/build process, press `ctrl + C` while in terminal and agree to cancel if prompted

**Note:** Files ready to be

#### 4. Editing Gatsby

1. Remain calm...
2. Shadow...

#### 5. Generate Static Site (for publishing to SharePoint)

1. In your local `docs` folder, run `

#### 6. Version Control

##### Basic git workflow

1. Make a branch for yourself
2. Clone it to your desktop
3. Do your development thing
4. Create & merge a pull request
5. Rinse & repeat

\*You may have to fix line-endings by running `git config --global core.autocrlf true` if you receive a CRLF error.

##### Setup, stage, commit, push & pull request

1. `cd path/to/docs`
2. `git init` (first time only)
3. `git add .`
4. `git commit -m "your commit message"`
5. `git push origin <your-branch>`
6. Submit a pull-request if you are ready for your work to be reviewed and published to the live site

### Resources, Tips & Notes

#### Helpful VSCode plugins

- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) (markdown syntax help)
- [MDX Preview](https://marketplace.visualstudio.com/items?itemName=xyc.vscode-mdx-preview) (markdown live preview)

#### Markdown Help

- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
