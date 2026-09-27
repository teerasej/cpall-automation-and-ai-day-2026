# Instructor readiness — Day 2

**สถานะ:** ยังไม่ได้ทดสอบใน client training tenant เอกสารนี้ระบุสิ่งที่ต้องพิสูจน์ก่อนสอน ไม่ใช่ผลรับรองว่าผ่านแล้ว

## Decisions ก่อน rehearsal

| สิ่งที่ต้องยืนยัน | Evidence ที่ต้องได้ | สถานะ |
|---|---|---|
| Participant accounts และ environment | บัญชีผู้เรียนตัวแทนเปิด Copilot Studio, สร้าง Agent และ Topic ได้ | Pending IT |
| Agent creation | เส้นทางตั้งค่าตรงใช้งานได้; natural-language creation เป็นทางเลือกเท่านั้น | Pending rehearsal |
| Instructions และ Test | บัญชีผู้เรียนแก้ Instructions และใช้ Test panel ได้ | Pending rehearsal |
| Knowledge | Search/storage/DLP รองรับไฟล์ `.txt` สองไฟล์; ทั้งสองพร้อมและตอบ K1/K2 ได้ | Pending IT |
| Topic | รับ Text `IssueDetails`, ตัวเลือก `SendConfirmed`, แสดง summary และแยก ยืนยัน/ยกเลิก ได้ | Pending rehearsal |
| Agent Flow | สร้างและ publish flow ใน environment เดียวกัน รับ `IssueDetails` และคืน `ResponseMessage` ได้ | Pending IT |
| Outlook | Connection ส่งถึง fixed training mailbox ได้; run history และ Inbox ตรงกัน | Pending IT |
| Channel | เลือก Teams หรือ Microsoft 365 Copilot หนึ่งเส้นทาง หรือ instructor demo | Pending meeting |
| Publishing / sharing | ทดสอบ creator และ participant ที่อนุญาตใน channel จริง | Pending IT |
| Agent Builder demo | บัญชีวิทยากรเห็น `New agent`, `Configure` และใช้ไฟล์สมมติได้ | Pending rehearsal |
| AI Builder demo | วิทยากรเปิด `Run a prompt` ใน flow ที่เตรียมไว้และแสดง human-review point ได้ | Pending rehearsal |

## Rehearsal ด้วยบัญชีผู้เรียนตัวแทน

1. ทำ Exercises 1–6 ตามลำดับด้วย environment ที่กำหนด โดยไม่ใช้สิทธิ์ admin แทนผู้เรียน
2. ตรวจ UI ของ portal, Agent creation, Instructions และ Test; ถ้า natural-language creation ไม่พร้อม ให้ใช้เส้นทางตั้งค่าตรงที่ยืนยันแล้ว
3. อัปโหลดคู่มือสองไฟล์และรอ Ready จากนั้นทำ K1/K2/K3 และเปิดไฟล์เทียบคำตอบ
4. สร้าง Topic เดียวที่ใช้ **The agent chooses** พร้อม Description → `IssueDetails` Text → summary → `SendConfirmed` แบบ Multiple choice options สองค่า ไม่มี custom Entity หรือคำถามรหัสสาขา
5. สร้าง Agent Flow ใหม่ที่รับ `IssueDetails` Text; Outlook ส่งถึง fixed training mailbox; Respond คืน `ResponseMessage` Text และไม่รายงานสำเร็จเมื่อ email action ล้มเหลว
6. ทดสอบ T1/T2 ก่อนเชื่อม Flow แล้วทำ F1/F2 หลังเชื่อม ตรวจ Test trace, run history และ Inbox แยกกัน
7. ตรวจ response แบบ real time โดยปิด asynchronous response และไม่เพิ่ม approval, delay หรือ loop รอผู้ใช้
8. เปิด channel จริงหลัง publish และทำ P1; ถ้าติด policy ให้บันทึกว่า demo/pending ไม่ถือว่า Test panel เป็นหลักฐาน channel จริง
9. เตรียม Agent Builder demo ด้วยคู่มือสมมติเดียวกันโดยใช้บัญชีวิทยากร ไม่ให้ผู้เรียนสร้างหรือแชร์ Agent Builder Agent
10. เตรียม AI Builder demo ในสำเนา flow ของวิทยากร ตรวจ entitlement/เครดิตและ Save ผลตัวอย่างสำรอง ไม่ให้ผู้เรียนเพิ่ม Premium action

## Instructor demo script — Agent Builder (15:15–15:35)

ยืมจังหวะ **Describe → Configure → Knowledge → Try it** จากคู่มือ Agent Builder ของโครงการ Krungsri แต่ใช้เฉพาะไฟล์และเรื่องสมมติของ CPAll ห้ามยกตัวอย่างผลิตภัณฑ์ เอกสาร หรือภาพหน้าจอภายในของ Krungsri มาในคลาสนี้

