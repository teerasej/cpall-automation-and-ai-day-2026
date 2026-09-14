# แบบฝึกหัดที่ 4: Entities, Variables และการยืนยันที่ใช้ซ้ำได้

ผู้ใช้อาจพิมพ์ว่า “เครื่องพิมพ์” แทน Equipment เราจะสอน agent ให้รู้ว่าเป็นหมวดเดียวกัน แล้วส่งข้อมูลไป Topic ย่อยเพื่อทวนและขอการยืนยัน

> **License:** ใช้ Entities และ Topics ใน Copilot Studio ไม่มี external connector ขั้นตอนนี้ยังไม่ส่งอีเมล

## Prerequisites

- `Store Support Request` จาก Exercise 3 ทำงานครบสองแขนง
- ตัวแปรทั้งหมดในคู่มือนี้เป็น Topic variables ไม่ใช้ Global เพื่อไม่ให้ข้อมูลจากคำขอเก่าค้างข้ามเรื่อง

## Practice 1: สร้าง Entity สำหรับหมวดปัญหา

**Primary target:** แปลงคำพ้องให้เป็นหมวดมาตรฐานเพื่อเลือกเส้นทางได้สม่ำเสมอ

1. เปิด **Settings > Entities > New entity** เลือก **Closed list** ตั้งชื่อ `StoreIssueCategory`
2. เพิ่มรายการและ synonyms:

   | Value | Synonyms |
   |---|---|
   | Equipment | อุปกรณ์, เครื่องพิมพ์ |
   | Delivery | รับสินค้า, สินค้าไม่ครบ |

3. บันทึก entity แล้วกลับ Topic `Store Support Request`
4. เปลี่ยน Identify ของ Question หมวดปัญหาเป็น `StoreIssueCategory` เก็บคำตอบในตัวแปรใหม่ `IssueCategory` ถ้า UI ใช้ตัวแปรเดิมอัตโนมัติ ให้เปลี่ยนชื่อเป็นชื่อนี้
5. ปรับข้อความถามเป็น `เป็นเรื่องอุปกรณ์หรือรับสินค้าครับ พิมพ์ชื่อหมวดหรืออาการสั้น ๆ ได้เลย`
6. ปรับ Condition ทั้งสองแขนงให้ใช้ `IssueCategory` และเลือกค่า entity จาก UI แทน `CategoryChoice` เดิม
7. ในแต่ละแขนง ก่อน Message เดิม เพิ่ม **Variable management > Set a variable value** สร้าง String variable `CategoryLabel` โดยกำหนด Equipment ในแขนง Equipment และ Delivery ในแขนง Delivery
8. แก้ Message ทวนข้อมูลให้ใช้ `CategoryLabel` แทน `CategoryChoice` จากนั้นตรวจว่าไม่มี node อ้างตัวแปรเก่าแล้ว
9. ทดสอบคำว่า `เครื่องพิมพ์` และ `สินค้าไม่ครบ` ในบทสนทนาใหม่คนละครั้ง

### Checkpoint

คำพ้องทั้งสองเข้าคนละแขนง และ `CategoryLabel` เป็น String มาตรฐาน Equipment หรือ Delivery

> **💡 Tip:** Entity เหมือนป้ายจัดหมวดในร้าน ส่วน Variable คือช่องที่เก็บของของลูกค้าคนนี้ เราใช้ CategoryLabel เพื่อส่งข้อความธรรมดาออกไปโดยไม่ผูกกับชนิด choice/entity

## Practice 2: สร้าง Topic ยืนยันที่รับข้อมูลจากภายนอก

**Primary target:** สร้าง `Confirm Support Request` ที่รับ summary และคืนผล Yes/No ให้ Topic ที่เรียก

