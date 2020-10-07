https://www.npmjs.com/package/strapi-provider-upload-cloudinary
STRAPI WYSIWYG
https://strapi.io/documentation/v3.x/guides/registering-a-field-in-admin.html#setup

➜ npx create-next-app path-to-folder
➜ touch tsconfig.json
➜ npm i -D typescript @types/react @types/node
➜ npm run dev

# Create src folder
# Create Editorconfig
# Configure eslint
➜ npx eslint --init
➜ npm i -D eslint-plugin-react-hooks
# Instalar prettier
➜ npm i -D prettier eslint-config-prettier eslint-plugin-prettier

# Install styled-components
➜ npm i styled-components
➜ npm i -D @types/styled-components
https://github.com/vercel/next.js/tree/master/examples/with-styled-components

```ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }
`;

export default GlobalStyles;
```

## JEST
npm i -D jest @types/jest
npm i -D @babel/preset-typescript
npm i -D @testing-library/react @testing-library/jest-dom
npm i -D jest-styled-components

CONFIGURAR .eslintrc
```
"env": {
  ...
  "jest": true,
  "node": true
  ...
}
```

Criar arquivo .jest/jest-setup.ts

```
import '@testing-library/jest-dom';
import 'jest-styled-components';
```

criar arquivo jest.config.js

```
module.exports = {
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/.jest/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/'],
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  collectCoverage: true,
};
```

configurar .babelrc

```
{
  "presets": [
    "next/babel",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true
      }
    ]
  ],
  "env": {
    "test": {
      "plugins": [
        [
          "styled-components",
          {
            "ssr": false,
            "displayName": false
          }
        ]
      ]
    }
  }
}
```
Lembrar do types
