# Broward County Web Style Guide

## Local Development Workflow

- 1. Make a branch for yourself
- 2. Clone it to your desktop
- 3. Do your development thing
- 4. Create a pull request
- 5. Rinse & repeat

## Local Development Setup (Windows)

- 1. Prerequisite: Install Node & NPM globally
- 2. `cd path/to/docs`
- 3. Install dependencies by running `npm install`
- 4. Run `yarn`
  - if errors occur, may also require:
  - updating Node by running `npm install npm@latest -g` (or downloading latest version from [nodejs.org](https://nodejs.org)),
  - fixing dependency issues by running `npm audit fix`, and/or
  - installing Microsoft's Build Tools by running `npm install --global --production windows-build-tools` from Powershell (as Administrator)
- 5. Install Gatsby CLI by running `npm i -g gatsby-cli`
- 6. Fix any dependency issues by running `npm audit fix`
- 7. Develop Gatsby locally by running `npm run develop`

## Editing Gatsby by Shadowing

- 1. Remain calm...

## Version Control (Github)

You may have to fix line-endings by running `git config --global core.autocrlf true` if you receive a CRLF error.

- 1. `cd path/to/docs`
- 2. `git init`
- 3. `git add .`
- 4. `git commit -m "your commit message"`
- 5. `git push origin <your-branch>`
- 6. Submit a pull-request if you are ready for your work to be reviewed and published to the live site.
