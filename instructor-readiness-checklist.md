# Instructor readiness — Day 2

**สถานะเริ่มต้น:** ยังไม่ได้ทดสอบใน client training tenant เอกสารนี้ระบุสิ่งที่ต้องพิสูจน์ก่อนสอน ไม่ใช่ผลรับรองว่าผ่านแล้ว

## Decisions ก่อน rehearsal

| สิ่งที่ต้องยืนยัน | Evidence ที่ต้องได้ | สถานะ |
|---|---|---|
| Participant accounts และ environment | บัญชีผู้เรียนตัวแทนเปิด full Copilot Studio, สร้าง agent และ Topic ได้ | Pending IT |
| Generative orchestration | เลือก generative และใช้ The agent chooses ได้ | Pending IT |
| Knowledge | Dataverse search เปิดแล้ว, storage/DLP รองรับ local upload, .txt ทั้งสอง Ready และตอบ K1 ได้ | Pending IT |
| Agent Flow | สร้าง/publish flow และเรียกจาก Topic ใน environment เดียวกันได้ | Pending IT |
| Outlook | บัญชีฝึกมี mailbox; connector connection ที่ใช้จริงส่งถึง fixed training recipient ได้ | Pending IT |
| Tool invocation | ปิด dynamic invocation ได้; มี call เฉพาะ confirmation=true | Pending rehearsal |
| Entitlement / capacity | IT ตรวจสิทธิ์ Copilot Studio, flow และกำลังรองรับตามจำนวนผู้เรียน ไม่สรุปจากคำว่า Standard อย่างเดียว | Pending IT |
| Channel | ระบุ Teams หรือ Microsoft 365 Copilot หนึ่งเส้นทาง หรือ instructor demo | Pending meeting |
| Publishing / sharing | ทดสอบบัญชี creator และ participant ที่อนุญาตใน channel จริง | Pending IT |
| วันที่จบและ module | 16:00 และการตัด Dataverse for Teams retrieval เป็น proposal ที่ต้องบันทึกผลประชุม | Pending client |

## Rehearsal ที่ต้องทำ

1. ใช้บัญชีตัวแทนผู้เรียนที่ไม่ใช่ admin ทำ Exercises 1–5 ตั้งแต่ต้น ใช้ไฟล์ฝึกสองไฟล์ที่แนบกับ package
2. ยืนยันหน้า new agent และ orchestration ที่ตรงกับเอกสาร ถ้าหน้า UI เปลี่ยน ให้แก้คำแนะนำจากหน้าจริง ไม่ใช้ screenshot Krungsri แทนโดยอัตโนมัติ
3. ตรวจชนิดตัวแปร: IssueCategory เป็น entity, CategoryLabel เป็น String, RequestSummary เป็น String; SendConfirmed และ UserConfirmed เป็น Boolean
4. ตรวจ Topic `Confirm Support Request` รับ SummaryText และคืนค่าใหม่ทุกครั้ง; trigger เป็น redirect-only และ Question behavior เป็น Ask every time
5. ตรวจ email tool ปิด dynamic invocation; To เป็น fixed training address และไม่มี Recipient input
6. ทำ K1/K2, E1/E2, F1/F2 ตาม [test cases](./files/sample-conversations.md) แล้วเก็บเวลา flow กับอีเมล
7. ในสำเนาฝึกของวิทยากร ทดสอบ connection failure ตามวิธีที่ IT อนุญาต ตรวจว่าไม่คืน success หาก email ล้มเหลว ไม่ตัด connection ของผู้เรียนเพื่อทำ demo
8. ตรวจ flow response แบบ synchronous และจบในข้อจำกัดของ Agent Flow; หลีกเลี่ยง wait approval และ loop ยาว
9. เตรียมภาพ/บันทึกผล Analytics จาก agent ฝึกที่มีข้อมูลแล้ว พร้อมระบุช่วงเวลาและที่มา ใช้เมื่อข้อมูลสดยังไม่ขึ้น อย่าอ้าง Test trace เป็น production analytics
10. เปิด channel จริงหลัง publish แล้วทำ P1; หากไม่ได้สิทธิ์ให้เตรียม demo ที่ได้รับอนุญาต

## เวลาฝึกและจุดหยุดตรวจ

- 09:15–10:15: Agent และ Knowledge ต้องผ่านก่อนพัก หาก Knowledge indexing ช้าให้ใช้ agent demo ของวิทยากรชั่วคราวแล้วกลับมาตรวจ readiness
- 10:30–11:00: Topic รับข้อมูลและสอง branches; fallback ปรับข้อความสั้น ๆ เท่านั้น
- 11:00–12:00: ฝึก custom entity และ handoff ข้อมูลสู่ confirmation ให้ครบก่อนส่งจริง
- 13:00–14:30: build flow, map inputs, run Yes/No และอธิบาย evidence/analytics ในช่วงนี้ ไม่มี standalone testing/refinement block หลังพัก
- 14:45–15:15: channel preparation และ publish ตามสิทธิ์
- 15:15–16:00: เลือกผู้เรียน 2–3 คนแสดงผล แล้วอภิปรายการประยุกต์และ Q&A จบ 16:00

## Fallback ที่ระบุผลได้ตรงจริง

| หากไม่พร้อม | ทำอย่างไร | สิ่งที่ยังไม่นับว่าผ่าน |
|---|---|---|
| Environment หรือ entitlement ไม่พร้อม | ให้ดู agent demo ใน tenant ที่อนุญาตและอธิบาย node mapping | ผู้เรียนยังไม่ได้สร้าง agent เอง |
| Knowledge upload/search ไม่พร้อม | ใช้เอกสารอ่านเทียบกับคำตอบจาก demo ที่บันทึกไว้ | ยังไม่ได้พิสูจน์ retrieval ในบัญชีผู้เรียน |
| Outlook/flow publish ถูก policy block | ดู tool call และ run จาก demo พร้อม map inputs บนเอกสาร | ยังไม่ได้ส่งอีเมลจากบัญชีผู้เรียน |
| Channel/admin approval ไม่พร้อม | ใช้ Test panel ของ agent ที่สร้างได้ และแยก demo channel | Test panel ไม่ใช่หลักฐาน published-channel success |

## บันทึกผลก่อนส่งมอบคลาส

| Date | Account role | Environment | Case | Observed result | Evidence | Follow-up owner |
|---|---|---|---|---|---|---|
| รอ rehearsal | Participant-equivalent | รอ IT | K1/F1/F2/P1 | ยังไม่ทดสอบ | ยังไม่มี | รอยืนยัน |
