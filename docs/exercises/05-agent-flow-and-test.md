# แบบฝึกหัดที่ 5: สร้าง Agent Flow และพิสูจน์ผล

จำ Day 1 ที่เรากดปุ่มเพื่อเริ่ม flow แล้วส่งอีเมลได้ไหมครับ วันนี้พลจะพาทุกคนเพิ่มการส่งอีเมลใน Instructions แล้วใช้ Outlook action ที่คุ้นเคยใน Agent Flow ใหม่ แต่ให้ Topic เรียก flow เฉพาะหลังผู้ใช้เลือก `ยืนยัน` และเปิด Inbox ตรวจผลจริง

<img class="concept-illustration" src="/images/day2-agent-flow-handoff.png" alt="Agent ส่งคำขอที่ยืนยันแล้วให้ Agent Flow">

> **License และสิทธิ์:** ต้องใช้ Agent Flow ใน environment เดียวกับ Agent และ `Office 365 Outlook` connector กับ mailbox ผู้รับเป็น mailbox ของผู้เรียนเองที่วิทยากรแจ้ง ไม่ใช่ผู้รับจริงขององค์กร

## Prerequisites

- Agent พร้อม Instructions ที่มี Topic reference และ Topic `Store Support Request` จาก [Exercise 4](./04-request-topic.md)
- วิทยากรแจ้ง fixed training mailbox และตรวจ Outlook connection แล้ว
- เปิด Test panel, flow run history และ Inbox เพื่อดูหลักฐาน

```text
Day 1: Manual trigger → Outlook
Day 2: Agent trigger → Outlook → Response to Agent
```

> **💡 ทบทวน:** เราสร้าง flow ใหม่เพื่อไม่แตะ flow Day 1 ต้นฉบับ จุดที่เปลี่ยนคือ trigger และข้อความตอบกลับ Agent

## Practice 1: เตรียม Instructions และเปิด Agent Flow ใหม่

**Primary target:** เพิ่มเงื่อนไขการส่งอีเมลโดยรักษา Topic reference เดิม แล้วเปิด Agent Flow ใหม่จากหน้า Agent

1. เปิด **Overview > Instructions > Edit** และตรวจว่า `Store Support Request` ยังเป็น Topic token หรือ resource reference จาก Exercise 4 จากนั้นเพิ่มข้อความต่อไปนี้ไว้ท้าย Instructions โดยไม่ลบ Topic reference:

   ```text
   # Email safety
   Never claim an email was sent unless the Agent Flow returns success.
   Never send without the user's confirmation for the current request.
   ```

2. ตรวจอีกครั้งว่า Instructions มีทั้ง Topic reference และ `Email safety` แล้ว Save
3. จากหน้า overview > เลื่อนลงมาด้านล่าง ในส่วนของ Tools > กดปุ่ม **Add tools**
4. เลือก Add new Workflows (หรือ Add new Agent flow)

### Checkpoint

ตรวจว่า Instructions ยังมี `Store Support Request` เป็น Topic reference และมี `Email safety` จากนั้นยืนยันว่า Copilot Studio เปิดหน้า flow designer ของ flow ใหม่แล้ว

## Practice 2: ตั้งชื่อ Agent Flow

**Primary target:** ตรวจโครงสร้างเริ่มต้นและตั้งชื่อ Agent Flow ให้แยกจากผู้เรียนคนอื่น

1. Copilot Studio portal จะพาเรามายังหน้า flow designer ของ flow ใหม่
2. ตรวจว่ามี **When an agent calls the flow** และ **Respond to the agent**
3. กดปุ่ม Save Draft ด้านขวาบน
4. จากด้านซ้ายบนของหน้า Designer คลิกชื่อ **Untitled** แล้วตั้งชื่อตามรูปแบบนี้ โดยแทนที่ `[ชื่อเล่น]` ด้วยชื่อเล่นของเรา:

   ```text
   Send Store Support Request - [ชื่อเล่น]
   ```

5. คลิกปุ่ม **Save Draft** อีกครั้งเพื่อบันทึกชื่อใหม่ของ flow

### Checkpoint

ตรวจว่า flow มี **When an agent calls the flow** และ **Respond to the agent** พร้อมชื่อที่มีชื่อเล่นของเรา และบันทึกชื่อใหม่เรียบร้อยแล้ว

## Practice 3: กำหนด Input ส่งอีเมล และตอบกลับ Agent

**Primary target:** ให้ Agent Flow รับ `IssueDetails` ส่งไป mailbox ฝึกค่าคงที่ และคืน `ResponseMessage` หลังส่งสำเร็จ

1. ที่ trigger node คลิกเพื่อเปิดหน้าต่างการตั้งค่า
2. เลือก **Add input** แล้วเพิ่ม Text input ตามชื่อนี้:

   ```text
   IssueDetails
   ```

3. ระหว่าง trigger กับ response เพิ่ม **Office 365 Outlook > Send an email (V2)** และลงชื่อเข้าใช้ด้วยบัญชีฝึก
4. ใส่ **To** เป็น fixed training mailbox ที่วิทยากรแจ้งแบบค่าคงที่ ไม่สร้าง Recipient input และไม่รับผู้รับจากแชต เพื่อไม่ให้คำขอในแชตเปลี่ยนผู้รับ
5. ใส่ **Subject**:

   ```text
   [TRAINING] Store support request
   ```

6. ใส่ Body แล้วแทรก Dynamic content `IssueDetails` จาก trigger:

   ```text
   Issue details: {IssueDetails}
   ```

