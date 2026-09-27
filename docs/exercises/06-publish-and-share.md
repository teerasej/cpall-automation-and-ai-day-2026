# แบบฝึกหัดที่ 6: เตรียมเผยแพร่และแชร์ Agent

ช่วงสุดท้ายของการลงมือทำ พลจะพาทุกคนดูว่าใครเข้าถึง Agent ได้ ผ่าน channel ใด หาก tenant ไม่อนุญาต เราจะเรียนจากการดูตัวอย่างสาธิตครับ

> **Learner prerequisite:** ใช้บัญชีและ channel ที่ผู้จัดอบรมระบุ หากบัญชีฝึก publish หรือเปิด channel ไม่ได้ ให้เรียนผ่าน instructor demo โดยไม่เปลี่ยน authentication เอง

## Prerequisites

- Exercises 1–5 ผ่าน checkpoints


## Practice 1: ยืนยัน Channel และ Authentication

**Primary target:** ระบุผู้ใช้และการลงชื่อเข้าใช้สำหรับเส้นทางที่องค์กรอนุญาต

1. ตรวจชื่อ channel ที่วิทยากรแจ้งและบัญชีผู้ทดสอบ ไม่มีการเลือก public website ใน Exercise นี้
2. เปิด **Settings > Security > Authentication** ของ Agent
3. ใช้ **Authenticate with Microsoft** สำหรับเส้นทาง Teams/Microsoft 365 Copilot ตามที่ IT ยืนยัน แล้ว Save

### Checkpoint

พลชวนตรวจชื่อ channel และบัญชีผู้ทดสอบที่ได้รับอนุญาต พร้อมยืนยันว่า Authentication ตรงกับเส้นทางที่ IT ระบุ ก่อนกด Publish

## Practice 2: Publish และเปิดผ่าน Channel ที่ยืนยันแล้ว

**Primary target:** เปิดเวอร์ชันที่ publish แล้วจากปลายทางจริง หรือ Save ข้อจำกัดที่ทำให้ยังเผยแพร่ไม่ได้

1. ในเส้นทาง hands-on เลือก **Publish** ใน Agent และรอผลสำเร็จ
2. เปิด **Channels > Teams and Microsoft 365 Copilot** แล้วทำเฉพาะเส้นทางที่วิทยากรเลือก:

   | Route | สิ่งที่ทำ |
   |---|---|
   | Teams | เพิ่ม channel และใช้ตัวเลือกเปิด/เพิ่ม Agent ใน Teams ที่หน้า channel จัดให้ |
   | Microsoft 365 Copilot | เลือกให้ Agent ใช้ได้ใน Microsoft 365 Copilot แล้วใช้ช่องทางติดตั้ง/เปิดที่หน้า channel จัดให้ |
   | Demo | ดูวิทยากรเปิด Agent ที่ได้รับอนุมัติไว้แล้วและ Save ขั้นตอนที่ต้องรอ IT |

3. หากต้องผ่าน admin approval ให้หยุดรอ ไม่ถือว่า publish สำเร็จหมายถึงผู้ใช้ทุกคนติดตั้งได้แล้ว
4. เปิด conversation ใหม่ใน channel จริง ถาม `ถ้าสินค้าตัวอย่างมาไม่ครบ ต้องเตรียมข้อมูลอะไร`
5. ทำคำขอฝึกใหม่หนึ่งรายการและยืนยันส่งไป fixed training mailbox ตรวจอีเมลกับ flow run; การทดสอบเฉพาะ Test panel ไม่ใช่หลักฐานว่า channel ใช้ได้
6. แชร์หรือเพิ่มผู้ทดสอบเฉพาะรายชื่อที่อนุมัติ แล้วให้เขาตรวจการเข้าถึง หากไม่มี permission ให้ Save เป็น pending

### Checkpoint

พลขอให้ Save ตามสิ่งที่เห็นจริง: ใช้ `ผ่าน channel จริง` เมื่อเห็นคำตอบและ action ของเวอร์ชันเผยแพร่ หรือ `สังเกต demo / รอสิทธิ์` เมื่อยังไม่ผ่าน ไม่รายงานแทนกัน

## Summary

Agent ของเราต่อครบตั้งแต่ Knowledge ถึงการส่งคำขอแล้วครับ พลชวนเก็บชื่อ Agent และหลักฐานผลทดสอบไว้เล่าในช่วงแบ่งปันผลงาน พร้อมบอกให้ชัดว่าทดสอบถึงระดับใดและอะไรยังต้องรอ IT

[ก่อนหน้า](./05-agent-flow-and-test.md) · [กลับสารบัญ](../index.md)
