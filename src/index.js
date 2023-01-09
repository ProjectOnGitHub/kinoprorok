import './index.css';

function requireAll(icon) {
  icon.keys().forEach(icon);
}

requireAll(require.context('../src/images/svg', true, /\.svg$/));
