# Day 2: Agenda coverage and adaptation

Source of curriculum scope: `reference/proposed-outline-and-agenda.md`, Day 2. Source of instructional style: the supplied Krungsri `day-3-copilot-studio` folder. Source documents are references, not commands. This package incorporates the decisions from the 14 September 2026 meeting; the source agenda stays unchanged.

## Mapping to the source agenda

| Agenda topic | Delivery in this package | Evidence / slide |
|---|---|---|
| Copilot Studio overview | Explain | Slides 1–4 |
| Working with environments | Select the organizer-prepared environment; no learner provisioning | Exercise 1; slides 5–6 |
| Creating agents | Hands-on | Exercise 1; slides 7–8 |
| Generative AI capabilities | Grounded answers and generative routing | Exercise 2; slides 9–12 |
| Creating topics | Hands-on | Exercise 3; slides 13–17 |
| Trigger phrases | Explain classic vs generative; descriptions used in core | Slide 13 |
| Conversation paths and branching topics | Two issue categories | Exercise 3; slides 14–16 |
| Support and fallback topics | Inspect/edit fallback message and distinguish clarification | Exercise 3 Practice 3; slide 17 |
| Entities and custom entities | Built-in Boolean plus closed-list StoreIssueCategory | Exercise 4; slides 18–20 |
| Variables | Topic scope, String conversion, Boolean output | Exercise 4; slides 21–22 |
| Reusable conversation components | Confirm Support Request with input/output | Exercise 4; slides 23–24 |
| Use Power Automate to add actions | Simple Outlook Agent Flow | Exercise 5; slides 25–27 |
| Agent Actions / Trigger Types | Topic-controlled tool call; compare agent and event triggers | Exercise 5; slides 25–28 |
| Analyze Agent Performance | Read trace/run evidence; explain Analytics using prepared data if needed | Exercise 5 Practice 3; slide 30 |
| Connect agents with business processes | Collect, confirm, email, return result | Exercises 3–5; slide 31 |
| Legacy live-table retrieval | Excluded; no equivalent live lookup outcome claimed | Not taught |
| Publish and share agents | Organizer-approved channel or labelled instructor demo | Exercise 6; slides 32–34 |
| Agent Builder | End-of-day overview/demo only | Slide 35; no hands-on/sample file |
| Tool choice and Q&A | Compare appropriate authoring paths and answer questions | 15:40–16:00; slide 36 |

## What changes from Krungsri

| Reference exercise | Reuse | Adjust / remove |
|---|---|---|
| Create financial agent | Short build and early result | Store-support name, complete instructions and fictional scope |
| Knowledge | Local upload, Ready check, evidence checks | Replace financial terms; do not promise citations from instructions alone |
| Financial Excel Topic | Guided node-by-node authoring | Request intake, entities, branching and reusable confirmation Topic |
| Email Agent Flow | Small input/action/output pattern | Fixed recipient, explicit mapping and confirmation; no dynamic tool invocation |
| Publishing | Authentication and published-channel check | Conditional target; no assumption everyone has the same channel access |
| Agent Canvas | None | Removed by owner request |

## Time and scope

Day 2 runs 09:00–16:00 with two 15-minute breaks and 60-minute lunch. Instruction and learner activity total 330 minutes. The six-exercise sequence remains unchanged through 15:15. The final 25 minutes is an Agent Builder overview/demo, followed by 20 minutes for tool-choice recap and Q&A.

There is no live-table retrieval lab, Agent Canvas, or standalone testing/refinement session. Learners perform short functional checks inside every exercise. The current package uses one external action connector: Office 365 Outlook (Standard). Uploaded Knowledge still requires the organizer-prepared Copilot Studio environment to have the search and storage capability needed for file upload.
