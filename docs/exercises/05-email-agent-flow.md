# แบบฝึกหัดที่ 5: ส่งสรุปคำขอผ่าน Outlook Agent Flow

ผู้ช่วยรับและทวนเรื่องได้แล้ว เราจะให้ทำ action จริงขนาดเล็กคือส่งสรุปหนึ่งฉบับไป mailbox ฝึกของตัวเอง แล้วแสดงผลที่ flow ส่งกลับ

<img class="concept-illustration" src="/images/day2-agent-flow-handoff.png" alt="ผู้ช่วยส่งต่องานที่ยืนยันแล้วให้ Agent Flow ดำเนินการ">

> **Learner prerequisite:** ใช้ Agent Flow ใน environment ที่ผู้จัดอบรมเตรียมให้ และใช้ `Office 365 Outlook` Standard connector กับ mailbox/connection ของบัญชีฝึก การ publish flow เพื่อเรียกจาก Test panel ต่างจากการ publish agent ออก channel

## Prerequisites

- Exercise 4 ผ่าน Yes/No แล้ว
- ใช้บัญชีฝึกของตนเองเชื่อม Outlook และกำหนด To เป็นอีเมลของตนเอง ไม่ใช้ผู้รับจริงในบริษัท
- Agent และ flow อยู่ environment เดียวกัน

## Practice 1: สร้าง Agent Flow ที่ส่งอีเมลและคืนผล

**Primary target:** สร้าง flow สั้นที่รับ summary ส่งไปปลายทางคงที่ และคืนข้อความหลังส่งสำเร็จ

1. เปิด **Flows > New flow > Agent flow** ใน Copilot Studio ตั้งชื่อ `Send Store Support Summary - ` ตามด้วยชื่อเล่น
2. ตรวจ template มี trigger **When an agent calls the flow** และ action **Respond to the agent**
3. ที่ trigger เพิ่ม Text inputs สองค่า:

   | Name | Purpose |
   |---|---|
   | StoreCode | รหัสสาขาฝึกสำหรับหัวข้ออีเมล |
   | RequestSummary | Summary ที่ผู้ใช้ตรวจใน Topic แล้ว |

4. ระหว่าง trigger และ Respond เพิ่ม **Office 365 Outlook > Send an email (V2)** ลงชื่อเข้าใช้ด้วยบัญชีฝึก
5. ใส่ **To** เป็นอีเมลฝึกของตนเองแบบค่าคงที่ ไม่เพิ่ม Recipient input
6. ใส่ **Subject** เป็น `[TRAINING] Store support - ` แล้วแทรก Dynamic content `StoreCode`
7. ใน Body ใช้ HTML/code view ของช่องอีเมล ใส่ข้อความด้านล่างและแทน placeholder ด้วย Dynamic content `RequestSummary` จาก trigger:

   ```html
   <p>Fictional training request. Not an official CPAll ticket.</p>
   <pre>[insert RequestSummary dynamic content here]</pre>
   ```

8. ที่ **Respond to the agent** เพิ่ม Text output `ResponseMessage` ค่า `ส่งสรุปไป mailbox ฝึกเรียบร้อยแล้ว กรุณาตรวจ Inbox ข้อความนี้ไม่ใช่เลข ticket จริง`
9. เก็บ default run-after ของ Respond ให้ทำงานหลัง email action สำเร็จเท่านั้น ไม่ตั้งให้คืน success เมื่อ email ล้มเหลว
10. ใน Respond settings ตรวจ **Asynchronous response** เป็น Off หากมี control นี้ ต้องคืนผลแบบ real time จึงไม่ใส่ approval wait หรือ loop รอผู้ใช้ใน flow
11. เลือก **Publish** แล้วทดสอบ flow ด้วย StoreCode `TRAIN-001` และ RequestSummary `Store: TRAIN-001; Category: Equipment; Details: เครื่องพิมพ์ฝึกไม่พิมพ์`
12. ตรวจ run สำเร็จ output ตรง และ Inbox มีอีเมล ไม่ถือว่าข้อความ output แทนการตรวจปลายทางได้ทั้งหมด

### Checkpoint

Flow มีสามส่วนหลัก trigger → email → response, มี Text inputs 2 ค่าและ Text output 1 ค่า และผู้รับฝึกได้อีเมล

## Practice 2: เรียก Flow เฉพาะหลังยืนยัน

