module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", {"code": 140}]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    },
    {
      files: ["src/**/*.spec.ts", "src/**/*.d.ts"],
      parserOptions: {
        project: "./src/tsconfig.spec.json",
      },
      extends: ["plugin:jasmine/recommended"],
      plugins: ["jasmine"],
      env: {jasmine: true},
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "airbnb-typescript/base",
        "prettier",
        "plugin:prettier/recommended"
      ],
      rules: {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "import/prefer-default-export": "off"
      }
    },
  ]
};
