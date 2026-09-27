# CPAll GoSoft — Copilot Studio Day 2

[https://teerasej.github.io/cpall-automation-and-ai-day-2026/](https://teerasej.github.io/cpall-automation-and-ai-day-2026/)

Thai-first learner exercises for a beginner Microsoft Copilot Studio workshop. The learner explores the portal, creates a fictional store-support assistant, adds Instructions and Knowledge, then connects a small confirmed Topic to an Outlook Agent Flow. Agent Builder and AI Builder are instructor demonstrations only.

Learner-facing Markdown is maintained in [`docs/`](./docs/). The learner site does not link to the public source repository.

## Edit and preview locally

```bash
npm ci
npm run docs:dev
```

Build the production site before publishing:

```bash
npm run docs:build
npm run docs:preview
```

The site is deployed from `main` by [the GitHub Pages workflow](./.github/workflows/deploy.yml).

## Content map

- [Learner home](./docs/index.md)
- [Exercises](./docs/exercises/)
- [Downloads](./docs/resources/downloads.md)
- [Sample conversations](./docs/resources/sample-conversations.md)
- [Knowledge files and learner deck](./docs/public/downloads/)

## Instructor files

These files remain in the repository but are intentionally excluded from learner-site navigation:

- [Instructor readiness checklist](./instructor-readiness-checklist.md)
- [Source validation](./sources-and-validation.md)
- [Reference topic coverage](./reference-topic-coverage.md)
- [Presentation slide outline](./presentation-slide-outline.md)

Local artifact validation does not prove tenant readiness. Knowledge indexing, Agent Flow execution, Outlook delivery, channel access, and Agent publishing must be rehearsed with the prepared training accounts and environment.
