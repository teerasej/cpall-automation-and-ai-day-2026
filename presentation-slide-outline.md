# Presentation outline — Day 2: CPAll Store Support Assistant

**Format:** Markdown only. Generate PPTX only when the owner explicitly requests it.

**Audience:** Beginner business users. Thai-first explanations with official English product/UI terms.

**Story:** พนักงานสาขาฝึกถามว่าต้องเตรียมข้อมูลอะไร จากนั้นให้ผู้ช่วยรับคำขอ ยืนยัน และส่งอีเมลสรุป ทุกขั้นตอนและข้อมูลเป็นเรื่องสมมติ ไม่ใช่นโยบาย CPAll

**Status:** Owner-approved authoring direction. Removal of Dataverse for Teams retrieval, breaks, and 16:00 finish remain proposed pending client agreement at the 14 September 2026 meeting. Original reference agenda is unchanged.

## Client discussion: 14 September 2026

This section is for the client meeting and is outside the 36 learner-session slides. Record decisions before preparing the final delivery version. Do not add this section to the learner lesson sequence.

### Slide C1 — Proposed removal of the Dataverse for Teams hands-on module

**Message for client:** เสนอให้ตัดกิจกรรมสร้างและดึงข้อมูลจาก Dataverse for Teams ออกจาก Day 2 รุ่นนี้ เพื่อลดงานเตรียมระบบที่ยังไม่ยืนยัน และใช้เวลาฝึกการสร้างผู้ช่วยกับการส่งคำขอให้ครบก่อนจบ 16:00

| Technical reason | What IT would need to confirm | Effect on class |
|---|---|---|
| Team-associated environment | Team, Dataverse for Teams environment และ participant access ที่ตรงกัน | บัญชีที่เข้าไม่ได้จะเริ่ม data lab ไม่ได้ |
| Prepared data and permissions | Tables, columns, sample records และสิทธิ์ retrieve ผ่าน agent/flow | ต้องเตรียมและทดสอบเพิ่มจากการสร้าง Topic |
| Authoring route and feature compatibility | Teams-based authoring เทียบ full Copilot Studio ที่ใช้สอน | ต้อง rehearsal ในเส้นทางจริง ไม่สรุปว่าเปิด Teams แล้วฟีเจอร์เหมือนกัน |
| Setup and troubleshooting time | Representative learner run ก่อนอบรม | ลดความเสี่ยงเสียเวลา class กับ environment setup |

**Speaker notes:** Dataverse for Teams environments are associated with a selected Team. An upgrade can change where agents can be edited, including blocking editing through the Teams app. This is a compatibility consideration, not a statement that the client must upgrade or that Dataverse for Teams is unavailable. These readiness items are unconfirmed, not confirmed failures.

