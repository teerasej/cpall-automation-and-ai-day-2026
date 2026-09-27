# แบบฝึกหัดที่ 3: ให้ Agent ตอบจากคู่มือฝึก

พนักงานใหม่ต้องรู้วิธีการใช้แหล่งข้อมูลก่อนตอบคำถาม แบบฝึกหัดนี้พลจะพาทุกคนเพิ่มคำสั่ง หรือเงื่อนไขใน Instructions ตามด้วยเอกสารตัวอย่าง 2 ไฟล์ แล้วหยุดตรวจด้วยกันว่าคำตอบอยู่ในเอกสารจริง ไม่ใช่สิ่งที่ Agent เดาขึ้นมาครับ

<img class="concept-illustration" src="/images/day2-approved-knowledge.png" alt="Agent ตอบจากคู่มือฝึกที่ได้รับอนุมัติแทนการเดาคำตอบ">

> **License และสิทธิ์:** ต้องใช้ Knowledge upload ใน Copilot Studio environment ที่ผู้จัดอบรมตรวจ search, storage และ policy แล้ว หากอัปโหลดไม่ได้ให้แจ้งวิทยากร ไม่สร้าง environment หรือ trial เอง

## Prerequisites

- Agent และ Instructions พื้นฐานจาก [Exercises 1–2](./02-instructions-and-test.md)
- เตรียมไฟล์ Knowledge:
   1. ดาวน์โหลด [ชุดไฟล์ Knowledge (.zip)](/downloads/cpall-day2-knowledge-sample-files.zip) แล้วแตกไฟล์ไว้ในเครื่อง
   2. หากดาวน์โหลดไม่ได้ ให้เปิด [store-support guide](/downloads/cpall-store-support-guide.txt) และ [support terms](/downloads/cpall-support-terms.txt) ใน web browser
   3. คลิกขวาบนแต่ละหน้า เลือก **Save Page As...** แล้ว Save โดยคงชื่อไฟล์ `.txt` เดิม
- ใช้เฉพาะไฟล์สมมติสองไฟล์นี้ ไม่อัปโหลดแบบฝึกหัดหรือเฉลยเป็น Knowledge

## Practice 1: อ่านและเพิ่ม Knowledge ที่อนุมัติ

**Primary target:** เพิ่มเงื่อนไขการใช้แหล่งข้อมูลใน Instructions และเพิ่มคู่มือฝึกสองไฟล์เป็น Knowledge ที่พร้อมให้ Agent ค้นประกอบคำตอบ

1. เปิด Agent แล้วหา **Instructions** เลือกข้อความเดิมทั้งหมด แล้วแทนที่ด้วย Instructions ฉบับสมบูรณ์ต่อไปนี้ ซึ่งรวมเนื้อหาจาก Exercise 2 และเงื่อนไข Knowledge ใหม่:

   ```text
   # Role
   You are a fictional store-support training assistant for CPAll learners.

   # Language and style
   Reply in friendly, concise Thai. Keep visible product and field names in English.

   # Scope
   For unrelated requests, explain the supported scope.

   # Knowledge and data boundaries
   - Explain training procedures using the approved training Knowledge when it is added.
   - If the guide does not contain an answer, say so.
   - Do not invent policies, SLAs, contacts, prices, stock levels or ticket numbers.
   ```

2. Save Instructions แล้วเปิดไฟล์ `.txt` ที่แตกจากชุดดาวน์โหลดหรือดาวน์โหลดแยก: อ่านข้อ G3, G4 และ G7 ใน guide และอ่านความหมายของ `IssueDetails` ใน terms
3. ใน Agent เปิด **Knowledge > Add knowledge** แล้วเลือกอัปโหลดไฟล์จากเครื่อง
4. อัปโหลด `cpall-store-support-guide.txt` และ `cpall-support-terms.txt` แยกกัน ไม่อัปโหลดไฟล์ `.zip`
5. กดปุ่ม **Add to agent**
6. รอกระยะเวลาประมวลผลจนทั้งสองไฟล์พร้อมใช้งาน
   > ให้สังเกตสถานะ **in progress** จนทั้งสองไฟล์พร้อมใช้งานจะเป็น **✅ ready**
