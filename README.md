# Sales Sprint

**Learn data-analyst skills by playing — coach Srbina from sales rep to analyst, one small task at a time.**

A family of free, browser-based games for people starting out in data analytics. Each sprint is 14 bite-size lessons in one skill, with a story that carries from game to game. No install. No account. Just open it and play.

→ **[Play live](https://michaelnocito.github.io/sales-sprint/)**

| Sprint | Story | Play |
|---|---|---|
| **Excel Sales Sprint** | Part 1 — Srbina has a spreadsheet, a list of leads, and a big conversation coming up | [Play →](https://michaelnocito.github.io/sales-sprint/excel/) |
| **SQL Sales Sprint** | Part 2 — the lead data outgrew the spreadsheet and moved to a real database | [Play →](https://michaelnocito.github.io/sales-sprint/sql/) |
| Python · Tableau · Stats | Coming next | — |

---

## How it works

- Open a sprint in any browser
- Read the one task on screen — one screen, one task, zero clutter
- Type a real formula or a real SQL query (queries actually run, against an in-browser SQLite database powered by [sql.js](https://sql.js.org/))
- Get instant feedback, earn achievements, build a 🔥 first-try streak
- Stuck? Tap **💡 Explain it to me** for a plain-language breakdown

Every lesson says why it matters on the job.

---

## Part of the Analyst Prep Kit family

Each sprint mirrors a kit in the **[Analyst Prep Kit](https://michaelnocito.github.io/analyst-prep-kit/)**, unit for unit, and every lesson links to its matching prep-kit lesson for going deeper:

- Excel Sales Sprint ↔ [Excel Prep Kit](https://michaelnocito.github.io/analyst-prep-kit/excel/)
- SQL Sales Sprint ↔ [SQL Prep Kit](https://michaelnocito.github.io/analyst-prep-kit/sql/)

The sprints are the warm-up; the prep kit is the full course — Excel, SQL, Python, Tableau, Power BI, Stats, Chart Literacy, Forecasting, Interview prep, a week-1 job simulator, and a cross-subject final exam. All free, all in the browser.

---

## Repo layout

```
sales-sprint/
  index.html             ← hub page linking every sprint
  excel/index.html       ← Excel Sales Sprint (self-contained, no build step)
  sql/index.html         ← SQL Sales Sprint (self-contained, sql.js via CDN)
  tools/check-syntax.js  ← dev check: node tools/check-syntax.js
  CHANGELOG.md           ← what shipped
  ROADMAP.md             ← what's next
```

Each game is a single self-contained `index.html` — CSS, JS, and content inline. Adding a new sprint means adding one new folder.

---

## Beta — feedback genuinely welcome

This is a beta. It works, it's playable, and it's already teaching things — but there's more to build.

If you play it and something feels off, too hard, too easy, unclear, or missing — **open an issue or drop a comment.** I'm building this in the open and I'd love to develop it alongside people who are actually learning.

**Want to contribute?** PRs are open. Ideas are welcome. If you're learning these tools yourself, you're exactly the right person to help improve this.

---

**→ [sales-sprint](https://github.com/michaelnocito/sales-sprint)** &nbsp;·&nbsp; HTML · JavaScript · sql.js