**Primary target:** เชื่อม flow กับเส้นทางยืนยันใน Topic โดยส่งข้อมูลที่ผู้ใช้ตรวจแล้ว

1. กลับ agent เปิด **Tools > Add a tool** เลือก flow ที่ publish แล้ว
2. ใส่ description `Send the already-confirmed fictional store-support summary to the fixed training mailbox. Called from Store Support Request only.`
3. ที่รายละเอียด tool ปิด **Allow agent to decide dynamically when to use the tool** เพื่อไม่ให้ generative orchestration เรียกส่งเองข้าม confirmation
4. เปิด `Store Support Request` ที่เส้นทาง `UserConfirmed = true` แทน Message placeholder ด้วย **Add a tool / Call an action** เลือก flow นี้
5. จับคู่ inputs/outputs:

   | Flow field | Topic value |
   |---|---|
   | StoreCode | `Topic.StoreCode` |
   | RequestSummary | `Topic.RequestSummary` |
   | ResponseMessage output | สร้าง String `Topic.DeliveryMessage` |

6. หลัง tool เพิ่ม Message แทรก `DeliveryMessage` แล้ว End current topic
7. ตรวจเส้นทาง false ว่ายังมีเพียงข้อความยกเลิกและ End current topic ไม่มี tool call
8. บันทึก แล้วตรวจ Instructions เดิมจาก Exercise 1 ว่ายังครบ ไม่เขียนทับส่วน Knowledge
9. เริ่ม Test ใหม่ แจ้งปัญหาและตอบ Yes หากระบบขอเชื่อมต่อ ให้ตรวจบัญชีที่ใช้ก่อนยืนยัน ไม่ถือว่าจะมี consent dialog เหมือนกันทุก tenant

### Checkpoint

ข้อมูลในอีเมลตรงกับ summary ก่อนยืนยัน และ tool ไม่เปิดให้ agent เรียกเองแบบ dynamic

## Practice 3: ตรวจส่งและยกเลิกในบทสนทนาจริง

**Primary target:** พิสูจน์ว่าเกิดอีเมลเฉพาะกรณีที่ผู้ใช้ยืนยันคำขอนั้น

1. เปิด Test ใหม่ ทำกรณี Delivery: TRAIN-002 / สินค้าไม่ครบ / คาด 10 กล่อง นับได้ 8 แล้วตอบ Yes
2. ตรวจ trace ว่าเรียก tool และ Inbox มีหนึ่งฉบับที่ตรงกัน
3. เปิด Test ใหม่ ทำกรณี Equipment แต่ตอบ No ตรวจว่าไม่มี tool call และไม่มีอีเมลใหม่สำหรับรายการนี้
4. ถ้าข้อมูลผิดระหว่างการทวน ให้เลือก No แล้วเริ่มคำขอใหม่ ไม่ใช้การแก้ข้อความหลัง Yes เป็นวิธียกเลิกอีเมลที่ส่งแล้ว
5. ถ้าพบ error ให้เปิด flow run history ร่วมกับวิทยากร ตรวจ connection และ inputs ก่อนลองใหม่ ห้ามรายงานว่าส่งสำเร็จ และอย่าส่งซ้ำจนรู้ว่ารอบก่อนส่งถึงหรือยัง
6. ดู evidence ใน Test activity/trace ว่า Topic ไหนทำงานและใช้เวลาตรงไหน วิทยากรชี้ Analytics แยกต่างหาก หากไม่มีข้อมูลให้ใช้ตัวอย่างที่เตรียมไว้ ไม่ตีความแผงว่างว่าไม่มีปัญหา

### Checkpoint

Yes มีหนึ่งอีเมลและ success response; No ไม่มี tool call ใช้หลักฐานจริงจาก run และ Inbox ไม่ตัดสินจากถ้อยคำของ agent อย่างเดียว

> **💡 Tip:** ผู้ช่วยเป็นคนรับเรื่อง ส่วน flow เป็นพนักงานส่งเอกสารสั้น ๆ เราถามยืนยันก่อนส่ง ไม่ให้ flow ยืนรอคำตอบนาน ๆ

## Summary

เราได้ agent ที่ถาม ตอบ และทำ action ได้แล้ว ต่อไปเตรียมใช้ผ่าน channel ที่ IT อนุญาต

[ก่อนหน้า](./04-entities-and-confirmation.md) · [ถัดไป: Publish และ share](./06-publish-and-share.md) · [สารบัญ](../index.md)