7. หากระบบแสดงว่าไฟล์ทั้ง 2 พร้อมใช้งาน ให้คลิกเข้าไปใน knowledge source ทีละไฟล์เพื่อตรวจสอบรายละเอียด และปรับแก้หากจำเป็น
8. หากมีช่อง **Name** และ **Description** ให้กรอกข้อมูลต่อไปนี้สำหรับแต่ละไฟล์

    - **cpall-store-support-guide.txt**

      **Name**

      ```text
      Store Support Training Procedures
      ```

      **Description**

      ```text
      Use for store-support procedures about equipment issues, delivery quantity differences, required issue details, confirmation before sending, training email behavior, and information the guide does not provide such as SLAs or live stock.
      ```

    - **cpall-support-terms.txt**

       **Name**

       ```text
       Store Support Topic and Flow Terms
       ```

       **Description**

       ```text
       Use for definitions of the exercise fields and workflow terms: IssueDetails, SendConfirmed, ResponseMessage, Request summary, and Confirmation.
       ```

9. กดปุ่ม **Save** หลังแก้ข้อมูลของแต่ละไฟล์

### Checkpoint

พลชวนตรวจชั้นคู่มือก่อนถามคำถาม: Instructions มี `Role`, `Language and style`, `Scope` และ `Knowledge and data boundaries` ครบในชุดเดียว และ Knowledge มีไฟล์ฝึกสองรายการที่พร้อมใช้งานโดยไม่มีสไลด์ แบบฝึกหัด หรือข้อมูลจริงปะปน

## Practice 2: ตรวจคำตอบที่คู่มือรองรับ

**Primary target:** เทียบคำตอบของ Agent กับข้อความใน guide เพื่อยืนยันว่าข้อมูลสำคัญตรงกับ source

1. ตรวจสอบว่าใน Overview > Knowledge > มีเปิด web search หรือไม่ ถ้ามีการเปิด ให้ปิดก่อนทดสอบ
2. เปิด conversation ใหม่แล้วถาม:

   ```text
   ถ้าสินค้าตัวอย่างมาไม่ครบ ต้องเตรียมข้อมูลอะไร
   ```

3. เทียบคำตอบกับ guide ข้อ G4 ว่าพูดถึงจำนวนตามเอกสาร จำนวนที่นับได้ และรายการตัวอย่าง
4. หากระบบแสดง citation ให้เปิดดู source; หากไม่แสดง ให้เทียบข้อความกับไฟล์โดยตรงและ Save ว่าไม่เห็น citation ในหน้าจอ

### Checkpoint

ลองชี้ให้พลดูว่าคำตอบตรงกับ G4 ตรงไหนบ้าง: มีครบทั้งสามส่วน และบอกได้ว่าเห็น citation จริงหรือใช้วิธีเปิดไฟล์เทียบ

## Practice 3: ตรวจขอบเขตเมื่อคู่มือไม่ตอบ

**Primary target:** พิสูจน์ว่า Agent ไม่แต่ง SLA หรือคำแนะนำที่อยู่นอกงานสาขา

1. เปิด conversation ใหม่แล้วถาม:

   ```text
   CPAll รับประกันแก้เครื่องพิมพ์ภายในกี่ชั่วโมง
   ```

2. เทียบกับ guide ข้อ G7; คำตอบที่ผ่านต้องบอกว่าไม่มี SLA นี้ในคู่มือฝึก
3. ถามต่อด้วยคำถามนอกขอบเขต:

   ```text
   ช่วยแนะนำหุ้นให้หน่อย
   ```

4. หาก Agent เดาคำตอบ ให้กลับไปตรวจส่วน `Knowledge and data boundaries` ใน Instructions แล้วทดสอบซ้ำใน conversation ใหม่

### Checkpoint

Agent ไม่สร้าง SLA และไม่เปลี่ยนเป็นผู้ให้คำแนะนำการลงทุน

> **💡 หยุดทบทวนกับพล:** การอัปโหลดไฟล์สำเร็จ เป็นเหมือนกับการวางคู่มือบนโต๊ะของ Agent ไม่ได้รับประกันว่า Agent จะหยิบไปใช้เสมอ การเทียบคำตอบกับข้อ G4/G7 จึงเป็นการตรวจว่า Agent เปิดอ่านถูกเล่มจริง

## Summary

ตอนนี้เราเพิ่มเงื่อนไขการใช้ Knowledge และเห็นทั้งคำตอบที่คู่มือรองรับกับเรื่องที่คู่มือไม่ตอบแล้วครับ ต่อไปพลจะพาเพิ่มเงื่อนไขการรับเรื่องสมมติและทำบทสนทนาสั้น ๆ โดยยังไม่ส่งอีเมล

[ก่อนหน้า](./02-instructions-and-test.md) · [ถัดไป: Topic รับเรื่อง](./04-request-topic.md) · [สารบัญ](../index.md)
