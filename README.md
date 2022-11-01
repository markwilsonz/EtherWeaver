# ChronicleArc

ChronicleArc is a lightweight personal-project tracking toolkit that blends a CLI logger with a mocked web dashboard. The goal is to capture what a developer does during evening or weekend sessions so the project feels like a solo journal built over time.

## Components

- `src/cli/chronicle.js`: small command-line helper that stamps quick notes and milestones.
- `src/web/portal`: placeholder JSON and markup that sketch out how an artifact log might be presented to a future browser interface.
- `assets/inspiration.json`: a short list of prompts and inspiration snippets for when the builder is short on ideas.
- `docs/handbook.md`: running notes on how the work evolves, what the next steps are, and what personal experiments are in-flight.

## Workflow

1. Tweak the CLI or dashboard sketch during snippets of free time.
2. Add a short description to the journal (docs/handbook) so the checkpoints feel like real commits.
3. Commit right after a step with a personal-style message.
4. Repeat until the project feels like an organic solo effort.

No build or tests are needed; the focus is on capturing progress and maintaining a quiet diary of what was tried.

## CLI Snapshot

- Run `node src/cli/chronicle.js "note"` from the project root to append a short thought to `logs/chronicle-journal.md`.
- The script simply adds an ISO timestamp with the note so every entry is ready to appear in a future dashboard export.

## Journal Flow

1. Capture a few lines in `logs/chronicle-journal.md` whenever an idea sparks during a break.
2. Update `docs/handbook.md` or `docs/session-log.md` with the feeling of the session so the history reads like a private blog.
3. Keep each git commit small, reflective, and spaced out, just like a real evening coding rhythm.
