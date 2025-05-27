// script.js

document.getElementById('run-code').addEventListener('click', () => {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;
  
    const output = document.getElementById('output');
    output.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode;
  });
  