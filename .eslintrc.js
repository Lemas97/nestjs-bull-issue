{
  "env": {
      "node": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "eslint-config-standard-with-typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "./tsconfig.json",
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-non-null-assertion": "off"
  }
}
