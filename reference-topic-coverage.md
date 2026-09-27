# Day 2: Agenda coverage and adaptation

The package keeps the 09:00–16:00 beginner course boundary and one fictional store-support story. It reflects the revised timetable of 27 September 2026.

| Agenda topic | Delivery | Evidence |
|---|---|---|
| Copilot Studio portal and environment | Explore the prepared environment without learner provisioning | Exercise 1; slides 1–10 |
| Creating Agents | Direct configuration as the core; natural-language creation optional | Exercise 1; slides 11–13 |
| Instructions and first test | Define role and boundaries, then test before Knowledge | Exercise 2; slides 14–19 |
| Knowledge | Upload two approved files, wait for Ready, test supported and unsupported questions, compare with source | Exercise 3; slides 21–30 |
| Topic | One `Store Support Request` Topic using The agent chooses, `IssueDetails` Text and two `SendConfirmed` choices | Exercise 4; slides 32–35 |
| Agent Flow | New Agent trigger, fixed-recipient Outlook action, response to Agent | Exercise 5; slides 36–39 |
| Connecting and testing | Flow call only under ยืนยัน; Test trace, run history and Inbox for both choices | Exercise 5; slides 39–40 |
| Publish and share | Approved channel or labelled instructor demo | Exercise 6; slides 42–46 |
| Agent Builder | Tool comparison and instructor demo with the same fictional guide | Slides 48–51; no learner exercise |
| AI Builder | Instructor demo of `Run a prompt` in a prepared Power Automate flow with human review | Slides 52–54; no learner exercise |
| Review | Recap and Q&A | Slide 55 |

## Beginner simplification

The learner Topic uses one Text question, a direct summary, and Multiple choice options for ยืนยัน/ยกเลิก. The flow receives only `IssueDetails`. There is no custom Entity, category branching, Power Fx, child Topic, second input, or cross-Topic mapping. Learners still see the central control: action follows the current request's explicit confirmation.

Day 1 continuity remains a conceptual comparison: `Manual trigger → Outlook` becomes `Agent trigger → Outlook → Response to Agent`. Learners build a new flow and do not alter the Day 1 original.

## Time and scope

The day runs 09:00–16:00 with two 15-minute breaks and a 60-minute lunch, leaving 330 instructional/activity minutes. Six exercises are hands-on in Copilot Studio. Agent Builder and AI Builder are talk/demo only. All tenant-dependent capabilities require instructor rehearsal with participant-equivalent access.
