#!/bin/bash
set -e
cd /home/claude/keiba
V=${V:-$(date +%Y%m%d%H%M)}
mkdir -p dist/icons
node_modules/.bin/esbuild src/main.js --bundle --minify --format=esm --target=es2020 --outfile=dist/app.js --log-level=warning
sed "s/__V__/$V/g" web/index.html > dist/index.html
sed "s/__V__/$V/g" web/sw.js.tpl > dist/sw.js
cp web/style.css web/manifest.webmanifest dist/
cp web/icons/*.png dist/icons/
echo "$V" > dist/version.txt
ls -la dist | head; du -sh dist/app.js
