# 002-add-config-gh-pages

[index](index.md)


Follow the steps explained [here](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)

<details>
<summary>
<i>Changed package.json to specify the homepage:</i>
</summary>

```
  "homepage": "https://tirq.github.io/react-tic-tac-toe/",
```
</details>



<details>
<summary>
<i>Run command to install dependencies related with gh-pages:</i>
</summary>

```
  npm install --save gh-pages
```
</details>


<details>
<summary>
<i>Add predeploy/deply commands on script section:</i>
</summary>

```
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
```
</details>

<details>
<summary>
<i>Finally, execute command to deploy app on gh-pages:</i>
</summary>

```
npm run deploy
```
</details>


