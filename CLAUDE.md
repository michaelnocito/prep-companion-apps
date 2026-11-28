# Dev guide — Analyst Sprint

Free browser games teaching data-analyst skills, live at
**https://michaelnocito.github.io/prep-companion-apps/** (GitHub Pages, static,
built from `main`). Companion games to the Analyst Prep Kit
(`github.com/michaelnocito/analyst-prep-kit`) — each sprint mirrors one
kit, unit for unit.

Local repo: `C:\Users\Mike\Projects\prep-companion-apps`
`ROADMAP.md` = what's next · `CHANGELOG.md` = what shipped.

## Structure

One subdirectory per skill, one self-contained `index.html` per game
(inline CSS/JS, no build step). Hub page at the root links every sprint.
`excel-sales-sprint` and `sql-sales-sprint` are archived redirect-stub
repos pointing here — don't push game changes there.

## Product identity (don't regress these)

- **One screen, one task.** Single-column layout. SQL (v1.5.0 on) and Excel
  (v1.11.0 on) use candy design N: max 560px, screens Home → lesson intro → question →
  summary, one main button in the bottom dock, long lists collapsed.
  Tableau (max 860px) moves to it in its AS-1 pass. No mode
  toggles, with one exception: the answer-mode switch (Blocks · Fill · Type)
  on question screens (SQL v1.13.0, Excel v1.14.0, Mike's call). The pick is saved in the
  shared key `candy.answer.v1` and becomes the default everywhere. Hints sit
  above the answer so they stay visible with a phone keyboard open.
- **The story carries.** Srbina's arc runs Part 1 (Excel) → Part 2 (SQL)
  → onward. A new sprint opens with "the story so far" and links back
  with relative URLs (`../excel/`).
- **Real-tool habits.** Excel: the typed `=` is REQUIRED in formula
  answers (missing `=` gets a teaching nudge and breaks the streak); formulas
  run in the page's evaluator and are graded on the result.
  SQL: queries actually run (sql.js) and are graded on the result
  returned, not the text typed.
- **Wording rules:** glossary button is "Explain it to me" (never
  "Learn this first"; no emoji in buttons from SQL v1.5.0 on). Don't use the phrase "plain English" in UI copy
  (removed as insensitive); say "plain-language".
- Every lesson has a `why` (career context) and a `kitMatch` link to the
  matching prep-kit lesson.

## Adding a new sprint (the checklist)

1. Copy the closest existing game (`sql/index.html` is the newest) into
   a new folder named after the skill (`python/`, `tableau/`, `stats/`).
2. Re-theme title and copy; use candy design N (tokens and screen
   patterns from `sql/index.html`).
3. Write 14 lessons matched unit-for-unit to that skill's prep-kit
   curriculum, ending with a from-memory checkpoint + a written/business
   recommendation lesson.
4. Continue the story: opening "story so far" panel + link to the
   previous part; previous part's completion screen links forward.
5. Update: hub `index.html` (new card, remove from "Coming next"),
   `README.md` table, `ROADMAP.md`, footer links in the new game
   ("← All sprints", prep-kit kit links, GitHub link).
6. Cross-promo: point that kit's "Learn by playing" callout in
   analyst-prep-kit at the new sprint.
7. Verify: `node tools/check-syntax.js` (all pages must parse), then
   spot-check the live URL after Pages deploys.

## Versioning + workflow

Same as analyst-prep-kit: semver tags in `CHANGELOG.md` — PATCH for
bug/content-only, MINOR for visible UX, MAJOR for restructure/breaking.
`git pull --rebase` before every push. Commit messages are plain
descriptive sentences.
