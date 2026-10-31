# Optional launch button for the existing Adults 18+ screen

In the root `App.tsx`, locate the following existing line inside the unlocked Adults section:

```tsx
<div className="adult-game-grid">
```

Insert this block immediately **before** that line. It is additive and does not remove or replace any existing game cards:

```tsx
<a
  href={`${import.meta.env.BASE_URL}after-hours/`}
  className="adult-v2-launch"
>
  <span aria-hidden="true">🌙</span>
  <span>
    <strong>Explore After Hours V2</strong>
    <small>New Solo and Couples games · Local-only · 18+</small>
  </span>
  <span aria-hidden="true">→</span>
</a>
```

Append this CSS to the root `styles.css`:

```css
.adult-v2-launch {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0 0 18px;
  padding: 16px 18px;
  color: #fff7fb;
  text-decoration: none;
  border: 1px solid rgba(255, 102, 142, .48);
  border-radius: 16px;
  background: linear-gradient(110deg, rgba(255, 102, 142, .16), rgba(165, 138, 255, .15));
}
.adult-v2-launch > span:first-child { font-size: 25px; }
.adult-v2-launch > span:nth-child(2) { display: grid; gap: 3px; flex: 1; }
.adult-v2-launch strong { font-size: 14px; }
.adult-v2-launch small { color: #b8a8b8; font-size: 11px; }
.adult-v2-launch:hover { border-color: rgba(255, 102, 142, .9); }
```

Vite's `BASE_URL` keeps the route correct when the repository is hosted under `/Couple-game-/` on GitHub Pages.
