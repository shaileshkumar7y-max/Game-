# V3 upgrade notes

This ZIP is a root-level replacement package for the current `Game-` static website.

Replace these runtime files in the repository root:
- `index.html`
- `manifest.webmanifest`
- `icon.svg`
- `sw.js`

Also replace `README.md` and `smoke-test.mjs`, and add `INSTALL_HINGLISH.md`, `QA_REPORT.md`, and this note.

Before upload, download the current root files or create a GitHub backup branch. GitHub writes were not available from the connected integration during this build, so this ZIP is not yet deployed.

After upload, inspect the Actions workflow, then open the live site and hard refresh. The service-worker cache name is changed to V3 so the browser should request a fresh shell.
