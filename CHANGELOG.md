# Changelog — Analyst Sprint

All notable changes to the Analyst Sprint games. Versioning: PATCH for
bug/content-only fixes, MINOR for visible UX changes, MAJOR for
restructures or breaking changes.

---

## v1.14.0 — November 28, 2026

**Three ways to answer in the Excel sprint.** The 7 formula lessons (4–8, 11,
13) get the same "How to answer" switch as SQL:

- **Blocks:** tap tiles to build the formula; `=` is a tile, and functions,
  cells, colons and commas are separate tiles. Two decoy tiles per lesson
  target common slips (comma vs colon, SUM vs AVERAGE, `>=` vs `>`, single
  quotes, a fixed cell instead of a lookup). A decoy explains itself when the
  check fails.
- **Fill:** the formula with the lesson's new piece left blank; `=` is shown
  as fixed text.
- **Type:** the fx box, with a key strip above it (`= ( ) , : $ "` plus the
  lesson's function) that types at the cursor.

The default is shared with SQL (`candy.answer.v1`): a mode picked in one
sprint opens the other in that mode, and the one-time tip shows only once
across both. The `=` is still required in every mode. Grading is unchanged:
the formula runs in the page's evaluator and is checked on the result and
on hidden data. The hint now sits above the answer on every question screen.

---

## v1.13.0 — November 28, 2026

**Three ways to answer in the SQL sprint.** Lessons 4–13 now have a "How to
answer" switch above the answer:

- **Blocks:** tap tiles to build the query in order, tap a placed tile to
  send it back, Clear to start over. Each lesson adds two decoy tiles.
- **Fill:** the query with the lesson's new pieces left blank.
- **Type:** the free box, with a strip of SQL keys above it that types at the
  cursor and keeps the phone keyboard open.

New visitors start on Blocks. Whatever mode you tap becomes your default
(shared key `candy.answer.v1`), and a one-time tip explains the switch. All
modes are graded the same way: the query runs and the result is checked.
The hint now sits above the answer on every question screen, so it stays in
view with the iPhone keyboard open.

---

## v1.12.0 — November 28, 2026

**Color picker open by default.** In the Excel and SQL sprints the color strip
(9 flavors + light/dark) now starts open on every screen instead of hiding
behind the palette button. First-time visitors also see a one-time "New here?"
tip under it; it goes away after Got it or the first color or mode pick, and
stays away on every page of the site (shared key `candy.hint.v1`).

---

## v1.11.0 — November 27, 2026

**Excel Analyst Sprint rebuilt.** Candy design N with one screen per task, a
Home story card, saved progress, stats and My data (CSV copy).

- Formulas run in a built-in evaluator and are graded on the result, with
  hidden data checks. Valid alternatives pass; typed constants do not.
- New 8-lead sheet (read-only) with a zero-Calls row and a padded name. All
  lessons re-keyed. XLOOKUP is labeled; INDEX/MATCH and VLOOKUP also count.
- Hints no longer show the answer; it appears after two misses.
- Content fixes: lesson count on the finish screen, stricter recommendation
  check, unsupported claims removed, shuffled options.

**SQL Analyst Sprint:** sample lead "Northwind" renamed to "Larkfield".

---

## v1.10.0 — November 27, 2026

**SQL Analyst Sprint: Home tells the story.** A story card replaces the comic
strip: you coach Srbina, a sales rep; her manager's question changes with each
unit; the goal is stated; and an 8-unit bar shows "You are here". Lessons 5
and 8 name who is asking. No grading or saved-data changes. 70 headless Chrome
checks pass (new test script; the v1.9.1 jsdom suite was not re-run); a planted
wrong-question bug was caught; screenshots at 390x844, 390x664 and desktop.

## v1.9.1 — November 27, 2026

**SQL Analyst Sprint: art credit and a shared color setting.**

- About shows "Art: Open Peeps by Pablo Stanley (CC0)".
- Colors are saved to the shared key `candy.theme.v1`, so a color picked
  here can follow the learner to other candy-design pages on this site.
  The old `sqlSprint.theme.v1` is read as a fallback and left in place.
- 175 headless checks pass (17 new); two planted bugs caught (read order,
  wrong key); Chrome screenshots at 390px and desktop, light and dark.

## v1.9.0 — November 27, 2026

**SQL Analyst Sprint: Srbina gets a real face, three new colors, and your
own data to query.**

- Srbina is drawn with Open Peeps by Pablo Stanley (CC0), generated with
  DiceBear: four moods (calm, smiling, thinking, celebrating), shirt in the
  chosen flavor color.
- New flavors: Black, Slate and Matrix (green-on-black, monospace headings).
- Stats: every Check writes a row to `attempts` and every solved lesson a row
  to `lesson_results`, with an active-time timer that skips time the page is
  hidden. Saved in the browser (save v1 → v2, progress kept). Attempts capped
  at 1,000 rows; ids never reused. Reset clears the logs.
- My Data (under More): your `lessons`, `attempts` and `lesson_results`
  tables, a free SQL box that runs on them, six challenges checked against
  your own rows (unlocked as lessons are finished), and Copy CSV per table.
- 158 headless checks pass (35 new); planted-bug check on the timer caught;
  Chrome screenshots at 390px, light and dark, all new flavors.

## v1.8.0 — November 27, 2026

**SQL Analyst Sprint: faces and spot art.** Srbina appears as a face only
(no body shapes) in the story strip. Each of the 8 units has its own small
picture on the lesson intro, and Srbina's face reacts in the result panel
(smiling or thinking). Done, Progress and Achievements show her face. The
question and glossary screens stay art-free. All art is decorative and
hidden from screen readers. 123 headless checks pass; Chrome screenshots.

## v1.7.0 — November 27, 2026

**SQL Analyst Sprint: a more inviting Home.** The story is an always-open,
illustrated 3-panel strip (spreadsheet → overflow → database) that recolors
with the chosen flavor, with a "Replay Part 1" link. The next-lesson hero
card gets lesson and unit chips and a round arrow; All lessons, More and
About get icon tiles and plain subtitles. Tappable cards are raised and
press down on tap. A palette button in the header opens colors and light/dark
on every screen. No content, grading or saved-data changes. 115 headless
checks pass; Chrome screenshots at 390px and desktop, light and dark.

## v1.6.0 — November 27, 2026

**SQL Analyst Sprint: calmer Home.** One tappable hero card for the next
lesson (with a one-line story and a "Story so far" link), and All lessons,
More (Progress, Achievements, Lunch break, All sprints) and About (footer)
as single collapsed rows. On a 390px phone, a new player sees the hero card
and Start with no scrolling. No content, grading or saved-data changes.
103 headless checks pass; Chrome screenshots at 390px and desktop.

## v1.5.0 — November 27, 2026

**SQL Analyst Sprint: candy design N and a content pass** (roadmap AS-1 for
SQL, item B for SQL; findings from `AUDIT_sql-analyst-sprint-content_v01`).

- New flow: Home → lesson intro (the job) → question (the task) → green or
  pink result panel (the payout) → summary. The glossary is a searchable
  reference screen. Six color flavors, saved light/dark, max width 560px,
  gray progress, one main button per screen.
- Progress is saved in the browser (lessons done, first-try streak, coffees
  served), so a reload no longer restarts at Lesson 1. Reset needs a second tap.
- Grading: hidden extra rows check Lessons 11 and 12, so shortcuts such as
  `HAVING region <> 'South'` or `>= 1000` no longer pass. Lesson 14 rejects
  negated sentences and asks for the 2100 figure.
- Teaching nudges for double-quoted text, wrong text case, a missing
  GROUP BY, and WHERE on SUM.
- Answer options shuffle. Hints show the query shape; the full answer appears
  after two misses. Lesson intros show a worked example on different data.
- Prep-kit links open the matching kit lesson (`#lesson-<id>`).
- Copy: "47 free lessons" (was 20), softer claims, a full IS NULL example,
  one instruction per lesson, "Explain it to me" without emoji, a
  "Runs on SQLite" note.
- Excel and Tableau sprints unchanged; their AS-1 pass is next.
- Checked with 95 headless tests (jsdom + sql.js 1.10.2) and Chrome
  screenshots at 390px and desktop. `node tools/check-syntax.js` green.

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
