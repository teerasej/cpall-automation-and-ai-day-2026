# Presentation slide outline — Copilot Studio Day 2

**Session:** 09:00–16:00

**Audience:** Business users building their first structured agent

**Story:** พนักงานสาขาฝึกถามว่าต้องเตรียมข้อมูลอะไร จากนั้นให้ผู้ช่วยรับคำขอ ยืนยัน และส่งอีเมลสรุป ทุกขั้นตอนและข้อมูลเป็นเรื่องสมมติ ไม่ใช่นโยบาย CPAll

**Delivery language:** Thai-first; retain official English product and UI terms

**Client alignment:** Decisions from the 14 September 2026 meeting are incorporated. Agent Builder is presentation/demo content only at the end of the day.

**PPTX status:** Keep this outline in Markdown. Do not create or edit a PPTX in this scope.

## Timing map

| Time | Minutes | Segment | Slides |
|---|---:|---|---|
| 09:00–09:15 | 15 | Fundamentals and learner journey | 1–4 |
| 09:15–10:15 | 60 | Exercises 1–2: Agent and Knowledge | 5–12 |
| 10:15–10:30 | 15 | Break | — |
| 10:30–11:00 | 30 | Exercise 3: request Topic | 13–17 |
| 11:00–12:00 | 60 | Exercise 4: Entity, confirmation and reusable Topic | 18–24 |
| 12:00–13:00 | 60 | Lunch | — |
| 13:00–14:30 | 90 | Exercise 5: Agent Flow and embedded evidence checks | 25–31 |
| 14:30–14:45 | 15 | Break | — |
| 14:45–15:15 | 30 | Exercise 6: authentication, publish and share | 32–34 |
| 15:15–15:40 | 25 | Agent Builder overview/demo | 35 |
| 15:40–16:00 | 20 | Tool-choice recap and Q&A | 36 |

Total: 420 minutes — 330 instruction/activity, 30 breaks and 60 lunch.

## Slides 1–4: Opening and mental model

### Slide 1 — Copilot Studio Day 2

- **Teach:** วันนี้ผู้ช่วยจะตอบจากคู่มือ รับเรื่อง และส่งสรุปจากข้อมูลฝึก
- **Visual:** Store employee, short guide and training request email
- **Speaker cue:** ใช้ TRAIN-002 และสินค้าตัวอย่าง 10/8 กล่องเป็นเรื่องเดียวตลอดวัน ระบุว่าเป็นเรื่องสมมติ
- **Link:** [Learner journey](./README.md)

### Slide 2 — A question becomes a support request

- **Teach:** “ต้องเตรียมอะไร” ควรตอบจาก Knowledge แต่ “ช่วยแจ้งปัญหา” ควรเริ่ม Topic รับข้อมูล
- **Visual:** Two chat messages leading to different routes
- **Speaker cue:** ให้ผู้เรียนบอกว่าเมื่อใดควรตอบและเมื่อใดต้องถามข้อมูลเพิ่ม
- **Link:** [Example conversations](./files/sample-conversations.md)

### Slide 3 — Knowledge, Topics and Tools

- **Teach:** Knowledge คือคู่มือ, Topic คือขั้นตอนสนทนา, Tool คือ action ที่เรียกใช้งาน
- **Visual:** Guidebook, service counter and outgoing mail tray
- **Speaker cue:** เชื่อมกับ Day 1: flow ทำขั้นตอน ส่วน agent ช่วยคุยรับข้อมูล

### Slide 4 — Six visible outcomes

