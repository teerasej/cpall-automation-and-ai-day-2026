# Sources and validation

Documentation checked and scope aligned: 27 September 2026. Product documentation can change; final UI and tenant behavior must be rehearsed with participant-equivalent accounts.

## Microsoft references

| Reference | What it supports |
|---|---|
| [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) | Authoring experience and Agent building blocks |
| [Topic triggers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers) | The agent chooses trigger and topic description |
| [Ask a question](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-ask-a-question) | Text responses and Multiple choice options |
| [Agent flow overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview) | Agent Flow concepts, limits and conversion considerations |
| [Modify an existing flow for an agent](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flow-modify-use-with-agent) | Solution/same-environment requirements, trigger, response and synchronous execution |
| [Office 365 Outlook](https://learn.microsoft.com/en-us/connectors/office365/) | Standard connector and Send an email (V2) |
| [Teams and Microsoft 365 Copilot channel](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams) | Publish/channel access and sharing |
| [Agent Builder and Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copilot-studio-experience) | Lightweight personal/team Agents versus broader workflows and lifecycle controls |
| [Build an agent with Agent Builder](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents) | Natural-language, Configure and template authoring paths |
| [Use a custom prompt in a flow](https://learn.microsoft.com/en-us/ai-builder/use-a-custom-prompt-in-flow) | Run a prompt action, downstream use and human review |
| [AI Builder licensing](https://learn.microsoft.com/en-us/ai-builder/administer-licensing) | Premium connector and Copilot Credit readiness |

## Acceptance checks

- Six exercises with sequential Practices, one primary target and checkpoint per Practice.
- Topic uses The agent chooses, Text `IssueDetails`, and `SendConfirmed` with ยืนยัน/ยกเลิก Multiple choice options.
- No custom Entity, synonyms, category branches, child Topic, `CategoryLabel`, `RequestSummary` Power Fx or cross-Topic mapping remains in active learner guidance.
- Agent Flow uses `When an Agent calls the flow`, one Text input `IssueDetails`, fixed-recipient `Send an email (V2)`, Text output `ResponseMessage`, and asynchronous response disabled.
- Tool call exists only under ยืนยัน; ยืนยัน and ยกเลิก tests use trace, run history and Inbox evidence.
- Existing Day 1 flow is not modified; its Manual trigger to Outlook pattern is a conceptual bridge to the new Agent Flow.
- Agent Builder and AI Builder appear only as overview/demo material, not learner exercises.
- 55 teaching slides and 55 notes pages follow the revised time blocks, with a longer Knowledge section.
- Agenda covers 09:00–16:00 continuously: 420 minutes total, 90 minutes breaks/lunch, 330 minutes instruction/activity.
- Local links and downloadable assets resolve; the revised deck is physically present in the repository download folder and shared delivery folder.
- Both learner sites contain no links to the public GitHub repositories, including theme social/edit links and Day 1 downloads.

## Evidence boundary

Local structural/content validation establishes document consistency, not tenant readiness. It does not prove a flow ran, an email arrived, Knowledge indexed, licenses were assigned, or a participant opened the published Agent. Confirm publication from the Pages workflow and live site separately. Record tenant outcomes during [rehearsal](./instructor-readiness-checklist.md).

## Pre-publication validation record — 27 September 2026

- VitePress production build passed; 10 rendered HTML pages and 586 local links resolved, including all six exercises and the new PPTX download.
- `git diff --check` passed. Public learner Markdown and rendered HTML have no links to either public source repository.
- The review deck passed package and geometry checks: 55 slides, 55 notes pages, 16:9 slide size and the reference Noto Sans Thai font. A 55-page PDF render and slide contact sheets were inspected; the local PDF renderer dropped Thai glyphs even on the untouched source deck. PowerPoint for Mac opened the final deck and displayed Thai correctly on representative slides from the opening, Knowledge, Topic, Flow, publishing, Agent Builder and AI Builder sections.
- The repository download and OneDrive copy have the same SHA-256. The linked deck is a static learner artifact, not evidence of tenant readiness.
- Day 1 and Day 2 link-only GitHub Pages workflows both completed successfully. The live home/download pages showed zero links to their public source repositories; the Day 1 tracker download hash matched the site-local source file.
