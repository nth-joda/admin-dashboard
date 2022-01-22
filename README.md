https://nth-joda.github.io/admin-dashboard/

# Eslint and preittier setup : https://www.imaginarycloud.com/blog/how-to-configure-eslint-prettier-in-react/

npm install --save-dev eslint prettier
npx install-peerdeps --dev @imaginary-cloud/eslint-config-react

--> After installing @imaginary-cloud/eslint-config-react configuration, add the next two lines to the package.json file

```json
"eslintConfig": {
   "extends": "@imaginary-cloud/react"
},
"prettier": "@imaginary-cloud/prettier-config"
```