1. ในบัญชีวิทยากร เปิด Microsoft 365 Copilot > **New agent** แล้วบรรยาย Agent สั้น ๆ: ตอบคำถามขั้นตอนสาขาจาก `cpall-store-support-guide.txt` อย่างกระชับ ไม่เดาข้อมูลสดหรือ SLA; ถ้าเส้นทาง natural language ไม่พร้อม ให้ใช้ **Skip to configure**
2. เปิด **Configure** ตรวจ Name, Description, Instructions และ Knowledge ก่อนเพิ่มไฟล์คู่มือสมมติเท่านั้น; ถ้า tenant ไม่อนุญาตไฟล์ชนิดนี้ ให้แสดง demo ที่ Save ไว้และอธิบายข้อจำกัดตามจริง
3. ใช้ **Try it** ถามกรณี K1 ที่คู่มือข้อ G4 รองรับ และ K2 ที่คู่มือไม่ระบุ SLA; เปิด source เปรียบเทียบคำตอบ ไม่ถือว่าชื่อไฟล์อ้างอิงเพียงอย่างเดียวพิสูจน์ความถูกต้อง
4. หยุดให้ผู้เรียนอธิบายความต่าง: Agent Builder เริ่มเป็น Agent ตอบจาก Knowledge ได้เร็ว ส่วน Copilot Studio ที่ทำมาแล้วมี Topic, ตัวเลือก ยืนยัน/ยกเลิก, Flow, run history และ channel; ไม่ให้ผู้เรียนสร้าง อัปโหลด หรือแชร์ Agent Builder Agent
5. หากวิทยากรสร้าง Agent จริง ให้คงการเข้าถึงเฉพาะตนตามสิทธิ์ที่อนุมัติ ไม่เปิดแชร์ระหว่างสาธิต

UI labels นี้อิง Microsoft Learn ปัจจุบัน แต่ต้องตรวจอีกครั้งในบัญชีวิทยากรก่อนสอน โดยเฉพาะ `New agent`, `Skip to configure`, `Configure`, Knowledge และ `Try it`

## Instructor demo script — AI Builder (15:35–15:50)

ในสำเนา Power Automate flow ที่เตรียมไว้ ให้แสดง `incoming fictional data → Run a prompt → human review → familiar flow action` โดยหยุดถามว่า AI output อาจผิดหรือขาดบริบทตรงไหนก่อนใช้ต่อ หากสิทธิ์ Premium, Copilot Credit, region หรือ capacity ไม่พร้อม ให้ใช้ภาพ/ผลที่ Save ไว้และติดป้าย recorded demo ไม่ให้ผู้เรียนเพิ่ม action นี้ใน flow ของตน

## เวลาฝึกและจุดหยุดตรวจ

- 09:00–10:30: Portal, environment, สร้าง Agent, Instructions, Test; หยุดตรวจชื่อ environment และขอบเขตคำตอบ
- 10:30–10:45: พักช่วงเช้า
- 10:45–12:00: Knowledge; หยุดเทียบ K1 กับ G4 และ K2 กับ G7 ก่อนพักกลางวัน
- 13:00–13:25: Topic ถามรายละเอียดหนึ่งช่องและตัวเลือก ยืนยัน/ยกเลิก; ตรวจว่าทั้งสองทางยังไม่ส่ง
- 13:25–14:05: สร้าง Agent Flow ใหม่; ไม่แก้ flow Day 1 ต้นฉบับ
- 14:05–14:30: เชื่อมเฉพาะ ยืนยัน และพิสูจน์ F1/F2
- 14:45–15:15: Publish/channel หรือบันทึกว่า demo/pending
- 15:15–16:00: Agent Builder comparison/demo, AI Builder demo และ Q&A ไม่มี participant hands-on

## Fallback ที่ระบุผลได้ตรงจริง

| หากไม่พร้อม | ทำอย่างไร | สิ่งที่ยังไม่นับว่าผ่าน |
|---|---|---|
| บัญชีหรือ environment ไม่พร้อม | ดู Agent demo ใน tenant ที่อนุญาตและจดขั้นตอน | ผู้เรียนยังไม่ได้สร้างเอง |
| Knowledge upload/search ไม่พร้อม | ใช้คู่มืออ่านเทียบกับผล demo ที่ Save ไว้ | ยังไม่ได้พิสูจน์ retrieval ในบัญชีผู้เรียน |
| Outlook/flow ถูก policy block | ดู tool call/run จาก demo และ map input บนเอกสาร | ยังไม่ได้ส่งจากบัญชีผู้เรียน |
| Channel/admin approval ไม่พร้อม | ใช้ Test panel และแยก demo channel | Test panel ไม่ใช่ published-channel proof |
| Agent Builder หรือ AI Builder demo ใช้ไม่ได้ | ใช้ภาพ/ผลที่ Save ไว้และระบุว่าเป็น recorded demo | ไม่อ้างว่าทำ live ใน tenant วันนี้ |

## บันทึกผลก่อนส่งมอบคลาส

| Date | Account role | Environment | Case | Observed result | Evidence | Follow-up owner |
|---|---|---|---|---|---|---|
| รอ rehearsal | Participant-equivalent | รอ IT | K1/F1/F2/P1 | ยังไม่ทดสอบ | ยังไม่มี | รอยืนยัน |
