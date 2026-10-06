# UK Highway Design Standards Q&A portal

Open `index.html` in Chrome or Edge (double-click). No server needed.

## Files to publish together
- `index.html`, `config.js`, `clauses.js`, and the `figures/` folder (figure images shown with the clauses).
- `build_index.py` and `worker.js` are tools, they do not need to be published.

## Answer styles
- **Clause-based**: works offline. A digest of the quoted clauses, no reasoning.
- **AI reasoning**: Claude interprets the question, plans the search, follows cross-references (cited tables and clauses), then reasons from the clauses and cites them. Every cited clause is checked against the evidence shown, and cited clauses are marked "Used in answer".

## Turning on AI reasoning
- Private use: open AI settings in the sidebar, pick Claude (Anthropic) or Gemini (Google), and paste that provider's key. It stays in your browser. A free Gemini key is available from Google AI Studio (aistudio.google.com); the Model field is pre-filled, but copy the exact current ID from AI Studio.
- Public site without exposing a key: deploy `worker.js` as a Cloudflare Worker (steps are at the top of the file), then put its address in `config.js` as `endpoint`. Add a rate limit and a spend limit on the key.

## Rebuilding after new documents
`python Portal/build_index.py` regenerates `clauses.js` and copies new figures into `figures/`.

## Searching
Plain questions, a document code ("CD 109"), a clause number ("CD 116 cl. 3.8") or a table ("Table 2.10 CD 109").
