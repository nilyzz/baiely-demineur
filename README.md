# BAIELY MINES

The site is static. Its styles, icons, and Inter/Orbitron fonts are stored in this project, so serving or opening the game does not require Node.js or external asset CDNs.

After changing Tailwind classes in `index.html` or `baiely_demineur.js`, regenerate that file with:

```powershell
npm.cmd ci
npm.cmd run build:css
```

The Tailwind version and theme configuration are pinned in `package.json` and `tailwind.config.cjs` to keep generated styles reproducible. Third-party license notices are in `THIRD_PARTY_NOTICES.md` and `assets/licenses/`.
