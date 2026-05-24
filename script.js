const output = document.getElementById("output");
const input = document.getElementById("command-input");
const promptText = "visitor@kase:<span class=\"path\">~</span>$";

const projects = {
  hms: {
    name: "Health Management System",
    tag: "Python",
    desc: "Basic health record management system to store and organize patient data.",
    points: [
      "Designed system for storing and organizing patient data.",
      "Record creation, updates, and data retrieval.",
    ],
    tech: "Python",
    repo: "",      // e.g. "https://github.com/you/hms"
    demo: "",      // e.g. "https://your-demo.com/hms"
  },
  ecommerce: {
    name: "E-Commerce Sales KPI Dashboard",
    tag: "Python · Data Analysis",
    desc: "Sales analysis and product performance tracking with visualizations.",
    points: [
      "Analysed sales data to track revenue trends and product performance.",
      "Data cleaning and visualizations for business insights.",
    ],
    tech: "Python, Pandas, Matplotlib/Seaborn",
    repo: "",      // e.g. "https://github.com/you/ecommerce-kpi"
    demo: "",      // e.g. "https://your-streamlit-app.com"
  },
  churn: {
    name: "Customer Churn Analysis",
    tag: "Python · EDA",
    desc: "Telecom customer churn patterns and behaviour analysis.",
    points: [
      "Analysed telecom data to identify churn patterns and customer behaviour.",
      "Exploratory data analysis and visualizations.",
      "Impact of revenue, recharge activity, and tenure on churn.",
    ],
    tech: "Python, Pandas, Visualization",
    repo: "",      // e.g. "https://github.com/you/churn-analysis"
    demo: "",
  },
};

const commands = {
  help: {
    desc: "List available commands",
    run: () => `
<span class="line info">Available commands:</span>
<span class="line muted">  help              </span> — list commands
<span class="line muted">  whoami            </span> — about me
<span class="line muted">  projects          </span> — list projects
<span class="line muted">  open &lt;name&gt;     </span> — open a project (hms, ecommerce, churn)
<span class="line muted">  skills            </span> — tech stack
<span class="line muted">  education         </span> — education
<span class="line muted">  experience        </span> — internships
<span class="line muted">  certificates      </span> — certs & achievements
<span class="line muted">  contact           </span> — get in touch
<span class="line muted">  clear             </span> — clear screen
`,
  },
  projects: {
    desc: "List projects",
    run: () => `
<span class="line success">projects</span>
<span class="line muted">  hms       </span> — Health Management System
<span class="line muted">  ecommerce </span> — E-Commerce Sales KPI Dashboard
<span class="line muted">  churn     </span> — Customer Churn Analysis
<span class="line muted">  </span>
<span class="line info">Try: open hms</span>
`,
  },
  open: {
    desc: "Open project by name",
    run: (name) => {
      const key = (name || "").toLowerCase().trim();
      const p = projects[key];
      if (!p) {
        return `<span class="line error">Unknown project: ${name || "(none)"}</span>
<span class="line muted">Available: hms, ecommerce, churn</span>`;
      }
      const pointsList = p.points.map((pt) => `  • ${pt}`).join("\n");
      let links = "";
      if (p.repo || p.demo) {
        links = "\n<span class=\"line muted\">  </span>\n";
        if (p.repo) links += `<span class="line muted">  </span><a href="${p.repo}" target="_blank" rel="noopener">→ Repo</a>\n`;
        if (p.demo) links += `<span class="line muted">  </span><a href="${p.demo}" target="_blank" rel="noopener">→ Live demo</a>\n`;
      }
      return `
<span class="line success">${p.name}</span>
<span class="line muted">${p.tag}</span>
<span class="line muted">${p.desc}</span>
<span class="line muted">${pointsList}</span>
<span class="line muted">  </span>
<span class="line info">Tech: ${p.tech}</span>${links}`;
    },
  },
  skills: {
    desc: "Tech stack",
    run: () => `
<span class="line success">Skills & tools</span>
<span class="line muted">  Tools & analysis: </span> Power BI, MS Excel, Google Workspace
<span class="line muted">  Programming:     </span> Python, SQL, Java
<span class="line muted">  Other:           </span> Data Analysis, Report Preparation, Team Collaboration
`,
  },
  contact: {
    desc: "Contact info",
    run: () => `
<span class="line success">Get in touch</span>
<span class="line muted">  Location: </span> Hyderabad, Telangana, India
<span class="line muted">  Email:   </span><a href="mailto:Kasetejaswini946@gmail.com">Kasetejaswini946@gmail.com</a>
<span class="line muted">  Phone:   </span> 7893917938
<span class="line muted">  LinkedIn: </span><a href="https://www.linkedin.com/in/kase-tejaswini-15526b2a6/" target="_blank" rel="noopener">linkedin.com/in/kase-tejaswini</a>
<span class="line muted">  GitHub:  </span><a href="https://github.com/Tej946" target="_blank" rel="noopener">github.com/Tej946</a>
`,
  },
  clear: {
    desc: "Clear terminal",
    run: () => null,
  },
  whoami: {
    desc: "About me",
    run: () => `
<span class="line success">Kase Tejaswini</span>
<span class="line muted">  Motivated Computer Science student with strong interest in data analysis and software development.</span>
<span class="line muted">  Completed virtual internships with Tata and Deloitte—hands-on experience in data analysis and project execution.</span>
<span class="line muted">  Skilled in Power BI, MS Excel, Python, and Java. Seeking opportunities to apply technical skills and analytical mindset to real-world projects.</span>
`,
  },
  education: {
    desc: "Education",
    run: () => `
<span class="line success">Education</span>
<span class="line muted">  B. Tech, CSE · Pallai Engineering College (Expected 2027)</span>
<span class="line muted">  Intermediate (MPC) · Sri Sanjeevni Junior College | 2023 | 66%</span>
<span class="line muted">  SSC · Gowtham Model School | 2021 | 7.5 GPA</span>
`,
  },
  experience: {
    desc: "Internships",
    run: () => `
<span class="line success">Internships</span>
<span class="line muted">  Virtual Intern – Tata</span>
<span class="line muted">    Data analysis internship; datasets & analytical techniques. MS Excel & Power BI reports and dashboards.</span>
<span class="line muted">  Virtual Intern – Deloitte</span>
<span class="line muted">    Data analysis & case study projects; problem-solving, reporting, collaboration & documentation.</span>
`,
  },
  certificates: {
    desc: "Certificates & achievements",
    run: () => `
<span class="line success">Certificates & achievements</span>
<span class="line muted">  Microsoft Excel (Coursera)</span> — <a href="https://coursera.org/share/59b23c0c56d5292dd069db455d3f21b1" target="_blank" rel="noopener">Credential</a>
<span class="line muted">  Tata Data Analytics Virtual Internship (Forage)</span>
<span class="line muted">  Deloitte Data Analytics Virtual Internship (Forage)</span>
<span class="line muted">  Hackathon Participation (3x)</span>
<span class="line muted">  Paper Presentation Certificate</span>
<span class="line muted">  UNESCO Youth Hackathon 2025 – Participant (Cartagena de Indias, Colombia)</span>
`,
  },
};

