// Dev-only: syntax-check the inline <script> blocks in every game page.
// Run from the repo root:  node tools/check-syntax.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pages = ['index.html'];
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isDirectory() && fs.existsSync(path.join(root, entry.name, 'index.html'))) {
    pages.push(path.join(entry.name, 'index.html'));
  }
}

let failed = false;
for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  try {
    scripts.forEach(src => new Function(src));
    console.log(`OK    ${page} — ${scripts.length} inline script(s) parse cleanly`);
  } catch (e) {
    console.error(`ERROR ${page} — ${e.message}`);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);
