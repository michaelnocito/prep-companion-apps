# Changelog — Analyst Sprint

All notable changes to the Analyst Sprint games. Versioning: PATCH for
bug/content-only fixes, MINOR for visible UX changes, MAJOR for
restructures or breaking changes.

---

## v1.4.0 — June 16, 2026

**Tableau Analyst Sprint (Part 3) — new game.** The third sprint, `tableau/`,
continues Srbina's story: she can query the database now, but a grid of results
lost the room, so she learns to *show* the data in Tableau. 14 bite-size lessons
matched unit-for-unit to the Tableau Prep Kit (how Tableau sees data → blue
dimensions vs. green measures → aggregation → bar & line charts → sorting →
filtering → the Marks card & color → calculated fields → counting → chart choice
→ dashboards → a from-memory checkpoint → a written recommendation).

- **New interaction: a drag-to-shelf viz builder.** Instead of a typed formula
  (Excel) or query (SQL), build lessons use a click-to-place Tableau workspace —
  a Data pane of blue/green field pills, Columns/Rows/Filters shelves, a Marks
  card (mark type + Color), and a Sort control. Placing fields draws a live SVG
  chart (bars, lines, colored bars), and lessons are graded on **what's on the
  shelves**, not pixels — the visual parallel to SQL's result-based grading.
- **Same dataset as the SQL sprint** (the eight leads, same revenue/region
  totals) plus a close Month and Rep, so the numbers carry across parts —
  East 3600 / West 3050 / South 2740 is the same answer in a new tool.
- **The IF thread continues:** the calculated-field lesson echoes Excel's
  `=IF(...)` and SQL's `CASE WHEN` with Tableau's `IF [Revenue] > 1000 THEN
  "Priority" ELSE "Later" END` — one decision, three languages.
- **Story carries both ways:** Tableau opens with "the story so far" linking
  back to Excel + SQL; the **SQL sprint's completion screen now funnels forward
  to Tableau**; Tableau's completion teases the upcoming Python sprint.
- Hub page: new Part 3 card (Tableau removed from "Coming next"); README,
  ROADMAP (Tableau now Part 3, Python Part 4), and footer links updated.
- `node tools/check-syntax.js` green on all four pages.

## v1.3.0 — June 13, 2026

**Real spreadsheet coordinates on the Excel sprint's practice sheet**
(roadmap item A, from Mike's June 13 playtest batch). The sheet now has
the grey Excel-style chrome: column letters A–E across the top and row
numbers 1–4 down the side, so `=SUM(D2:D4)` visibly points at the
Revenue cells. Headers are row 1, Northwind is row 2 — matching the
`data-cell` refs the lessons already used. SQL sprint tables left as-is
on purpose: SQL queries reference column NAMES, not grid coordinates,
and A1-style chrome would teach the wrong mental model there.

## v1.2.0 — June 12, 2026

**Instruction box moved next to the answers** (both games). The gold
"what do I do now" instruction used to sit at the top of the lesson,
far from the answer buttons/input it referred to — Mike's playtest:
"took me a minute to figure out what was being asked." It now renders
directly above the answer area (after the data tables), so the ask and
the action are always together. Stale "Read the task below…" wording
updated to match the new order.

## v1.1.0 — June 12, 2026

**Series rebranded: Sales Sprint → Analyst Sprint** (Excel Analyst Sprint,
SQL Analyst Sprint) — names now match what people actually search for.
SEO pass alongside it: keyword-rich page titles ("Free Excel Practice Game
for Data Analysts") and meta descriptions on both games and the hub.
Srbina and the sales-data story are unchanged.

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
