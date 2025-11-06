[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/DZepDCgF)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21492843&assignment_repo_type=AssignmentRepo)
nvm install --lts # for solving 

rm -rf node_modules package-lock.json # delete all incompatible packages

npm install # reinstall every packages according to pacakge.json

npm run dev # for local development

npm run build # for server deployment; upload the ./dist folder to a server

Environment
-----------
You can override the backend API base URL when running the dev server or build by providing a Vite env variable - create a file named `.env` in the project root and add:

```
VITE_API_BASE=https://your-backend.example.com
```

An example `.env.example` is included in the repo.

Testing
-------
We added a minimal test setup using Vitest and Testing Library. To run tests locally:

```
npm install
npm test
```

Deployment to GitHub Pages (step-by-step)
-------------------------------------
Tren's instructions are followed here. Basic steps:

1. Build the static site:

```
npm run build
```

2. The `./dist` folder contains everything needed. To host on GitHub Pages, create a repository named `<your-username>.github.io` and push the `dist` content to the `main` branch of that repo (or use an action to deploy).

Example quick deploy using a gh-pages branch (manual):

```
# build
npm run build
# publish dist to gh-pages branch (requires git remote pointing to your-pages repo)
cd dist
git init
git add -A
git commit -m "Publish site"
git push --force <remote> main:gh-pages
```

Or use a GitHub Action to build and deploy automatically (we include a sample CI workflow in `.github/workflows/ci.yml`).
