# Terminal-style portfolio

A terminal-themed portfolio. Visitors type commands to explore your projects.

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then go to `http://localhost:8000`.

## Commands

| Command | Description |
|--------|-------------|
| `help` | List available commands |
| `projects` | List projects |
| `open hms` | Health Management System details |
| `open ecommerce` | E-Commerce KPI Dashboard details |
| `open churn` | Customer Churn Analysis details |
| `skills` | Tech stack |
| `contact` | Contact links |
| `clear` | Clear the terminal |
| `whoami` | Short intro |

## Customize

- **Contact:** Edit the `contact` command in `script.js` and replace `your@email.com` and the LinkedIn URL.
- **Projects:** Update the `projects` object in `script.js` to change descriptions.
- **Repo/demo links:** Add `repo` and `demo` URLs to each project in `script.js`; they appear as clickable links when you run `open <project>`.
- **ASCII art:** Change the banner in `index.html` (`.ascii-art`).
