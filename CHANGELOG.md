# Changelog — Sales Sprint

All notable changes to the Sales Sprint games. Versioning: PATCH for
bug/content-only fixes, MINOR for visible UX changes, MAJOR for
restructures or breaking changes.

---

## v1.0.1 — June 12, 2026

**Repo renamed** from `sales-sprint` to `prep-companion-apps` — the home
for all companion games to the Analyst Prep Kit. Live URLs moved to
https://michaelnocito.github.io/prep-companion-apps/ (the old
`excel-sales-sprint` / `sql-sales-sprint` redirect stubs and all
cross-promo links were updated to match). Game branding is unchanged —
the series is still Sales Sprint.

## v1.0.0 — June 12, 2026

**Consolidated repo.** The Excel and SQL Sales Sprints now live together
in one scalable repo, mirroring the analyst-prep-kit structure (one
subdirectory per skill, hub page at the root).

- `excel/` — Excel Sales Sprint moved here from the `excel-sales-sprint`
  repo (full git history preserved; that repo now redirects here)
- `sql/` — SQL Sales Sprint moved here from the `sql-sales-sprint` repo
  (that repo now redirects here)
- New hub page at the root: both sprints, story order, prep-kit cross-link
- Both games: "← All sprints" link in the top bar; story links between
  the games are now relative (`../excel/`, `../sql/`)
- Excel sprint completion screen now offers the SQL sprint as the next
  step in the story
- `tools/check-syntax.js` — one dev command syntax-checks every page

### Pre-consolidation history (excel-sales-sprint repo, preserved in git)

- Focused-only layout: single centered column, overview and extras
  collapsed by default ("one screen, one task")
- 14-lesson curriculum matched unit-for-unit to the Excel Prep Kit
- Formula input requires the typed `=` (real-Excel habit), with a
  teaching nudge when it's missing
- First-try 🔥 streak, achievements, coffee-break mini-game, glossary
  ("💡 Explain it to me")

### Pre-consolidation history (sql-sales-sprint repo)

- SQL Sales Sprint v1: 14 lessons matched to the SQL Prep Kit, real
  in-browser SQLite via sql.js, result-based grading (your query is
  graded on what it returns, not the exact text you typed)
