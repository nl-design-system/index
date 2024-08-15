module.exports = {
  '*': 'prettier --ignore-unknown --write',
  'package.json': 'npmPkgJsonLint --allowEmptyTargets',
  '*.md': 'markdownlint',
  '*.{js,cjs,mjs,jsx,ts,tsx}': 'eslint --no-error-on-unmatched-pattern',
  '*.{css,scss}': 'stylelint --allow-empty-input',
};
