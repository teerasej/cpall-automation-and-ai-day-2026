# แบบฝึกหัดที่ 3: สร้างบทสนทนารับคำขอ

เราจะสร้าง Topic ที่คุยเหมือนเจ้าหน้าที่รับเรื่อง ถามข้อมูลที่จำเป็น แยกหมวด แล้วทวนข้อมูล โดยยังไม่ส่งอีเมล

> **License:** ใช้ Topics ใน full Copilot Studio ที่วิทยากรตรวจสิทธิ์แล้ว ไม่มี external connector ใน Exercise นี้

## Prerequisites

- Agent และ Knowledge จาก Exercises 1–2
- ใช้ generative orchestration ตลอด core path; trigger phrases ของ classic เป็นตัวอย่างเปรียบเทียบในสไลด์ ไม่ต้องเปลี่ยน mode

## Practice 1: สร้าง Topic และกำหนดการเรียก

**Primary target:** ให้ agent เรียก `Store Support Request` เมื่อผู้ใช้ต้องการแจ้งปัญหา

1. เปิด **Topics > Add a topic > From blank** แล้วตั้งชื่อ `Store Support Request`
2. ตรวจ trigger เป็น **The agent chooses** แล้วใส่ description:

   ```text
   Collect a fictional store-support request when the user wants to report an Equipment or Delivery issue. Examples: ขอแจ้งปัญหาสาขา, ช่วยรับเรื่องเครื่องพิมพ์ฝึก, ต้องการแจ้งสินค้าตัวอย่างไม่ครบ. General questions about procedures should use Knowledge instead.
   ```

3. เพิ่ม **Send a message**: `เราจะเตรียมคำขอจากข้อมูลสมมติ โดยยังไม่ส่งจนกว่าคุณจะตรวจและยืนยันนะครับ`
4. บันทึก แล้วทดสอบ `ขอแจ้งปัญหาสาขา` ตรวจว่าข้อความข้างต้นปรากฏ

### Checkpoint

คำขอแจ้งปัญหาเข้า Topic แต่ `ต้องเตรียมข้อมูลอะไรบ้าง` ยังตอบผ่าน Knowledge ได้

## Practice 2: ถามและแยกหมวดปัญหา

**Primary target:** เก็บรายละเอียดคำขอและแสดงคำแนะนำที่ตรงกับหมวดที่เลือก

1. ต่อจาก Message เพิ่ม **Ask a question**: `รหัสสาขาฝึกอะไรครับ เช่น TRAIN-001`
2. ตั้ง **Identify** เป็น **User's entire response** และ **Save response as** เป็น `StoreCode`
3. เพิ่ม Question: `เลือกหมวดปัญหา Equipment หรือ Delivery` ตั้ง Identify เป็น **Multiple choice options** เพิ่มสองตัวเลือกตามชื่อนี้ เก็บใน `CategoryChoice`
4. หากระบบสร้าง Condition ให้อัตโนมัติให้ใช้ Condition นั้น ถ้าไม่มีให้เพิ่มเอง โดยเปรียบเทียบ `CategoryChoice` กับตัวเลือก `Equipment` ที่เลือกจาก UI
5. แขนง Equipment เพิ่ม Message: `บอกอุปกรณ์ฝึก อาการ และเวลาที่เริ่มพบปัญหาครับ`
6. แขนง Delivery เพิ่ม Message: `บอกจำนวนตามเอกสาร จำนวนที่นับได้ และรายการตัวอย่างครับ`
7. ใต้จุดรวมแขนง เพิ่ม Question: `รายละเอียดของคำขอนี้คืออะไรครับ` ใช้ User's entire response เก็บใน `IssueDescription`
8. เพิ่ม Message ทวนข้อมูล โดยใช้ตัวเลือกแทรกตัวแปรใน editor แทนการพิมพ์ชื่อในวงเล็บเป็นข้อความธรรมดา:

   ```text
   รหัสสาขา: {StoreCode}
   หมวด: {CategoryChoice}
   รายละเอียด: {IssueDescription}
   ตอนนี้เป็นการทวนข้อมูล ยังไม่มีการส่งอีเมล
   ```

9. เพิ่ม **End current topic** แล้วบันทึก
10. เริ่ม Test ใหม่และลอง TRAIN-001 / Equipment / เครื่องพิมพ์ฝึกไม่พิมพ์ จากนั้นเริ่มใหม่ลอง TRAIN-002 / Delivery / คาด 10 กล่อง นับได้ 8

### Checkpoint

เห็นคำแนะนำต่างกันตามหมวด และข้อมูลที่ทวนตรงกับคำตอบใน run นั้น ไม่มี email action

## Practice 3: ตรวจข้อความเมื่อไม่เข้าใจผู้ใช้

**Primary target:** ให้ผู้ใช้ทราบทางไปต่อเมื่อระบบจับเจตนาไม่ได้

1. เปิด **Topics > System** แล้วหา **Fallback** อ่าน trigger และ nodes เดิมก่อนแก้
2. ปรับข้อความขอให้ผู้ใช้บอกใหม่เป็น `ขอรายละเอียดอีกนิดครับ คุณต้องการถามคู่มือฝึก หรือแจ้งปัญหา Equipment / Delivery` เก็บ logic ลองใหม่และจบ conversation เดิมไว้
3. บันทึก แล้วใน Test ใช้การเลือกทดสอบ Topic โดยตรงหาก UI รองรับ เพื่อดูข้อความนี้
4. เริ่ม conversation ใหม่และพิมพ์ข้อความกำกวม เช่น `อันนั้นเป็นเหมือนเดิม` สังเกตว่าระบบอาจถามเพิ่มผ่าน orchestration โดยไม่เข้า Fallback ให้ดูเส้นทางจริง ไม่ถือว่าทุกคำถามที่ตอบไม่ได้ต้องเข้า system topic นี้

### Checkpoint

ระบุได้ว่าเห็น Fallback จริงหรือการถามเพิ่มจาก agent และผู้ใช้ได้รับตัวเลือกที่จะไปต่อโดยไม่สร้างข้อเท็จจริงขึ้นเอง

## Summary

เราได้ request conversation ที่เก็บข้อมูลและแยกหมวด ต่อไปจะใช้ Entity รับคำพ้องและย้ายการทวนข้อมูลไป Topic ที่ใช้ซ้ำได้

[ก่อนหน้า](../02-add-knowledge/README.md) · [ถัดไป: Entities และ confirmation](../04-entities-and-confirmation/README.md) · [สารบัญ](../../README.md)
