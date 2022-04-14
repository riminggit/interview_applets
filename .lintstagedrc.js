module.exports = {
  '*.+(js|ts|tsx)': ['eslint'],
  '*.{css,less}': ['stylelint --fix'],
  '*.{js,jsx,ts,tsx,css,less}': ['prettier --write'],
};