7. ที่ **Respond to the agent** node กดเปิดหน้าต่างการตั้งค่า แล้วเพิ่ม Text output ตามชื่อนี้:

   ```text
   ResponseMessage
   ```

   จากนั้นใส่ข้อความตอบกลับ:

   ```text
   ส่งรายละเอียดไป mailbox ฝึกเรียบร้อยแล้ว กรุณาตรวจ Inbox
   ```


8. เลือก Save Draft
9. เลือก **Publish** flow หากยัง publish ไม่ได้ให้จด error แล้วแจ้งวิทยากร
### Checkpoint

ดู Flow ก่อนเชื่อม: Instructions ยังมี `Store Support Request` เป็น Topic reference และมี `Email safety`

Flow มี Agent trigger รับ Text หนึ่งค่า ตามด้วย Outlook และ response คืน Text หลังส่งสำเร็จ

## Practice 4: เชื่อม Flow เฉพาะเส้นทางยืนยัน

**Primary target:** ส่ง `IssueDetails` จาก Topic เข้า Flow เฉพาะเมื่อผู้ใช้เลือก `ยืนยัน`

1. กลับมาที่ Agent และเพิ่ม flow ที่ publish แล้วเป็น Tool หากยังไม่ปรากฏในรายการ action ของ Topic
2. เปิด Topic `Store Support Request` แล้วหาเส้นทาง `ยืนยัน`
3. เพิ่ม **Add a tool** แล้วเลือก flow ที่สร้างใน Practice 3
4. จับคู่ `IssueDetails` input กับ `Topic.IssueDetails`;
5. จับคู่ `ResponseMessage` output กับ Text variable ของ Topic
6. ใต้ tool call เพิ่ม **Send a message** แล้วแทรก output `ResponseMessage` จากเมนูตัวแปร
7. ตรวจว่าเส้นทาง `ยกเลิก` ไม่มี tool call
8. ปลายเส้นทาง topic ให้แน่ใจว่าได้ต่อ **End all topics** node เพื่อจบเส้นทางอย่างถูกต้อง
9. Save

### Checkpoint

ลองชี้ตำแหน่งให้พลดู: มี Flow call หนึ่งจุดใต้เส้นทาง `ยืนยัน` และไม่มี Flow call ใต้เส้นทาง `ยกเลิก`

## Practice 5: ทดสอบยืนยันและยกเลิกกับหลักฐาน

**Primary target:** ใช้ Test trace, flow run history และ Inbox พิสูจน์ว่า `ยืนยัน` ส่งหนึ่งครั้ง ส่วน `ยกเลิก` ไม่ส่ง

1. จดจำนวนอีเมลและ flow runs ล่าสุดก่อนทดสอบ เพื่อแยกผลรอบใหม่
2. เปิด conversation ใหม่ แล้วส่งข้อความต่อไปนี้ทีละข้อความตามลำดับ:

   ```text
   ต้องการแจ้งปัญหาเครื่องพิมพ์
   ```

   ```text
   เครื่องพิมพ์ไม่พิมพ์หลังเริ่มรอบเช้า
   ```

   ```text
   ยืนยัน
   ```

3. ตรวจ activity map หรือ trace ว่า Agent เลือก `Store Support Request` จากข้อความแรก จากนั้นตรวจว่า Test panel แสดง `ResponseMessage`, run history มี run สำเร็จหนึ่งรายการ และ Inbox มีอีเมลหนึ่งฉบับที่ Body ตรงกับรายละเอียด
4. เปิด conversation ใหม่อีกครั้ง แล้วส่งข้อความต่อไปนี้ทีละข้อความตามลำดับ:

   ```text
   ต้องการแจ้งปัญหาจำนวนสินค้าตัวอย่างไม่ตรง
   ```

   ```text
   เอกสารฝึกระบุ 10 กล่อง แต่นับได้ 8 กล่อง
   ```

   ```text
   ยกเลิก
   ```

5. ตรวจ activity map หรือ trace ว่า Agent เลือก `Store Support Request` แล้วเข้าทาง `ยกเลิก` และไม่มี flow run หรืออีเมลใหม่สำหรับรายการนี้
6. หากกรณี `ยืนยัน` เกิด error ให้ตรวจ run history และ Inbox ก่อน retry อย่ารายงานว่าส่งสำเร็จจากข้อความในแชตเพียงอย่างเดียว

### Checkpoint

พลขอให้เทียบหลักฐานก่อนบอกว่าสำเร็จ: ทั้งสองกรณีเลือก `Store Support Request`; `ยืนยัน` มี tool call, run สำเร็จและอีเมลหนึ่งฉบับ; `ยกเลิก` ไม่มี tool call, run หรืออีเมลใหม่ ข้อความในแชตเพียงอย่างเดียวไม่ใช่หลักฐานการส่ง หาก tenant ไม่พร้อมให้บันทึกว่าเป็น demo/pending แทนการอ้างว่าผู้เรียนทดสอบผ่าน

## Summary

เราเพิ่มเงื่อนไขการส่งอีเมลและได้เส้นทาง `Topic → ยืนยัน → Agent Flow → Outlook → ResponseMessage` พร้อมหลักฐานของทั้งการส่งกับการยกเลิกแล้วครับ ต่อไปพลจะพาตรวจว่าผู้ใช้ที่ได้รับอนุญาตเปิด Agent ผ่าน channel จริงได้หรือไม่

[ก่อนหน้า](./04-request-topic.md) · [ถัดไป: Publish และ Channel](./06-publish-and-share.md) · [สารบัญ](../index.md)