- **Teach:** ทุก Exercise จบด้วยผลที่ตรวจได้ ตั้งแต่ agent identity จนถึง published experience
- **Visual:** Six milestones with one checkpoint each
- **Speaker cue:** แสดงภาพอีเมลสำเร็จเป็นปลายทางก่อนเริ่ม build
- **Link:** [Exercise index](./README.md#เส้นทางการฝึก)

## Slides 5–12: Create and ground the assistant

### Slide 5 — The organizer-prepared environment

- **Teach:** ทุกคนเลือก environment ที่ผู้จัดอบรมเตรียม ไม่สร้างใหม่หรือสลับ authoring route
- **Visual:** Verified environment selector
- **Speaker cue:** เปรียบกับเข้าอบรมให้ถูกห้องก่อนเปิดคู่มือ
- **Link:** [Exercise 1 Practice 1](./exercises/01-create-assistant/README.md)

### Slide 6 — Prepared learner resources

- **Teach:** บัญชี, environment, Knowledge upload, Agent Flow และ channel ถูกกำหนดไว้ก่อนคลาส
- **Visual:** One readiness card with five checked resources
- **Speaker cue:** หากหน้า UI หรือ capability ไม่ตรง ให้หยุดแจ้งวิทยากร ไม่แก้ setup เองกลางชั้นเรียน
- **Link:** [Readiness checklist](./instructor-readiness-checklist.md)

### Slide 7 — Agent identity and purpose

- **Teach:** ชื่อและ description บอกงานเดียวที่ผู้ช่วยรับผิดชอบ
- **Visual:** Name and description from Exercise 1
- **Speaker cue:** ให้ทุกคนเติมชื่อเล่นท้าย agent แล้วสร้างด้วยตัวเอง
- **Link:** [Exercise 1](./exercises/01-create-assistant/README.md)

### Slide 8 — Instructions and boundaries

- **Teach:** ระบุแหล่งข้อมูล ขอบเขต และสิ่งที่ไม่มีข้อมูล ไม่แต่ง SLA หรือ stock
- **Visual:** Short excerpts from the instruction block
- **Speaker cue:** ทดสอบ “ช่วยอะไรได้บ้าง” ก่อนเพิ่ม Knowledge

### Slide 9 — Generative answers from a guide

- **Teach:** ผู้ช่วยตอบจากไฟล์ที่อัปโหลด ไม่ใช่การอ่านข้อมูลปฏิบัติการแบบ live
- **Visual:** G4 source paragraph beside a concise answer
- **Speaker cue:** ตัวเลข 10/8 เป็นข้อมูลฝึก ไม่ใช่ stock จริง
- **Link:** [Knowledge guide](./files/cpall-store-support-guide.txt)

### Slide 10 — Knowledge ingestion

- **Teach:** เพิ่มไฟล์ ตั้ง description และรอ Ready ก่อนวัดคำตอบ
- **Visual:** Two uploaded files and Ready status
- **Speaker cue:** อัปโหลดเฉพาะไฟล์ `.txt` สองไฟล์ ไม่ใส่ test cases
- **Link:** [Exercise 2](./exercises/02-add-knowledge/README.md)

### Slide 11 — Evidence in an answer

- **Teach:** เปิดแหล่งอ้างอิงเมื่อมีและเทียบคำตอบกับข้อความในคู่มือ
- **Visual:** Question, answer and supporting excerpt
- **Speaker cue:** ใช้ K1 แล้วให้ผู้เรียนชี้ข้อความที่สนับสนุนคำตอบ

### Slide 12 — Missing information and scope

- **Teach:** เมื่อคู่มือไม่มีข้อมูล ผู้ช่วยควรบอกว่าไม่พบ ไม่เติมคำตอบให้ดูครบ
- **Visual:** Supported versus unsupported question
- **Speaker cue:** ใช้ K2/K3 ตรวจ boundary ก่อนพัก
- **Link:** [Knowledge test cases](./files/sample-conversations.md)

## Slides 13–17: Guided request Topic

### Slide 13 — Topic routing

- **Teach:** Classic ใช้ trigger phrases; core นี้ใช้ `The agent chooses` กับ description ที่ชัด
- **Visual:** Compact comparison of trigger routes
- **Speaker cue:** อธิบายความต่างโดยไม่สลับ agent ไปมาระหว่าง modes
- **Link:** [Exercise 3 Practice 1](./exercises/03-request-topic/README.md)

### Slide 14 — Store Support Request

- **Teach:** Topic เก็บข้อมูลเพื่อแจ้งเรื่อง ส่วนคำถามทั่วไปตอบผ่าน Knowledge
- **Visual:** Topic description and first Message node
- **Speaker cue:** เปรียบกับเจ้าหน้าที่เลือก “ตอบคำถาม” หรือ “เปิดใบรับเรื่อง”

### Slide 15 — Questions and captured values

- **Teach:** StoreCode, category และ IssueDescription คือข้อมูลของคำขอครั้งนี้
- **Visual:** Question text mapped to variable names
- **Speaker cue:** ยังไม่มีระบบตรวจรหัสสาขาแบบ live

### Slide 16 — Branching by issue category

- **Teach:** Equipment และ Delivery ให้คำแนะนำต่างกัน แล้วกลับมารวมที่รายละเอียดคำขอ
- **Visual:** Two-branch Topic diagram
- **Speaker cue:** ทดสอบทั้งสองหมวดเพื่อพิสูจน์ routing

### Slide 17 — Fallback and clarification

- **Teach:** System Fallback และ generative clarification อาจเกิดคนละเส้นทาง
- **Visual:** Ambiguous message and clarification response
- **Speaker cue:** แก้เฉพาะข้อความช่วยผู้ใช้ ไม่แต่ง escalation ที่ยังไม่มี

## Slides 18–24: Entities and reusable confirmation

### Slide 18 — Entity and Variable

- **Teach:** Entity บอกชนิด/หมวด ส่วน Variable เก็บค่าที่ได้ในรอบนี้
- **Visual:** Category label and a value container
- **Speaker cue:** “เครื่องพิมพ์” จัดเป็น Equipment แต่ StoreCode เป็นอีกข้อมูลหนึ่ง
- **Link:** [Exercise 4](./exercises/04-entities-and-confirmation/README.md)

### Slide 19 — Built-in Boolean

- **Teach:** ใช้ Boolean สำหรับผล Yes/No ที่ต้องควบคุมการส่ง
- **Visual:** Boolean true/false beside text values
- **Speaker cue:** ข้อความ `true` ไม่ใช่ Boolean `true`

### Slide 20 — Custom category and synonyms

- **Teach:** Closed list เล็ก ๆ รองรับ Equipment, Delivery และคำพ้องที่ผู้เรียนใช้
- **Visual:** Canonical values with Thai synonyms
- **Speaker cue:** ไม่เพิ่มหมวดที่ Topic ยังไม่มี branch รองรับ

### Slide 21 — Variable scope and types

- **Teach:** ใช้ Topic variables และแปลง entity เป็น CategoryLabel String ก่อนส่งต่อ
- **Visual:** IssueCategory → CategoryLabel
- **Speaker cue:** ค่าจากคำขอรอบก่อนต้องไม่รั่วเข้าสู่รอบใหม่

### Slide 22 — Build RequestSummary

- **Teach:** Summary ประกอบจากค่าที่ผู้ใช้ให้ ไม่ใช่ข้อความที่ AI เดา
- **Visual:** Three fields composing one summary
- **Speaker cue:** อ่านสูตรทีละส่วนและชี้การขึ้นบรรทัดใหม่

### Slide 23 — Reusable confirmation Topic

- **Teach:** Topic ย่อยรับ SummaryText และคืน SendConfirmed แบบ Boolean
- **Visual:** Input → confirmation → output
- **Speaker cue:** เหมือนส่งใบงานให้ผู้ตรวจและรับผลกลับ ผู้เรียกต้อง map ทั้งสองด้าน

### Slide 24 — Yes continues, No stops

- **Teach:** UserConfirmed=true ไปต่อ; false จบโดยไม่ส่ง
- **Visual:** Decision branch without a tool call on No
- **Speaker cue:** ทดสอบ Yes/No ก่อนพักกลางวัน ตอนนี้ยังไม่มีอีเมลจริง

## Slides 25–31: One useful Agent Flow

### Slide 25 — Topic trigger and flow trigger

- **Teach:** Topic จัดการบทสนทนา; `When an agent calls the flow` เริ่ม action เมื่อ Topic เรียก
- **Visual:** Topic canvas connected to flow canvas
- **Speaker cue:** เปรียบกับ Forms trigger ของ Day 1 เพื่อแยกจุดเริ่มให้ชัด
- **Link:** [Exercise 5](./exercises/05-email-agent-flow/README.md)

### Slide 26 — Flow inputs and output

- **Teach:** ส่ง StoreCode และ RequestSummary เข้า แล้วรับ ResponseMessage กลับ
- **Visual:** Exact two-input/one-output contract
- **Speaker cue:** ผู้รับกำหนดไว้ใน flow ไม่เปิดช่องให้ agent เปลี่ยนจากแชต

### Slide 27 — Outlook action and connection

- **Teach:** `Send an email (V2)` ส่งหนึ่งอีเมลผ่าน mailbox ฝึก
- **Visual:** Trigger → Outlook → Respond
- **Speaker cue:** ทดสอบอีเมลก่อนนำ tool กลับไปผูก Topic

### Slide 28 — Controlled tool invocation

- **Teach:** ปิด dynamic invocation แล้วเรียก tool เฉพาะ UserConfirmed=true
- **Visual:** Confirmation branch connected to the tool
- **Speaker cue:** Instructions อย่างเดียวไม่แทนเงื่อนไขใน Topic

### Slide 29 — Response and evidence

- **Teach:** หลังส่งสำเร็จ Respond คืนข้อความ; ต้องเห็น run และ Inbox ประกอบ
- **Visual:** Summary, flow run and matching email
- **Speaker cue:** ถ้า action fail ห้ามบอก success และตรวจการส่งซ้ำก่อน retry

### Slide 30 — Agent performance evidence

- **Teach:** Test trace ดู route/tool, flow history ดู action, Analytics ดูภาพรวมเมื่อมีข้อมูล
- **Visual:** Evidence-to-question table
- **Speaker cue:** ใช้ prepared analytics เมื่อข้อมูลสดยังไม่ขึ้น และระบุว่าเป็น demo data

### Slide 31 — A completed support request

- **Teach:** ถามคู่มือ แจ้งปัญหา ตรวจ summary และส่ง โดยใช้ข้อมูลเดียวตลอดเรื่อง
- **Visual:** Full journey from Knowledge answer to Inbox
- **Speaker cue:** ใช้ F1/F2 ตรวจ Yes และ No; No ต้องไม่มีอีเมล
- **Link:** [Flow test cases](./files/sample-conversations.md)

## Slides 32–34: Publish and share

### Slide 32 — Authentication and audience

- **Teach:** ใช้ channel และผู้ใช้ที่ผู้จัดอบรมอนุญาตเท่านั้น
- **Visual:** Creator, approved tester and channel
- **Speaker cue:** หาก policy ไม่พร้อม ใช้ demo ไม่เปลี่ยนเป็น public/no authentication
- **Link:** [Exercise 6](./exercises/06-publish-and-share/README.md)

### Slide 33 — Publish and channel availability

- **Teach:** Publish เป็นขั้นหนึ่ง; channel อาจยังต้องรอ admin approval หรือสิทธิ์ติดตั้ง
- **Visual:** Published version and channel state
- **Speaker cue:** ใช้เส้นทางที่ rehearsal แล้ว; ถ้าไม่พร้อมให้ดู instructor demo

### Slide 34 — The published experience

- **Teach:** เปิด conversation ใหม่ใน channel จริงและตรวจคำตอบกับ email action สั้น ๆ
- **Visual:** Channel conversation with matching training email
- **Speaker cue:** ระบุผลเป็น passed, waiting for access หรือ demo อย่างตรงไปตรงมา

## Slides 35–36: Extra content and close

### Slide 35 — Agent Builder overview and demonstration

- **Teach:** Agent Builder เหมาะกับการเริ่มผู้ช่วยจาก instructions และ Knowledge แบบรวดเร็ว ส่วน Copilot Studio เหมาะเมื่อจำเป็นต้องควบคุม Topics, typed variables, tools, testing และการจัดการที่ละเอียดขึ้น
- **Visual:** Two-lane tool-choice map: quick focused agent versus structured business process agent
- **Speaker cue:** สาธิตการสร้าง agent ขนาดเล็กจาก instructions/Knowledge หรือใช้ saved result; ไม่สร้าง sample file และไม่ให้ผู้เรียนทำ hands-on
- **Boundary:** อยู่เฉพาะช่วง 15:15–15:40 หลัง Exercises 1–6

### Slide 36 — Choose the tool and Q&A

- **Teach:** เลือกเครื่องมือจากความซับซ้อนของ conversation, action, control และ governance ไม่ใช่จากชื่อผลิตภัณฑ์อย่างเดียว
- **Visual:** Decision prompts: answer only, guided conversation, business action, controlled publishing
- **Speaker cue:** ทบทวน Knowledge → Topic → Entity → confirmation → Agent Flow → publish แล้วเปิด Q&A; จบ 16:00
- **Link:** [Coverage and scope](./reference-topic-coverage.md)