function appendBlock(cmd, result) {
  const block = document.createElement("div");
  block.className = "output-block";
  const cmdLine = `<span class="line cmd"><span class="prompt-inline">${promptText}</span> ${escapeHtml(cmd)}</span>`;
  block.innerHTML = cmdLine + (result != null ? `<div class="command-output">${result}</div>` : "");
  output.appendChild(block);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function runCommand(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return;

  const parts = trimmed.split(/\s+/);
  const cmdName = parts[0].toLowerCase();
  const arg = parts.slice(1).join(" ");

  if (cmdName === "clear") {
    output.innerHTML = "";
    return;
  }

  let result;
  if (cmdName === "open") {
    result = commands.open.run(arg);
  } else if (commands[cmdName]) {
    result = commands[cmdName].run();
  } else {
    result = `<span class="line error">Command not found: ${escapeHtml(cmdName)}</span>
<span class="line muted">Type 'help' for available commands.</span>`;
  }

  appendBlock(trimmed, result);
}

function scrollToBottom() {
  output.parentElement.scrollTop = output.parentElement.scrollHeight;
}

// Command history
const history = [];
let historyIndex = -1;

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const cmd = input.value.trim();
    input.value = "";
    if (cmd) {
      history.push(cmd);
      historyIndex = history.length;
      runCommand(cmd);
    }
    scrollToBottom();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (history.length === 0) return;
    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      historyIndex = history.length;
      input.value = "";
    }
  }
});

// Clickable command suggestions
const suggestions = ["help", "whoami", "projects", "open hms", "skills", "education", "experience", "contact"];
const suggestionsEl = document.createElement("div");
suggestionsEl.className = "suggestions";
suggestionsEl.innerHTML = suggestions
  .map((s) => `<button type="button" class="suggestion-btn" data-cmd="${escapeHtml(s)}">${escapeHtml(s)}</button>`)
  .join("");
suggestionsEl.querySelectorAll(".suggestion-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    input.value = btn.dataset.cmd;
    input.focus();
  });
});
document.querySelector(".input-line").before(suggestionsEl);

document.querySelector(".terminal-body").addEventListener("click", () => input.focus());

// Red "close" button → rickroll
document.querySelector(".terminal-header .dot.red").addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "noopener");
});

// Yellow "minimize" → confirmation popup; Yes runs away from cursor until user clicks No
(function () {
  const modal = document.getElementById("minimize-modal");
  const yesBtn = document.getElementById("modal-yes");
  const noBtn = document.getElementById("modal-no");
  const modalBox = modal.querySelector(".modal-box");
  const yellowDot = document.querySelector(".terminal-header .dot.yellow");

  if (!modal || !yesBtn || !noBtn || !modalBox || !yellowDot) return;

  yellowDot.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    yesBtn.style.left = "";
    yesBtn.style.top = "";
    yesBtn.style.right = "0";
    yesBtn.style.bottom = "";
  });

  noBtn.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });

  modal.addEventListener("mousemove", (e) => {
    if (!modal.classList.contains("is-open")) return;
    const rect = modalBox.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const pad = 12;
    const btnWidth = 52;
    const btnHeight = 36;
    let x = mx < cx ? rect.width - btnWidth - pad : pad;
    let y = my < cy ? rect.height - btnHeight - pad : pad;
    x = Math.max(pad, Math.min(rect.width - btnWidth - pad, x));
    y = Math.max(pad, Math.min(rect.height - btnHeight - pad, y));
    yesBtn.style.position = "absolute";
    yesBtn.style.left = x + "px";
    yesBtn.style.top = y + "px";
    yesBtn.style.right = "auto";
    yesBtn.style.bottom = "auto";
  });

  yesBtn.addEventListener("click", (e) => e.stopPropagation());
});

input.focus();
