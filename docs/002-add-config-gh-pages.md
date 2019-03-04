# 001-add-config-gh-pages

Follow the steps explained [here](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)

Changed package.json to specify the homepage:
```
  "homepage": "https://tirq.github.io/react-tic-tac-toe/",
```

Run command to install dependencies related with gh-pages:
```
  npm install --save gh-pages
```

Add predeploy/deply commands on script section:
```
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
```

Finally, execute command to deploy app on gh-pages:
```
npm run deploy
```