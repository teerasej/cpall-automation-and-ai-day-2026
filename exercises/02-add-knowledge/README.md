# แบบฝึกหัดที่ 2: ให้ผู้ช่วยตอบจากคู่มือฝึก

พนักงานใหม่ต้องมีคู่มือก่อนตอบคำถาม เราจะเพิ่มเอกสารสั้นสองไฟล์ให้ผู้ช่วย แล้วตรวจว่าคำตอบมีหลักฐานในเอกสารจริง

> **Learner prerequisite:** ใช้ Knowledge ใน Copilot Studio environment ที่ผู้จัดอบรมเตรียมและตรวจ search/storage แล้ว ผู้เรียนไม่ต้องสร้าง data table

## Prerequisites

- Agent จาก [Exercise 1](../01-create-assistant/README.md)
- ดาวน์โหลด [store-support guide](../../files/cpall-store-support-guide.txt) และ [support terms](../../files/cpall-support-terms.txt) ลงเครื่อง

## Practice 1: เพิ่มไฟล์เป็น Knowledge

**Primary target:** เพิ่มคู่มือฝึกให้ agent ค้นข้อมูลประกอบคำตอบได้

1. เปิดไฟล์ทั้งสองและอ่านข้อ G2, G3, G4 และ G7 ก่อนอัปโหลด
2. ใน agent เปิด **Knowledge > Add knowledge** แล้วเลือกอัปโหลดไฟล์จากเครื่อง
3. อัปโหลด `cpall-store-support-guide.txt` และ `cpall-support-terms.txt`
4. ใส่ description ให้ guide ว่า `Fictional training procedures for Equipment and Delivery requests; no real CPAll policies or live records.`
5. ใส่ description ให้ terms ว่า `Definitions of fields and categories used in the fictional store-support exercise.`
6. เลือก **Add to agent** แล้วรอแต่ละรายการเป็น **Ready**
7. หากยังประมวลผลอยู่ให้ refresh หลังรอ หาก error ให้จดข้อความแล้วให้วิทยากรตรวจ ไม่ทดสอบโดยนับว่า source พร้อมแล้ว

### Checkpoint

Knowledge มีไฟล์สองรายการในสถานะพร้อม และไม่มีไฟล์แบบฝึกหัดหรือเฉลยปะปน

## Practice 2: ตรวจคำตอบกับแหล่งข้อมูล

**Primary target:** ตรวจว่าคำตอบใช้ข้อเท็จจริงจากคู่มือและไม่แต่งส่วนที่คู่มือไม่มี

1. เปิดการตั้งค่า Knowledge/generative answers แล้วปิด **Use general knowledge** และ **Web search** หากเปิดอยู่ตามหน้าของ tenant ใช้ชื่อ control ที่วิทยากรยืนยัน ไม่เพิ่มเว็บไซต์เป็น source
2. เปิดบทสนทนาใหม่ แล้วถาม `ถ้าสินค้าตัวอย่างมาไม่ครบ ต้องเตรียมข้อมูลอะไร`
3. เปิด guide ข้อ G4 เทียบคำตอบ ต้องมีจำนวนตามเอกสาร จำนวนที่นับได้ และรายการตัวอย่าง
4. ถาม `Equipment หมายถึงอะไรในแบบฝึกหัดนี้` แล้วเทียบข้อ T2/G3
5. สังเกต citation หรือชื่อแหล่งที่แสดง หากกดอ้างอิงได้ให้เปิดดู หากไม่มีอย่าอ้างว่ามี citation เพียงเพราะคำตอบบอกชื่อไฟล์ ให้ตรวจข้อความกับไฟล์และบันทึกข้อจำกัด UI
6. ถาม `CPAll รับประกันแก้เครื่องพิมพ์ภายในกี่ชั่วโมง` คำตอบต้องบอกว่าไม่มีข้อมูลนี้ในคู่มือฝึก
7. ถาม `ช่วยแนะนำหุ้นให้หน่อย` ผู้ช่วยควรกลับมาที่ขอบเขตงานสาขา

### Checkpoint

คำถามที่มีข้อมูลตอบตรงข้อ G4/T2 ส่วนคำถาม SLA และนอกขอบเขตไม่เกิดคำตอบที่อ้างนโยบายจริงขึ้นเอง

> **⚠️ Note:** คำตอบจาก Knowledge ไม่ใช่ live lookup และชื่อไฟล์ในข้อความอย่างเดียวไม่พิสูจน์ว่าระบบแสดง citation ที่ตรวจได้

## Summary

ผู้ช่วยตอบคำถามจากคู่มือได้แล้ว ต่อไปให้ผู้ช่วยคุยเป็นลำดับเพื่อรับคำขอ

[ก่อนหน้า](../01-create-assistant/README.md) · [ถัดไป: Request Topic](../03-request-topic/README.md) · [สารบัญ](../../README.md)
