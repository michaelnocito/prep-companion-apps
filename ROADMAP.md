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
| Excel (Part 1) | ✅ Live — `excel/` |
| SQL (Part 2) | ✅ Live — `sql/` |
| Tableau (Part 3) | ✅ Live — `tableau/` |
| Python (Part 4) | Planned next |
| Stats | Planned |

> **Sprint order updated (June 16, 2026):** Tableau shipped as **Part 3**,
> ahead of the previously-planned Python, at Mike's direction — the
> SQL→Tableau bridge (query → visualize) is the tightest narrative beat,
> and the SQL sprint now funnels forward to Tableau. Python becomes
> **Part 4** (the story's next chapter: automate and scale what Srbina
> now does by hand).

## Active items

> Mike playtest feedback batch (June 13, 2026 — 1:11 AM ET), rated by
> friction-reduction impact first, then dev-practice sequencing
> (smallest certain win → broad sweep). Suggested order: A → B → C → D.

- 🔴 Blocker: —
- 🟠 High:
  - ✅ **A. Real spreadsheet coordinates on the practice sheet — SHIPPED
    v1.3.0 (June 13, 2026), awaiting Mike's playtest.** Column letters
    A–E + row numbers 1–4 in grey Excel chrome. SQL sprint deliberately
    unchanged (queries use column names, not grid refs).
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
    it follows the two quick fixes. Ship order (updated June 16, 2026):
    Excel → SQL → **Tableau (Part 3, live)** → Python (Part 4) → … so
    the SQL sprint's wrap-up funnels forward to Tableau, and Tableau's
    funnels forward to Python.
  - Python Analyst Sprint (Part 3 — continue Srbina's story; mirror the
    Python Prep Kit units; in-browser execution like the kit's Pyodide
    terminal, or graded snippets if Pyodide is too heavy for the
    one-screen layout)
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

- Stats Analyst Sprint
- Shared progress across sprints (e.g. "Part 1 complete" badge visible
  on the hub) — only if it can be done without an account

---

## Dev cockpit (not started)

**Every new app starts with one now.** This one does not have one yet, so it is owed.

The dev cockpit is the instrument panel that makes it possible to exercise one piece of the
app repeatedly without working through everything around it. The canon — the full control
list, the reasoning behind each control, and the app-applicable translation of each — is
`BUILD_PILLARS.md`, section **"A. The dev cockpit"**, in `C:\Users\Mike\Projects\play-area`.
The implementation is already written: `play-area/dev-cockpit.js` plus
`play-area/harness-lib.js` for the headless half. Copy them in; declare this app's own knobs.

What that means here:

- **Jump straight to one screen, one state, one record** — no clicking through a flow to
  reach the thing being worked on
- **Bypass auth, quotas, rate limits and paywalls** while testing (the no-fail toggle)
- **Freeze and single-step** any animation, timer, queue or polling loop
- **Slow-motion** on transitions and network timing, so what the eye missed becomes visible
- **A latency readout** — time to first paint, time to a response landing
- **Instant reset to a known seeded state**, in one keystroke
- **Layout, focus-order and hit-target overlays**
- **Every timing, threshold and limit the app's feel depends on, on a live slider**
- **A numbers dump** — one keypress writes a pasteable line plus a `<app>-tuning.txt` file.
  That file is the handoff to the next session; without it the tuning dies with the tab.
- **A headless harness** (`node <app>-harness.js`) so an agent can prove a change without
  asking a human to click

Gated behind `?dev=1` (auto-on for localhost), wrapped in `DEV:BEGIN` / `DEV:END` strip
markers, and nothing inside it load-bearing: delete the block and the app runs identically.