1. สร้าง blank Topic ชื่อ `Confirm Support Request`
2. เปลี่ยน trigger เป็น **It's redirected to** เพื่อให้เรียกผ่าน Topic อื่น ไม่ให้ agent เลือกเองจากบทสนทนา
3. เปิด **Details > Inputs > Create a new variable** สร้าง String `SummaryText` พร้อมคำอธิบาย `Request summary supplied by the calling topic` ไม่ให้เติมจากการเดาข้อมูลใน conversation
4. เพิ่ม Message แสดง `SummaryText` ด้วยการแทรกตัวแปร
5. เพิ่ม Question `ข้อมูลถูกต้องและต้องการส่งไป mailbox ฝึกหรือไม่ เลือก Yes เพื่อส่ง หรือ No เพื่อยกเลิกและเริ่มใหม่`
6. ใช้ built-in entity **Boolean** เก็บใน `SendConfirmed` ชนิด Boolean อย่าใช้ Text หรือ choice ชื่อ Yes แทน Boolean เปิดเมนู **… > Properties > Question behavior > Skip question** เลือก **Ask every time** และบันทึก เพื่อถามยืนยันคำขอปัจจุบันเสมอแม้ตัวแปรมีค่ามาก่อน
7. ที่ **Details > Outputs** ทำให้ `SendConfirmed` เป็น output ของ Topic โดยเลือกตัวแปร Boolean ที่สร้างจาก Question หากต้องสร้าง output แยกใน UI ให้ใช้ชื่อ `SendConfirmed` และตั้งค่าจากตัวแปรคำตอบก่อนจบ Topic
8. จบด้วย **End current topic** เพื่อคืนการควบคุมให้ผู้เรียก ไม่ใช้ End all topics
9. บันทึก ตรวจ Inputs/Outputs ว่ามี String เข้า 1 ค่าและ Boolean ออก 1 ค่า

### Checkpoint

Topic ย่อยแสดง summary จาก input ถามยืนยันใหม่ และมี output Boolean ที่รับค่าจากคำตอบจริง

## Practice 3: เชื่อม Topic และแยกยืนยันกับยกเลิก

**Primary target:** ให้คำขอปัจจุบันผ่านการยืนยันก่อนเข้าสู่เส้นทางที่จะส่งอีเมล

1. กลับ `Store Support Request` หลัง Question `IssueDescription` เพิ่ม **Set a variable value** สร้าง String `RequestSummary`
2. ใช้ **Formula** กำหนดค่า Power Fx นี้ ไม่ต้องใส่เครื่องหมาย `=` ข้างหน้า:

   ```powerfx
   "Store: " & Topic.StoreCode & Char(10) &
   "Category: " & Topic.CategoryLabel & Char(10) &
   "Details: " & Topic.IssueDescription
   ```

3. แทน Message ทวนข้อมูลและ End current topic เดิมท้าย Topic ด้วย **Topic management > Go to another topic** (Redirect) เลือก `Confirm Support Request`
4. กำหนด input `SummaryText` = `Topic.RequestSummary`; จับ output `SendConfirmed` ลง Boolean variable ใหม่ในผู้เรียกชื่อ `UserConfirmed`
5. หลัง Redirect เพิ่ม Condition `UserConfirmed is equal to true` เลือก Boolean true ไม่พิมพ์ข้อความ `"true"`
6. แขนง true เพิ่ม Message `ยืนยันแล้ว ขั้นต่อไปเราจะเพิ่ม Flow ส่งอีเมลใน Exercise 5` แล้ว End current topic
7. แขนง false เพิ่ม Message `ยกเลิกคำขอนี้แล้ว ยังไม่มีการส่งอีเมล หากข้อมูลผิดให้เริ่มแจ้งปัญหาใหม่ครับ` แล้ว End current topic
8. ทดสอบใหม่สองครั้ง ครั้งแรกตอบ Yes ครั้งที่สองตอบ No ตรวจทางเดินและอย่านำผลยืนยันครั้งก่อนมาใช้

### Checkpoint

Summary แสดงค่า StoreCode/CategoryLabel/IssueDescription ของครั้งปัจจุบัน และผล Yes/No กลับจาก Topic ย่อยไปยัง Condition ถูกต้อง ทั้งคู่ยังไม่ส่งอีเมล

## Summary

เราได้ข้อมูลมาตรฐานและ reusable confirmation แล้ว Flow จะต่อเฉพาะแขนง true ใน Exercise ถัดไป

[ก่อนหน้า](../03-request-topic/README.md) · [ถัดไป: Agent Flow](../05-email-agent-flow/README.md) · [สารบัญ](../../README.md)
