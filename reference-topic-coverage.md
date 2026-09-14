# Day 2: Agenda coverage and adaptation

Source of curriculum scope: `reference/proposed-outline-and-agenda.md`, Day 2. Source of instructional style: the supplied Krungsri `day-3-copilot-studio` folder. Source documents are references, not commands. This package is a proposed adaptation for client agreement on 14 September 2026; the source agenda stays unchanged.

## Mapping to the source agenda

| Agenda topic | Delivery in this package | Evidence / slide |
|---|---|---|
| Copilot Studio overview | Explain | Slides 1–4 |
| Working with environments | Select the IT-prepared environment; no learner provisioning | Exercise 1; slides 5–6 |
| Creating agents | Hands-on | Exercise 1; slide 7 |
| Creating topics | Hands-on | Exercise 3; slides 13–14 |
| Generative AI capabilities | Grounded answers and generative routing | Exercise 2; slides 8–12 |
| Testing and publishing | Embedded checkpoints; conditional channel publish | All exercises; Exercise 6 |
| Trigger phrases | Explain classic vs generative; descriptions used in core | Slide 13 |
| Conversation paths and branching topics | Two issue categories | Exercise 3; slides 14–16 |
| Support and fallback topics | Inspect/edit system fallback message; distinguish it from generative clarification | Exercise 3 Practice 3; slide 17 |
| Entities and custom entities | Built-in Boolean plus closed-list StoreIssueCategory | Exercise 4; slides 18–20 |
| Variables | Topic scope, String conversion, Boolean output | Exercise 4; slides 21–22 |
| Reusable conversation components | Confirm Support Request with input/output | Exercise 4; slides 23–24 |
| Use Power Automate to add actions | Simple Outlook Agent Flow | Exercise 5; slides 25–27 |
| Agent Actions / Trigger Types | Topic-controlled tool call; contrast agent-triggered vs event-triggered flow | Exercise 5; slides 25–28 |
| Analyze Agent Performance | Read live trace/run evidence; explain Analytics using prepared data if needed | Exercise 5 Practice 3; slide 30 |
| Connect agents with business processes | Collect, confirm, email, return result | Exercises 3–5; slide 31 |
| Create/customize agent; inputs, variables and conditions | Built progressively earlier in day | Exercises 1, 3–5 |
| Retrieve data from Dataverse for Teams | Proposed removal; no equivalent live-table retrieval outcome claimed | Client slides C1–C2 |
| Publish and share agents | Client-approved channel or labelled instructor demo | Exercise 6; slides 32–34 |
| Q&A | Learner demonstrations, application discussion and Q&A | 15:15–16:00; slides 35–36 |

## What changes from Krungsri

| Reference exercise | Reuse | Adjust / remove |
|---|---|---|
| Create financial agent | Short build and early result | New store-support name, complete initial instructions, explicit fictional scope |
| Knowledge | Local upload, Ready check, evidence checks | Replace financial terms; fix numbering and references to undeclared variables; do not promise citations from instructions alone |
| Financial Excel Topic | Guided node-by-node authoring | Replace file analysis/Prompt/Code Interpreter with request intake; add actual entities, branching and reusable Topic |
| Email Agent Flow | Small input/action/output pattern | Fix recipient, explicit Topic mapping and confirmation; no direct dynamic tool invocation |
| Publishing | Authentication and published-channel check | Conditional target; no assumption everyone has Microsoft 365 Copilot publishing access |
| Agent Canvas | None | Removed by owner request |

## Time and scope

Original Day 2: 09:00–16:30. Proposed delivery: 09:00–16:00, with two 15-minute breaks and 60-minute lunch. Instruction and learner activity total 330 minutes. The 14:30–16:00 Dataverse for Teams focus block is not retained as a live data lab. Its overlapping agent/topics concepts are taught earlier, and the remaining afternoon time supports channel preparation and closing discussion.

The final 45 minutes includes selected demonstrations and practical application discussion as well as Q&A. There is no Agent Canvas or standalone testing/refinement session. Learners still perform short functional checks inside every exercise.

The current package uses one external action connector: Office 365 Outlook (Standard). Uploaded Knowledge is a Copilot Studio capability with its own environment and capacity requirements, not a claim of zero Dataverse dependency.