**Sources:** [Environment overview](https://learn.microsoft.com/en-us/power-platform/admin/environments-overview), [Upgrade guidance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-upgrade-dataverse-teams).

**Suggested visual:** A small dependency diagram: participant account, Team/environment, table permissions, agent retrieval. Use the analogy of preparing a training room: the room, keys and exercise materials must all be ready before participants enter.

### Slide C2 — Replacement, retained outcomes and tradeoff

**Message for client:** ใช้ uploaded Knowledge สอนการตอบจากเอกสาร และ Outlook Agent Flow สอนการรับ input ทำ action และคืนผล โดยไม่มี live Dataverse table retrieval ในรุ่นนี้

| Retained or added | Outcome not included |
|---|---|
| สร้าง agent, Topics, entities, variables และ Conditions | สร้าง schema และอ่าน records จาก Dataverse for Teams |
| ตอบจากคู่มือที่อัปโหลดและตรวจแหล่งข้อมูล | ข้อมูลสดจาก business database |
| ยืนยันคำขอและส่ง summary ผ่าน Standard Outlook connector | Database integration หรือ production ticketing |
| Authentication และ conditional publishing/sharing | การรับประกันว่าทุกคน publish ได้ก่อน IT ยืนยัน |

**Speaker notes:** Uploaded Knowledge is not equivalent to live table access. Copilot Studio still needs its own environment, licensing and capacity. Uploaded documents specifically require Dataverse search and storage. Do not present the change as “no Dataverse required” or claim Dataverse for Teams is universally Premium. The Outlook connector is Standard; that classification does not establish Copilot Studio licensing.

**Sources:** [Uploaded Knowledge requirements](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload), [Outlook connector](https://learn.microsoft.com/en-us/connectors/office365/), [Copilot Studio access](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-licensing-subscriptions).

**Suggested visual:** Two concrete outputs: an answer with supporting guide text, and a training email. Caption: document-grounded answer / confirmed action.

### Slide C3 — Meeting decision record

**Message for client:** ยืนยัน scope และ access ก่อนจัดทำเวอร์ชันส่งสอน ข้อเสนอนี้จบ 16:00 และรักษาผลลัพธ์การสร้างผู้ช่วยที่ใช้งานได้ในสถานการณ์ฝึก

| Decision / prerequisite | Current state | Client decision | Owner | Due / rehearsal date |
|---|---|---|---|---|
| Remove Dataverse for Teams retrieval lab | Proposed | Pending | To confirm | To confirm |
| Finish Day 2 at 16:00; two 15-minute breaks | Proposed | Pending | To confirm | To confirm |
| Full Copilot Studio environment and generative features | Unverified | Pending IT | To confirm | To confirm |
| Knowledge search/storage and upload policies | Unverified | Pending IT | To confirm | To confirm |
| Agent Flow and Outlook connection per learner | Unverified | Pending IT | To confirm | To confirm |
| Choose Teams, Microsoft 365 Copilot, or demo-only sharing | Unverified | Pending IT | To confirm | To confirm |

**Meeting output:** บันทึกผู้ตัดสินใจ ผล agreed/deferred วันที่ rehearsal และบัญชีผู้เรียนตัวแทนที่จะใช้ทดสอบ หาก client ยังต้องการ Dataverse retrieval ให้ทบทวนเวลาและ prerequisites ใหม่ก่อนเพิ่มกลับ ไม่แทรก lab ที่ยังไม่ทดสอบเข้า core

**Suggested visual:** Use this decision table, with confirmed answers completed during the meeting. No invented owners or deadlines.

## Day 2 timing

| Time | Minutes | Activity | Slides |
|---|---:|---|---|
| 09:00–09:15 | 15 | Fundamentals and story | 1–4 |
| 09:15–10:15 | 60 | Exercises 1–2: agent and Knowledge | 5–12 |
| 10:15–10:30 | 15 | Proposed break | — |
| 10:30–11:00 | 30 | Exercise 3: request Topic | 13–17 |
| 11:00–12:00 | 60 | Exercise 4: entities, variables and reusable confirmation | 18–24 |
| 12:00–13:00 | 60 | Lunch | — |
| 13:00–14:30 | 90 | Exercise 5: simple flow, integration and embedded checks | 25–31 |
| 14:30–14:45 | 15 | Proposed break | — |
| 14:45–15:15 | 30 | Exercise 6: authentication, channels, publish/share | 32–34 |
| 15:15–16:00 | 45 | Selected learner demonstrations, application and Q&A | 35–36 |

Total 420 minutes: 330 instruction/activity, 60 lunch, 30 breaks. Slide time includes hands-on work, not continuous lecturing. No Agent Canvas and no standalone testing/refinement blocks after the afternoon break.

## Teaching slides 1–4: Why this assistant

### Slide 1 — CPAll Store Support Assistant

- **Teach:** วันนี้ผู้ช่วยจะตอบจากคู่มือ รับเรื่อง และส่งสรุปจากข้อมูลฝึก
- **Visual:** Store employee with a question and a training request email.
- **Speaker cue:** ใช้ TRAIN-002 และสินค้าตัวอย่าง 10/8 กล่องเป็นเรื่องเดียวตลอดวัน ระบุว่าเป็นเรื่องสมมติ
- **Link:** [Learner journey](./README.md)

### Slide 2 — A question becomes a support request

- **Teach:** เริ่มจาก “ต้องเตรียมอะไร” แล้วเปลี่ยนเป็น “ช่วยแจ้งปัญหาให้หน่อย” ความต้องการต่างกันจึงใช้ Knowledge หรือ Topic ต่างกัน
- **Visual:** Two chat messages followed by the same request summary.
- **Speaker cue:** ให้ผู้เรียนบอกว่าเมื่อใดควรตอบ และเมื่อใดต้องถามข้อมูลเพิ่ม
- **Link:** [Example conversation](./files/sample-conversations.md)

### Slide 3 — Knowledge, Topics and Tools

- **Teach:** Knowledge คือคู่มือ, Topic คือขั้นตอนรับเรื่อง, Tool คือ action ที่เรียกใช้งาน
- **Visual:** คู่มือข้างโต๊ะรับเรื่องและถาดจดหมาย
- **Speaker cue:** เชื่อมกับ Day 1: flow ทำขั้นตอน ส่วน agent ช่วยคุยรับข้อมูล ไม่ต้องนำ Day 1 flow มาใช้
- **Link:** [Journey diagram](./README.md)

### Slide 4 — What participants will complete

- **Teach:** ได้ agent หนึ่งตัวและ email flow หนึ่งตัว พร้อมผลตรวจในแต่ละ Exercise; channel outcome ขึ้นกับสิทธิ์
- **Visual:** Six exercise milestones with a visible output at each.
- **Speaker cue:** ให้ดูตัวอย่างอีเมลสำเร็จเป็นภาพปลายทางก่อนเริ่ม build
- **Link:** [Exercise index](./README.md)

## Teaching slides 5–12: Create and ground the assistant

### Slide 5 — The prepared environment

- **Teach:** ทุกคนเลือก environment ที่ IT เตรียม ไม่สร้างเองและไม่สลับ authoring experience
- **Visual:** Highlight the verified environment selector in a rehearsed screen capture.
- **Speaker cue:** ตรวจชื่อพร้อมกัน เปรียบกับเข้าอบรมให้ถูกห้องก่อนเปิดคู่มือ
- **Link:** [Exercise 1 Practice 1](./exercises/01-create-assistant/README.md)

### Slide 6 — Access and capacity

- **Teach:** Agent creation, Knowledge, flow และ publishing ต้องตรวจสิทธิ์ตาม capability
- **Visual:** Simple readiness table, no license promises.
- **Speaker cue:** Standard Outlook connector ไม่รับประกัน Copilot Studio entitlement; uploaded Knowledge ยังใช้ Dataverse search
- **Link:** [Readiness checklist](./instructor-readiness-checklist.md)

### Slide 7 — Agent identity and purpose

- **Teach:** ชื่อและ description บอกงานเดียวที่ผู้ช่วยรับผิดชอบ
- **Visual:** Name and description from the exercise.
- **Speaker cue:** ให้ทุกคนเติมชื่อเล่นท้าย agent แล้วสร้างด้วยตัวเอง
- **Link:** [Exercise 1](./exercises/01-create-assistant/README.md)

### Slide 8 — Instructions and boundaries

- **Teach:** ระบุแหล่งข้อมูล ขอบเขต และสิ่งที่ไม่มีข้อมูล ไม่แต่ง SLA หรือ stock
- **Visual:** Short excerpts of the actual instruction block.
- **Speaker cue:** ทดสอบ “ช่วยอะไรได้บ้าง” ก่อน เรื่องยืนยันจะมี Condition บังคับภายหลัง
- **Link:** [Exercise 1 Practice 2](./exercises/01-create-assistant/README.md)

### Slide 9 — Generative answers from a guide

- **Teach:** การตอบจากคู่มือที่อัปโหลดต่างจาก live database lookup
- **Visual:** G4 source paragraph beside a concise answer.
- **Speaker cue:** เปิด guide ให้เห็นข้อมูล 10/8 เป็นตัวอย่าง ไม่ใช่ stock จริง
- **Link:** [Knowledge guide](./files/cpall-store-support-guide.txt)

### Slide 10 — Knowledge ingestion

- **Teach:** เพิ่มไฟล์ ชื่อ description และรอ Ready ก่อนวัดคำตอบ
- **Visual:** Two uploaded files and processing status.
- **Speaker cue:** อัปโหลดเฉพาะไฟล์ .txt สองไฟล์ ไม่ใส่เฉลย test cases
- **Link:** [Exercise 2 Practice 1](./exercises/02-add-knowledge/README.md)

### Slide 11 — Evidence in an answer

- **Teach:** เปิดแหล่งอ้างอิงเมื่อมีและเทียบข้อความกับคู่มือ ชื่อไฟล์ในคำตอบอย่างเดียวไม่พอ
- **Visual:** Question, answer, supporting source excerpt.
- **Speaker cue:** ใช้ K1 แล้วให้ผู้เรียนชี้ว่าส่วนใดใน G4 สนับสนุนคำตอบ
- **Link:** [Exercise 2 Practice 2](./exercises/02-add-knowledge/README.md)

### Slide 12 — Missing information and scope

- **Teach:** เมื่อคู่มือไม่มี SLA ผู้ช่วยควรบอกว่าไม่พบ ไม่เติมตัวเลขให้ดูครบ
- **Visual:** Supported question versus missing-information question.
- **Speaker cue:** ถาม SLA และคำถามหุ้นก่อนพัก ให้เห็นข้อจำกัดจริง
- **Link:** [K2–K3](./files/sample-conversations.md)

## Teaching slides 13–17: Guided conversation

### Slide 13 — Topic routing

- **Teach:** Classic ใช้ User says a phrase; core นี้ใช้ generative The agent chooses และ description ที่ชัด
- **Visual:** Comparison with exact trigger labels.
- **Speaker cue:** สาธิต trigger phrases เป็นแนวคิดตาม agenda ไม่เปลี่ยน core agent ไปมาระหว่าง modes
- **Link:** [Exercise 3 Practice 1](./exercises/03-request-topic/README.md)

### Slide 14 — Store Support Request

- **Teach:** Topic เก็บข้อมูลเพื่อแจ้งเรื่อง ส่วนคำถามทั่วไปตอบผ่าน Knowledge
- **Visual:** Topic trigger description and first Message.
- **Speaker cue:** เปรียบกับเจ้าหน้าที่เลือก “ตอบคำถาม” หรือ “เปิดแบบรับเรื่อง”
- **Link:** [Exercise 3](./exercises/03-request-topic/README.md)

### Slide 15 — Questions and captured values

- **Teach:** StoreCode, category และ IssueDescription คือข้อมูลคำขอครั้งนี้
- **Visual:** Question text mapped to variable names.
- **Speaker cue:** ให้ผู้เรียนเห็นค่าที่ตอบจริงใน Test; ยังไม่มี database ตรวจรหัสสาขา
- **Link:** [Exercise 3 Practice 2](./exercises/03-request-topic/README.md)

### Slide 16 — Branching by issue category

- **Teach:** Equipment ขออาการอุปกรณ์ ส่วน Delivery ขอจำนวนที่ต่างกัน แล้วกลับมารับรายละเอียดที่จุดรวม
- **Visual:** Small two-branch diagram.
- **Speaker cue:** ลองสองหมวดเพื่อดูว่าคำแนะนำต่างกันจริง ก่อนต่อ entity ในชั่วโมงถัดไป
- **Link:** [T1–T2](./files/sample-conversations.md)

### Slide 17 — Fallback and clarification

- **Teach:** System Fallback และ generative clarification อาจเกิดคนละเส้นทาง ให้ดูสิ่งที่ระบบเรียกจริง
- **Visual:** Ambiguous message and a helpful clarification response.
- **Speaker cue:** แก้เฉพาะข้อความช่วยผู้ใช้ใน Fallback ไม่เปลี่ยนระบบ escalation ที่ยังไม่เข้าใจ
- **Link:** [Exercise 3 Practice 3](./exercises/03-request-topic/README.md)

## Teaching slides 18–24: Entities and reusable components

### Slide 18 — Entity and Variable

- **Teach:** Entity บอกชนิด/หมวดของคำตอบ ส่วน Variable เก็บค่าที่ได้ครั้งนี้
- **Visual:** ป้ายหมวดและช่องเก็บคำตอบ
- **Speaker cue:** “เครื่องพิมพ์” จัดเป็น Equipment แต่ค่าของ StoreCode เป็นอีกข้อมูลหนึ่ง
- **Link:** [Exercise 4](./exercises/04-entities-and-confirmation/README.md)

### Slide 19 — Built-in entities

- **Teach:** ใช้ชนิดที่ตรงกับการตัดสินใจ เช่น Boolean สำหรับ Yes/No
- **Visual:** Boolean true/false next to text examples.
- **Speaker cue:** ข้อความ “true” ไม่ใช่ Boolean true; ให้เลือกชนิดผ่าน UI
- **Link:** [Exercise 4 Practice 2](./exercises/04-entities-and-confirmation/README.md)

### Slide 20 — Custom category and synonyms

- **Teach:** Closed list เล็ก ๆ ทำให้ Equipment และ Delivery รองรับคำที่ผู้เรียนคุ้นเคย
- **Visual:** Canonical values and Thai synonyms from the exercise.
- **Speaker cue:** ให้ลองคำพ้องทีละหมวด ไม่เพิ่มหมวดอื่นที่ Topic ยังไม่มีเส้นทางรองรับ
- **Link:** [Exercise 4 Practice 1](./exercises/04-entities-and-confirmation/README.md)

### Slide 21 — Variable scope and types

- **Teach:** ใช้ Topic variables; แปลง entity เป็น CategoryLabel String ก่อนส่งต่อ
- **Visual:** IssueCategory → CategoryLabel; separate StoreCode and IssueDescription fields.
- **Speaker cue:** อธิบายว่าข้อมูลคำขอคนละรอบต้องไม่ใช้ confirmation เก่า
- **Link:** [Exercise 4 Practice 1](./exercises/04-entities-and-confirmation/README.md)

### Slide 22 — Request summary

- **Teach:** RequestSummary ประกอบจากค่าที่ผู้ใช้ให้ ไม่ใช่ข้อความที่ AI เดาขึ้นเอง
- **Visual:** Three fields and resulting summary.
- **Speaker cue:** อ่าน Power Fx ตัวอย่างทีละส่วนและชี้ Char(10) ว่าขึ้นบรรทัดใหม่
- **Link:** [Exercise 4 Practice 3](./exercises/04-entities-and-confirmation/README.md)

### Slide 23 — Reusable confirmation Topic

- **Teach:** Topic ย่อยรับ SummaryText และคืน SendConfirmed แบบ Boolean
- **Visual:** Input → confirmation question → output.
- **Speaker cue:** เหมือนส่งใบงานให้ผู้ตรวจและรับผลกลับ ผู้เรียกต้อง map ค่าทั้งสองด้าน
- **Link:** [Exercise 4 Practice 2](./exercises/04-entities-and-confirmation/README.md)

### Slide 24 — Confirmation and cancellation

- **Teach:** UserConfirmed=true ไปต่อ; false ยกเลิก หากข้อมูลผิดให้เริ่มคำขอใหม่
- **Visual:** Decision branch with no tool yet.
- **Speaker cue:** ตรวจ Yes/No ก่อนพักกลางวัน ตอนนี้ข้อความ true ยังเป็น placeholder และไม่มีการส่ง
- **Link:** [Exercise 4 Practice 3](./exercises/04-entities-and-confirmation/README.md)

## Teaching slides 25–31: One useful action

### Slide 25 — Topic trigger and flow trigger

- **Teach:** Topic จัดการบทสนทนา; When an agent calls the flow เริ่ม action เมื่อ Topic เรียก ต่างจาก Forms event หรือ Recurrence ของ Day 1
- **Visual:** Two triggers in their respective canvases.
- **Speaker cue:** ยังใช้ agent เดิมและ data เดิม ไม่ต้องสร้าง workflow ใหม่หลายระบบ
- **Link:** [Exercise 5](./exercises/05-email-agent-flow/README.md)

### Slide 26 — Flow inputs and output

- **Teach:** ส่ง StoreCode กับ RequestSummary เข้า แล้วรับ ResponseMessage กลับ
- **Visual:** Exact two-input/one-output mapping table.
- **Speaker cue:** ผู้รับกำหนดไว้ใน flow ไม่เปิดช่องให้ agent เปลี่ยนจากแชต
- **Link:** [Exercise 5 Practice 1](./exercises/05-email-agent-flow/README.md)

### Slide 27 — Outlook action and connection

- **Teach:** Send an email (V2) ใช้ Standard Outlook connector แต่ต้องมี connection/mailbox ที่อนุญาต
- **Visual:** Three-node flow with fixed training recipient.
- **Speaker cue:** ทดสอบอีเมลหนึ่งฉบับก่อนนำ tool กลับไปผูกกับ Topic; flow ส่งผลแบบ synchronous จึงไม่มีขั้นรออนุมัติยาว
- **Link:** [Exercise 5 Practice 1](./exercises/05-email-agent-flow/README.md)

### Slide 28 — Controlled tool invocation

- **Teach:** ปิด dynamic invocation แล้วเรียก tool เฉพาะ UserConfirmed=true
- **Visual:** Confirmation branch connected to the tool; cancellation ends.
- **Speaker cue:** Instructions อย่างเดียวไม่แทนเงื่อนไขใน Topic ให้ตรวจ setting และ node จริง
- **Link:** [Exercise 5 Practice 2](./exercises/05-email-agent-flow/README.md)

### Slide 29 — Response and evidence

- **Teach:** หลัง email สำเร็จ Respond คืนข้อความ; ต้องเห็น run และ Inbox ประกอบ
- **Visual:** Summary before send beside matching email after send.
- **Speaker cue:** ถ้า error ห้ามบอก success และต้องตรวจว่ารอบก่อนส่งแล้วหรือยังก่อน retry
- **Link:** [Exercise 5 Practice 3](./exercises/05-email-agent-flow/README.md)

### Slide 30 — Agent performance evidence

- **Teach:** Test trace ช่วยดู route/tool; flow history ช่วยดู action; Analytics ช่วยดูภาพรวมเมื่อมีข้อมูล
- **Visual:** Small evidence-to-question table with labelled example data.
- **Speaker cue:** ใช้ prepared analytics หากข้อมูลสดยังไม่มี ระบุว่าเป็น demo data; อธิบาย tool failures/usage ที่หน้า tenant แสดงจริง ไม่แต่งตัวเลขจาก tests
- **Link:** [Rehearsal and analytics](./instructor-readiness-checklist.md)

### Slide 31 — A completed support request

- **Teach:** ผู้ใช้ถามคู่มือ แจ้งปัญหา ตรวจ summary และส่งได้โดยใช้ข้อมูลเดียวตลอดเรื่อง
- **Visual:** The full journey from Knowledge answer to Inbox.
- **Speaker cue:** ใช้ F1/F2 ตรวจสั้นใน Exercise นี้ แล้วพัก ไม่ย้ายเป็น testing block หลังพัก
- **Link:** [F1–F3](./files/sample-conversations.md)

## Teaching slides 32–36: Access and close

### Slide 32 — Authentication and audience

- **Teach:** เลือก channel กับผู้ใช้ที่ได้รับอนุญาต; ลงชื่อเข้าใช้ด้วย Microsoft ตามเส้นทางที่ตรวจแล้ว
- **Visual:** Creator, approved tester and channel.
- **Speaker cue:** ถ้า policy ไม่พร้อมใช้ demo ไม่เปลี่ยนเป็น public/no authentication
- **Link:** [Exercise 6 Practice 1](./exercises/06-publish-and-share/README.md)

### Slide 33 — Publish and channel availability

- **Teach:** Publish เป็นขั้นหนึ่ง; admin approval และสิทธิ์ติดตั้งยังอาจต้องรอ
- **Visual:** Published version and pending/available channel states.
- **Speaker cue:** ใช้เพียง Teams หรือ Microsoft 365 Copilot ตามที่ IT เลือกไว้ ถ้าไม่พร้อมให้ดู instructor demo
- **Link:** [Exercise 6 Practice 2](./exercises/06-publish-and-share/README.md)

### Slide 34 — The published experience

- **Teach:** เปิด conversation ใหม่ใน channel จริง ตรวจคำตอบและ email action สั้น ๆ
- **Visual:** Channel conversation with matching training email.
- **Speaker cue:** ให้ผู้เรียนระบุผลเป็นผ่านจริง/รอสิทธิ์/demo อย่างตรงไปตรงมา Test panel อย่างเดียวไม่ใช่ published-channel test
- **Link:** [P1](./files/sample-conversations.md)

### Slide 35 — Participant demonstrations

- **Teach:** แสดงผลที่ได้จากหนึ่ง request และบอกว่าอะไรยังเป็นเงื่อนไขของ tenant
- **Visual:** Simple demonstration order: question, request summary, email evidence.
- **Speaker cue:** เลือก 2–3 คน คนละประมาณ 5 นาที จากนั้นเชื่อมว่าส่วนใดใช้กับงานจริงได้ ไม่มี Canvas หรือ formal refinement activity
- **Link:** [Sample story](./files/sample-conversations.md)

### Slide 36 — Application discussion and Q&A

- **Teach:** ถ้าจะเปลี่ยนคู่มือ หมวดปัญหา หรือผู้รับ ต้องตรวจอะไรบ้างก่อนใช้จริง
- **Visual:** Three participant questions captured as ordinary text, not a new worksheet.
- **Speaker cue:** ใช้เวลาที่เหลืออภิปรายและ Q&A จบ 16:00 สรุป owner/IT follow-up เฉพาะประเด็นที่เกิดจริง ไม่เพิ่มกิจกรรมสร้างใหม่
- **Link:** [Coverage and proposal boundaries](./reference-topic-coverage.md)
