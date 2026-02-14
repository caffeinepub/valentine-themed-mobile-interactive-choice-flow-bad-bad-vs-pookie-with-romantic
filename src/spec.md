# Specification

## Summary
**Goal:** Build a mobile-first, Valentine-themed single-page interactive choice flow with cute/funny/romantic styling and a short message outcome.

**Planned changes:**
- Create a mobile-first single-screen experience with a consistent pink-forward Valentine aesthetic (no blue/purple as primary colors) across typography, spacing, buttons, and dialogs.
- Implement the opening view with heading text exactly "What are you?" and two pop-up style options labeled exactly "bad bad" and "pookie".
- On selecting "bad bad", show a dialog with the exact text "no you're pookie" and a clear "go back" action to return to the choice screen.
- On selecting "pookie", show a romantically styled message view/dialog containing: "you're the most amazing person in my life, seeing you makes me smile and you're highlight of my day, you're special, love you."
- Add lightweight interactions/animations (pop-in dialogs, tap feedback, small heart confetti/floating hearts) optimized for smooth mobile performance.
- Add and use generated static images from `frontend/public/assets/generated` in the UI (no backend fetching).

**User-visible outcome:** On a phone, the user sees a pink Valentine-themed page asking “What are you?” with “bad bad” and “pookie” options; choosing “bad bad” shows “no you're pookie” with a back option, and choosing “pookie” shows the sweet Valentine message, all with playful animations and Valentine visuals.
