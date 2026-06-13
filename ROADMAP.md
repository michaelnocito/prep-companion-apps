# Roadmap — Analyst Sprint

## Vision principles

1. **One screen, one task.** The focused single-column layout is the
   product identity. Nothing covers or pushes the active task off-screen.
2. **The player always knows what to do next** — what they've done,
   where they're going, what to do right now.
3. **Every sprint mirrors a prep-kit kit, unit for unit.** Finish the
   sprint, go deeper in the kit. The sprint and the kit link to each other.
4. **The story carries.** Srbina's arc continues from sprint to sprint;
   each new sprint picks up where the last one left off.

## How a new sprint gets added

One folder, one self-contained `index.html`. Checklist in `CLAUDE.md`.
Planned order (matching the prep-kit learning order):

| Sprint | Status |
|---|---|
| Excel | ✅ Live — `excel/` |
| SQL | ✅ Live — `sql/` |
| Python | Planned next |
| Tableau | Planned |
| Stats | Planned |

## Active items

> Mike playtest feedback batch (June 13, 2026 — 1:11 AM ET), rated by
> friction-reduction impact first, then dev-practice sequencing
> (smallest certain win → broad sweep). Suggested order: A → B → C → D.

- 🔴 Blocker: —
- 🟠 High:
  - **A. Real spreadsheet coordinates on the practice sheet (Excel
    sprint).** The lesson asks for `=SUM(D2:D4)` but the table shows no
    column letters (A–E) or row numbers (1–4) — the player can't see
    what "D2" points at without decoding it in their head. Add a
    spreadsheet-style header row/column (grey, like real Excel). Highest
    friction fix in the batch; small, contained. Check the SQL sprint's
    tables too (lower stakes — queries use column names, not grid refs).
  - **B. Prep-kit match links should deep-link to the LESSON, not the
    kit root (both sprints).** Needs (1) `#lesson-<id>` hash routing on
    load in analyst-prep-kit excel + sql kits (mirror the existing
    `#exam-<section>` pattern in the Final kit), (2) per-lesson `kitId`
    in both games' lesson data, URL = `KIT_URL + '#lesson-' + id`.
    Two repos; analyst-prep-kit side ships under its own version/
    changelog rules. Started scoping June 13: neither kit currently
    reads `location.hash` for lessons.
- 🟡 Medium:
  - **C. Case Log — the analyst's running notebook (per sprint).** Each
    sprint opens with ONE business question (Excel: "Which leads should
    Srbina's team focus on, and why?"). Every completed lesson appends a
    one-line entry — what we just learned *relative to answering that
    question* (e.g. L4: "Total pipeline = 3,040 — now we know the size
    of the prize"). Collapsible `details.collapser` row, fills as you
    play, and the completion screen renders the full log as the
    beautiful wrap-up: question → evidence trail → recommendation →
    "the data outgrew the spreadsheet → continue in SQL Sprint" funnel
    to the next part. This is the analyst workflow made visible
    (question → evidence → recommendation) and the strongest
    story/retention feature in the batch — but it's net-new design, so
    it follows the two quick fixes. NOTE: Mike's feedback names the
    funnel order excel → sql → tableau → power bi, which differs from
    the roadmap's "Python next" — decide before building the wrap-up's
    forward link for SQL.
  - Python Analyst Sprint (Part 3 — continue Srbina's story; mirror the
    Python Prep Kit units; in-browser execution like the kit's Pyodide
    terminal, or graded snippets if Pyodide is too heavy for the
    one-screen layout) — **sequence vs. Tableau/Power BI pending the
    order decision above.**
- 🟢 Low:
  - **D. Per-lesson dynamic visuals sweep (both sprints).** Today every
    lesson shows the same static table(s); Mike: "nice, but a bit
    generic and not dynamic to the question." Flagship example: XLOOKUP
    should visibly pull from a SECOND sheet/table (that's the whole
    point of lookups). Review all 28 lessons (14×2) and give each a
    visual that demonstrates its specific concept — highlight the range
    a formula touches, show the second table for lookups, show the
    before/after for TRIM, etc. Broad sweep; do AFTER A (grid headers
    change the visual layer) and ideally after C (case-log entries may
    reuse per-lesson visuals).

## Parking lot

- Tableau Analyst Sprint (needs a chart-building interaction that fits
  one-screen-one-task)
- Stats Analyst Sprint
- Shared progress across sprints (e.g. "Part 1 complete" badge visible
  on the hub) — only if it can be done without an account
