import hamburguerMenu from './scripts/menu_hamburguesa.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('.panel-btn', '.panel', '.menu a');
});
